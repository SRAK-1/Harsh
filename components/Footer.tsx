"use client";

import { Instagram, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-ivory border-t border-gold-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="text-3xl font-serif text-charcoal-soft mb-8 inline-block"
            >
              Harsh
            </a>
            <p className="text-charcoal-soft/50 font-light leading-relaxed max-w-sm text-lg">
              Visual Storyteller & Photographer based in Agra, India. Capturing
              authentic moments with 8+ years of creative expertise.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-muted mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["About", "Portfolio", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-charcoal-soft/60 hover:text-gold-muted transition-colors duration-500 text-sm font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-muted mb-8">
              Social
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/i_m_harsh_official_?igsh=MTNjdWZkc2YzbHd1Yg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gold-muted/20 flex items-center justify-center text-charcoal-soft/40 hover:text-gold-muted hover:border-gold-muted transition-all duration-700"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1} />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-kumar-656a24383?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gold-muted/20 flex items-center justify-center text-charcoal-soft/40 hover:text-gold-muted hover:border-gold-muted transition-all duration-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gold-muted/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-charcoal-soft/40 text-[10px] font-bold tracking-[0.2em] uppercase" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Harsh. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-charcoal-soft/40 hover:text-gold-muted transition-colors text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-charcoal-soft/40 hover:text-gold-muted transition-colors text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
