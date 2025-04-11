// components>StripeUnifiedCheckout.tsx
'use client';

import {
  Elements,
  useStripe,
  useElements,
  PaymentElement,
  ExpressCheckoutElement
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const appearance = { theme: 'stripe' as const }; // ✅ correct type

interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number;
  format: string;
}

interface ShippingDetails {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface Props {
  cart: OrderItem[];
  isGuest: boolean;
  guestInfo?: { name: string; email: string };
  shippingDetails: ShippingDetails;
  validateShippingInfo?: () => boolean; // ✅ NEW

}

export default function StripeUnifiedCheckout(props: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: props.cart,
          isGuest: props.isGuest,
          guestInfo: props.guestInfo,
          shippingDetails: props.shippingDetails
        }),
      });

      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    createPaymentIntent();
  }, [props.cart, props.isGuest, props.guestInfo, props.shippingDetails]);

  const appearance = { theme: 'stripe' };

  if (!clientSecret) {
    return <p className="text-sm text-deep-brown mt-6">Loading payment form...</p>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret, appearance: { theme: 'stripe' } }}
    >

      <StripeForm />
    </Elements>
  );
}

function StripeForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);

    const { error, paymentIntent } = await stripe!.confirmPayment({
      elements: elements!,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/confirmation`
      },
      redirect: 'if_required'
    });

    if (error) {
      setError(error.message || 'Something went wrong');
    } else if (paymentIntent?.status === 'succeeded') {
      router.push(`/checkout/confirmation?payment_intent=${paymentIntent.id}&redirect_status=succeeded`);
    }

    setLoading(false);
  };

  return (
    <div className="mt-6 space-y-6">
      <ExpressCheckoutElement onConfirm={handleConfirm} />


      <div className="bg-white border border-gray-200 p-4 rounded-md">
        <PaymentElement />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="button"
        onClick={handleConfirm}
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}
