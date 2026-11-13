"use client";

import React from "react";
import Link from "next/link";
import { LogoMark } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";

export function Footer() {
  const { settings } = useData();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="foot__canopy" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 120V60C90 20 170 8 270 28c100 20 150 58 260 54 112-4 150-56 270-60 116-4 160 40 280 46 90 4 270-20 360-52V120H0z" />
        </svg>
      </div>

      <div className="wrap foot__grid">
        <div className="foot__brand">
          <div className="foot__logo flex items-center gap-3">
            <LogoMark size={44} />
            <span className="font-serif text-2xl font-bold">Social Is Me</span>
          </div>
          <p className="foot__quote text-base">
            Every action plants a seed.
            <br />
            Every contribution helps our community grow.
          </p>
          <p className="small foot__org text-sm opacity-80">
            Program pengabdian masyarakat HIMSI (Himpunan Mahasiswa Sistem Informasi),
            Universitas Multimedia Nusantara.
          </p>
        </div>

        <nav className="foot__col" aria-label="Jelajahi">
          <h4 className="label text-sm uppercase tracking-wider text-[var(--sand)]">Jelajahi</h4>
          <Link href="/about" className="text-base hover:text-[var(--sand)]">Tentang SIM</Link>
          <Link href="/events" className="text-base hover:text-[var(--sand)]">Kegiatan</Link>
          <Link href="/sdgs" className="text-base hover:text-[var(--sand)]">SDGs</Link>
          <Link href="/journey" className="text-base hover:text-[var(--sand)]">Our Journey</Link>
          <Link href="/gallery" className="text-base hover:text-[var(--sand)]">Galeri</Link>
        </nav>

        <div className="foot__col">
          <h4 className="label text-sm uppercase tracking-wider text-[var(--sand)]">Pendaftaran</h4>
          <a
            href={settings.google_form_url || "https://forms.gle/SIM2027Registration"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-[var(--sand)]"
          >
            Formulir Pendaftaran Relawan
          </a>
          <a
            href={settings.registration_links?.day1 || "https://forms.gle/SIM2027Day1Outreach"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-[var(--sand)]"
          >
            Formulir Social Outreach
          </a>
          <a
            href={settings.registration_links?.day2 || "https://forms.gle/SIM2027Day2BloodDonation"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base hover:text-[var(--sand)]"
          >
            Formulir Donor Darah PMI
          </a>
        </div>

        <div className="foot__col">
          <h4 className="label text-sm uppercase tracking-wider text-[var(--sand)]">Hubungi</h4>
          {settings.contact_email && (
            <a href={`mailto:${settings.contact_email}`} className="text-base hover:text-[var(--sand)]">
              {settings.contact_email}
            </a>
          )}
          {settings.instagram && (
            <a
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base flex items-center gap-2 hover:text-[var(--sand)]"
            >
              <Icon name="instagram" size={18} /> Instagram HIMSI UMN
            </a>
          )}
        </div>
      </div>

      <div className="wrap foot__base flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 text-sm opacity-80 gap-2">
        <span>© {currentYear} HIMSI UMN. Semua hak dilindungi.</span>
        <span className="foot__tag font-serif italic text-[var(--sand)]">
          Growing Together, Creating Impact
        </span>
      </div>
    </footer>
  );
}
