"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-black border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-4xl">
          Newlab
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
        </button>

        {/* Desktop menu - Numbered items */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm hover:text-gray-600 transition-colors flex items-center">
            <span className="text-xs mr-1 opacity-80">01</span> About
          </Link>
          <Link href="/focus-areas" className="text-sm hover:text-gray-600 transition-colors flex items-center">
            <span className="text-xs mr-1 opacity-80">02</span> Focus Areas
          </Link>
          <Link href="/startups" className="text-sm hover:text-gray-600 transition-colors flex items-center">
            <span className="text-xs mr-1 opacity-80">03</span> Startups
          </Link>
          <Link href="/partners" className="text-sm hover:text-gray-600 transition-colors flex items-center">
            <span className="text-xs mr-1 opacity-80">04</span> Partners
          </Link>
          <Link href="/resources" className="text-sm hover:text-gray-600 transition-colors flex items-center">
            <span className="text-xs mr-1 opacity-80">05</span> Resources
          </Link>
        </div>

        {/* Apply button */}
        <Link href="/apply" className="hidden md:block text-sm hover:text-gray-600 transition-colors">
          Apply
        </Link>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
            <div className="flex flex-col items-center space-y-8 text-xl">
              <Link
                href="/about"
                className="hover:text-gray-600 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm mr-2 opacity-80">01</span> About
              </Link>
              <Link
                href="/focus-areas"
                className="hover:text-gray-600 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm mr-2 opacity-80">02</span> Focus Areas
              </Link>
              <Link
                href="/startups"
                className="hover:text-gray-600 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm mr-2 opacity-80">03</span> Startups
              </Link>
              <Link
                href="/partners"
                className="hover:text-gray-600 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm mr-2 opacity-80">04</span> Partners
              </Link>
              <Link
                href="/resources"
                className="hover:text-gray-600 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm mr-2 opacity-80">05</span> Resources
              </Link>
              <Link
                href="/apply"
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
