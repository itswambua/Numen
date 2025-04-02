
import 'dotenv/config';
import { connectToDB } from '@/lib/db';
import { Author } from '@/models/Author';

async function seedAuthor() {
  await connectToDB();

  const exists = await Author.findOne({ name: 'Hillan K. Nzioka' });
  if (exists) {
    console.log('Author already exists.');
    process.exit(0);
  }

  const author = new Author({
    name: 'Hillan K. Nzioka',
    bio: 'Hillan is a Kenyan-born author living in Sydney, known for blending traditional African narratives with contemporary global themes.',
    photoUrl: '/author-photo.jpg',
    contactEmail: 'info@numenofbanda.com',
    socialLinks: {
      facebook: 'https://www.facebook.com/Hillan18',
      instagram: 'https://www.instagram.com/hillannzioka/',
      linkedin: 'https://www.linkedin.com/in/hillan-nzioka-b3540436/',
      x: 'https://x.com/HillanNzioka'
    },
    quoteHighlight: 'I write to bridge worlds - connecting traditional wisdom with contemporary challenges...',
    creativeProcess: 'Hillan’s writing draws from oral traditions and formal studies, portraying deep cultural insights through immersive storytelling.',
    latestWork: 'The Numen of Banda',
    upcomingProjects: [
      {
        title: 'The Death Knell Drums of Luzira',
        status: 'in progress'
      }
    ]
  });

  await author.save();
  console.log('Author seeded successfully!');
  process.exit(0);
}

seedAuthor();
