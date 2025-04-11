// models/Order.js
import { getDb } from '@/lib/db';
import { ObjectId } from 'mongodb';

export class Order {
  constructor(data) {
    this._id = data._id;
    this.userId = data.userId; // Will be null for guest
    this.isGuest = data.isGuest || false;
    this.customerName = data.customerName;
    this.customerEmail = data.customerEmail;
    this.items = data.items || [];
    this.shippingDetails = data.shippingDetails;
    this.totalAmount = data.totalAmount;
    this.status = data.status || 'pending';
    this.paymentStatus = data.paymentStatus || 'pending';
    this.orderDate = data.orderDate || new Date();
  }

  // Create a new order
  static async create(orderData) {
    const db = await getDb();
    const collection = db.collection('orders');
    
    // Convert userId to ObjectId if it exists
    if (orderData.userId) {
      orderData.userId = new ObjectId(orderData.userId);
    }
    
    const result = await collection.insertOne({
      ...orderData,
      orderDate: new Date()
    });
    
    return {
      ...orderData,
      _id: result.insertedId
    };
  }

  // Find an order by ID
  static async findById(id) {
    const db = await getDb();
    const collection = db.collection('orders');
    const order = await collection.findOne({ _id: new ObjectId(id) });
    return order ? new Order(order) : null;
  }

  // Find orders by user ID
  static async findByUserId(userId) {
    const db = await getDb();
    const collection = db.collection('orders');
    const orders = await collection.find({ 
      userId: new ObjectId(userId) 
    }).sort({ orderDate: -1 }).toArray();
    
    return orders.map(order => new Order(order));
  }

  // Find orders by email (for guest orders)
  static async findByEmail(email) {
    const db = await getDb();
    const collection = db.collection('orders');
    const orders = await collection.find({ 
      customerEmail: email 
    }).sort({ orderDate: -1 }).toArray();
    
    return orders.map(order => new Order(order));
  }

  // Update order status
  static async updateStatus(orderId, status) {
    const db = await getDb();
    const collection = db.collection('orders');
    
    await collection.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { status } }
    );
    
    return this.findById(orderId);
  }

  // Update payment status
  static async updatePaymentStatus(orderId, paymentStatus) {
    const db = await getDb();
    const collection = db.collection('orders');
    
    await collection.updateOne(
      { _id: new ObjectId(orderId) },
      { $set: { paymentStatus } }
    );
    
    return this.findById(orderId);
  }
}
