"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const { categories, tagline, description, address, professional, copyright } = t.footer;

  return (
    <footer className="bg-[#040304] border-t border-[#201820]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-5">
              <span
                className="text-2xl font-bold text-[#F5ECEF] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Esti Studio
              </span>
              <span className="text-[10px] text-[#C98BA0] tracking-[0.35em] uppercase mt-1">
                {professional}
              </span>
            </div>
            <p className="text-[#A89298] text-sm leading-relaxed max-w-xs mb-4">
              {description}
            </p>
            <p className="text-[#A89298] text-sm">{address}</p>
          </div>

          {Object.entries(categories).map(([key, cat]) => (
            <div key={key}>
              <h4 className="text-[10px] text-[#C98BA0] tracking-[0.35em] uppercase mb-6">
                {cat.label}
              </h4>
              <ul className="space-y-3">
                {cat.links.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#A89298] hover:text-[#F5ECEF] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#201820] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A89298] tracking-wider">
            © {new Date().getFullYear()} Esti Studio. {copyright}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-px h-3 bg-[#C98BA0]" aria-hidden="true" />
            <p className="text-xs text-[#C98BA0] tracking-[0.2em] uppercase">{tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
