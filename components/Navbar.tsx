"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#080608]/96 backdrop-blur-md border-b border-[#201820]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-bold text-[#F5ECEF] tracking-widest uppercase text-xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Esti Studio
          </span>
          <span className="text-[10px] text-[#C98BA0] tracking-[0.35em] uppercase">
            Brooklyn, NY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#C98BA0]"
                  : "text-[#A89298] hover:text-[#F5ECEF]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#C98BA0] text-[#C98BA0] hover:bg-[#C98BA0] hover:text-[#080608] transition-all duration-300"
          >
            Book Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pb-6 pt-4 flex flex-col gap-5 border-t border-[#201820]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href ? "text-[#C98BA0]" : "text-[#A89298]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#C98BA0] text-[#C98BA0] text-center mt-2"
          >
            Book Session
          </Link>
        </div>
      </div>
    </nav>
  );
}
