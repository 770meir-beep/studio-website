"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function FloatingLangToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "he" ? "Switch to English" : "עבור לעברית"}
      className="fixed bottom-8 end-6 z-50 flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[#C98BA0] text-[#080608] shadow-lg hover:bg-[#E8B4C4] active:bg-[#8A5A70] active:text-[#F5ECEF] transition-all duration-200 text-[11px] font-bold tracking-widest uppercase"
    >
      {lang === "en" ? "עב" : "EN"}
    </button>
  );
}
