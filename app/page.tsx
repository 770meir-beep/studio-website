"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function MicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9a3 3 0 116 0v6a3 3 0 01-6 0V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 9a5.25 5.25 0 0110.5 0v.75a.75.75 0 01-.75.75H16.5a.75.75 0 01-.75-.75V9m-6 0v.75a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V9" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
    </svg>
  );
}

const serviceIcons = [<MicIcon key="mic" />, <HeadphonesIcon key="hp" />, <SlidersIcon key="sl" />, <MusicIcon key="mu" />];

export default function HomePage() {
  const { t, headingFont } = useLanguage();
  const { hero, services, why, stats, cta } = t.home;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1920&q=80"
            alt="Professional condenser microphone in recording studio"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#080608]/80" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 35%, rgba(201,139,160,0.12) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#C98BA0]/8 to-transparent" />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[#C98BA0]/8 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">
              {hero.subtitle}
            </span>
            <div className="h-px w-12 bg-[#C98BA0]" aria-hidden="true" />
          </div>

          <h1
            className="font-black text-[#F5ECEF] leading-[0.85] mb-8 select-none"
            style={{ fontFamily: headingFont }}
          >
            <span className="block text-7xl sm:text-9xl lg:text-[11rem]">{hero.line1}</span>
            <span className="block text-7xl sm:text-9xl lg:text-[11rem] text-[#C98BA0]">{hero.line2}</span>
            <span className="block text-7xl sm:text-9xl lg:text-[11rem]">{hero.line3}</span>
          </h1>

          <p className="text-[#A89298] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300"
            >
              {hero.bookSession}
            </Link>
            <Link
              href="/studio"
              className="px-10 py-4 border border-[#F5ECEF]/20 text-[#F5ECEF] text-xs tracking-[0.3em] uppercase hover:border-[#F5ECEF]/50 transition-colors duration-300"
            >
              {hero.exploreStudio}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" aria-hidden="true">
          <span className="text-[#A89298] text-[10px] tracking-[0.3em] uppercase">{hero.scroll}</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#A89298]/60 to-transparent" />
        </div>
      </section>

      {/* ── Studio Photo Strip ── */}
      <section className="grid grid-cols-3 h-64 md:h-80" aria-hidden="true">
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
            alt=""
            fill
            className="object-cover brightness-75 hover:brightness-90 transition-all duration-500 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80"
            alt=""
            fill
            className="object-cover brightness-75 hover:brightness-90 transition-all duration-500 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80"
            alt=""
            fill
            className="object-cover brightness-75 hover:brightness-90 transition-all duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-32 px-6" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{services.label}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2
              id="services-heading"
              className="text-5xl md:text-6xl font-bold text-[#F5ECEF] max-w-lg leading-tight"
              style={{ fontFamily: headingFont }}
            >
              {services.heading}
            </h2>
            <Link
              href="/services"
              className="text-xs tracking-[0.2em] uppercase text-[#C98BA0] hover:text-[#E8B4C4] transition-colors flex items-center gap-2 shrink-0"
            >
              {services.allServices} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#201820]" role="list">
            {services.items.map((service, i) => (
              <div
                key={i}
                role="listitem"
                className="bg-[#080608] p-8 group hover:bg-[#120e10] transition-colors duration-300"
              >
                <div className="text-[#C98BA0] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {serviceIcons[i]}
                </div>
                <div className="h-px w-8 bg-[#C98BA0]/30 mb-5" aria-hidden="true" />
                <h3
                  className="text-xl font-bold text-[#F5ECEF] mb-3"
                  style={{ fontFamily: headingFont }}
                >
                  {service.title}
                </h3>
                <p className="text-[#A89298] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-32 px-6 bg-[#060406]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{why.label}</span>
          </div>
          <h2
            id="why-heading"
            className="text-5xl md:text-6xl font-bold text-[#F5ECEF] mb-20 max-w-xl leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {why.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {why.items.map((feature) => (
              <div key={feature.number} className="flex gap-8 group">
                <div
                  className="text-5xl font-black text-[#C98BA0]/12 leading-none select-none shrink-0 transition-colors duration-300 group-hover:text-[#C98BA0]/25"
                  style={{ fontFamily: headingFont }}
                  aria-hidden="true"
                >
                  {feature.number}
                </div>
                <div>
                  <div className="h-px w-8 bg-[#C98BA0]/40 mb-4" aria-hidden="true" />
                  <h3
                    className="text-xl font-bold text-[#F5ECEF] mb-3"
                    style={{ fontFamily: headingFont }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#A89298] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-[#201820] py-14 px-6" aria-label={t.nav.about}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black text-[#C98BA0] mb-2"
                style={{ fontFamily: headingFont }}
              >
                {stat.value}
              </div>
              <div className="text-[11px] text-[#A89298] tracking-[0.25em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[#080608]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,139,160,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C98BA0]/30 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C98BA0]/30 to-transparent" aria-hidden="true" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{cta.label}</span>
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
          </div>
          <h2
            id="cta-heading"
            className="text-5xl md:text-7xl font-black text-[#F5ECEF] mb-6 leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {cta.heading}
          </h2>
          <p className="text-[#A89298] text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300"
            >
              {cta.bookSession}
            </Link>
            <Link
              href="/services"
              className="px-12 py-5 border border-[#201820] text-[#A89298] text-xs tracking-[0.3em] uppercase hover:border-[#C98BA0]/40 hover:text-[#F5ECEF] transition-all duration-300"
            >
              {cta.viewServices}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
