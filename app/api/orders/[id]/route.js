import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Order } from '@/models/Order';

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const session = await getServerSession(authOptions);
    
    const order = await Order.findById(id);
    
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    
    // If the order is associated with a user, check if it belongs to the current user
    if (order.userId && (!session || order.userId.toString() !== session.user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    return NextResponse.json({ order });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}