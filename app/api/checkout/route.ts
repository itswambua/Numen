import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { connectToDB } from '@/lib/db';
import { Order } from '@/models/Order';

const stripe = new Stripe(process.env.STRIPE_KEY_SECRET!);


export async function POST(req: Request) {
  try {
    await connectToDB();

    const contentType = req.headers.get('content-type');

    // CASE 1: Client-Initiated -> Create PaymentIntent
    if (contentType?.includes('application/json')) {
      const body = await req.json();

      // If `intent` is present → treat as webhook-style
      if (body.intent) {
        const { intent } = body;
        const metadata = intent.metadata;

        const items = JSON.parse(metadata.items || '[]');
        const shipping = JSON.parse(metadata.shipping || '{}');

        const newOrder = await Order.create({
          isGuest: true,
          customerName: metadata.customerName || 'Guest',
          customerEmail: metadata.customerEmail || 'unknown@example.com',
          items: items.map((item: any) => ({
            productId: item.productId || 'book-001',
            title: item.title,
            quantity: item.quantity,
            price: item.price,
            format: item.format,
          })),
          shippingDetails: shipping,
          totalAmount: intent.amount_received / 100,
          paymentStatus: 'paid',
          status: 'processing',
          stripeIntentId: intent.id,
          orderDate: new Date(),
        });

        return NextResponse.json({ orderId: newOrder._id });
      }

      // CASE 2: New client-initiated checkout — create intent
      const { items, isGuest, guestInfo, shippingDetails } = body;

      const subtotal = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
      const shipping = items[0]?.format === 'ebook' || items[0]?.format === 'audiobook' ? 0 : 499;
      const total = Math.round((subtotal + shipping / 100) * 100); // in cents

      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
        metadata: {
          items: JSON.stringify(items),
          shipping: JSON.stringify(shippingDetails),
          customerName: guestInfo?.name || 'Guest',
          customerEmail: guestInfo?.email || 'unknown@example.com',
        },
        automatic_payment_methods: { enabled: true },
      });

      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    }

    return NextResponse.json({ error: 'Unsupported content type' }, { status: 400 });
  } catch (err) {
    console.error('[ORDER_CREATE_FAILED]', err);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
