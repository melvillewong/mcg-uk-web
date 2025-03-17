"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Projects
              </Link>
              <Link
                href="/news"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
