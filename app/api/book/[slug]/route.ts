import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { Book } from '@/models/Book';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectToDB();
    const { slug } = params;
    const book = await Book.findOne({ slug });
    if (!book) {
      return new NextResponse('Book not found', { status: 404 });
    }
    return NextResponse.json({ book });
  } catch (err) {
    return new NextResponse('Failed to fetch book', { status: 500 });
  }
}
