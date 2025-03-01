import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">The Numen of Banda</h1>
          <p className="text-xl text-gray-200 italic">The Complete Story</p>
        </div>
      </div>
      
      {/* Book Overview */}
      <section className="py-12 bg-sky/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              {/* Book cover image */}
              <div className="aspect-[2/3] rounded-lg shadow-xl relative overflow-hidden">
                <Image 
                  src="/book-cover.jpg" 
                  alt="Numen of Banda by Hillan K. Nzioka"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              
              <div className="mt-8 space-y-4">
                <Link
                  href="/purchase"
                  className="btn-primary block w-full text-center"
                >
                  Purchase Now
                </Link>
                <div className="card-secondary">
                  <h3 className="font-semibold text-deep-brown mb-2">Available Formats:</h3>
                  <ul className="space-y-1 text-mountain-dark">
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
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">Synopsis</h2>
              <div className="prose max-w-none text-lg">
                <p className="mb-4 text-deep-brown">
                  <strong className="text-rooster">The bird on the Mountain.</strong> In a world where the boundaries between the spiritual and physical realms blur, 
                  <strong> Numen of Banda</strong> tells the story of Amara, a young woman who discovers 
                  she possesses the rare ability to communicate with the numina—ancient spirits that 
                  have guided her people for generations. 
                </p>
                <p className="mb-4 text-deep-brown">
                  As political tensions rise in her homeland of Banda, Amara finds herself caught between 
                  competing factions who seek to use her abilities for their own ends. Guided by her 
                  grandmother's teachings and her own intuition, she embarks on a journey to understand 
                  the true nature of her gift and its purpose in a changing world.
                </p>
                <p className="mb-4 text-deep-brown">
                  Along the way, she encounters allies and adversaries who challenge her understanding 
                  of history, power, and identity. From the bustling markets of the capital city to the 
                  sacred groves where the numina dwell, each setting becomes a character in its own right, 
                  richly detailed and immersive.
                </p>
                <p className="mb-4 text-deep-brown">
                  As Amara's powers grow, so do the threats against her. She must navigate complex 
                  political landscapes, ancient prophecies, and her own conflicted heart as she decides 
                  where her true loyalties lie. Will she use her unique connection to the numina to 
                  preserve tradition, or to forge a new path forward for her people?
                </p>
                <p className="text-deep-brown">
                  Hillan K. Nzioka weaves a tapestry of adventure, mythology, and coming-of-age drama in this 
                  unforgettable tale about finding one's voice amid the echoes of history.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-deep-brown">Critical Acclaim</h3>
                <div className="card-highlight">
                  <blockquote className="italic text-mountain-dark mb-4">
                    "In Numen of Banda, Hillan K has created not just a story, but an entire world that 
                    feels at once fantastical and deeply authentic. The characters breathe with life, the 
                    plot twists with unpredictable grace, and the themes resonate with contemporary relevance."
                  </blockquote>
                  <p className="text-right font-semibold text-deep-brown">— The Literary Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chapter Preview */}
      <section className="py-12 bg-sky/10">
        <div className="container mx-auto px-6">
          <h2 className="section-title">Chapter Preview</h2>
          <div className="max-w-3xl mx-auto card-primary">
            <h3 className="text-2xl font-bold mb-4 text-deep-brown">Chapter 1: The Calling</h3>
            <div className="prose max-w-none">
              <p className="text-deep-brown">
              A remarkable story of Aimu foresight is told about their successful prediction of the devastating famine of 1898, 
              three years before it occurred. This prediction allowed them ample time to migrate temporarily to the neighbouring 
              country of the Nyamwezi people in Tanganyika, where they remained until the famine had passed. 
              </p>
              <p className="text-deep-brown">
              The famine was catastrophic and pervasive throughout the entire Kamba land, killing nearly a quarter of the Kamba population, 
              but the members of the Aimu clan were spared due to their mastery of interpreting omens.
              </p>
              <p className="text-deep-brown">
              Their magical prowess remained a source of awe and admiration, and their ability to protect themselves 
              and others was unparalleled. Unquestionably the Aimu clan Was testament to the power of the ancient 
              knowledge of the Kamba people and the importance of preserving it for future generations.
              </p>
              <p className="text-deep-brown italic">
                (Chapter preview continues...)
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/purchase"
                className="btn-primary"
              >
                Continue Reading
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reader Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">What Readers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-secondary">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg 
                      key={j} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-rooster" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="italic text-mountain-dark mb-4">
                  {i === 1 && "I couldn't put this book down! The world-building is phenomenal, and Amara's journey kept me turning pages late into the night."}
                  {i === 2 && "As someone who rarely reads fantasy, I was surprised by how emotionally invested I became in these characters. Hillan K has a gift for making the fantastical feel deeply human."}
                  {i === 3 && "The cultural details in this book are so rich and thoughtfully presented. It's refreshing to read fantasy that draws from non-Western traditions in such an authentic way."}
                </blockquote>
                <p className="font-semibold text-deep-brown">
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
              className="btn-outline"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-mountain text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Amara on her journey through the mystical world of Banda today.
          </p>
          <Link 
            href="/purchase" 
            className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg text-lg"
          >
            Get Your Copy
          </Link>
        </div>
      </section>
    </div>
  );
}