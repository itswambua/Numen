"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError('Invalid email or password');
        setLoading(false);
      } else {
        router.push(`/${redirectTo}`);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const handleGuestCheckout = () => {
    router.push(`/${redirectTo}?guest=true`);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-deep-brown">Login to Your Account</h1>
      
      {redirectTo === 'checkout' && (
        <div className="bg-sky/30 border border-sky/50 text-deep-brown px-4 py-3 rounded mb-6">
          <p>Login to complete your purchase or continue as a guest below.</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-deep-brown mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-mountain/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rooster/50"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-deep-brown mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-mountain/30 rounded-md focus:outline-none focus:ring-2 focus:ring-rooster/50"
            required
          />
        </div>
        
        <div className="mb-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-rooster/90 transition duration-300 font-medium"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-deep-brown mb-4">Don't have an account? <Link href="/register" className="text-rooster hover:underline">Register</Link></p>
        
        {redirectTo === 'checkout' && (
          <button 
            onClick={handleGuestCheckout} 
            className="w-full border border-mountain/50 text-deep-brown py-3 px-4 rounded-md hover:bg-sky/20 transition duration-300 mt-2"
          >
            Continue as Guest
          </button>
        )}
      </div>
    </div>
  );
}