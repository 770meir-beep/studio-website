"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t, headingFont } = useLanguage();
  const { header, info, form, success } = t.contact;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-[#120e10] border border-[#201820] text-[#F5ECEF] text-sm px-5 py-4 placeholder:text-[#4a3a42] focus:outline-none focus:border-[#C98BA0]/50 transition-colors duration-200";

  const labelClass = "block text-[10px] text-[#C98BA0] tracking-[0.3em] uppercase mb-2";

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute inset-0 bg-[#080608]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 50% 50% at 80% 40%, rgba(201,139,160,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
            <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{header.label}</span>
          </div>
          <h1
            id="contact-heading"
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

      {/* Contact body */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Info */}
          <aside className="md:col-span-1 space-y-12">
            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" aria-hidden="true" />
              <h2 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">{info.location.label}</h2>
              <address className="text-[#A89298] text-sm leading-relaxed not-italic">
                {info.location.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < info.location.address.length - 1 && <br />}
                  </span>
                ))}
              </address>
            </div>

            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" aria-hidden="true" />
              <h2 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">{info.hours.label}</h2>
              <dl className="space-y-2 text-sm text-[#A89298]">
                {info.hours.rows.map((row, i) => (
                  <div key={i} className="flex justify-between gap-8">
                    <dt>{row.day}</dt>
                    <dd className="text-[#F5ECEF]">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="h-px w-8 bg-[#C98BA0]/40 mb-6" aria-hidden="true" />
              <h2 className="text-[11px] text-[#C98BA0] tracking-[0.35em] uppercase mb-4">{info.getInTouch.label}</h2>
              <div className="space-y-2 text-sm">
                <a href="tel:+17185550192" className="block text-[#A89298] hover:text-[#F5ECEF] transition-colors">
                  +1 (718) 555-0192
                </a>
                <a href="mailto:hello@esistudio.com" className="block text-[#A89298] hover:text-[#F5ECEF] transition-colors">
                  hello@esistudio.com
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="border border-[#C98BA0]/20 bg-[#120e10] p-16 text-center" role="alert">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
                  <span className="text-[#C98BA0] text-[11px] tracking-[0.4em] uppercase">{success.label}</span>
                  <div className="h-px w-8 bg-[#C98BA0]" aria-hidden="true" />
                </div>
                <h2
                  className="text-4xl font-bold text-[#F5ECEF] mb-4"
                  style={{ fontFamily: headingFont }}
                >
                  {success.heading}, {formData.name.split(" ")[0]}
                </h2>
                <p className="text-[#A89298] text-sm leading-relaxed max-w-md mx-auto">
                  {success.description}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {form.fullName} <span aria-hidden="true">{form.required}</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={form.namePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      {form.emailAddress} <span aria-hidden="true">{form.required}</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={form.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      {form.phoneNumber}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={form.phonePlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      {form.service} <span aria-hidden="true">{form.required}</span>
                      <span className="sr-only"> (required)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass + " appearance-none cursor-pointer"}
                    >
                      <option value="" disabled>{form.selectService}</option>
                      {form.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className={labelClass}>
                    {form.preferredDate}
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ colorScheme: "dark" }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    {form.projectDescription} <span aria-hidden="true">{form.required}</span>
                    <span className="sr-only"> (required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={form.projectPlaceholder}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-[#C98BA0] text-[#080608] text-xs tracking-[0.3em] uppercase font-semibold hover:bg-[#E8B4C4] transition-colors duration-300"
                  >
                    {form.sendMessage}
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
