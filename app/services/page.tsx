"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t, headingFont } = useLanguage();
  const { header, enquire, whatsIncluded, items, addOns, cta } = t.services;

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden" aria-labelledby="services-page-heading">
        <div className="absolute inset-0 bg-[#080608]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,139,160,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{header.label}</span>
          </div>
          <h1
            id="services-page-heading"
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

      {/* Services */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto space-y-px">
          {items.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-[#080608] border border-[#201820] p-10 md:p-16 group hover:border-[#C98BA0]/20 transition-colors duration-500"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-start gap-6 mb-8">
                    <span
                      className="text-6xl font-black text-[#C98BA0]/15 leading-none select-none group-hover:text-[#C98BA0]/25 transition-colors duration-300"
                      style={{ fontFamily: headingFont }}
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                    <div className="pt-2">
                      <h2
                        className="text-3xl md:text-4xl font-bold text-[#F5ECEF] mb-2"
                        style={{ fontFamily: headingFont }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-[#C98BA0] text-xs tracking-[0.2em] uppercase">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[#A89298] text-sm leading-relaxed mb-8">{service.description}</p>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-2xl font-bold text-[#C98BA0]"
                      style={{ fontFamily: headingFont }}
                    >
                      {service.rate}
                    </span>
                    <Link
                      href="/contact"
                      className="text-xs tracking-[0.2em] uppercase text-[#A89298] hover:text-[#F5ECEF] transition-colors border border-[#201820] px-4 py-2 hover:border-[#C98BA0]/30"
                    >
                      {enquire}
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-px w-8 bg-[#C98BA0]/30 mb-8" aria-hidden="true" />
                  <h3 className="text-[11px] text-[#C98BA0] tracking-[0.3em] uppercase mb-6">{whatsIncluded}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#A89298]">
                        <span className="text-[#C98BA0] shrink-0 mt-0.5" aria-hidden="true">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-32 px-6 bg-[#060406]" aria-labelledby="addons-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{addOns.label}</span>
          </div>
          <h2
            id="addons-heading"
            className="text-5xl font-bold text-[#F5ECEF] mb-16"
            style={{ fontFamily: headingFont }}
          >
            {addOns.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#201820]" role="list">
            {addOns.items.map((item) => (
              <div
                key={item.title}
                role="listitem"
                className="bg-[#060406] p-8 hover:bg-[#0e0a0c] transition-colors duration-300"
              >
                <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" aria-hidden="true" />
                <h3
                  className="text-lg font-bold text-[#F5ECEF] mb-3"
                  style={{ fontFamily: headingFont }}
                >
                  {item.title}
                </h3>
                <p className="text-[#A89298] text-sm leading-relaxed">{item.description}</p>
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
            <p className="text-[#A89298] text-sm max-w-lg">{cta.description}</p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300 shrink-0"
          >
            {cta.getInTouch}
          </Link>
        </div>
      </section>
    </>
  );
}
