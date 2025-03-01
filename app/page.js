

import Hero from "@/components/Hero";
import BookFeatures from "@/components/BookFeatures";
import FeaturedReviews from "@/components/FeaturedReviews";
import AuthorSection from "@/components/AuthorSection";
import { PrimaryButton, SecondaryButton } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Book Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">Discover the Epic Tale</h2>
              <p className="text-lg mb-4">
                Set against the backdrop of a richly imagined world, <strong>Numen of Banda</strong> follows 
                the journey of its protagonist through challenges that test not only their resolve but their 
                understanding of what it means to be human.
              </p>
              <p className="text-lg mb-6">
                With prose that has been described as "mesmerizing" and "evocative," Hillan K invites readers 
                into a narrative experience unlike any other, where each page reveals new layers of meaning 
                and emotional depth.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/book">
                  Read Chapter Preview
                </PrimaryButton>
                <SecondaryButton href="/purchase">
                  Purchase Options
                </SecondaryButton>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Book details card */}
              <div className="bg-sky rounded-lg p-8 shadow-lg border border-mountain">
                <h3 className="text-2xl font-bold mb-4 text-deep-brown">Book Details</h3>
                <ul className="space-y-3 text-deep-brown">
                  <li className="flex">
                    <span className="font-semibold w-32">Title:</span>
                    <span>Numen of Banda</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Author:</span>
                    <span>Hillan K. Nzioka</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Publisher:</span>
                    <span>Tablo Publishing</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Release Date:</span>
                    <span>July 22, 2024</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Pages:</span>
                    <span>190</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">ISBN:</span>
                    <span>978-1-2345-6789-0</span> 
                    {/* 978-16-85839-89-5 */}
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Formats:</span>
                    <span>Hardcover, Paperback, E-book, Audiobook</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32">Price:</span>
                    <span>$34.12 (Hardcover)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookFeatures />
      <FeaturedReviews />
      <AuthorSection />
      
      {/* Call to Action */}
      <section className="py-16 bg-forest text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have already discovered the magic of Numen of Banda.
          </p>
          <PrimaryButton href="/purchase" className="text-lg">
            Get Your Copy Now
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}