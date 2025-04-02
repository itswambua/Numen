import mongoose, { Schema, Document, Model } from 'mongoose';

interface OrderItem {
  productId: string;
  title: string;
  quantity: number;
  price: number;
  format: 'hardcover' | 'paperback' | 'ebook' | 'audiobook';
}

interface ShippingDetails {
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface IOrder extends Document {
  userId?: mongoose.Types.ObjectId;
  isGuest: boolean;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  shippingDetails: ShippingDetails;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderDate: Date;
}

const OrderSchema = new Schema<IOrder>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  isGuest: {
    type: Boolean,
    default: false
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  items: [{
    productId: { type: String, required: true },
    title: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    format: {
      type: String,
      enum: ['hardcover', 'paperback', 'ebook', 'audiobook'],
      required: true
    }
  }],
  shippingDetails: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    country: { type: String }
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

// Export Mongoose model
export const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
