'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-black/90">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20">
              <Image 
                src="/images/bt-elevator-logo-white.png" 
                alt="BT Elevator Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Products
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Services
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Projects
            </Link>
            <Link href="/technical-docs" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Documentation
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/technical-docs" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;