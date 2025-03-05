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
                      <span>USD $26.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Paperback</span>
                      <span>USD $19.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>E-book</span>
                      <span>USD $9.99</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Audiobook</span>
                      <span>USD $29.99</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">Synopsis</h2>
              <div className="prose max-w-none text-lg">
                <p className="mb-4 text-deep-brown">
                  <strong className="text-rooster">Caught between Tradition and Change: A Coming-of-Age Tale Where Tradition Becomes Survival</strong> <br></br>
                  In the rugged landscapes of Kenya, where ancestral traditions and modern influences converge, 
                  <strong> The Numen of Banda</strong> unfolds the compelling tale of Benjo Jogoo, a remarkable twelve-year-old boy caught between the powerful forces of tradition and change. 
                </p>
                <p className="mb-4 text-deep-brown">
                Under the formidable shadow of his grandmother Sosh—a revered Field Marshal in the Kenya Land and Freedom Army and matriarch of the Aombe clan—Benjo 
                navigates the complexities of his heritage. When his mother Minto experiences a second miscarriage, the family embarks on a perilous journey through 
                treacherous terrain to seek healing from the legendary Numen of Banda, a mysterious medicine man with extraordinary abilities.
                </p>
                <p className="mb-4 text-deep-brown">
                Their epic pilgrimage takes them across the unforgiving Thika River, through the vast Yatta Plateau, and past territories of hostile tribes. 
                Every step brings new trials: confrontations with dangerous wildlife, tense encounters with the feared Akimi cannibals, and navigations 
                through the political complexities of tribal relations. 
                Each setting—from the dense jungle floor to the majestic Mount Banda—emerges as a character in its own right, beautifully rendered in vivid detail.
                </p>
                <p className="mb-4 text-deep-brown">
                As they reach their destination, they stand awestruck before the Numen's compound—a bewildering otherworld where palatial opulence mocks abject suffering, 
                where the medicine man's mansion rises like an eighth wonder of the world in the wilderness, and where ancient blood rituals are 
                performed under chandeliers that would make European royalty envious. 
                Through rituals and treatments, they gain not only physical healing but profound insights into their family's destiny.
                </p>
                <p className="text-deep-brown">
                Upon their return—armed with potions, amulets, and strict instructions that would make a military general's orders seem casual—Benjo faces 
                the knife in his circumcision ceremony, a brutal trial where one flinch could brand him an outcast forever. But the celebration is cut short 
                by the devastating loss of his grandmother Sosh. As the novel closes, 
                Benjo must reconcile his grief with his new responsibilities as Sosh's chosen heir, carrying forward her legacy in a rapidly changing world.
                </p>
                <p className="text-deep-brown">
                Hillan K. Nzioka masterfully weaves a tapestry of Kamba traditions, colonial history, and personal transformation in this unforgettable 
                coming-of-age story. Through one family's journey, we witness the enduring 
                power of heritage, the complexity of modernization, and the unbreakable bonds that define us.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-deep-brown">Critical Acclaim</h3>
                <div className="card-highlight">
                  <blockquote className="italic text-mountain-dark mb-4">
                  "In The Numen of Banda, Hillan K. Nzioka has crafted an extraordinary cultural epic that transports readers into the heart of 
                  Kenyan tribal life with stunning authenticity. His portrayal of Kamba traditions, from the sacred circumcision rites to the mystical Kilumi dances, reveals an author deeply 
                  committed to preserving cultural heritage while unflinchingly examining its complexities."
                  </blockquote>
                  <p className="text-right font-semibold text-deep-brown">- African Literary Review</p>
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
            <h3 className="text-2xl font-bold mb-4 text-deep-brown">Chapter 1: Sosh's Reign of Terror</h3>
            <div className="prose max-w-none">
              <p className="text-deep-brown">
              The matriarch, perched on a rickety stool beneath a mango tree behind her dwelling house, shifted her haunches uncomfortably on the 
              three-legged seat to reach for an earthen spittoon stowed beneath her perch. She lifted the lid and spat a mouthful of 
              tobacco-contaminated spittle into the cuspidor before bellowing out the name of her twelve-year-old grandson, Benjo. 
              In an instant, the poor boy burst out of a nearby hut and stood before his 
              grandmother like an infantry soldier awaiting further instructions from a regimental drill sergeant. 
              </p>
              <p className="text-deep-brown">
                "Go and tell your father to come and see me, now!" Grandma Sosh commanded without preamble or even lifting her eyes to meet Benjo's.
              </p>
              <p className="text-deep-brown">
              The boy stood still, listening carefully to his grandmother's diktats before quickly vanishing to carry out her wishes.
              </p>
              <br></br>  
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
                  {i === 1 && "I couldn't put this book down! The world-building is phenomenal, and Benjo's journey kept me turning pages late into the night."}
                  {i === 2 && "As someone who rarely reads fantasy, I was surprised by how emotionally invested I became in these characters. Hillan K has a gift for making the fantastical feel deeply human."}
                  {i === 3 && "\"The Numen of Banda\" vividly brings to life the rich tapestry of Kamba culture, offering a deep connection to traditions, values, and stories that resonate with my own experiences. As I read through the pages, I am transported back to my childhood, where my grandpa would often share tales of our heritage and the customs of our people. The book paints a vivid picture of the very world my grandpa spoke of, bringing those cherished memories to the forefront. Through this work, I am reminded of the timeless wisdom passed down through generations, and the deep-rooted connection we share with our ancestors."}
                </blockquote>
                <p className="font-semibold text-deep-brown">
                  {i === 1 && "— Tinah K."}
                  {i === 2 && "— Pauline M."}
                  {i === 3 && "— Ben E."}
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
            Join Benjo on his journey through the world of Banda today.
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