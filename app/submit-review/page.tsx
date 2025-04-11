"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Alert from "@/components/Alert";

export default function SubmitReviewPage() {
  const [formData, setFormData] = useState({
    userName: '',
    title: '',
    quote: '',
    rating: 5,
    consent: false
  });

  const [message, setMessage] = useState('');


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'rating' ? parseInt(e.target.value) : e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setMessage("Please agree to the terms before submitting your review.");
      return;
    }

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: formData.userName,
          title: formData.title,
          quote: formData.quote,
          rating: formData.rating,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setMessage("Review submitted successfully!");
      setFormData({ userName: '', title: '', quote: '', rating: 5, consent: false });

    } catch (err) {
      setMessage("There was an error submitting your review.");
    }
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="userName" className="text-deep-brown font-semibold mb-1">Your Name</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                    className="p-3 border border-mountain rounded-md bg-white"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="title" className="text-deep-brown font-semibold mb-1">Review Title <span className="text-mountain-dark text-sm">(optional)</span></label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="p-3 border border-mountain rounded-md bg-white"
                    placeholder="e.g. A Magical Experience"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="quote" className="text-deep-brown font-semibold mb-1">Your Review</label>
                  <textarea
                    name="quote"
                    id="quote"
                    value={formData.quote}
                    onChange={handleChange}
                    required
                    className="p-3 border border-mountain rounded-md bg-white min-h-[120px]"
                    placeholder="Write your thoughts here..."
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="rating" className="text-deep-brown font-semibold mb-1">Rating</label>
                  <select
                    name="rating"
                    id="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="p-3 border border-mountain rounded-md bg-white"
                  >
                    {[5, 4, 3, 2, 1].map((r) => (
                      <option key={r} value={r}>
                        {r} Star{r > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={() => setFormData({ ...formData, consent: !formData.consent })}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-mountain-dark">
                    I consent to having my review published publicly on this site.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!formData.consent}
                  className={`mt-6 px-6 py-3 font-semibold rounded-md text-white shadow-md transition-all duration-300 ${formData.consent
                    ? 'bg-yellow-400 hover:bg-rooster-dark  cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                    }`}
                >
                  Submit Review
                </button>

                {/* // Inside your component's JSX: */}
                {message && (
                  <Alert
                    message={message}
                    type={message.includes("successfully") ? "success" : "error"}
                    onClose={() => setMessage("")}
                  />
                )}


              </form>


            )}
          </div>
        </div>
      </section>
    </div>
  );
}