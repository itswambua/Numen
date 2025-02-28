"use client";

import { useState } from "react";
import { OutlineButton } from "@/components/Button";

export default function FeaturedReviews() {
  const reviews = [
    {
      id: 1,
      quote: "Numen of Banda is a literary triumph that weaves together history, myth, and human emotion in a tapestry of extraordinary beauty.",
      author: "Literary Weekly",
      rating: 5
    },
    {
      id: 2,
      quote: "Hillan K has crafted a masterpiece that will be discussed in literary circles for decades to come. A must-read for anyone who appreciates profound storytelling.",
      author: "Book Lovers Society",
      rating: 5
    },
    {
      id: 3,
      quote: "The characters leap off the page with such vibrancy that you'll find yourself thinking of them long after you've turned the final page.",
      author: "Michael R., Reader",
      rating: 4
    },
    {
      id: 4,
      quote: "A rare gem in contemporary literature that balances intellectual depth with emotional resonance. I couldn't put it down.",
      author: "Sarah J., Book Blogger",
      rating: 5
    }
  ];

  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-mountain text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">Reader Reviews</h2>
        <p className="text-center mb-12 text-gray-200">See what others are saying about Numen of Banda</p>
        
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-mountain-dark hover:bg-mountain text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="bg-mountain-dark rounded-lg p-8 md:p-12 shadow-lg">
            <div className="text-4xl text-rooster mb-6">❝</div>
            <p className="text-xl md:text-2xl italic mb-6">{reviews[activeReview].quote}</p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{reviews[activeReview].author}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < reviews[activeReview].rating ? 'text-rooster' : 'text-gray-600'}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-sm">
                {activeReview + 1} of {reviews.length}
              </div>
            </div>
          </div>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-mountain-dark hover:bg-mountain text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="mt-10 text-center">
          <OutlineButton href="/reviews" variant="light">
            Read All Reviews
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}