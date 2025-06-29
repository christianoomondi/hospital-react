import React, { useState } from 'react';
import '../index.css';

function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 text-black dark:text-white">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Bliss</h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-gray-800 dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Dark Mode Toggle and Hamburger */}
        <div className="flex items-center gap-4">
          {/* Toggle button */}
          <label
            htmlFor="darkModeToggle"
            className={`relative block h-8 w-14 rounded-full transition-colors cursor-pointer ${
              darkMode ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <input
              type="checkbox"
              id="darkModeToggle"
              className="peer sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span
              className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"
            ></span>
          </label>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-white"
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
        <nav className="md:hidden px-6 pb-4 space-y-2">
          {['About', 'Careers', 'History', 'Services', 'Projects', 'Blog'].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
