"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return pathname === path ? 'bg-[#B70915] text-white' : 'text-[#B70915] hover:bg-[#B70915] hover:text-white';
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About the Game' },
    { href: '/how-to-play', label: 'How to Play' },
    { href: '/print-now', label: 'Print Now' },
    { href: '/behind-the-game', label: 'Behind the Game' },
  ];

  return (
    <nav className="bg-[#FEFFFE] shadow-lg">
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between py-4">
          <Link href="/" className="text-[#B70915] font-bold text-xl">
            Campus Dash
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#B70915] hover:text-[#8B0711] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-4 py-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md transition-colors ${isActive(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md transition-colors mb-2 ${isActive(link.href)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}