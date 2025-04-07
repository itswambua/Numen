import Link from "next/link";
import Image from "next/image";
import { connectToDB } from "@/lib/db";
import { Review } from '@/models/Review';
import { Book } from '@/models/Book';

export default async function BookPage() {
  await connectToDB();

  const book = await Book.findOne({ slug: 'the-numen-of-banda' }).lean();
  const reviews = book
    ? await Review.find({ isFeatured: true, book: book._id }).limit(3).lean()
    : [];

  if (!book) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        Book not found.
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">{book.title}</h1>
          <p className="text-xl text-gray-200 italic">The Complete Story</p>
        </div>
      </div>

      {/* Book Overview */}
      <section className="py-12 bg-sky/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="aspect-[2/3] rounded-lg shadow-xl relative overflow-hidden">
                <Image
                  src="/book-cover.jpg"
                  alt={`${book.title} by Hillan K. Nzioka`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="mt-8 space-y-4">
                <Link href="/purchase" className="btn-primary block w-full text-center">
                  Purchase Now
                </Link>
                <div className="card-secondary">
                  <h3 className="font-semibold text-deep-brown mb-2">Available Formats:</h3>
                  <ul className="space-y-1 text-mountain-dark">
                    {book.formats.map((format: any, index: number) => (
                      <li key={index} className="flex justify-between">
                        <span>{format.type.charAt(0).toUpperCase() + format.type.slice(1)}</span>
                        <span>USD ${format.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              {/* Add synopsis/details if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Reader Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review: any, i: number) => (
              <div key={i} className="card-secondary">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-rooster" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l..." />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-mountain-dark mb-4">
                  <strong>{review.title}</strong><br />
                  {review.quote}
                </blockquote>
                <p className="font-semibold text-deep-brown">— {review.userName}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/reviews" className="btn-outline">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-mountain text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Benjo on his journey through the world of Banda today.
          </p>
          <Link
            href="/purchase"
            className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg text-lg"
          >
            Get Your Copy
          </Link>
        </div>
      </section>
    </div>
  );
}
