import Link from "next/link";
import Image from "next/image";

export default function ReviewsPage() {
  // Sample review data
  const reviews = [
    {
      id: 1,
      author: "James K.",
      date: "January 15, 2025",
      rating: 5,
      text: "I couldn't put this book down! The world-building is phenomenal, and Amara's journey kept me turning pages late into the night. The author has created a universe that feels both fantastical and authentic, with characters that stay with you long after you've finished reading."
    },
    {
      id: 2,
      author: "Maria L.",
      date: "January 22, 2025",
      rating: 4,
      text: "As someone who rarely reads fantasy, I was surprised by how emotionally invested I became in these characters. Hillan K has a gift for making the fantastical feel deeply human. The pacing in the middle section could be tighter, but the powerful ending more than made up for it."
    },
    {
      id: 3,
      author: "David T.",
      date: "February 3, 2025",
      rating: 5,
      text: "\"The Numen of Banda\" vividly brings to life the rich tapestry of Kamba culture. As I read, I'm transported to my childhood when my grandpa shared tales of our heritage. The book captures the essence of Kamba spirituality, customs, and community bonds, creating a profound sense of nostalgia. Through this work, I reconnect with the timeless wisdom of my ancestors and find a renewed appreciation for our traditions."
    },
    {
      id: 4,
      author: "Sarah J.",
      date: "February 10, 2025",
      rating: 5,
      text: "A rare gem in contemporary literature that balances intellectual depth with emotional resonance. I couldn't put it down. The way the author weaves mythology and coming-of-age elements creates a truly unique reading experience."
    },
    {
      id: 5,
      author: "Michael P.",
      date: "February 18, 2025",
      rating: 4,
      text: "The richness of the world-building is impressive. Every location feels lived-in and authentic. The protagonist's journey is compelling, though some supporting characters could use more development. Overall, a very satisfying read that I'd recommend to anyone who enjoys culturally rich fantasy."
    },
    {
      id: 6,
      author: "Emily R.",
      date: "February 25, 2025",
      rating: 5,
      text: "Beautifully written with prose that sometimes reads like poetry. The themes of tradition versus progress are handled with nuance and respect. This is the kind of book that stays with you and makes you reflect on your own cultural heritage."
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Reader Reviews</h1>
          <p className="text-xl text-gray-200">See what others are saying about Numen of Banda</p>
        </div>
      </div>
      
      {/* Reviews Section */}
      <section className="py-12 bg-sky/20">
        <div className="container mx-auto px-6">
          {/* Overall Rating */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-deep-brown mb-4">Overall Rating</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-rooster" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-bold text-deep-brown mb-2">4.8 out of 5</p>
            <p className="text-mountain">Based on 368 reviews</p>
          </div>
          
          {/* Reviews List */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-deep-brown mb-8">Recent Reviews</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-rooster">
                  <div className="flex items-center mb-4">
                    <div className="bg-sky rounded-full h-12 w-12 flex items-center justify-center text-deep-brown font-bold mr-4">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-deep-brown">{review.author}</h3>
                      <p className="text-sm text-mountain">{review.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < review.rating ? 'text-rooster' : 'text-gray-300'}`}
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-deep-brown mb-4">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Submit Review CTA */}
          <div className="bg-forest/10 rounded-lg p-8 border border-forest/30">
            <h2 className="text-2xl font-bold text-deep-brown mb-4">Share Your Thoughts</h2>
            <p className="text-deep-brown mb-6">Have you read Numen of Banda? We'd love to hear what you thought of the book!</p>
            <Link 
              href="/contact" 
              className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-6 rounded-md transition-colors shadow-md inline-block"
            >
              Submit Your Review
            </Link>
          </div>
        </div>
      </section>
      
      {/* Book Highlight */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4">
              <div className="relative w-full aspect-[2/3] max-w-xs">
                <Image 
                  src="/book-cover.jpg"
                  alt="Numen of Banda by Hillan K"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h2 className="text-3xl font-bold mb-4 text-deep-brown">Numen of Banda</h2>
              <p className="text-xl italic text-mountain mb-4">by Hillan K. Nzioka</p>
              <p className="text-deep-brown mb-6">
                Experience the captivating journey of Amara as she discovers her connection to the ancient spirits of Banda. 
                This enchanting tale combines adventure, mythology, and coming-of-age elements in a richly imagined world 
                steeped in authentic cultural traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="bg-forest hover:bg-forest-dark text-white font-bold py-2 px-6 rounded-md transition-colors shadow-md"
                >
                  Learn More
                </Link>
                <Link 
                  href="/purchase" 
                  className="bg-rooster hover:bg-rooster-dark text-white font-bold py-2 px-6 rounded-md transition-colors shadow-md"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}