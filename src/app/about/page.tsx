"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeavesArt, Divider } from "@/lib/art";
import { Icon } from "@/lib/icons";

export default function AboutPage() {
  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ HERO HEADER (RATA TENGAH & TANPA TITIK) ============ */}
        <section className="phero py-24 md:py-32 bg-[var(--forest-dark)] text-white relative overflow-hidden">
          <LeavesArt className="phero__art" />
          <div className="wrap max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              Roots of Change
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-6">
              Dari kepedulian menjadi <em className="it font-normal text-[var(--sand)]">aksi</em>
            </h1>
            <p className="lead text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed text-center">
              Social Is Me (SIM) adalah program pengabdian masyarakat unggulan HIMSI Universitas Multimedia Nusantara untuk mewujudkan aksi kepedulian sosial dan pelestarian lingkungan secara berkelanjutan
            </p>
          </div>
        </section>

        {/* ============ SECTION 01: LATAR BELAKANG (RATA TENGAH) ============ */}
        <section className="sec grain py-24 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            <header className="shead mb-10 text-center">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>01</b>
                <span>Latar Belakang</span>
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Mahasiswa yang <em className="it font-normal text-[var(--sim-forest-accent)]">hadir</em>, bukan hanya peduli
              </h2>
            </header>

            <div className="prose text-base md:text-lg text-[var(--sim-text-muted)] space-y-6 leading-relaxed max-w-3xl mx-auto text-center">
              <p>
                SIM mengajak mahasiswa UMN menyalurkan kesadaran sosial ke dalam aksi nyata melalui interaksi hangat bersama masyarakat, edukasi ramah anak, dan aksi donor darah kemanusiaan.
              </p>
              <p>
                Bukan sekadar kegiatan seremonial yang selesai dalam sekejap, SIM adalah gerakan berkelanjutan yang terus merawat kepedulian, membangun jejaring kebaikan, dan menginspirasi generasi berikutnya.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECTION 02: KONSEP KAMI (ACT | CONNECT | MATTER - RATA TENGAH) ============ */}
        <section className="sec sec--dark grain on-dark py-24 bg-[var(--forest-dark)] text-white">
          <Divider type="cream-dark" />
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead text-center max-w-3xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sand)] font-semibold mb-2">
                <b>02</b>
                <span>Konsep Gerakan</span>
              </p>
              {/* Disekat pakai | sesuai permintaan user */}
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--ivory)] leading-tight mb-4 flex flex-wrap items-center justify-center gap-2">
                <span>Act</span>
                <span className="opacity-40 font-light mx-2">|</span>
                <span>Connect</span>
                <span className="opacity-40 font-light mx-2">|</span>
                <em className="it font-normal text-[var(--sand)]">Matter</em>
              </h2>
            </header>

            {/* Horizontal 3-Column Layout - Rata Tengah & Finised */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)]/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--sand)]/20 text-[var(--sand)] flex items-center justify-center mb-6 shadow-inner">
                  <Icon name="spark" size={26} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[var(--ivory)] mb-3">Act</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Mengubah kepedulian menjadi aksi nyata di lapangan melalui edukasi kreatif dan aksi donor darah kemanusiaan
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)]/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[var(--leaf)]/20 text-[var(--leaf)] flex items-center justify-center mb-6 shadow-inner">
                  <Icon name="users" size={26} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[var(--ivory)] mb-3">Connect</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Membangun jejaring kolaborasi erat antara relawan mahasiswa, civitas akademika, PMI, sekolah mitra, dan masyarakat
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)]/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-6 shadow-inner">
                  <Icon name="heart" size={26} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[var(--ivory)] mb-3">Matter</h3>
                <p className="text-base text-white/80 leading-relaxed">
                  Memastikan setiap langkah menghadirkan manfaat nyata bagi masyarakat serta menumbuhkan empati mendalam bagi relawan
                </p>
              </div>
            </div>
          </div>
          <Divider type="dark-cream" />
        </section>

        {/* ============ SECTION 03: DUA HARI KEGIATAN INTI (RATA TENGAH) ============ */}
        <section className="sec py-24 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-5xl mx-auto px-4 text-center">
            <header className="shead text-center max-w-2xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>03</b>
                <span>Pilar Kegiatan</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Dua Hari Kegiatan Inti
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-8 md:p-10 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] mb-4 inline-block">
                  Day 01
                </span>
                <h3 className="text-2xl font-serif font-bold text-[var(--sim-text-primary)] mb-3">
                  Social Outreach
                </h3>
                <p className="text-base text-[var(--sim-text-muted)] leading-relaxed max-w-md">
                  Kunjungan langsung ke sekolah dasar mitra dengan modul belajar interaktif ramah anak serta lokakarya pengolahan botol plastik bekas menjadi tempat penyimpanan multifungsi
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] flex flex-col items-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-rose-500/15 text-rose-600 mb-4 inline-block">
                  Day 02
                </span>
                <h3 className="text-2xl font-serif font-bold text-[var(--sim-text-primary)] mb-3">
                  Blood Donation
                </h3>
                <p className="text-base text-[var(--sim-text-muted)] leading-relaxed max-w-md">
                  Aksi donor darah massal civitas kampus UMN bermitra dengan Unit Donor Darah PMI. Skrining medis dan pengambilan darah ditangani langsung oleh tenaga medis profesional PMI
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                className="btn btn--leaf text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm hover:-translate-y-0.5 transition-transform"
                href="/events"
              >
                Lihat Rincian Kegiatan <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
