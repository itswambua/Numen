// app>purchase>page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/Button";



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
    { id: "hardcover", name: "Hardcover", price: 26.99 },
    { id: "paperback", name: "Paperback", price: 19.99 },
    { id: "ebook", name: "E-book", price: 9.99 },
    { id: "audiobook", name: "Audiobook", price: 29.99 },
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
                    Experience the captivating journey of Amara as she discovers her connection to the ancient spirits of Banda.
                  </p>
                  <TextButton href="/book">Read More About This Book</TextButton>
                </div>
              </div>

              {/* Special Offers */}
              {/* -- Your Special Offer section code remains the same -- */}

            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              {/* Order Summary */}
              <div className="card-primary sticky top-24">
                <h3 className="text-2xl font-bold text-deep-brown mb-6">Order Summary</h3>

                {/* Subtotal, Shipping, Total */}
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
                {/* Order Summary */}
                <div className="card-primary sticky top-24">
                  <h3 className="text-2xl font-bold text-deep-brown mb-6">Order Summary</h3>

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

                  {/* ✅ Replaces Stripe Checkout directly */}
                  <PrimaryButton
                    className="w-full"
                    onClick={() =>
                      router.push(`/checkout?format=${selectedFormat}&quantity=${quantity}`)
                    }
                  >
                    Proceed to Checkout
                  </PrimaryButton>
                </div>

                    <br>
                    </br>
                    <br></br>
                <SecondaryButton className="w-full" href="/">Continue Shopping</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
