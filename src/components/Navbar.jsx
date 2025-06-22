import React from 'react'
import { useState } from 'react';
import '../index.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a className="text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg className="h-8 w-8" viewBox="0 0 28 24" fill="none">
                <path
                  d="M0.41 10.3847C1.14777..."
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-gray-800 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Avatar and Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <button className="overflow-hidden rounded-full border border-gray-300 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770"
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
                />
              </button>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md bg-gray-100 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 space-y-1">
            {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}



export default Navbar;