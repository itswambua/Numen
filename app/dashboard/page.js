// import Image from "next/image";
// import nextImg from "@/app/next.jpg";

// import Link from "next/link";

// export default function Dashboard() {
//     return (
//         <div className="p-8">
//             <Image
//             src={nextImg}
//             alt="NextJS demo"
//             width={300}
//             height={300}
//             className="w-full rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg"
//         />
//         </div>
//     );
// }

import Link from "next/link";
import Counter from "@/components/Counter";

export default function Dashboard() {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-8 text-amber-900">Admin Dashboard</h1>
                
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg border border-amber-200 p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-amber-900">Book Sales Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-amber-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-2 text-amber-800">Total Sales</h3>
                            <div className="text-3xl font-bold text-amber-900">12,458</div>
                            <p className="text-amber-700 text-sm mt-2">Last updated: Feb 27, 2025</p>
                        </div>
                        
                        <div className="bg-amber-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-2 text-amber-800">This Month</h3>
                            <div className="text-3xl font-bold text-amber-900">842</div>
                            <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
                        </div>
                        
                        <div className="bg-amber-100 rounded-lg p-6 shadow-md">
                            <h3 className="text-lg font-semibold mb-2 text-amber-800">Review Score</h3>
                            <div className="text-3xl font-bold text-amber-900">4.8/5</div>
                            <p className="text-amber-700 text-sm mt-2">Based on 368 reviews</p>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-amber-900">Sales by Format</h3>
                    <div className="bg-amber-50 rounded-lg p-6 shadow-md mb-6">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-1 font-semibold text-amber-800">Format</div>
                            <div className="col-span-2 font-semibold text-amber-800">Sales</div>
                            <div className="col-span-1 font-semibold text-amber-800">Percentage</div>
                            
                            <div className="col-span-1 text-amber-800">Hardcover</div>
                            <div className="col-span-2">
                                <div className="h-4 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="col-span-1 text-amber-800">45%</div>
                            
                            <div className="col-span-1 text-amber-800">Paperback</div>
                            <div className="col-span-2">
                                <div className="h-4 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="col-span-1 text-amber-800">30%</div>
                            
                            <div className="col-span-1 text-amber-800">E-book</div>
                            <div className="col-span-2">
                                <div className="h-4 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                            <div className="col-span-1 text-amber-800">20%</div>
                            
                            <div className="col-span-1 text-amber-800">Audiobook</div>
                            <div className="col-span-2">
                                <div className="h-4 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '5%' }}></div>
                                </div>
                            </div>
                            <div className="col-span-1 text-amber-800">5%</div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-amber-900">Recent Reviews</h2>
                        <div className="space-y-4">
                            <div className="border-b border-amber-100 pb-4">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5 text-amber-500" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-amber-800 italic">"Absolutely breathtaking storytelling. I couldn't put it down!"</p>
                                <div className="text-amber-600 text-sm mt-1">Sarah L. - Feb 26, 2025</div>
                            </div>
                            <div className="border-b border-amber-100 pb-4">
                                <div className="flex mb-2">
                                    {[...Array(4)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5 text-amber-500" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 text-amber-300" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <p className="text-amber-800 italic">"A captivating read with rich characters. The middle chapters dragged a bit."</p>
                                <div className="text-amber-600 text-sm mt-1">Michael R. - Feb 25, 2025</div>
                            </div>
                            <div>
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5 text-amber-500" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-amber-800 italic">"One of the best books I've read this year. Hillan K is a masterful storyteller!"</p>
                                <div className="text-amber-600 text-sm mt-1">David T. - Feb 24, 2025</div>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link 
                                href="/reviews" 
                                className="text-amber-700 hover:text-amber-900 font-semibold"
                            >
                                View All Reviews →
                            </Link>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg border border-amber-200 p-8">
                        <h2 className="text-2xl font-bold mb-6 text-amber-900">Inventory Status</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-amber-800">Hardcover</span>
                                    <span className="text-amber-800">1,245 in stock</span>
                                </div>
                                <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-amber-800">Paperback</span>
                                    <span className="text-amber-800">842 in stock</span>
                                </div>
                                <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-amber-800">Special Edition</span>
                                    <span className="text-amber-800">124 in stock</span>
                                </div>
                                <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold text-amber-800">Signed Copies</span>
                                    <span className="text-amber-800">18 in stock</span>
                                </div>
                                <div className="h-3 bg-amber-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 rounded-full" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-4 text-amber-900">Test Counter</h3>
                            <Counter title="Sample Counter" />
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 w-full max-w-4xl">
                    <Link 
                        href="/"
                        className="inline-flex items-center text-amber-700 hover:text-amber-900 font-semibold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </div>
    );
}