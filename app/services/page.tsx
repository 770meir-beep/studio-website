import Link from "next/link";

const services = [
  {
    id: "recording",
    number: "01",
    title: "Recording",
    tagline: "Where Performances Become Timeless",
    description:
      "Our recording rooms are designed to capture sound with unmatched accuracy and character. Whether you're laying down a solo vocal, a full band, or a string ensemble, every nuance of your performance is preserved.",
    features: [
      "Two large live rooms with variable acoustics",
      "Dedicated isolation booth for vocals",
      "Neve 1073 and API 512c microphone preamps",
      "Vintage and modern microphone collection (over 80 mics)",
      "Protools HD and SSL Big Six recording chains",
      "Monitoring via NS10s, Genelec 8351s, and Augspurger mains",
    ],
    rate: "From $150/hr",
  },
  {
    id: "mixing",
    number: "02",
    title: "Mixing",
    tagline: "The Art of Balance and Depth",
    description:
      "Our mix engineers bring technical mastery and deep musical intuition to every project. We blend every element to create a cohesive, powerful, and emotionally resonant mix that serves the song.",
    features: [
      "Hybrid mixing: analog summing + digital precision",
      "SSL 4000 G series console for analog mixing",
      "Extensive outboard compression and EQ",
      "Stem delivery in all formats",
      "Unlimited revisions within session",
      "Reference track comparison workflow",
    ],
    rate: "From $400/song",
  },
  {
    id: "mastering",
    number: "03",
    title: "Mastering",
    tagline: "Final Polish for Every Platform",
    description:
      "Mastering is where your music prepares to meet the world. Our mastering suite is a dedicated listening environment calibrated for maximum accuracy, ensuring your music translates perfectly across every system.",
    features: [
      "Dedicated mastering room, separately calibrated",
      "Stem mastering available for added control",
      "Delivery for streaming, vinyl, and CD",
      "Loudness targeting for all major DSPs",
      "Analog limiting and saturation options",
      "DDP image and mastered WAV delivery",
    ],
    rate: "From $150/song",
  },
  {
    id: "production",
    number: "04",
    title: "Production",
    tagline: "From Concept to Complete Record",
    description:
      "Our in-house producers work closely with artists to develop sonic identities and bring creative visions to life. From initial sketches to final arrangements, we guide every step of the creative process.",
    features: [
      "Full arrangement and orchestration services",
      "Genre expertise: hip-hop, R&B, rock, pop, jazz",
      "Session musician network on call",
      "Songwriting collaboration available",
      "Sync licensing consultation",
      "Artist development packages",
    ],
    rate: "Custom quote",
  },
];

const addOns = [
  { title: "Session Musicians", description: "Access to our vetted network of professional session players." },
  { title: "Video Production", description: "In-studio live session video capture and content creation." },
  { title: "Artist Development", description: "Comprehensive coaching for emerging artists on brand and sound." },
  { title: "Podcast Recording", description: "Professional podcast setup with broadcast-quality audio output." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080608]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,139,160,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">Services</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-[#F5ECEF] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What We Offer
          </h1>
          <p className="text-[#A89298] text-xl leading-relaxed max-w-2xl">
            Comprehensive recording services tailored to every stage of your
            creative process — from the first take to the final master.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto space-y-px">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#080608] border border-[#201820] p-10 md:p-16 group hover:border-[#C98BA0]/20 transition-colors duration-500"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-start gap-6 mb-8">
                    <span
                      className="text-6xl font-black text-[#C98BA0]/15 leading-none select-none group-hover:text-[#C98BA0]/25 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.number}
                    </span>
                    <div className="pt-2">
                      <h2
                        className="text-3xl md:text-4xl font-bold text-[#F5ECEF] mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
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
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {service.rate}
                    </span>
                    <Link
                      href="/contact"
                      className="text-xs tracking-[0.2em] uppercase text-[#A89298] hover:text-[#F5ECEF] transition-colors border border-[#201820] px-4 py-2 hover:border-[#C98BA0]/30"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="h-px w-8 bg-[#C98BA0]/30 mb-8" />
                  <h4 className="text-[11px] text-[#C98BA0] tracking-[0.3em] uppercase mb-6">What&#39;s Included</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#A89298]">
                        <span className="text-[#C98BA0] shrink-0 mt-0.5">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-32 px-6 bg-[#060406]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C98BA0]" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">Add-Ons</span>
          </div>
          <h2
            className="text-5xl font-bold text-[#F5ECEF] mb-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Additional Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#201820]">
            {addOns.map((item) => (
              <div key={item.title} className="bg-[#060406] p-8 hover:bg-[#0e0a0c] transition-colors duration-300">
                <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" />
                <h3
                  className="text-lg font-bold text-[#F5ECEF] mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
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
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not Sure Which Service You Need?
            </h3>
            <p className="text-[#A89298] text-sm max-w-lg">
              Reach out and we&#39;ll help you find the right approach for your project, budget, and timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300 shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
