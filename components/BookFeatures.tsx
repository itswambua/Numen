"use client";

import { useEffect, useState } from "react";
import { iconMap } from "@/lib/iconMap";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function BookFeatures() {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await fetch("/api/book/the-numen-of-banda"); // 👈 Or your book fetching API
        const data = await res.json();
        setFeatures(data.book.features || []);
      } catch (err) {
        console.error("Failed to load features:", err);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="py-16 bg-sky/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-deep-brown">What Makes This Book Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-white/60 to-sky/20 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-500 backdrop-blur-sm border border-mountain/10">
              <div className="text-forest mb-4">
                {iconMap[feature.icon] || <span>🎯</span>}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-deep-brown">{feature.title}</h3>
              <p className="text-mountain-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
