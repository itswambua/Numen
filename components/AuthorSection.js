import Link from "next/link";

export default function AuthorSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            {/* Author image placeholder - replace with actual image in production */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-amber-200 border-4 border-amber-600 shadow-lg flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-800 opacity-20"></div>
              <span className="relative text-amber-900 font-bold">Author Photo</span>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">About Hillan K</h2>
            <p className="text-lg mb-4 text-amber-800">
              Hillan K is an acclaimed author known for crafting stories that bridge cultures and explore the depths of human experience. With a background in literature and anthropology, Hillan brings a unique perspective to storytelling that resonates with readers worldwide.
            </p>
            <p className="text-lg mb-6 text-amber-800">
              When not writing, Hillan can be found traveling to gather inspiration for future works, engaging with readers at literary events, and mentoring aspiring writers. Numen of Banda represents the culmination of years of research and a passionate dedication to the craft of writing.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-md transition-colors shadow-md"
            >
              Learn More About the Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}