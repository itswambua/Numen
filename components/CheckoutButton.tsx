import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// This must be the same as the publishable key in your .env
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    // Create a checkout session on the server
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ items: [], totalAmount: 0 }), // You should send the actual cart data here
      headers: { 'Content-Type': 'application/json' },
    });

    const { id } = await response.json();

    const stripe = await stripePromise;

    // Redirect to the Stripe checkout page
    const { error } = await stripe!.redirectToCheckout({ sessionId: id });

    if (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-600 text-white py-2 px-4 rounded"
    >
      {loading ? 'Loading...' : 'Checkout'}
    </button>
  );
}
