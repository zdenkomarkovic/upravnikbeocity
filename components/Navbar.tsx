"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const navLinks = [
  { href: "#o-nama", label: "O nama" },
  { href: "#zasto-mi", label: "Zašto mi?" },
  { href: "#usluge", label: "Usluge" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1b3a6b] shadow-lg py-2"
          : "bg-[#1b3a6b]/95 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Beo City Upravnik"
            width={50}
            height={50}
            className="rounded-md object-contain"
          />
          <div className="leading-tight">
            <p className="text-white font-bold text-sm uppercase tracking-wide">
              Beo City
            </p>
            <p className="text-[#c8972a] font-semibold text-xs uppercase tracking-widest">
              Upravnik
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-[#c8972a] text-sm font-medium uppercase tracking-wide transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phone}`}
            className="bg-[#c8972a] hover:bg-[#e0b04a] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            {CONTACT.phoneDisplay}
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#122850] px-4 pt-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/90 hover:text-[#c8972a] py-3 text-sm font-medium uppercase tracking-wide border-b border-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phone}`}
            className="mt-4 block text-center bg-[#c8972a] text-white font-semibold py-3 rounded-full"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
