// components/auth/LoginButton.js
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm hidden md:inline">Hello, {session.user.name}</span>
        <button
          onClick={() => signOut()}
          className="text-sm bg-transparent hover:bg-gray-200 text-deep-brown py-1 px-3 rounded transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/login"
        className="text-sm bg-transparent hover:bg-gray-200 text-deep-brown py-1 px-3 rounded transition-colors"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="text-sm bg-rooster hover:bg-rooster/80 text-white py-1 px-3 rounded transition-colors"
      >
        Register
      </Link>
    </div>
  );
}