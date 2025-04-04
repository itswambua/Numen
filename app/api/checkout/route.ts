import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { connectToDB } from '@/lib/db';
import { Order } from '@/models/Order';

// Initialize Stripe without specifying apiVersion
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { items, totalAmount }: { items: any[]; totalAmount: number } = await request.json();

  try {
    await connectToDB();

    // Create a new Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100, // Amount in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/checkout/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json({ error: 'Unable to create session' }, { status: 500 });
  }
}
