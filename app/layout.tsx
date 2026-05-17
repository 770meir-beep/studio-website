import type { Metadata } from "next";
import { Geist, Heebo, Frank_Ruhl_Libre, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLangToggle from "@/components/FloatingLangToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Esti Studio | Professional Recording",
  description:
    "World-class recording studio offering professional recording, mixing, mastering, and music production services. Located in Brooklyn, NY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geist.variable} ${heebo.variable} ${frankRuhl.variable} ${playfair.variable}`}
    >
      <body className="bg-[#080608] text-[#F5ECEF] antialiased">
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C98BA0] focus:text-[#080608] focus:text-xs focus:tracking-widest focus:uppercase focus:font-semibold"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingLangToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}
