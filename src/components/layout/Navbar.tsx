"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/lib/art";
import { useData } from "@/context/DataContext";

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const pathname = usePathname();
  const { settings } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setIsSolid(y > 30);

      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) {
        setScrollProgress(Math.min(1, y / h));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Dampak removed, purely 6 core items
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang SIM", href: "/about" },
    { label: "Kegiatan", href: "/events" },
    { label: "SDGs", href: "/sdgs" },
    { label: "Our Journey", href: "/journey" },
    { label: "Galeri", href: "/gallery" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a className="skip" href="#main">
        Lewati ke konten
      </a>

      {/* Progress bar */}
      <div
        className="progress"
        id="progress"
        aria-hidden="true"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: "left",
        }}
      />

      <header
        className={`nav ${isSolid ? "is-solid" : ""} ${
          theme === "light" && !isSolid ? "nav-light" : ""
        }`}
        id="nav"
      >
        <div className="wrap nav__in">
          <Link
            className="brand flex items-center gap-3.5 group"
            href="/"
            aria-label="Social Is Me, beranda"
          >
            <LogoMark size={44} className="transition-transform group-hover:scale-105" />
            <span className="brand__text">
              <strong className="block text-lg md:text-xl font-serif tracking-tight leading-tight">
                Social Is Me
              </strong>
              <small className="block text-xs uppercase tracking-widest text-[var(--sand)] opacity-90">
                HIMSI UMN
              </small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav__menu" aria-label="Menu utama">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      className={`nav__link text-[15.5px] lg:text-[16.5px] font-medium px-3.5 py-2 rounded-full transition-all ${
                        active
                          ? "is-active font-semibold text-[var(--sand)] bg-white/10"
                          : "hover:text-[var(--sand)] text-white/90"
                      }`}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Manual Google Form Registration CTA Button */}
          <div className="nav__right flex items-center gap-3">
            <a
              className="btn btn--sand btn--sm text-sm md:text-[15px] font-semibold px-5 py-2.5 rounded-full shadow-sm hover:opacity-95 transition-all"
              href={settings.google_form_url || "https://forms.gle/SIM2027Registration"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar
            </a>

            {/* Mobile toggle button */}
            <button
              className="nav__toggle"
              type="button"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`bar ${isOpen ? "open" : ""}`} />
              <span className={`bar ${isOpen ? "open" : ""}`} />
              <span className={`bar ${isOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="nav__mobile" id="navMobile">
            <nav className="wrap" aria-label="Menu navigasi mobile">
              <ul className="space-y-3 py-6">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        className={`block text-xl font-serif py-2 ${
                          active
                            ? "is-active text-[var(--sand)] font-semibold"
                            : "text-white/90 hover:text-[var(--sand)]"
                        }`}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-4 border-t border-white/15">
                  <a
                    className="btn btn--sand w-full text-center py-3 text-base font-semibold rounded-xl"
                    href={settings.google_form_url || "https://forms.gle/SIM2027Registration"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    Daftar (Google Form)
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
