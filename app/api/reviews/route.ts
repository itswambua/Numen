// app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { Review } from '@/models/Review';
import { Book } from '@/models/Book'; // ⬅ import the Book model


export async function GET() {
  try {
    await connectToDB();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (err) {
    return new NextResponse('Failed to fetch reviews', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
        try {
          await connectToDB();
          const body = await req.json();
          const { userName, quote, rating, title } = body;
      
          if (!userName || !quote || !rating) {
            return new NextResponse('Missing required fields', { status: 400 });
          }
      
          // Automatically fetch the book ID for the known book
          const book = await Book.findOne({ slug: 'the-numen-of-banda' });
          if (!book) {
            return new NextResponse('Book not found', { status: 404 });
          }
      
          const review = new Review({ userName, quote, rating, title, book: book._id });
          await review.save();
      
          return NextResponse.json({ message: 'Review submitted successfully', review });
        } catch (err) {
          console.error(err);
          return new NextResponse('Failed to submit review', { status: 500 });
        }
      }
      