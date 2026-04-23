import Link from "next/link";

const team = [
  {
    name: "Marcus Webb",
    role: "Founder & Lead Engineer",
    bio: "15 years of engineering experience. Worked with artists across jazz, hip-hop, rock, and electronic music. Marcus built Resonance to be the studio he always wished existed.",
  },
  {
    name: "Sofia Reyes",
    role: "Mixing & Mastering Engineer",
    bio: "Trained at Abbey Road Studios in London. Sofia brings a European sonic sensibility and technical mastery that has become a defining quality of the Resonance sound.",
  },
  {
    name: "James Okafor",
    role: "Music Producer",
    bio: "Prolific producer with credits on over 200 commercial releases. James has an uncanny ability to unlock an artist's unique voice and elevate it to its full potential.",
  },
];

const milestones = [
  { year: "2009", event: "Resonance Studio founded in a converted warehouse space" },
  { year: "2012", event: "Expanded to three dedicated recording rooms" },
  { year: "2015", event: "Installed vintage Neve 8078 console" },
  { year: "2018", event: "Launched in-house mastering division" },
  { year: "2022", event: "Celebrated 500th commercial release" },
  { year: "2024", event: "Major acoustic renovation and equipment upgrade" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(200,169,110,0.05) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              About Us
            </span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-[#F0EDE6] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Story
          </h1>
          <p className="text-[#9E9A92] text-xl leading-relaxed max-w-2xl">
            Built by musicians for musicians. Resonance Studio was founded on a
            single belief: that the recording environment should inspire, not
            intimidate.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#060606]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="relative">
            <div className="aspect-square bg-[#101010] border border-[#1e1e1e] relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,110,0.08) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-[8rem] font-black text-[#C8A96E]/10 leading-none select-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    R
                  </div>
                  <div className="text-[#C8A96E]/40 text-xs tracking-[0.5em] uppercase">
                    Resonance
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/20 to-transparent" />
              <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#C8A96E]/20 to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#C8A96E]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#C8A96E]/20" />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C8A96E]" />
              <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
                Our Philosophy
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F0EDE6] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sound Is Emotion. We Help You Capture It.
            </h2>
            <div className="space-y-5 text-[#9E9A92] text-sm leading-relaxed">
              <p>
                Great recording isn&#39;t just technical excellence — it&#39;s creating a
                space where artists feel safe to take creative risks. From the
                moment you walk through our doors, the environment is designed
                to remove friction and amplify inspiration.
              </p>
              <p>
                We obsess over the details that most studios overlook: the
                acoustics that breathe naturally, the vintage gear that imparts
                warmth and character, the engineers who listen as musicians
                first and technicians second.
              </p>
              <p>
                The result is recordings that sound alive — not just clean, but
                deeply human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              The Team
            </span>
          </div>
          <h2
            className="text-5xl font-bold text-[#F0EDE6] mb-16 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The People Behind the Sound
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
            {team.map((member) => (
              <div key={member.name} className="bg-[#080808] p-10 group hover:bg-[#0e0e0e] transition-colors duration-300">
                <div className="w-16 h-16 border border-[#C8A96E]/30 mb-8 flex items-center justify-center group-hover:border-[#C8A96E]/60 transition-colors duration-300">
                  <span
                    className="text-2xl font-black text-[#C8A96E]/50 group-hover:text-[#C8A96E]/70 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {member.name[0]}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[#F0EDE6] mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#C8A96E] text-xs tracking-[0.2em] uppercase mb-5">
                  {member.role}
                </p>
                <div className="h-px w-8 bg-[#1e1e1e] mb-5" />
                <p className="text-[#9E9A92] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-[#060606]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#C8A96E]" />
            <span className="text-[#C8A96E] text-[11px] tracking-[0.4em] uppercase">
              History
            </span>
          </div>
          <h2
            className="text-5xl font-bold text-[#F0EDE6] mb-16 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            15 Years of Sound
          </h2>

          <div className="relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-[#1e1e1e]" />
            <div className="space-y-0">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-8 group">
                  <div
                    className="w-16 text-right shrink-0 text-[#C8A96E]/50 text-sm font-bold pt-8 group-hover:text-[#C8A96E] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {milestone.year}
                  </div>
                  <div className="relative flex-1 pb-10 pl-8 pt-8 border-l border-[#1e1e1e]">
                    <div className="absolute -left-[5px] top-[38px] w-[9px] h-[9px] rounded-full border border-[#C8A96E]/30 bg-[#060606] group-hover:border-[#C8A96E] group-hover:bg-[#C8A96E]/20 transition-all duration-300" />
                    <p className="text-[#F0EDE6] text-sm leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
              Ready to Work Together?
            </h3>
            <p className="text-[#9E9A92] text-sm">
              Let&#39;s create something extraordinary.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[#C8A96E] text-[#080808] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E2C98A] transition-colors duration-300 shrink-0"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </>
  );
}
