"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Zap, MessageCircle } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Tenders", href: "/tenders" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 relative">
              <Image
                src="/coded-logo.png"
                alt="Coded Incorporate"
                width={44}
                height={44}
                priority
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-bold text-base md:text-lg text-gray-900">Oded</span>
              <span className="text-xs text-red-600 font-semibold">Incorporate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 rounded-lg hover:bg-red-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/‪447482793753‬"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary-gradient text-sm"
          >
            Get Started
          </a>

          {/* Mobile Quick Actions Bar */}
          <div className="md:hidden flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-red-50 rounded-lg text-xs font-semibold text-red-600 animate-pulse">
              <Zap size={14} />
              <span className="hidden xs:inline">Active</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-red-600" /> : <Menu size={24} className="text-gray-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-slide-up">
            <div className="mx-4 mb-3 p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
              <p className="text-xs font-semibold text-gray-900">
                Join 2K+ businesses already managing tenders with us
              </p>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/‪447482793753‬"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-4 mt-4 btn-primary-gradient text-center py-3 text-sm"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
