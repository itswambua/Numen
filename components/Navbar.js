"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-mountain text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center">
          <div className="w-8 h-8 bg-rooster rounded-full mr-2 flex items-center justify-center">
            <span className="text-white text-sm font-bold"></span>
          </div>
          <b>Numen of Banda </b>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-rooster transition-colors">Home</Link>
          <Link href="/book" className="hover:text-rooster transition-colors">The Book</Link>
          <Link href="/reviews" className="hover:text-rooster transition-colors">Reviews</Link>
          <Link href="/purchase" className="hover:text-rooster transition-colors">Purchase</Link>
          <Link href="/about" className="hover:text-rooster transition-colors">About Author</Link>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-mountain md:hidden flex flex-col items-center pb-4 shadow-lg">
            <Link href="/" className="py-2 hover:text-rooster w-full text-center" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/book" className="py-2 hover:text-rooster w-full text-center" onClick={() => setIsMenuOpen(false)}>The Book</Link>
            <Link href="/reviews" className="py-2 hover:text-rooster w-full text-center" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link href="/purchase" className="py-2 hover:text-rooster w-full text-center" onClick={() => setIsMenuOpen(false)}>Purchase</Link>
            <Link href="/about" className="py-2 hover:text-rooster w-full text-center" onClick={() => setIsMenuOpen(false)}>About Author</Link>
          </div>
        )}
      </div>
    </nav>
  );
}