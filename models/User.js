// // models/User.js
// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please provide a name'],
//     maxlength: [50, 'Name cannot be more than 50 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Please provide an email'],
//     unique: true,
//     match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
//   },
//   password: {
//     type: String,
//     required: [true, 'Please provide a password'],
//     minlength: [6, 'Password must be at least 6 characters']
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// export const User = mongoose.models.User || mongoose.model('User', UserSchema);


// models/User.js
import { getDb } from '@/lib/db';
import { ObjectId } from 'mongodb';

export class User {
  constructor(data) {
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = data.createdAt || new Date();
  }

  // Find a user by email
  static async findOne({ email }) {
    const db = await getDb();
    const collection = db.collection('users');
    const user = await collection.findOne({ email });
    return user ? new User(user) : null;
  }

  // Find a user by ID
  static async findById(id) {
    const db = await getDb();
    const collection = db.collection('users');
    const user = await collection.findOne({ _id: new ObjectId(id) });
    return user ? new User(user) : null;
  }

  // Create a new user
  static async create(userData) {
    const db = await getDb();
    const collection = db.collection('users');
    
    // Check if user already exists
    const existingUser = await collection.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    const result = await collection.insertOne({
      ...userData,
      createdAt: new Date()
    });
    
    return {
      ...userData,
      _id: result.insertedId
    };
  }
}