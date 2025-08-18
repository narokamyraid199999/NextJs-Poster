"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 backdrop-blur-md bg-gradient-to-r from-purple-900/90 to-purple-700/90 px-8 py-3 flex items-center justify-between ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 rounded shadow-md bg-white/80 p-1 border-2 border-purple-300"
        />
        <span className="text-2xl font-extrabold text-purple-100 tracking-wide drop-shadow-lg select-none">
          React Poster
        </span>
      </div>
      <div className="flex gap-8 items-center">
        <Link href="/">
          <span className="text-purple-100 hover:text-white font-semibold text-lg transition-colors duration-200 cursor-pointer">
            Home
          </span>
        </Link>
        <Link href="/profile">
          <span className="text-purple-100 hover:text-white font-semibold text-lg transition-colors duration-200 cursor-pointer">
            Profile
          </span>
        </Link>
        {/* Auth Actions */}
        <div className="flex gap-3 ml-6">
          <button className="px-4 py-1 rounded-full bg-white/10 text-purple-100 border border-purple-300 hover:bg-purple-200 hover:text-purple-900 font-bold transition-colors duration-200 shadow-sm">
            Login
          </button>
          <button className="px-4 py-1 rounded-full bg-purple-400 text-purple-900 font-bold border border-purple-200 hover:bg-purple-200 hover:text-purple-700 transition-colors duration-200 shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
