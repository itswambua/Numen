import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY_SECRET!);

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const intent = await stripe.paymentIntents.retrieve(params.id);
    return NextResponse.json({ intent });
  } catch (error) {
    console.error('[STRIPE_PAYMENT_INTENT_GET]', error);
    return NextResponse.json({ error: 'Unable to retrieve payment intent' }, { status: 500 });
  }
}
