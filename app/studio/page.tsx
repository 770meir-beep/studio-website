"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StudioPage() {
  const { t, headingFont } = useLanguage();
  const { header, roomSpecs, rooms, gear, cta } = t.studio;

  return (
    <>
      {/* Header with background image */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden" aria-labelledby="studio-heading">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80"
            alt="Esti Studio recording console"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#080608]/85" aria-hidden="true" />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 60% 60% at 20% 60%, rgba(201,139,160,0.08) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{header.label}</span>
          </div>
          <h1
            id="studio-heading"
            className="text-6xl md:text-8xl font-black text-[#F5ECEF] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: headingFont }}
          >
            {header.heading}
          </h1>
          <p className="text-[#A89298] text-xl leading-relaxed max-w-2xl">
            {header.description}
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto space-y-px">
          {rooms.map((room, index) => (
            <article
              key={room.name}
              className="bg-[#080608] border border-[#201820] hover:border-[#C98BA0]/20 transition-colors duration-500 group overflow-hidden"
            >
              {/* Room photo */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
                      : index === 1
                      ? "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80"
                      : "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                  }
                  alt={room.name}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 start-10 flex items-center gap-4">
                  <span
                    className="text-4xl font-black text-[#C98BA0]/40 leading-none"
                    style={{ fontFamily: headingFont }}
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h2
                      className="text-2xl font-bold text-[#F5ECEF]"
                      style={{ fontFamily: headingFont }}
                    >
                      {room.name}
                    </h2>
                    <p className="text-[#C98BA0] text-xs tracking-[0.2em] uppercase">{room.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Room details */}
              <div className="p-10 md:p-16 grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#C98BA0]/40" aria-hidden="true" />
                    <span className="text-[#A89298] text-xs tracking-[0.2em] uppercase">{room.size}</span>
                  </div>
                  <p className="text-[#A89298] text-sm leading-relaxed">{room.description}</p>
                </div>
                <div>
                  <div className="h-px w-8 bg-[#C98BA0]/30 mb-8" aria-hidden="true" />
                  <h3 className="text-[11px] text-[#C98BA0] tracking-[0.3em] uppercase mb-6">
                    {roomSpecs}
                  </h3>
                  <ul className="space-y-3">
                    {room.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#A89298]">
                        <span className="text-[#C98BA0] shrink-0" aria-hidden="true">—</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Gear List */}
      <section className="py-32 px-6 bg-[#060406]" aria-labelledby="gear-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{gear.label}</span>
          </div>
          <h2
            id="gear-heading"
            className="text-5xl font-bold text-[#F5ECEF] mb-16"
            style={{ fontFamily: headingFont }}
          >
            {gear.heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#201820]">
            {gear.categories.map((section) => (
              <div
                key={section.category}
                className="bg-[#060406] p-8 hover:bg-[#0e0a0c] transition-colors duration-300"
              >
                <div className="h-px w-8 bg-[#C98BA0]/40 mb-5" aria-hidden="true" />
                <h3 className="text-[11px] text-[#C98BA0] tracking-[0.3em] uppercase mb-5">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-[#A89298] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C98BA0]/40 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 border-t border-[#201820]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-4xl font-bold text-[#F5ECEF] mb-3"
              style={{ fontFamily: headingFont }}
            >
              {cta.heading}
            </h3>
            <p className="text-[#A89298] text-sm">{cta.description}</p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300 text-center"
            >
              {cta.bookTour}
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-[#201820] text-[#A89298] text-xs tracking-[0.3em] uppercase hover:border-[#C98BA0]/30 hover:text-[#F5ECEF] transition-all duration-300 text-center"
            >
              {cta.viewServices}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
