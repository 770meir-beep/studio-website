"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, Lang } from "@/contexts/LanguageContext";

function GlobeIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const languages: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "he", label: "Hebrew", native: "עברית" },
];

function LangDropdown() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Get setLang from context — we need direct language setting not just toggle
  const { toggleLang } = useLanguage();

  function selectLang(code: Lang) {
    if (code !== lang) toggleLang();
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={lang === "he" ? "בחר שפה" : "Select language"}
        className="flex items-center gap-1.5 text-xs tracking-[0.15em] uppercase text-[#A89298] hover:text-[#C98BA0] transition-colors duration-200"
      >
        <GlobeIcon />
        <span>{current.native}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={lang === "he" ? "בחר שפה" : "Select language"}
          className="absolute top-full mt-3 end-0 bg-[#120e10] border border-[#201820] min-w-[120px] shadow-xl z-50"
        >
          {languages.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => selectLang(l.code)}
              className={`px-4 py-3 text-xs tracking-[0.15em] uppercase cursor-pointer transition-colors duration-150 flex items-center justify-between gap-3 ${
                l.code === lang
                  ? "text-[#C98BA0] bg-[#1a141a]"
                  : "text-[#A89298] hover:text-[#F5ECEF] hover:bg-[#1a141a]"
              }`}
            >
              <span>{l.native}</span>
              {l.code === lang && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C98BA0]" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/studio", label: t.nav.studio },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      aria-label={lang === "he" ? "ניווט ראשי" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#080608]/96 backdrop-blur-md border-b border-[#201820]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none" aria-label="Esti Studio — Home">
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

        {/* Desktop Nav — links + language dropdown inline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#C98BA0]"
                  : "text-[#A89298] hover:text-[#F5ECEF]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language dropdown — sits right after nav links */}
          <LangDropdown />
        </div>

        {/* Book Session CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#C98BA0] text-[#C98BA0] hover:bg-[#C98BA0] hover:text-[#080608] transition-all duration-300"
          >
            {t.nav.bookSession}
          </Link>
        </div>

        {/* Mobile: language toggle always visible next to hamburger */}
        <button
          onClick={toggleLang}
          aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
          className="md:hidden text-xs px-3 py-1.5 border border-[#C98BA0]/50 text-[#C98BA0] hover:bg-[#C98BA0] hover:text-[#080608] transition-all duration-200"
        >
          {lang === "en" ? "עב" : "EN"}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={lang === "he" ? "פתח/סגור תפריט" : "Toggle menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#F5ECEF] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[32rem]" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-5 border-t border-[#201820]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href ? "text-[#C98BA0]" : "text-[#A89298]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language options in mobile menu */}
          <div className="border-t border-[#201820] pt-4 flex gap-4">
            <button
              onClick={() => { if (lang !== "en") toggleLang(); setMenuOpen(false); }}
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${lang === "en" ? "text-[#C98BA0]" : "text-[#A89298]"}`}
            >
              English
            </button>
            <span className="text-[#201820]">|</span>
            <button
              onClick={() => { if (lang !== "he") toggleLang(); setMenuOpen(false); }}
              className={`text-sm tracking-[0.15em] transition-colors ${lang === "he" ? "text-[#C98BA0]" : "text-[#A89298]"}`}
            >
              עברית
            </button>
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-[0.2em] uppercase px-6 py-3 border border-[#C98BA0] text-[#C98BA0] text-center mt-2"
          >
            {t.nav.bookSession}
          </Link>
        </div>
      </div>
    </nav>
  );
}
