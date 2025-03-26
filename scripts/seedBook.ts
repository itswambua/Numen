import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { connectToDB } from '@/lib/db.js';
import { Book } from '@/models/Book.js';

async function seed() {
  await connectToDB();

  const exists = await Book.findOne({ slug: 'the-numen-of-banda' });
  if (exists) {
    console.log('Book already exists.');
    process.exit(0);
  }

  const book = new Book({
    title: 'The Numen of Banda',
    slug: 'the-numen-of-banda',
    author: 'Hillan K. Nzioka',
    synopsis: 'In the rugged landscapes of Kenya...',
    chapterPreview: 'The matriarch, perched on a rickety stool...',
    coverImageUrl: '/book-cover.jpg',
    formats: [
      { type: 'hardcover', price: 26.99 },
      { type: 'paperback', price: 19.99 },
      { type: 'ebook', price: 9.99 },
      { type: 'audiobook', price: 29.99 }
    ]
  });

  await book.save();
  console.log('Book seeded successfully!');
  process.exit(0);
}

seed();
