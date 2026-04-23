"use client";

import { useState } from "react";

const serviceOptions = [
  "Recording Session",
  "Mixing",
  "Mastering",
  "Music Production",
  "Studio Tour",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-[#120e10] border border-[#201820] text-[#F5ECEF] text-sm px-5 py-4 placeholder:text-[#4a3a42] focus:outline-none focus:border-[#C98BA0]/50 transition-colors duration-200";

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#080608]" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 80% 40%, rgba(201,139,160,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">Contact</span>
          </div>
          <h1
            className="text-6xl md:text-8xl font-black text-[#F5ECEF] leading-tight max-w-3xl mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&#39;s Make Something
          </h1>
          <p className="text-[#A89298] text-xl leading-relaxed max-w-2xl">
            Ready to book a session, ask a question, or schedule a tour?
            Fill out the form and we&#39;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact body */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Info */}
          <div className="md:col-span-1 space-y-12">
            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" />
              <h3 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">Location</h3>
              <p className="text-[#A89298] text-sm leading-relaxed">
                1402 Union St<br />
                Brooklyn, New York<br />
                NY 11231
              </p>
            </div>

            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" />
              <h3 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-[#A89298]">
                <div className="flex justify-between gap-8">
                  <span>Monday – Friday</span>
                  <span className="text-[#F5ECEF]">10am – 10pm</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Saturday</span>
                  <span className="text-[#F5ECEF]">12pm – 8pm</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>Sunday</span>
                  <span className="text-[#F5ECEF]">By appointment</span>
                </div>
              </div>
            </div>

            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" />
              <h3 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm">
                <a href="tel:+17185550192" className="block text-[#A89298] hover:text-[#F5ECEF] transition-colors">
                  +1 (718) 555-0192
                </a>
                <a href="mailto:hello@esistudio.com" className="block text-[#A89298] hover:text-[#F5ECEF] transition-colors">
                  hello@esistudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="border border-[#C98BA0]/20 bg-[#120e10] p-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-8 bg-[#C98BA0]" />
                  <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">Sent</span>
                  <div className="h-px w-8 bg-[#C98BA0]" />
                </div>
                <h2
                  className="text-4xl font-bold text-[#F5ECEF] mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Thank You, {form.name.split(" ")[0]}
                </h2>
                <p className="text-[#A89298] text-sm leading-relaxed max-w-md mx-auto">
                  Your message has been received. We&#39;ll be in touch within 24
                  hours to discuss your session at Esti Studio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Preferred Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} style={{ colorScheme: "dark" }} />
                </div>

                <div>
                  <label className="block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2">Tell Us About Your Project *</label>
                  <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Describe your project, genre, number of tracks, timeline..." className={inputClass + " resize-none"} />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
