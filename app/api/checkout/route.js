// app/api/checkout/route.js
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Order } from '@/models/Order';

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
    
    // Calculate total (should also validate this server-side)
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Add shipping cost if applicable
    const hasPhysicalItem = items.some(item => 
      item.format !== 'ebook' && item.format !== 'audiobook'
    );
    
    const shipping = hasPhysicalItem ? 4.99 : 0;
    const finalTotal = totalAmount + shipping;
    
    // Create order
    const orderData = {
      userId,
      isGuest,
      customerName: userName,
      customerEmail: userEmail,
      items,
      shippingDetails: isGuest ? guestInfo.shipping : shippingDetails,
      shipping,
      subtotal: totalAmount,
      totalAmount: finalTotal,
      status: 'pending',
      paymentStatus: 'pending'
    };
    
    const newOrder = await Order.create(orderData);
    
    // Here you would integrate with payment processor like Stripe
    // For now, we'll just return the order
    
    return NextResponse.json({
      success: true,
      message: 'Order created successfully',
      orderId: newOrder._id,
      orderData: newOrder
    });
    
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error processing checkout' },
      { status: 500 }
    );
  }
}