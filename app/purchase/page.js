"use client";

import Link from "next/link";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function PurchasePage() {
  const [selectedFormat, setSelectedFormat] = useState("hardcover");

  // Hydrate localStorage value only on the client
  useEffect(() => {
    const stored = localStorage.getItem("selectedFormat");
    if (stored) setSelectedFormat(stored);
  }, []);
  
  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("selectedFormat", selectedFormat);
  }, [selectedFormat]);
  

  const [quantity, setQuantity] = useState(1);

  const formats = [
    { id: "hardcover", name: "Hardcover", price: 26.99, deliveryTime: "3-5 business days", stock: "In Stock" },
    { id: "paperback", name: "Paperback", price: 19.99, deliveryTime: "3-5 business days", stock: "In Stock" },
    { id: "ebook", name: "E-book", price: 9.99, deliveryTime: "Instant download", stock: "Digital Product" },
    { id: "audiobook", name: "Audiobook", price: 29.99, deliveryTime: "Instant download", stock: "Digital Product" },
    // { id: "special", name: "Collector's Edition", price: 19.99, deliveryTime: "7-10 business days", stock: "Limited Stock" }
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

  const router = useRouter();

  const handleCheckout = () => {
    router.push(`/checkout?format=${selectedFormat}&quantity=${quantity}`);
  };


  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-mountain-pattern py-12">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Purchase Your Copy</h1>
          <p className="text-xl text-gray-200">Begin your journey into the world of The Numen of Banda</p>
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
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${selectedFormat === format.id
                      ? "border-rooster bg-white"
                      : "border-mountain/30 bg-white/80 hover:border-mountain/70"
                      }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-deep-brown">{format.name}</h3>
                      <div className="text-xl font-bold text-rooster">USD ${format.price.toFixed(2)}</div>
                    </div>
                    <p className="text-mountain mb-2">Delivery: {format.deliveryTime}</p>
                    <p className="text-forest text-sm mb-4">{format.stock}</p>
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedFormat === format.id ? "border-rooster bg-rooster/10" : "border-mountain"
                        }`}>
                        {selectedFormat === format.id && (
                          <div className="w-3 h-3 rounded-full bg-rooster animate-ping" />
                        )}
                      </div>

                      {/* <span className="ml-2 text-deep-brown">
                        {selectedFormat === format.id ? "Selected" : "Select"}
                      </span> */}
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
                  <h3 className="text-xl font-bold text-deep-brown">The Numen of Banda</h3>
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
                    <span className="text-deep-brown">Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rooster mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-deep-brown">Buy the hardcover, get the e-book for just $4.99</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rooster mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-deep-brown">Join our readers club for 15% off future purchases</span>
                  </li>
                </ul>

                {/* New promotional banner */}
                <div className="mt-6 bg-rooster/10 border border-rooster/30 rounded-md p-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rooster mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="text-rooster font-bold">Limited Time Offer</h4>
                      <p className="text-deep-brown">First 100 customers receive a signed bookplate by the author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              {/* Order Summary */}
              <div className="card-primary sticky top-24">
                <h3 className="text-2xl font-bold text-deep-brown mb-6">Order Summary</h3>

                <div className="mb-6">
                  <p className="text-mountain mb-2">Selected Format:</p>
                  <p className="text-xl font-semibold text-deep-brown">{formatDetails.name} - USD ${formatDetails.price.toFixed(2)}</p>
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
                    <span className="font-semibold text-deep-brown">USD ${subtotal}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-deep-brown">Shipping</span>
                    <span className="font-semibold text-deep-brown">
                      {shipping === 0 ? "Free" : `AUD $${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-mountain/20 mt-4 pt-4 flex justify-between">
                    <span className="text-deep-brown font-bold">Total</span>
                    <span className="font-bold text-deep-brown text-xl">USD ${total}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <PrimaryButton className="w-full mb-4" onClick={handleCheckout}>
                    Proceed to Checkout
                  </PrimaryButton>

                  <SecondaryButton className="w-full" href="/">
                    Continue Shopping
                  </SecondaryButton>
                </div>

                <div className="mt-6 flex justify-center space-x-4">
                  <svg className="h-8 w-auto text-mountain" viewBox="0 0 50 32" fill="currentColor">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V28C50 30.2091 48.2091 32 46 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="white" />
                    <path d="M18.3855 22.4965H14.7169L17.0313 9.50347H20.6998L18.3855 22.4965Z" fill="#00579F" />
                    <path d="M33.5 9.8297C32.717 9.51282 31.45 9.16667 29.9 9.16667C26.4 9.16667 23.95 11.0342 23.9333 13.6624C23.9 15.5812 25.6833 16.6581 27 17.3248C28.35 18.0085 28.8 18.4444 28.8 19.0427C28.7833 19.9573 27.7 20.3761 26.6833 20.3761C25.2333 20.3761 24.45 20.1624 23.1667 19.6752L22.75 19.4786L22.3 22.5214C23.2333 22.9573 24.9667 23.3419 26.7667 23.3419C30.5 23.3419 32.9 21.5043 32.9333 18.6923C32.95 17.1453 32.0167 15.9573 29.9333 14.9658C28.6667 14.3162 27.9 13.8803 27.9 13.2137C27.9167 12.6154 28.5333 12 29.8 12C30.8667 12 31.65 12.1795 32.25 12.5299L32.5333 12.6752L33 9.8297" fill="#00579F" />
                    <path d="M38.0167 18.0427C38.3 17.2479 39.4 14.2991 39.4 14.2991C39.3833 14.3162 39.6833 13.5043 39.85 13.0342L40.0833 14.1624C40.0833 14.1624 40.7 17.3932 40.85 18.0427H38.0167Z" fill="#00579F" />
                    <path d="M41.5333 9.50348H38.65C37.95 9.50348 37.4333 9.71026 37.1333 10.4957L32.8 22.5043H36.55C36.55 22.5043 37.0833 21.0086 37.2 20.6752C37.5833 20.6752 40.9667 20.6752 41.4667 20.6752C41.5667 21.1111 41.85 22.5043 41.85 22.5043H45.2L41.5333 9.50348ZM38.0167 18.0427C38.3 17.2479 39.4 14.2991 39.4 14.2991C39.3833 14.3162 39.6833 13.5043 39.85 13.0342L40.0833 14.1624C40.0833 14.1624 40.7 17.3932 40.85 18.0427H38.0167Z" fill="#00579F" />
                  </svg>

                  <svg className="h-8 w-auto text-mountain" viewBox="0 0 50 32" fill="currentColor">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V28C50 30.2091 48.2091 32 46 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="white" />
                    <path d="M16.3333 21.5833H13.9167L11.4167 12.5833C11.3 12.1667 11.0833 11.8333 10.75 11.6667C9.83333 11.25 8.83333 10.9167 7.75 10.75V10.4167H11.9167C12.5 10.4167 12.9167 10.8333 13 11.4167L14.25 17.75L17.0833 10.4167H19.4167L16.3333 21.5833Z" fill="#FF5F00" />
                    <path d="M30.9167 21.5833H28.5833L26.25 10.4167H28.5833L30.9167 21.5833ZM26.0833 10.4167L23.4167 18.0833C23.25 18.5 22.9167 18.75 22.5 18.75H19.6667L17.0833 11C18.4167 10.1667 20 9.58333 21.75 9.58333C24 9.58333 26 10.4167 27.4167 11.9167L26.0833 10.4167Z" fill="#FF5F00" />
                    <path d="M33.5833 10.4167H35.8333L34.25 21.5833H32L33.5833 10.4167ZM38.5 10.4167C39.0833 10.4167 39.5833 10.6667 39.8333 11.1667L41.5 21.5833H39.3333L39 19.4167H35.5L34.8333 21.5833H32.5833L36.25 10.8333C36.4167 10.5833 36.9167 10.4167 37.3333 10.4167H38.5ZM35.9167 17.5H38.5833L37.9167 12.75H37.0833L35.9167 17.5Z" fill="#FF5F00" />
                  </svg>

                  <svg className="h-8 w-auto text-mountain" viewBox="0 0 50 32" fill="currentColor">
                    <path d="M0 4C0 1.79086 1.79086 0 4 0H46C48.2091 0 50 1.79086 50 4V28C50 30.2091 48.2091 32 46 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="white" />
                    <path d="M19.0223 12.6958H15.8459C15.6212 12.6958 15.4199 12.8516 15.3694 13.0703L14.0537 20.5063C14.0176 20.6609 14.1353 20.8032 14.2937 20.8032H15.8482C16.073 20.8032 16.2742 20.6475 16.3248 20.4287L16.686 18.349C16.7365 18.1303 16.9378 17.9745 17.1625 17.9745H18.1322C20.2931 17.9745 21.5115 16.9555 21.8324 14.9029C21.9772 13.9983 21.7997 13.3002 21.3444 12.8336C20.8403 12.3135 20.0518 12.6958 19.0223 12.6958Z" fill="#003087" />
                    <path d="M34.229 16.666H32.6724C32.5633 16.666 32.4631 16.7208 32.4139 16.8118L32.3089 17.2107L32.2485 17.1247C31.8594 16.5502 30.8739 16.3427 29.8884 16.3427C27.7299 16.3427 25.8582 17.9811 25.5192 20.2314C25.3437 21.3529 25.6353 22.418 26.3128 23.1669C26.9298 23.8568 27.8011 24.1384 28.8504 24.1384C30.5925 24.1384 31.5644 22.9893 31.5644 22.9893L31.4583 23.3791C31.4222 23.5337 31.5399 23.676 31.6983 23.676H33.09C33.3147 23.676 33.5159 23.5202 33.5665 23.3015L34.4692 17.1626C34.5065 17.0079 34.3875 16.8655 34.229 16.666Z" fill="#003087" />
                    <path d="M28.982 22.3693C28.4323 22.3693 27.9733 22.1888 27.6862 21.8427C27.4003 21.4977 27.3027 20.9911 27.401 20.4151C27.5941 19.2863 28.5258 18.5123 29.6469 18.5123C30.1967 18.5123 30.6556 18.6928 30.9426 19.0389C31.2285 19.3839 31.3273 19.8904 31.229 20.4664C31.0348 21.5952 30.103 22.3693 28.982 22.3693Z" fill="#003087" />
                    <path d="M37.9583 12.6958H34.7785C34.5537 12.6958 34.3525 12.8516 34.302 13.0703L32.9863 20.5063C32.9502 20.6609 33.0678 20.8032 33.2263 20.8032H34.8502C35.0256 20.8032 35.1735 20.6876 35.2104 20.5161L35.5873 18.349C35.6378 18.1303 35.8391 17.9745 36.0638 17.9745H37.0335C39.1944 17.9745 40.4128 16.9555 40.7337 14.9029C40.8785 13.9983 40.701 13.3002 40.2457 12.8336C39.7416 12.3135 38.9532 12.6958 37.9583 12.6958Z" fill="#003087" />
                  </svg>
                </div>

                <p className="text-sm text-mountain mt-4 text-center">
                  Secure checkout powered by Stripe
                </p>

                {/* Enhanced security indicators */}
                <div className="flex items-center justify-center mt-4 text-sm text-mountain">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
