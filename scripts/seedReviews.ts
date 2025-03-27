import 'dotenv/config';
import { connectToDB } from '@/lib/db';
import { Book } from '@/models/Book';
import { Review } from '@/models/Review';

async function seedReviews() {
  await connectToDB();

  const book = await Book.findOne({ slug: 'the-numen-of-banda' });
  if (!book) {
    console.error('Book not found. Cannot seed reviews.');
    process.exit(1);
  }

  const reviews = [
    {
      userName: 'Tinah K.',
      title: 'Unforgettable!',
      quote: "I couldn't put this book down! The world-building is phenomenal, and Benjo's journey kept me turning pages late into the night.",
      rating: 5,
      book: book._id,
      isFeatured: true
    },
    {
      userName: 'Pauline M.',
      title: 'Unexpectedly Brilliant',
      quote: 'As someone who rarely reads fantasy, I was surprised by how emotionally invested I became in these characters. Hillan K has a gift for making the fantastical feel deeply human.',
      rating: 5,
      book: book._id,
      isFeatured: true
    },
    {
      userName: 'Ben E.',
      title: 'Deeply Resonant',
      quote: '"The Numen of Banda" vividly brings to life the rich tapestry of Kamba culture... Through this work, I am reminded of the timeless wisdom passed down through generations.',
      rating: 5,
      book: book._id,
      isFeatured: true
    }
  ];

  await Review.deleteMany({ book: book._id });
  await Review.insertMany(reviews);
  console.log('Featured reviews seeded.');
  process.exit(0);
}

seedReviews();
