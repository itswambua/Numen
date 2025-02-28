import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Numen of Banda</h1>
          <p className="text-xl text-amber-200 italic">The Complete Story</p>
        </div>
      </div>
      
      {/* Book Overview */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              {/* Book cover image */}
              <div className="aspect-[2/3] rounded-lg shadow-xl relative overflow-hidden">
                <Image 
                  src="/book-cover.jpg" 
                  alt="Numen of Banda by Hillan K"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              
              <div className="mt-8 space-y-4">
                <Link
                  href="/purchase"
                  className="block w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-md transition-colors shadow-md text-center"
                >
                  Purchase Now
                </Link>
                <div className="bg-amber-100 p-4 rounded-md shadow">
                  <h3 className="font-semibold text-amber-900 mb-2">Available Formats:</h3>
                  <ul className="space-y-1 text-amber-800">
                    <li className="flex justify-between">
                      <span>Hardcover</span>
                      <span>AUD $34.12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Paperback</span>
                      <span>AUD $34.12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>E-book</span>
                      <span>AUD $34.12</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Audiobook</span>
                      <span>AUD $34.12</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-amber-900">Synopsis</h2>
              <div className="prose prose-amber max-w-none text-lg">
                <p className="mb-4">
                <strong>The bird on the Mountain.</strong> In a world where the boundaries between the spiritual and physical realms blur, 
                  <strong>Numen of Banda</strong> tells the story of Amara, a young woman who discovers 
                  she possesses the rare ability to communicate with the numina—ancient spirits that 
                  have guided her people for generations. 
                </p>
                <p className="mb-4">
                  As political tensions rise in her homeland of Banda, Amara finds herself caught between 
                  competing factions who seek to use her abilities for their own ends. Guided by her 
                  grandmother's teachings and her own intuition, she embarks on a journey to understand 
                  the true nature of her gift and its purpose in a changing world.
                </p>
                <p className="mb-4">
                  Along the way, she encounters allies and adversaries who challenge her understanding 
                  of history, power, and identity. From the bustling markets of the capital city to the 
                  sacred groves where the numina dwell, each setting becomes a character in its own right, 
                  richly detailed and immersive.
                </p>
                <p className="mb-4">
                  As Amara's powers grow, so do the threats against her. She must navigate complex 
                  political landscapes, ancient prophecies, and her own conflicted heart as she decides 
                  where her true loyalties lie. Will she use her unique connection to the numina to 
                  preserve tradition, or to forge a new path forward for her people?
                </p>
                <p>
                  Hillan K weaves a tapestry of adventure, mythology, and coming-of-age drama in this 
                  unforgettable tale about finding one's voice amid the echoes of history.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-amber-900">Critical Acclaim</h3>
                <div className="bg-white p-6 rounded-lg shadow border border-amber-200">
                  <blockquote className="italic text-amber-800 mb-4">
                    "In Numen of Banda, Hillan K has created not just a story, but an entire world that 
                    feels at once fantastical and deeply authentic. The characters breathe with life, the 
                    plot twists with unpredictable grace, and the themes resonate with contemporary relevance."
                  </blockquote>
                  <p className="text-right font-semibold">- The Literary Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chapter Preview */}
      <section className="py-12 bg-amber-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-amber-900 text-center">Chapter Preview</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold mb-4 text-amber-900">Chapter 1: The Calling</h3>
            <div className="prose prose-amber max-w-none">
              <p>
                The morning mist clung to the hills of Banda like a lover reluctant to depart. Amara 
                watched it from her grandmother's doorway, the cool air carrying scents of damp earth 
                and the smoke of breakfast fires. Today was her eighteenth birthday, the day when she 
                would finally be permitted to enter the Sacred Grove.
              </p>
              <p>
                "Are you ready, child?" Her grandmother's voice came from behind her, soft as the rustle 
                of dried herbs that hung from the ceiling beams.
              </p>
              <p>
                Amara turned. Nana Ekua stood in the shadows of their small home, her white hair catching 
                the early light. In her hands, she held a clay bowl filled with a mixture Amara recognized—
                crushed kola nuts, palm oil, and something that sparkled like ground crystal.
              </p>
              <p>
                "I've been ready my whole life," Amara replied, though her voice betrayed a tremor.
              </p>
              <p>
                Nana Ekua's laugh was gentle. "No one is ever truly ready to meet the numina. Not even I, 
                and I have been the Keeper for fifty years."
              </p>
              <p>
                (Chapter preview continues...)
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/purchase"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-md transition-colors shadow-md"
              >
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reader Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-amber-900 text-center">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-lg shadow border border-amber-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg 
                      key={j} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-amber-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-amber-800 mb-4">
                  {i === 1 && "I couldn't put this book down! The world-building is phenomenal, and Amara's journey kept me turning pages late into the night."}
                  {i === 2 && "As someone who rarely reads fantasy, I was surprised by how emotionally invested I became in these characters. Hillan K has a gift for making the fantastical feel deeply human."}
                  {i === 3 && "The cultural details in this book are so rich and thoughtfully presented. It's refreshing to read fantasy that draws from non-Western traditions in such an authentic way."}
                </blockquote>
                <p className="font-semibold text-amber-900">
                  {i === 1 && "— Tinah K."}
                  {i === 2 && "— Pauline M."}
                  {i === 3 && "— RickJohns E."}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/reviews"
              className="inline-block border-2 border-amber-700 hover:bg-amber-50 text-amber-800 font-bold py-2 px-6 rounded-md transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Amara on her journey through the mystical world of Banda today.
          </p>
          <Link 
            href="/purchase" 
            className="bg-white hover:bg-amber-100 text-amber-900 font-bold py-3 px-8 rounded-md transition-colors shadow-lg text-lg"
          >
            Get Your Copy
          </Link>
        </div>
      </section>
    </div>
  );
}