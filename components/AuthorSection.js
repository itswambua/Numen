

import Link from "next/link";
import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="py-16 bg-sky/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            {/* Author image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-mountain shadow-lg">
              <Image 
                src="/author-photo.jpg" 
                alt="Hillan K. Nzioka" 
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-deep-brown">About Hillan K. Nzioka</h2>
            <p className="text-lg mb-4 text-mountain-dark">
              Hillan K. Nzioka is an acclaimed author known for crafting stories that bridge cultures and explore the depths of human experience. With a background in literature and anthropology, Hillan brings a unique perspective to storytelling that resonates with readers worldwide.
            </p>
            <p className="text-lg mb-6 text-mountain-dark">
              When not writing, Hillan can be found traveling to gather inspiration for future works, engaging with readers at literary events, and mentoring aspiring writers. Numen of Banda represents the culmination of years of research and a passionate dedication to the craft of writing.
            </p>
            <Link 
              href="/about" 
              className="btn-primary"
            >
              Learn More About the Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}