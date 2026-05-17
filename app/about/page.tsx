"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t, headingFont } = useLanguage();
  const { header, philosophy, team, timeline, cta } = t.about;

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="absolute inset-0 bg-[#080608]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(201,139,160,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{header.label}</span>
          </div>
          <h1
            id="about-heading"
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

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#060406]" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
                alt="Artist recording at Esti Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#080608]/30" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C98BA0]/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C98BA0]/30 to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#C98BA0]/20" aria-hidden="true" />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
              <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{philosophy.label}</span>
            </div>
            <h2
              id="philosophy-heading"
              className="text-4xl md:text-5xl font-bold text-[#F5ECEF] mb-8 leading-tight"
              style={{ fontFamily: headingFont }}
            >
              {philosophy.heading}
            </h2>
            <div className="space-y-5 text-[#A89298] text-sm leading-relaxed">
              {philosophy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{team.label}</span>
          </div>
          <h2
            id="team-heading"
            className="text-5xl font-bold text-[#F5ECEF] mb-16 leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {team.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#201820]" role="list">
            {team.members.map((member) => (
              <div
                key={member.name}
                role="listitem"
                className="bg-[#080608] p-10 group hover:bg-[#0e0a0c] transition-colors duration-300"
              >
                <div
                  className="w-16 h-16 border border-[#C98BA0]/30 mb-8 flex items-center justify-center group-hover:border-[#C98BA0]/60 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <span
                    className="text-2xl font-black text-[#C98BA0]/50 group-hover:text-[#C98BA0]/70 transition-colors duration-300"
                    style={{ fontFamily: headingFont }}
                  >
                    {member.name[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5ECEF] mb-1"
                  style={{ fontFamily: headingFont }}
                >
                  {member.name}
                </h3>
                <p className="text-[#C98BA0] text-xs tracking-[0.2em] uppercase mb-5">{member.role}</p>
                <div className="h-px w-8 bg-[#201820] mb-5" aria-hidden="true" />
                <p className="text-[#A89298] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-[#060406]" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{timeline.label}</span>
          </div>
          <h2
            id="timeline-heading"
            className="text-5xl font-bold text-[#F5ECEF] mb-16 leading-tight"
            style={{ fontFamily: headingFont }}
          >
            {timeline.heading}
          </h2>

          <ol className="space-y-0">
            {timeline.milestones.map((milestone, i) => (
              <li key={i} className="flex gap-8 group">
                <div
                  className="w-16 text-right shrink-0 text-[#C98BA0]/50 text-sm font-bold pt-8 group-hover:text-[#C98BA0] transition-colors duration-300 rtl:text-left"
                  style={{ fontFamily: headingFont }}
                >
                  {milestone.year}
                </div>
                <div className="relative flex-1 pb-10 ps-8 pt-8 border-s border-[#201820]">
                  <div
                    className="absolute -start-[5px] top-[38px] w-[9px] h-[9px] rounded-full border border-[#C98BA0]/30 bg-[#060406] group-hover:border-[#C98BA0] group-hover:bg-[#C98BA0]/20 transition-all duration-300"
                    aria-hidden="true"
                  />
                  <p className="text-[#F5ECEF] text-sm leading-relaxed">{milestone.event}</p>
                </div>
              </li>
            ))}
          </ol>
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
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300 shrink-0"
          >
            {cta.bookSession}
          </Link>
        </div>
      </section>
    </>
  );
}
