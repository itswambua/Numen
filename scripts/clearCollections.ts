import 'dotenv/config';
import { connectToDB } from '@/lib/db';
import mongoose from 'mongoose';

async function clearCollections() {
  await connectToDB();

  const db = mongoose.connection.db;

  if (!db) {
    console.error('No database connection available.');
    process.exit(1);
  }

  await db.collection('books').deleteMany({});
  await db.collection('reviews').deleteMany({});
  console.log('✅ Cleared "books" and "reviews" collections.');
  process.exit(0);
}

clearCollections();
