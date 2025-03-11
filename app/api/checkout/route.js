// app/api/checkout/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import { connectToDB } from '@/lib/db';
import { Order } from '@/models/Order'; // You'll need to create this

export async function POST(request) {
  try {
    const { items, shippingDetails, isGuest, guestInfo } = await request.json();
    
    // Validate input
    if (!items || !items.length || (!isGuest && !shippingDetails)) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    await connectToDB();
    
    let userId = null;
    let userEmail = null;
    let userName = null;
    
    // If not guest, get user from session
    if (!isGuest) {
      const session = await getServerSession(authOptions);
      if (!session) {
        return NextResponse.json(
          { success: false, message: 'Unauthorized' },
          { status: 401 }
        );
      }
      userId = session.user.id;
      userEmail = session.user.email;
      userName = session.user.name;
    } else {
      // Process guest checkout
      if (!guestInfo || !guestInfo.email || !guestInfo.name) {
        return NextResponse.json(
          { success: false, message: 'Missing guest information' },
          { status: 400 }
        );
      }
      userEmail = guestInfo.email;
      userName = guestInfo.name;
    }
    
    // Create order
    const newOrder = new Order({
      userId, // Will be null for guest
      isGuest,
      customerName: userName,
      customerEmail: userEmail,
      items,
      shippingDetails: isGuest ? guestInfo.shipping : shippingDetails,
      totalAmount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending'
    });
    
    await newOrder.save();
    
    // integrate with a payment provider
    // like Stripe, PayPal.
    
    return NextResponse.json({
      success: true,
      message: 'Order created successfully',
      orderId: newOrder._id
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing checkout' },
      { status: 500 }
    );
  }
}