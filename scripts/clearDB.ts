import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { connectToDB } from '@/lib/db';
import mongoose from 'mongoose';

async function clearCollections() {
  await connectToDB();

  const db = mongoose.connection.db;
  if (!db) {
    throw new Error('MongoDB connection failed or is undefined.');
  }

  const collections = await db.collections();

  for (const collection of collections) {
    console.log(`🧹 Clearing "${collection.collectionName}"...`);
    await collection.deleteMany({});
  }

  console.log('✅ All collections cleared!');
  process.exit(0);
}

clearCollections().catch(err => {
  console.error('❌ Error clearing collections:', err);
  process.exit(1);
});
