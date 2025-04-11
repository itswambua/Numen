import Link from "next/link";
import Hero from "@/components/Hero";
import BookFeatures from "@/components/BookFeatures";
import FeaturedReviews from "@/components/FeaturedReviews";
import AuthorSection from "@/components/AuthorSection";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import clientPromise from "@/lib/db";
// import clientPromise from "@/lib/db";

export default function Home() {

  // clientPromise.db.collection("users").find({ age : 32});

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
                Set against the backdrop of Kenya's post-colonial landscape, <strong>The Numen of Banda</strong> follows Benjo's journey through treacherous territories 
                and sacred rituals that test not only his courage but his understanding of what it means to be heir to a warrior's legacy.
              </p>
              <p className="text-lg mb-6">
                With prose that has been described as &quot;mesmerizing&quot; and &quot;evocative,&quot; Hillan K invites readers 
                into a world where ancestral spirits and modern medicine collide, where each page reveals the powerful bonds between generations.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* Enhanced buttons with animation and improved styling */}
                <Link
                  href="/book"
                  className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                >
                  Read Chapter Preview
                </Link>
                <Link
                  href="/purchase"
                  className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                >
                  Purchase Options
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* Book details card */}
              <div className="bg-sky rounded-lg p-8 shadow-lg border border-mountain">
                <h3 className="text-2xl font-bold mb-4 text-deep-brown">Book Details</h3>
                <ul className="space-y-3 text-deep-brown">
                  <li className="flex">
                    <span className="font-semibold w-32">Title:</span>
                    <span>The Numen of Banda</span>
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
                    <span>$26.99 (Hardcover)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookFeatures />
      
      {/* For FeaturedReviews, we'd need to update the component itself */}
      <FeaturedReviews />
      
      <AuthorSection />
      
      {/* Enhanced Call to Action with darker, more distinct button */}
      <section className="py-16 bg-sky text-deep-brown text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have already discovered the magic of The Numen of Banda.
          </p>
          <Link 
            href="/purchase" 
            className="bg-deep-brown hover:bg-rooster text-white font-bold py-4 px-10 rounded-md transition-all duration-300 shadow-xl hover:shadow-2xl text-lg inline-block hover:-translate-y-1 transform border-2 border-rooster"
          >
            Get Your Copy Now
          </Link>
        </div>
      </section>
    </div>
  );
}