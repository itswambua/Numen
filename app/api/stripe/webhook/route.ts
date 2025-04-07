import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { connectToDB } from '@/lib/db';
import { Order } from '@/models/Order';

const stripe = new Stripe(process.env.STRIPE_KEY_SECRET!);

export async function POST(req: NextRequest) {
  const rawBody = await req.arrayBuffer();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      Buffer.from(rawBody),
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('❌ Webhook signature verification failed.', err);
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const intent = event.data.object as Stripe.PaymentIntent;
    const metadata = intent.metadata;

    try {
      await connectToDB();

      const items = JSON.parse(metadata.items || '[]');
      const shipping = JSON.parse(metadata.shipping || '{}');

      await Order.create({
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
        status: 'processing',
        paymentStatus: 'paid',
        orderDate: new Date(),
        stripeIntentId: intent.id, // ✅ required for lookup
      });
      

      console.log('✅ Order created via webhook');
    } catch (err) {
      console.error('[WEBHOOK ORDER CREATE FAILED]', err);
    }
  }

  return NextResponse.json({ received: true });
}
