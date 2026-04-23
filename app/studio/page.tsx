import Link from "next/link";

const rooms = [
  {
    name: "Studio A",
    subtitle: "Main Tracking Room",
    size: "1,200 sq ft",
    description:
      "Our flagship live room features variable acoustic panels, a 14-foot ceiling, and custom-built isolation booths. Designed for full band recordings, orchestral sessions, and anything requiring space and ambience.",
    specs: [
      "Variable acoustic treatment",
      "14-ft vaulted ceiling",
      "Full isolation from control room",
      "Custom low-frequency trapping",
      "Neve 8078 analog console (72-channel)",
      "Pro Tools HDX + Pyramix digital workstations",
    ],
  },
  {
    name: "Studio B",
    subtitle: "Overdub & Tracking Room",
    size: "600 sq ft",
    description:
      "An intimate and flexible space ideal for overdubs, vocals, and smaller ensemble recording. The room is acoustically neutral with selectable reflection surfaces for different sonic characters.",
    specs: [
      "Switchable live/dead acoustics",
      "Dedicated vocal booth",
      "SSL Big Six mixing surface",
      "Summing mixer for analog warmth",
      "24-channel Neve preamp bank",
      "Genelec 8351 nearfield monitors",
    ],
  },
  {
    name: "Mastering Suite",
    subtitle: "Dedicated Mastering Room",
    size: "400 sq ft",
    description:
      "A purpose-built mastering environment designed for extreme accuracy. The room is calibrated to ±0.5dB across the full frequency range, giving our mastering engineers the confidence of total sonic transparency.",
    specs: [
      "±0.5 dB room calibration",
      "Augspurger custom monitoring system",
      "Manley Vari-Mu mastering compressor",
      "Sontec and Dangerous Bax EQs",
      "Weiss DS1 and Izotope Ozone chain",
      "DDP, WAV, and vinyl delivery",
    ],
  },
];

const gear = [
  {
    category: "Consoles",
    items: ["Neve 8078 (72ch)", "SSL Big Six", "API 1608"],
  },
  {
    category: "Preamps",
    items: ["Neve 1073 (×16)", "API 512c (×8)", "Chandler REDD.47 (×4)", "Universal Audio 610"],
  },
  {
    category: "Compressors",
    items: ["Neve 33609", "SSL G-Bus Compressor", "Urei 1176 (×4)", "Teletronix LA-2A (×2)", "Manley Vari-Mu"],
  },
  {
    category: "EQ",
    items: ["Neve 1081 (×8)", "Pultec EQP-1A (×4)", "Sontec MES 432C", "Dangerous Bax EQ"],
  },
  {
    category: "Microphones",
    items: ["Neumann U87 (×6)", "AKG C12", "Sony C800G", "Shure SM7B (×8)", "Royer R-121 (×4)", "80+ mic locker"],
  },
  {
    category: "Monitoring",
    items: ["Augspurger Custom Mains", "Genelec 8351 (×4)", "Yamaha NS10M (×2)", "Avantone MixCubes"],
  },
];

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(200,169,110,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              The Studio
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-[#F0EDE6] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Space
          </h1>
          <p className="text-[#9E9A92] text-xl leading-relaxed max-w-2xl">
            Three purpose-built rooms, vintage and modern gear, and an
            environment designed to inspire. Every detail considered, nothing
            left to chance.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto space-y-px">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className="bg-[#080808] border border-[#1e1e1e] p-10 md:p-16 hover:border-[#C8A96E]/20 transition-colors duration-500 group"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span
                      className="text-5xl font-black text-[#C8A96E]/12 leading-none select-none group-hover:text-[#C8A96E]/20 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h2
                        className="text-3xl font-bold text-[#F0EDE6]"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {room.name}
                      </h2>
                      <p className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase">
                        {room.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#C8A96E]/40" />
                    <span className="text-[#9E9A92] text-xs tracking-[0.2em] uppercase">
                      {room.size}
                    </span>
                  </div>
                  <p className="text-[#9E9A92] text-sm leading-relaxed">
                    {room.description}
                  </p>
                </div>

                <div>
                  <div className="h-px w-8 bg-[#C8A96E]/30 mb-8" />
                  <h4 className="text-[11px] text-[#C8A96E] tracking-[0.3em] uppercase mb-6">
                    Room Specifications
                  </h4>
                  <ul className="space-y-3">
                    {room.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 text-sm text-[#9E9A92]"
                      >
                        <span className="text-[#C8A96E] shrink-0">—</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gear List */}
      <section className="py-32 px-6 bg-[#060606]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              Equipment
            </span>
          </div>
          <h2
            className="text-5xl font-bold text-[#F0EDE6] mb-16"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Selected Gear List
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e]">
            {gear.map((section) => (
              <div
                key={section.category}
                className="bg-[#060606] p-8 hover:bg-[#0e0e0e] transition-colors duration-300"
              >
                <div className="h-px w-8 bg-[#C8A96E]/40 mb-5" />
                <h3 className="text-[11px] text-[#C8A96E] tracking-[0.3em] uppercase mb-5">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-[#9E9A92] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C8A96E]/40 shrink-0" />
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
      <section className="py-28 px-6 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-4xl font-bold text-[#F0EDE6] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Come See It in Person
            </h3>
            <p className="text-[#9E9A92] text-sm">
              Studio tours available by appointment. We&#39;d love to show you around.
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#C8A96E] text-[#080808] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E2C98A] transition-colors duration-300 text-center"
            >
              Book a Tour
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-[#1e1e1e] text-[#9E9A92] text-xs tracking-[0.3em] uppercase hover:border-[#C8A96E]/30 hover:text-[#F0EDE6] transition-all duration-300 text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
