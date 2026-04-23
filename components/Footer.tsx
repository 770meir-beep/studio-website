import Link from "next/link";

const links = {
  Studio: [
    { href: "/about", label: "About Us" },
    { href: "/studio", label: "Our Studio" },
    { href: "/services", label: "Services" },
  ],
  Connect: [
    { href: "/contact", label: "Book a Session" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-5">
              <span
                className="text-2xl font-bold text-[#F0EDE6] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Resonance
              </span>
              <span className="text-[10px] text-[#C8A96E] tracking-[0.35em] uppercase">
                Studio
              </span>
            </div>
            <p className="text-[#9E9A92] text-sm leading-relaxed max-w-xs">
              Where creativity meets precision. A world-class recording
              environment designed to bring your sound to life.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[10px] text-[#C8A96E] tracking-[0.35em] uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#9E9A92] hover:text-[#F0EDE6] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e1e1e] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9E9A92] tracking-wider">
            © {new Date().getFullYear()} Resonance Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-px h-3 bg-[#C8A96E]" />
            <p className="text-xs text-[#C8A96E] tracking-[0.2em] uppercase">
              Where Sound Becomes Art
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
