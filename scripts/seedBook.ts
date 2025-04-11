import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { connectToDB } from '@/lib/db';
import { Book } from '@/models/Book';
import { Author } from '@/models/Author';

async function seed() {
  await connectToDB();

  // Ensure the book doesn't already exist
  const exists = await Book.findOne({ slug: 'the-numen-of-banda' });
  if (exists) {
    console.log('Book already exists.');
    process.exit(0);
  }

  // Get associated author
  const author = await Author.findOne({ name: 'Hillan K. Nzioka' });
  if (!author) {
    console.error('❌ Author not found. Please seed the author first.');
    process.exit(1);
  }

  const book = new Book({
    title: 'The Numen of Banda',
    slug: 'the-numen-of-banda',
    authorId: author._id,
    synopsis: 'In the rugged landscapes of Kenya, a sacred journey unfolds...',
    chapterPreview: 'The matriarch, perched on a rickety stool...',
    coverImageUrl: '/book-cover.jpg',
    formats: [
      { type: 'hardcover', price: 26.99 },
      { type: 'paperback', price: 19.99 },
      { type: 'ebook', price: 9.99 },
      { type: 'audiobook', price: 29.99 }
    ],
    features: [
      {
        icon: 'book',
        title: 'Riveting Storytelling',
        description:
          "Journey through treacherous terrain alongside Benjo's family as they navigate the Thika River, confront dangerous wildlife, and face hostile Akimi cannibals in their quest for healing from the mysterious Numen of Banda.",
      },
      {
        icon: 'users',
        title: 'Complex Characters',
        description:
          "Discover Field Marshal Sosh, a battle-hardened matriarch whose traumatic experiences during the Mau Mau war left her emotionally scarred yet fiercely protective of her grandson Benjo, her chosen heir.",
      },
      {
        icon: 'globe',
        title: 'Cultural Richness',
        description:
          'Witness authentic Kamba traditions from the mesmerizing Kilumi dance ceremony and sacred circumcision rites to ancestral beliefs about witchcraft, divination, and healing that shape every decision the family makes.',
      },
      {
        icon: 'heart',
        title: 'Timeless Themes',
        description:
          'Experience the collision between ancestral traditions and colonial aftermath as young Benjo navigates his coming-of-age journey, torn between modern education and the powerful spiritual heritage of his people.',
      }
    ]
  });

  await book.save();
  console.log('✅ Book seeded successfully!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Error seeding book:', err);
  process.exit(1);
});
