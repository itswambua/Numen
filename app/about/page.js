import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">About the Author</h1>
          <p className="text-xl text-gray-200">The creative mind behind The Numen of Banda</p>
        </div>
      </div>
      
      {/* Author Profile */}
      <section className="py-16 bg-sky/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                {/* Author image */}
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl mb-8">
                  <Image 
                    src="/author-photo.jpg" 
                    alt="Hillan K. Nzioka" 
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-bold text-deep-brown mb-4">Contact Information</h3>
                  <ul className="space-y-3 text-mountain-dark">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rooster mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@numenofbanda.com</span>
                    </li>
                    {/* <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rooster mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>www.hillankauthor.com</span>
                    </li> */}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-deep-brown mt-6 mb-4">Social Media</h3>
                  <div className="flex space-x-4">
                    <a href="https://x.com/HillanNzioka" className="text-mountain hover:text-rooster">
                      <span className="sr-only">X (Twitter)</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    
                    <a href="https://www.facebook.com/Hillan18" className="text-mountain hover:text-rooster">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/hillan-nzioka-b3540436/" className="text-mountain hover:text-rooster">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                    
                    <a href="https://www.instagram.com/hillannzioka/#" className="text-mountain hover:text-rooster">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-deep-brown mb-4">Latest Works</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/book" className="text-mountain-dark hover:text-rooster font-medium">
                        The Numen of Banda (2024)
                      </Link>
                    </li>
                    {/* <li className="text-mountain">Essays on Cultural Identity (2023)</li>
                    <li className="text-mountain">Short Story Collection: Voices of the Land (2021)</li> */}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">Biography</h2>
              
              <div className="prose max-w-none mb-10">
                <p className="text-deep-brown mb-4">
                  <strong>Hillan K. Nzioka</strong> is an accomplished author whose writing explores the profound intersections of cultural heritage, traditional knowledge, and societal transformation. 
                  Born and raised in a small peasant farming village in Lower Eastern Kenya, Hillan experienced firsthand the rich cultural environment that serves as the foundation for "The Numen of Banda."
                </p>

                <p className="text-deep-brown mb-4">
                  After completing his formative education in rural Kenya, Hillan relocated to Nairobi for secondary and university studies, 
                  earning a Bachelor of Arts in Economics, Geography, and Sociology from Egerton University. His academic journey continued with a 
                  Master of Business Administration from Central Queensland University and a Post Graduate Certificate in Public Policy from 
                  Queensland University of Technology, equipping him with a multidimensional perspective that enriches his storytelling.
                </p>
                <p className="text-deep-brown mb-4"> 
                  With over a decade of professional experience in the New South Wales public sector, 
                  Hillan has developed expertise in environmental protection, regulatory compliance, and policy analysis. 
                  His work at the Environmental Protection Authority and Department of Environment, Energy, Climate Change and Water has provided invaluable insights 
                  into the delicate balance between human development and environmental stewardship—themes that resonate throughout his literary work.
                </p>
                
                <blockquote className="bg-sky/30 p-4 border-l-4 border-rooster italic text-deep-brown mb-6">
                "I write to bridge worlds - connecting traditional wisdom with contemporary challenges, cultural heritage with modern identity. My stories emerge from 
                the spaces where ancient knowledge meets present reality."
                </blockquote>
                
                <p className="text-deep-brown mb-4">
                A certified associate in project management with specialized training in environmental regulation, Hillan brings analytical precision and methodical 
                research to his creative writing process. 
                This attention to detail ensures the authentic representation of cultural practices and traditions in his narratives.
                </p>
                
                <p className="text-deep-brown">
                Now based in Australia as a skilled migrant, Hillan continues to draw inspiration from his Kenyan heritage while embracing the multicultural dimensions of his adopted home. 
                "The Numen of Banda" represents his literary dedication to preserving cultural stories while examining the universal human experiences that transcend geographical boundaries.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">The Creative Process</h2>
              
              <div className="prose max-w-none mb-10">
                <p className="text-deep-brown mb-4">
                The inspiration for "The Numen of Banda" draws from a rich tapestry of influences, particularly the oral narratives and folklore shared by Hillan's grandmother 
                during his childhood in rural Kenya. Her masterful storytelling captivated his imagination and 
                instilled a deep appreciation for traditional Kamba wisdom and cultural practices, many of which are meticulously depicted in the novel.                
                </p>
                
                <p className="text-deep-brown mb-4">
                Hillan's creative approach combines these foundational influences with his formal education in English literature and poetry during high school, and later studies in sociology at college. 
                His writing process begins with thorough research, followed by careful character development that explores the complexity of cultural identity. 
                Growing up in Lower Eastern Kenya provided authentic insights that enhance the narrative's portrayal of traditional ceremonies and community dynamics.
                </p>
                
                <p className="text-deep-brown">
                The journey of Benjo—from innocent child to designated heir—reflects both observed traditions and literary influences accumulated through years of extensive reading. 
                Hillan's professional background in environmental policy further enriches the novel's exploration of how traditional knowledge systems interact with contemporary challenges, 
                creating a narrative that resonates with authenticity while addressing universal themes of belonging and transformation.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-deep-brown">Upcoming Projects</h2>
              
              <div className="prose max-w-none mb-10">
                <p className="text-deep-brown mb-4">
                Working on a new novel - "The Death Knell Drums of Luzira".
                </p><br></br>
                
                {/* <p className="text-deep-brown">
                  Additionally, Hillan is collaborating with scholars to develop educational resources that highlight the cultural elements featured in the novel, making them accessible to students and readers interested in deeper exploration of the traditions that inspired the story.
                </p> */}
              </div>
              
              {/* <h2 className="text-3xl font-bold mb-6 text-deep-brown">Speaking Engagements</h2>
              
              <div className="prose max-w-none mb-8">
                <p className="text-deep-brown mb-4">
                  Hillan regularly participates in literary festivals, academic conferences, and cultural events discussing topics ranging from the role of traditional knowledge in contemporary society to the craft of incorporating authentic cultural elements in fiction.
                </p>
                
                <p className="text-deep-brown">
                  For speaking engagement inquiries, please use the contact information provided or reach out through social media channels.
                </p>
              </div>
               */}
              <div className="mt-12 text-center">
                <Link 
                  href="/book" 
                  className="bg-rooster hover:bg-rooster-dark text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg"
                >
                  Discover The Numen of Banda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}