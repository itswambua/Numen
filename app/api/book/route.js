// app/api/book/route.js
import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { Book } from '@/models/Book';

export async function GET() {
  try {
    await connectToDB();

    const books = await Book.find({}); // Fetch all books

    return NextResponse.json({ success: true, data: books }, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch books.' },
      { status: 500 }
    );
  }
}
