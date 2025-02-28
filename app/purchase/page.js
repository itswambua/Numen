"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/Button";

export default function PurchasePage() {
  const [selectedFormat, setSelectedFormat] = useState("hardcover");
  const [quantity, setQuantity] = useState(1);
  
  const formats = [
    { id: "hardcover", name: "Hardcover", price: 24.99, deliveryTime: "3-5 business days", stock: "In Stock" },
    { id: "paperback", name: "Paperback", price: 16.99, deliveryTime: "3-5 business days", stock: "In Stock" },
    { id: "ebook", name: "E-book", price: 9.99, deliveryTime: "Instant download", stock: "Digital Product" },
    { id: "audiobook", name: "Audiobook", price: 19.99, deliveryTime: "Instant download", stock: "Digital Product" },
    { id: "special", name: "Special Edition", price: 39.99, deliveryTime: "7-10 business days", stock: "Limited Stock" }
  ];

  const formatDetails = formats.find(f => f.id === selectedFormat);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtotal = (formatDetails.price * quantity).toFixed(2);
  const shipping = selectedFormat === "ebook" || selectedFormat === "audiobook" ? 0 : 4.99;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Purchase Your Copy</h1>
          <p className="text-xl text-gray-200">Begin your journey into the world of Numen of Banda</p>
        </div>
      </div>
      
      {/* Purchase Options */}
      <section className="py-12 bg-sky/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 text-deep-brown">Select Your Format</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {formats.map((format) => (
                  <div 
                    key={format.id}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                      selectedFormat === format.id 
                        ? "border-rooster bg-white" 
                        : "border-mountain/30 bg-white/80 hover:border-mountain/70"
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-deep-brown">{format.name}</h3>
                      <div className="text-xl font-bold text-rooster">${format.price.toFixed(2)}</div>
                    </div>
                    <p className="text-mountain mb-2">Delivery: {format.deliveryTime}</p>
                    <p className="text-forest text-sm mb-4">{format.stock}</p>
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedFormat === format.id ? "border-rooster" : "border-mountain"
                      }`}>
                        {selectedFormat === format.id && (
                          <div className="w-3 h-3 rounded-full bg-rooster"></div>
                        )}
                      </div>
                      <span className="ml-2 text-deep-brown">
                        {selectedFormat === format.id ? "Selected" : "Select"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Book Preview */}
              <div className="card-primary flex flex-col md:flex-row gap-6 items-center mb-8">
                <div className="w-32 h-48 relative flex-shrink-0">
                  <Image
                    src="/book-cover.jpg"
                    alt="Numen of Banda by Hillan K. Nzioka"
                    fill
                    className="object-cover rounded-md shadow-md"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-deep-brown">Numen of Banda</h3>
                  <p className="text-mountain mb-2">By Hillan K. Nzioka</p>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-rooster" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-mountain">4.8/5 from 256 reviews</span>
                  </div>
                  <p className="text-deep-brown mb-4">
                    Experience the captivating journey of Amara as she discovers her connection to the ancient spirits of Banda. This enchanting tale combines adventure, mythology, and coming-of-age elements in a richly imagined world.
                  </p>
                  <TextButton href="/book">
                    Read More About This Book
                  </TextButton>
                </div>
              </div>
              
              {/* Special Offers */}
              <div className="card-highlight mb-8">
                <h3 className="text-xl font-semibold text-deep-brown mb-4">Special Offers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rooster mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <span className="text-deep-brown">Free shipping on orders over $35</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rooster mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-deep-brown">Buy the hardcover, get the e-book for just $2.99</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rooster mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-deep-brown">Join our readers club for 15% off future purchases</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              {/* Order Summary */}
              <div className="card-primary sticky top-24">
                <h3 className="text-2xl font-bold text-deep-brown mb-6">Order Summary</h3>
                
                <div className="mb-6">
                  <p className="text-mountain mb-2">Selected Format:</p>
                  <p className="text-xl font-semibold text-deep-brown">{formatDetails.name} - ${formatDetails.price.toFixed(2)}</p>
                </div>
                
                {selectedFormat !== "ebook" && selectedFormat !== "audiobook" && (
                  <div className="mb-6">
                    <p className="text-mountain mb-2">Quantity:</p>
                    <div className="flex items-center">
                      <button 
                        onClick={decreaseQuantity}
                        className="w-10 h-10 rounded-md bg-sky flex items-center justify-center text-deep-brown border border-mountain/30"
                      >
                        -
                      </button>
                      <span className="mx-4 text-xl font-semibold text-deep-brown w-8 text-center">{quantity}</span>
                      <button 
                        onClick={increaseQuantity}
                        className="w-10 h-10 rounded-md bg-sky flex items-center justify-center text-deep-brown border border-mountain/30"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="text-sm text-mountain mb-2">
                  <p>Estimated delivery: {formatDetails.deliveryTime}</p>
                </div>
                
                <div className="border-t border-mountain/20 my-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-deep-brown">Subtotal</span>
                    <span className="font-semibold text-deep-brown">${subtotal}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-deep-brown">Shipping</span>
                    <span className="font-semibold text-deep-brown">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-mountain/20 mt-4 pt-4 flex justify-between">
                    <span className="text-deep-brown font-bold">Total</span>
                    <span className="font-bold text-deep-brown text-xl">${total}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <PrimaryButton className="w-full mb-4">
                    Proceed to Checkout
                  </PrimaryButton>
                  <SecondaryButton className="w-full" href="/">
                    Continue Shopping
                  </SecondaryButton>
                </div>
                
                <div className="mt-6 flex justify-center space-x-4">
                  <img src="/payment-visa.svg" alt="Visa" className="h-8" />
                  <img src="/payment-mastercard.svg" alt="Mastercard" className="h-8" />
                  <img src="/payment-paypal.svg" alt="PayPal" className="h-8" />
                </div>
                
                <p className="text-sm text-mountain mt-4 text-center">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recommendations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-title">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-secondary">
              <div className="w-full h-48 bg-mountain/20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-mountain">Related Book Cover</span>
              </div>
              <h3 className="text-xl font-semibold text-deep-brown mb-2">Mountain Spirit</h3>
              <p className="text-mountain mb-4">By Hillan K. Nzioka</p>
              <p className="text-deep-brown mb-4">The anticipated sequel to Numen of Banda. Pre-order now and be among the first to continue the journey.</p>
              <p className="text-xl font-bold text-rooster mb-4">$22.99</p>
              <SecondaryButton className="w-full">
                Pre-order Now
              </SecondaryButton>
            </div>
            
            <div className="card-secondary">
              <div className="w-full h-48 bg-mountain/20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-mountain">Related Book Cover</span>
              </div>
              <h3 className="text-xl font-semibold text-deep-brown mb-2">Tales of Ancient Spirits</h3>
              <p className="text-mountain mb-4">By Hillan K. Nzioka</p>
              <p className="text-deep-brown mb-4">A collection of short stories set in the same world as Numen of Banda, exploring different characters.</p>
              <p className="text-xl font-bold text-rooster mb-4">$14.99</p>
              <SecondaryButton className="w-full">
                Add to Cart
              </SecondaryButton>
            </div>
            
            <div className="card-secondary">
              <div className="w-full h-48 bg-mountain/20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-mountain">Related Book Cover</span>
              </div>
              <h3 className="text-xl font-semibold text-deep-brown mb-2">Numen of Banda: Collector's Edition</h3>
              <p className="text-mountain mb-4">By Hillan K. Nzioka</p>
              <p className="text-deep-brown mb-4">Limited edition with exclusive artwork, author notes, and a signed bookmark.</p>
              <p className="text-xl font-bold text-rooster mb-4">$59.99</p>
              <SecondaryButton className="w-full">
                Add to Cart
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}