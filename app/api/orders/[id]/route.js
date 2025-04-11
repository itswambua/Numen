<<<<<<< HEAD
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
=======
//app>api>orders>[id]>route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Order } from "@/models/Order";

export async function GET(req, { params }) {
  try {
    await connectToDB();
    const order = await Order.findById(params.id);
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });

    return NextResponse.json({ order });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
>>>>>>> origin/dynamic-bookstore
