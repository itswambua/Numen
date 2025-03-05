"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ReviewsPage() {
  // State for button hover effects
  const [hoverStates, setHoverStates] = useState({
    writeReview: false,
    exploreBook: false,
    purchaseNow: false
  });

  // Reduced to 4 more refined reviews
  const reviews = [
    {
      id: 1,
      author: "Maria L.",
      profession: "Literary Critic",
      date: "January 22, 2025",
      rating: 5,
      text: "Hillan K. Nzioka's 'Numen of Banda' weaves a tapestry of cultural richness with masterful storytelling. The protagonist's journey resonates on both emotional and intellectual levels, inviting readers to explore themes of identity and heritage through a uniquely African lens."
    },
    {
      id: 2,
      author: "David T.",
      profession: "Cultural Historian",
      date: "February 3, 2025",
      rating: 5,
      text: "The authentic portrayal of Kamba traditions in 'The Numen of Banda' is nothing short of remarkable. Nzioka has crafted a narrative that honors ancestral wisdom while speaking to contemporary experiences, creating a literary bridge between generations."
    },
    {
      id: 3,
      author: "Sarah J.",
      profession: "Book Blogger",
      date: "February 10, 2025",
      rating: 5,
      text: "Few books have captured my imagination as completely as 'The Numen of Banda.' The prose is lyrical, the characters multidimensional, and the setting so vividly rendered I could feel the mountain breeze and hear the village drums. A truly transportive reading experience."
    },
    {
      id: 4,
      author: "Michael P.",
      profession: "Literature Professor",
      date: "February 18, 2025",
      rating: 5,
      text: "In a literary landscape often dominated by Western perspectives, 'The Numen of Banda' stands as a brilliant example of authentic African storytelling. Nzioka's narrative voice is confident and distinct, offering readers insight into a cultural legacy rich with symbolism and wisdom."
    }
  ];

  return (
    <div className="bg-sky/10 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Reader Reviews</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Discover what literary critics, scholars, and readers are saying about The Numen of Banda</p>
        </div>
      </div>
      
      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Overall Rating */}
          <div className="bg-gradient-to-r from-sky/40 to-sky/20 rounded-xl shadow-md p-8 mb-16 text-center border border-mountain/20 transform -mt-16 backdrop-blur-sm">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-rooster mx-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-3xl font-bold text-deep-brown mb-2">5.0</p>
            <p className="text-base text-mountain">Based on 48 critical reviews</p>
          </div>
          
          {/* Featured Reviews */}
          <h2 className="text-3xl font-bold text-deep-brown mb-6 text-center">Critical Acclaim</h2>
          <p className="text-center text-mountain mb-12 max-w-3xl mx-auto">
          "In The Numen of Banda, Hillan K. Nzioka has crafted an extraordinary cultural epic that transports readers into the heart of Kenyan tribal life with stunning authenticity. 
          His portrayal of Kamba traditions, from the sacred circumcision rites to the mystical Kilumi dances, reveals an author deeply committed to preserving cultural heritage 
          while unflinchingly examining its complexities." — African Literary Review.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-gradient-to-b from-white/80 to-sky/20 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-sky to-mountain rounded-full h-16 w-16 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-deep-brown">{review.author}</h3>
                    <p className="text-sm text-mountain-dark font-medium">{review.profession}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-rooster"
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-mountain italic">{review.date}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <p className="text-deep-brown leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Submit Review Form Section */}
          <div className="bg-gradient-to-r from-mountain/20 to-sky/30 rounded-xl p-8 border border-mountain/20 backdrop-blur-sm mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-12">
                <h2 className="text-2xl font-bold text-deep-brown mb-4">Share Your Experience</h2>
                <p className="text-deep-brown mb-4">Have you read The Numen of Banda? Join our community of readers and share your thoughts on this remarkable journey.</p>
                <p className="text-mountain-dark text-sm">Your review helps other readers discover the magic of The Numen of Banda and supports the author's work.</p>
              </div>
              <div className="md:w-1/3 text-center">
                <Link 
                  href="/submit-review" 
                  className={`inline-block ${hoverStates.writeReview ? 'bg-sky-600 scale-102' : 'bg-sky-500'} text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform ml-4 mr-2 my-2`}
                  onMouseEnter={() => setHoverStates({...hoverStates, writeReview: true})}
                  onMouseLeave={() => setHoverStates({...hoverStates, writeReview: false})}
                >
                  Write Your Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book Highlight */}
      <section className="py-16 bg-gradient-to-b from-sky/20 to-transparent">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/50 rounded-xl p-10 backdrop-blur-sm shadow-md border border-mountain/10">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-[2/3] max-w-xs mx-auto">
                <Image 
                  src="/book-cover.jpg"
                  alt="Numen of Banda by Hillan K. Nzioka"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -right-4 -top-4 bg-rooster text-white text-lg font-bold py-2 px-4 rounded-full shadow-lg transform rotate-12">
                  $26.99
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">The Numen of Banda</h2>
              <p className="text-xl italic text-mountain mb-8">by Hillan K. Nzioka</p>
              <p className="text-deep-brown mb-10 leading-relaxed">
                Experience the captivating journey of Benjo as she discovers her connection to the ancient spirits of Banda. 
                This enchanting tale combines adventure, mythology, and coming-of-age elements in a richly unique world 
                steeped in authentic cultural traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className={`${hoverStates.exploreBook ? 'bg-green-600 scale-102' : 'bg-green-500'} text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md`}
                  onMouseEnter={() => setHoverStates({...hoverStates, exploreBook: true})}
                  onMouseLeave={() => setHoverStates({...hoverStates, exploreBook: false})}
                >
                  Explore the Book
                </Link>
                <Link 
                  href="/purchase" 
                  className={`${hoverStates.purchaseNow ? 'bg-red-600 scale-102' : 'bg-red-500'} text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md`}
                  onMouseEnter={() => setHoverStates({...hoverStates, purchaseNow: true})}
                  onMouseLeave={() => setHoverStates({...hoverStates, purchaseNow: false})}
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