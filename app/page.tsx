import Link from "next/link";

function MicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9a3 3 0 116 0v6a3 3 0 01-6 0V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 9a5.25 5.25 0 0110.5 0v.75a.75.75 0 01-.75.75H16.5a.75.75 0 01-.75-.75V9m-6 0v.75a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V9" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
    </svg>
  );
}

const services = [
  {
    icon: <MicIcon />,
    title: "Recording",
    description:
      "State-of-the-art tracking rooms with pristine acoustic design. Capture every nuance of your performance with exceptional clarity.",
  },
  {
    icon: <HeadphonesIcon />,
    title: "Mixing",
    description:
      "Expert mix engineers craft the perfect sonic balance. We blend every element into a cohesive, powerful, and polished sound.",
  },
  {
    icon: <SlidersIcon />,
    title: "Mastering",
    description:
      "Final polish for distribution-ready audio. Our mastering suite ensures your music translates beautifully across every platform.",
  },
  {
    icon: <MusicIcon />,
    title: "Production",
    description:
      "Full creative production from concept to completion. Our producers bring decades of experience spanning every genre.",
  },
];

const features = [
  {
    number: "01",
    title: "World-Class Equipment",
    description:
      "Neve 8078 console, Neve 1073 preamps, vintage and modern outboard gear. Every piece chosen for character and precision.",
  },
  {
    number: "02",
    title: "Experienced Engineers",
    description:
      "Our team has worked with Grammy-winning artists across every genre — deep technical expertise paired with musical intuition.",
  },
  {
    number: "03",
    title: "Inspiring Environment",
    description:
      "Acoustically treated live rooms, a comfortable control room, and a creative lounge designed to fuel long, productive sessions.",
  },
  {
    number: "04",
    title: "Proven Track Record",
    description:
      "Over 500 released records. Our work speaks through chart placements, critical acclaim, and loyal returning artists.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 35%, #1c130640 0%, transparent 65%)",
          }}
        />
        {/* Vertical accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#C8A96E]/8 to-transparent" />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[#C8A96E]/8 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              Professional Recording Studio
            </span>
            <div className="h-px w-12 bg-[#C8A96E]" />
          </div>

          {/* Main heading */}
          <h1
            className="font-black text-[#F0EDE6] leading-[0.85] mb-8 select-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="block text-7xl sm:text-9xl lg:text-[11rem]">CRAFT</span>
            <span className="block text-7xl sm:text-9xl lg:text-[11rem] text-[#C8A96E]">YOUR</span>
            <span className="block text-7xl sm:text-9xl lg:text-[11rem]">SOUND</span>
          </h1>

          <p className="text-[#9E9A92] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Where creativity meets precision. A world-class recording environment
            designed to transform your vision into extraordinary music.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C8A96E] text-[#080808] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E2C98A] transition-colors duration-300"
            >
              Book a Session
            </Link>
            <Link
              href="/studio"
              className="px-10 py-4 border border-[#F0EDE6]/20 text-[#F0EDE6] text-xs tracking-[0.3em] uppercase hover:border-[#F0EDE6]/50 transition-colors duration-300"
            >
              Explore Studio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[#9E9A92] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#9E9A92]/60 to-transparent" />
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              Our Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <h2
              className="text-5xl md:text-6xl font-bold text-[#F0EDE6] max-w-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Everything You Need to Create
            </h2>
            <Link
              href="/services"
              className="text-xs tracking-[0.2em] uppercase text-[#C8A96E] hover:text-[#E2C98A] transition-colors flex items-center gap-2 shrink-0"
            >
              All Services <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e]">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#080808] p-8 group hover:bg-[#0e0e0e] transition-colors duration-300"
              >
                <div className="text-[#C8A96E] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <div className="h-px w-8 bg-[#C8A96E]/30 mb-5" />
                <h3
                  className="text-xl font-bold text-[#F0EDE6] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#9E9A92] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-32 px-6 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              Why Resonance
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F0EDE6] mb-20 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Art Meets Engineering
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {features.map((feature) => (
              <div key={feature.number} className="flex gap-8 group">
                <div
                  className="text-5xl font-black text-[#C8A96E]/12 leading-none select-none shrink-0 transition-colors duration-300 group-hover:text-[#C8A96E]/25"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {feature.number}
                </div>
                <div>
                  <div className="h-px w-8 bg-[#C8A96E]/40 mb-4" />
                  <h3
                    className="text-xl font-bold text-[#F0EDE6] mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#9E9A92] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-[#1e1e1e] py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Records Released" },
            { value: "15+", label: "Years of Excellence" },
            { value: "3", label: "Acoustic Live Rooms" },
            { value: "100%", label: "Artist Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black text-[#C8A96E] mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="text-[11px] text-[#9E9A92] tracking-[0.25em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/30 to-transparent" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              Ready to Create?
            </span>
            <div className="h-px w-8 bg-[#C8A96E]" />
          </div>
          <h2
            className="text-5xl md:text-7xl font-black text-[#F0EDE6] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Your Studio Session
          </h2>
          <p className="text-[#9E9A92] text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Take the first step toward the record you&#39;ve always envisioned. Our
            team is ready to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-12 py-5 bg-[#C8A96E] text-[#080808] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E2C98A] transition-colors duration-300"
            >
              Book a Session
            </Link>
            <Link
              href="/services"
              className="px-12 py-5 border border-[#1e1e1e] text-[#9E9A92] text-xs tracking-[0.3em] uppercase hover:border-[#C8A96E]/40 hover:text-[#F0EDE6] transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
