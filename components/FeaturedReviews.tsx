"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { OutlineButton } from "@/components/Button";

interface Review {
  _id: string;
  quote: string;
  userName: string;
  rating: number;
  title?: string;
}

export default function FeaturedReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeReview, setActiveReview] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews", { headers: { Accept: "application/json" } });
        const data: Review[] = await res.json();
        setReviews(data.filter((review) => review.rating >= 4)); // or add isFeatured in model
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (loading) return null;
  if (!reviews.length) return <p className="text-center">No reviews available.</p>;

  const active = reviews[activeReview];

  return (
    <section className="py-16 bg-sky/90 text-deep-brown">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">Reader Reviews</h2>
        <p className="text-center mb-12 text-mountain-dark">
          See what others are saying about Numen of <span className="text-rooster font-semibold">Banda</span>
        </p>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-sky-light hover:bg-sky text-deep-brown w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 border border-mountain/30"
            aria-label="Previous review"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="bg-sky-light/80 rounded-lg p-8 md:p-12 shadow-lg border border-mountain/30">
            <div className="text-4xl text-rooster mb-6">❝</div>
            <p className="text-xl md:text-2xl italic mb-6 text-deep-brown">{active.quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-deep-brown">{active.userName}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < active.rating ? "text-rooster" : "text-mountain-light"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-sm text-mountain">
                {activeReview + 1} of {reviews.length}
              </div>
            </div>
          </div>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-sky-light hover:bg-sky text-deep-brown w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-mountain/30"
            aria-label="Next review"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-block border-2 border-rooster hover:bg-rooster text-deep-brown hover:text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
