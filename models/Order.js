// models/Order.js
import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Not required for guest checkout
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
    productId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true
    },
    format: {
      type: String,
      enum: ['hardcover', 'paperback', 'ebook', 'audiobook'],
      required: true
    }
  }],
  shippingDetails: {
    address: {
      type: String,
      required: function() { return this.items.some(item => item.format !== 'ebook' && item.format !== 'audiobook'); }
    },
    city: {
      type: String,
      required: function() { return this.items.some(item => item.format !== 'ebook' && item.format !== 'audiobook'); }
    },
    state: {
      type: String,
      required: function() { return this.items.some(item => item.format !== 'ebook' && item.format !== 'audiobook'); }
    },
    zipCode: {
      type: String,
      required: function() { return this.items.some(item => item.format !== 'ebook' && item.format !== 'audiobook'); }
    },
    country: {
      type: String,
      required: function() { return this.items.some(item => item.format !== 'ebook' && item.format !== 'audiobook'); }
    }
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

export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);


