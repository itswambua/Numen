"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SubmitReviewPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    rating: 5,
    review: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <div className="bg-sky/10 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-16">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Submit Your Review</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Share your thoughts about The Numen of Banda with our reading community</p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white/80 rounded-xl shadow-md p-8 border border-mountain/10 backdrop-blur-sm -mt-12">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-2xl font-bold text-deep-brown mb-4">Thank You For Your Review!</h2>
                <p className="text-mountain-dark mb-8">Your thoughts on Numen of Banda have been submitted and will be shared with our reading community after review.</p>
                <Link 
                  href="/reviews" 
                  className="inline-block bg-forest hover:bg-forest-dark text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md"
                >
                  Back to Reviews
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-mountain/20 pb-4 mb-8">
                  <Image 
                    src="/book-cover.jpg"
                    alt="Numen of Banda by Hillan K. Nzioka"
                    width={80}
                    height={120}
                    className="rounded-md shadow-md mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-deep-brown">The Numen of Banda</h2>
                    <p className="text-mountain">by Hillan K. Nzioka</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-mountain-dark font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-mountain/20 rounded-md focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="How should we display your name?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-mountain-dark font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-mountain/20 rounded-md focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="Your email (will not be displayed)"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="title" className="block text-mountain-dark font-medium mb-2">Review Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-mountain/20 rounded-md focus:outline-none focus:ring-2 focus:ring-forest/50"
                    placeholder="Summarize your thoughts in a title"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-mountain-dark font-medium mb-2">Your Rating</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="p-1"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-8 w-8 ${star <= formData.rating ? 'text-rooster' : 'text-mountain-light'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="review" className="block text-mountain-dark font-medium mb-2">Your Review</label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-mountain/20 rounded-md focus:outline-none focus:ring-2 focus:ring-forest/50 min-h-32"
                    placeholder="Share your thoughts about the book..."
                    required
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-mountain-dark">
                      I consent to having my review published on the website. I confirm this is my honest 
                      opinion of the book and that I have read and agree to the review guidelines.
                    </span>
                  </label>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md ${
                      isSubmitting || !formData.consent ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}