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
                Professional Recording
              </span>
            </div>
            <p className="text-[#A89298] text-sm leading-relaxed max-w-xs mb-4">
              Where creativity meets precision. A world-class recording
              environment designed to bring your sound to life.
            </p>
            <p className="text-[#A89298] text-sm">
              1402 Union St, Brooklyn, NY
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[10px] text-[#C98BA0] tracking-[0.35em] uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
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
            © {new Date().getFullYear()} Esti Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-px h-3 bg-[#C98BA0]" />
            <p className="text-xs text-[#C98BA0] tracking-[0.2em] uppercase">
              Where Sound Becomes Art
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
