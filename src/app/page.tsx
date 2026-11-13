"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/ui/EventCard";
import {
  HERO_LAYER_1,
  HERO_LAYER_2,
  HERO_LAYER_3,
  LeavesArt,
  Divider,
} from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";

// Deterministic Fireflies matching SIM1 app.js & style.css
const FIREFLIES = [
  { id: 1, left: "12%", top: "42%", d: "8s", x: "25px", y: "-45px", delay: "0.2s" },
  { id: 2, left: "24%", top: "68%", d: "11s", x: "-30px", y: "-70px", delay: "1.5s" },
  { id: 3, left: "38%", top: "50%", d: "9s", x: "35px", y: "-55px", delay: "3.1s" },
  { id: 4, left: "48%", top: "75%", d: "13s", x: "-20px", y: "-85px", delay: "0.8s" },
  { id: 5, left: "58%", top: "45%", d: "10s", x: "40px", y: "-60px", delay: "2.4s" },
  { id: 6, left: "70%", top: "62%", d: "12s", x: "-35px", y: "-75px", delay: "4.2s" },
  { id: 7, left: "82%", top: "48%", d: "8.5s", x: "20px", y: "-50px", delay: "1.1s" },
  { id: 8, left: "18%", top: "58%", d: "14s", x: "-25px", y: "-90px", delay: "2.9s" },
  { id: 9, left: "32%", top: "78%", d: "9.5s", x: "30px", y: "-40px", delay: "0.5s" },
  { id: 10, left: "64%", top: "38%", d: "11.5s", x: "-40px", y: "-65px", delay: "3.7s" },
  { id: 11, left: "76%", top: "70%", d: "10.5s", x: "15px", y: "-80px", delay: "1.9s" },
  { id: 12, left: "88%", top: "55%", d: "13.5s", x: "-25px", y: "-55px", delay: "4.8s" },
  { id: 13, left: "28%", top: "40%", d: "7.5s", x: "35px", y: "-70px", delay: "2.2s" },
  { id: 14, left: "52%", top: "60%", d: "12.5s", x: "-15px", y: "-60px", delay: "5.1s" },
];

// Deterministic Falling Leaves matching SIM1 app.js & style.css
const FALLING_LEAVES = [
  { id: 1, left: "15%", d: "16s", delay: "0s" },
  { id: 2, left: "35%", d: "20s", delay: "-4s" },
  { id: 3, left: "55%", d: "18s", delay: "-8s" },
  { id: 4, left: "72%", d: "22s", delay: "-2s" },
  { id: 5, left: "88%", d: "15s", delay: "-11s" },
  { id: 6, left: "42%", d: "25s", delay: "-6s" },
];

export default function HomePage() {
  const { events, settings } = useData();
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll for hero layers
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filter upcoming events (not completed and not archived)
  const upcomingEvents = events
    .filter((e) => !e.isArchived && e.status !== "completed")
    .slice(0, 3);

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ HERO SECTION ============ */}
        <section
          className="hero relative min-h-[100svh] flex items-center justify-center overflow-hidden"
          data-parallax
        >
          <div className="hero__sky" aria-hidden="true" />
          <div className="hero__rays" aria-hidden="true" />

          {/* Procedural Botanical SVG Layers with Parallax */}
          <div
            className="hero__layer hero__l1"
            style={{
              transform: `translate3d(0, ${(scrollY * 0.1).toFixed(1)}px, 0)`,
            }}
            dangerouslySetInnerHTML={{ __html: HERO_LAYER_1 }}
            aria-hidden="true"
          />

          <div
            className="hero__layer hero__l2"
            style={{
              transform: `translate3d(0, ${(scrollY * 0.05).toFixed(1)}px, 0)`,
            }}
            dangerouslySetInnerHTML={{ __html: HERO_LAYER_2 }}
            aria-hidden="true"
          />

          <div
            className="hero__layer hero__l3"
            dangerouslySetInnerHTML={{ __html: HERO_LAYER_3 }}
            aria-hidden="true"
          />

          <div className="hero__mist" aria-hidden="true" />

          {/* Kunang-kunang (Fireflies Glowing Effect identical to SIM1) */}
          {FIREFLIES.map((f) => (
            <span
              key={f.id}
              className="firefly"
              style={
                {
                  left: f.left,
                  top: f.top,
                  "--d": f.d,
                  "--x": f.x,
                  "--y": f.y,
                  animationDelay: f.delay,
                } as React.CSSProperties
              }
              aria-hidden="true"
            />
          ))}

          {/* Daun Jatuh (Falling Leaves identical to SIM1) */}
          {FALLING_LEAVES.map((l) => (
            <span
              key={l.id}
              className="leaf-fall"
              style={
                {
                  left: l.left,
                  "--d": l.d,
                  "--dl": l.delay,
                } as React.CSSProperties
              }
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 19C5 10 10 5 20 4c0 10-5 15-15 15z" />
              </svg>
            </span>
          ))}

          {/* Hero Typography - Centered, Grand, Authentic SIM1 Style */}
          <div className="wrap hero__in relative z-10 text-center max-w-4xl mx-auto py-24 md:py-32 flex flex-col items-center justify-center">
            <p className="label hero__eyebrow inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-xs md:text-sm font-semibold tracking-widest text-[var(--sand)] uppercase mb-6 shadow-sm mx-auto">
              <span>HIMSI UMN &nbsp;·&nbsp; Roots of Change</span>
            </p>

            <h1 className="h1 text-center mb-6 w-full mx-auto">
              Social<span className="l2 block w-full text-center">Is Me</span>
            </h1>

            <p className="hero__tag text-2xl sm:text-3xl md:text-4xl font-serif italic text-[var(--sand)] mb-3 text-center mx-auto">
              Growing Together, Creating Impact
            </p>

            <p className="hero__quote text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-normal text-center">
              “Every Act Connects, Every Action Matters”
            </p>

            <div className="hero__actions flex flex-wrap items-center justify-center gap-4 mx-auto">
              <Link
                className="btn btn--sand text-base font-semibold px-8 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-transform"
                href="/about"
              >
                Explore Our Mission <Icon name="arrow" size={18} />
              </Link>
              <a
                className="btn btn--ghost text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                href={settings.google_form_url || "https://forms.gle/SIM2027Registration"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Movement
              </a>
            </div>
          </div>

          {/* Animated Vertical Scroll Indicator (matches SIM1) */}
          <a className="hero__scroll" href="#misi" aria-label="Gulir ke bawah">
            Scroll
          </a>
        </section>

        {/* ============ TENTANG SIM (SECTION 01 - RATA TENGAH & BERSIH) ============ */}
        <section className="sec grain py-24 bg-[var(--sim-bg-primary)]" id="misi">
          <div className="wrap max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
            <header className="shead mb-8 max-w-3xl mx-auto text-center">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>01</b>
                <span>Tentang SIM</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Bukan sekadar acara tahunan, sebuah <em className="it font-normal text-[var(--sim-forest-accent)]">gerakan</em> yang terus tumbuh
              </h2>
            </header>

            <p className="lead text-base md:text-xl text-[var(--sim-text-muted)] leading-relaxed max-w-3xl mx-auto mb-12 text-center">
              Social Is Me (SIM) adalah program pengabdian masyarakat unggulan HIMSI Universitas Multimedia Nusantara.
              Kami mengajak mahasiswa mengubah kepedulian menjadi aksi nyata lewat edukasi interaktif, pelestarian lingkungan, dan aksi kemanusiaan.
            </p>

            {/* 3 Values - Centered Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-10 text-center">
              <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="w-12 h-12 rounded-2xl bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] font-serif text-xl font-bold flex items-center justify-center mb-4">
                  01
                </span>
                <h4 className="font-serif text-xl font-bold mb-2 text-[var(--sim-text-primary)]">Misi</h4>
                <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed">
                  Meningkatkan kesejahteraan masyarakat lewat inisiatif sosial dan lingkungan yang berkesinambungan
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="w-12 h-12 rounded-2xl bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] font-serif text-xl font-bold flex items-center justify-center mb-4">
                  02
                </span>
                <h4 className="font-serif text-xl font-bold mb-2 text-[var(--sim-text-primary)]">Nilai</h4>
                <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed">
                  Peduli, kolaboratif, dan bertanggung jawab. Setiap orang punya peran penting dalam ekosistem kebaikan bersama
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="w-12 h-12 rounded-2xl bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] font-serif text-xl font-bold flex items-center justify-center mb-4">
                  03
                </span>
                <h4 className="font-serif text-xl font-bold mb-2 text-[var(--sim-text-primary)]">Mengapa Penting</h4>
                <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed">
                  Perubahan besar dimulai dari tindakan kecil yang dilakukan bersama dan terus dirawat secara konsisten
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                className="link-arrow text-base font-semibold inline-flex items-center gap-2 text-[var(--sim-forest-accent)] hover:opacity-85"
                href="/about"
              >
                Kenali SIM lebih dekat <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ DUA INISIATIF (SECTION 02 - RATA TENGAH & SELESAI FINISHING) ============ */}
        <section className="sec sec--dark grain on-dark py-28 md:py-36 bg-[var(--forest-dark)] text-white relative">
          <Divider type="cream-dark" />
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead text-center max-w-3xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sand)] font-semibold mb-2">
                <b>02</b>
                <span>Our Initiatives</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--ivory)] leading-tight mb-4">
                Dua hari, satu <em className="it font-normal text-[var(--sand)]">tujuan</em>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                SIM berjalan lewat dua pilar kegiatan yang saling melengkapi: belajar bersama dan berbagi kehidupan
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Day 01 */}
              <article className="initiative h-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)]/50 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[var(--leaf)]/20 text-[var(--sand)] border border-[var(--sand)]/30">
                      Day 01
                    </span>
                    <span className="font-serif text-4xl text-[var(--sand)] opacity-60">01</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--ivory)] mb-3">
                    Social Outreach
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed mb-6 min-h-[4.5rem]">
                    Berbagi pengetahuan bersama komunitas sekolah dasar sambil mengolah botol plastik bekas menjadi mini storage box yang bermanfaat
                  </p>
                  <ul className="space-y-3 mb-8 text-sm md:text-base text-white/90 flex-1">
                    <li className="flex items-center gap-3">
                      <Icon name="book" size={18} className="text-[var(--sand)] shrink-0" />
                      Sesi pembelajaran ramah anak yang menyenangkan
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="spark" size={18} className="text-[var(--sand)] shrink-0" />
                      Upcycling: botol plastik jadi tempat penyimpanan multifungsi
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="globe" size={18} className="text-[var(--sand)] shrink-0" />
                      Mendukung perwujudan SDG 12
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-[var(--sand)]/30 mt-auto">
                  <Link
                    className="link-arrow text-sm md:text-base font-semibold inline-flex items-center gap-2 text-[var(--sand)] hover:underline"
                    href="/events"
                  >
                    Lihat rincian kegiatan <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>

              {/* Day 02 */}
              <article className="initiative h-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)]/50 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30">
                      Day 02
                    </span>
                    <span className="font-serif text-4xl text-[var(--sand)] opacity-60">02</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--ivory)] mb-3">
                    Blood Donation
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed mb-6 min-h-[4.5rem]">
                    Aksi donor darah bersama Palang Merah Indonesia (PMI) Kota Tangerang. Skrining medis dan pengambilan darah dilakukan tenaga profesional PMI
                  </p>
                  <ul className="space-y-3 mb-8 text-sm md:text-base text-white/90 flex-1">
                    <li className="flex items-center gap-3">
                      <Icon name="heart" size={18} className="text-rose-400 shrink-0" />
                      Bekerja sama resmi dengan Unit Donor Darah PMI
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="check" size={18} className="text-rose-400 shrink-0" />
                      Skrining kesehatan profesional dan aman
                    </li>
                    <li className="flex items-center gap-3">
                      <Icon name="drop" size={18} className="text-rose-400 shrink-0" />
                      Mendukung perwujudan SDG 3
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-[var(--sand)]/30 mt-auto">
                  <Link
                    className="link-arrow text-sm md:text-base font-semibold inline-flex items-center gap-2 text-[var(--sand)] hover:underline"
                    href="/events"
                  >
                    Lihat rincian kegiatan <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
          <Divider type="dark-cream" />
        </section>

        {/* ============ SDGS FOCUS (SECTION 03 - PERSIS SIM1: SDG 3 & 12) ============ */}
        <section className="sec py-24 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-5xl mx-auto px-4">
            <header className="shead text-center max-w-2xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>03</b>
                <span>SDGs Focus</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight mb-4">
                Fokus Pembangunan <em className="it font-normal text-[var(--sim-forest-accent)]">Berkelanjutan</em>
              </h2>
              <p className="text-base md:text-lg text-[var(--sim-text-muted)]">
                Dua Tujuan Pembangunan Berkelanjutan yang kami angkat dalam kegiatan Social Is Me
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* SDG 3 */}
              <Link
                href="/sdgs?n=3"
                className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] hover:border-[#4C9F38] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#4C9F38]/15 text-[#4C9F38]">
                      SDG 03
                    </span>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-black/10 bg-white">
                      <img
                        src="/sdg-3.png"
                        alt="SDG 3"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--sim-text-primary)] mb-2 group-hover:text-[#4C9F38] transition-colors">
                    Kehidupan Sehat &amp; Sejahtera
                  </h3>
                  <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed mb-6">
                    Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan seluruh masyarakat melalui aksi donor darah kemanusiaan
                  </p>
                </div>
                <span className="link-arrow text-sm font-semibold inline-flex items-center gap-2 text-[#4C9F38]">
                  Pelajari SDG 3 <Icon name="arrow" size={16} />
                </span>
              </Link>

              {/* SDG 12 */}
              <Link
                href="/sdgs?n=12"
                className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] hover:border-[#BF8B2E] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#BF8B2E]/15 text-[#BF8B2E]">
                      SDG 12
                    </span>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-black/10 bg-white">
                      <img
                        src="/sdg-12.png"
                        alt="SDG 12"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--sim-text-primary)] mb-2 group-hover:text-[#BF8B2E] transition-colors">
                    Konsumsi &amp; Produksi yang Bertanggung Jawab
                  </h3>
                  <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed mb-6">
                    Mengajak generasi muda mengurangi sampah plastik melalui lokakarya upcycling botol bekas menjadi tempat penyimpanan multifungsi
                  </p>
                </div>
                <span className="link-arrow text-sm font-semibold inline-flex items-center gap-2 text-[#BF8B2E]">
                  Pelajari SDG 12 <Icon name="arrow" size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ KEGIATAN TERDEKAT (SECTION 04) ============ */}
        <section className="sec sec--cream2 grain py-24 bg-[var(--sim-bg-secondary)] border-t border-[var(--sim-border)]">
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead text-center max-w-2xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>04</b>
                <span>Upcoming Events</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Kesempatan <em className="it font-normal text-[var(--sim-forest-accent)]">berikutnya</em>
              </h2>
            </header>

            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((ev) => (
                  <EventCard key={ev.id} event={ev} />
                ))}
              </div>
            ) : (
              <div className="coming text-center py-16 bg-[var(--sim-bg-card)] rounded-3xl border border-[var(--sim-border)]">
                <div className="coming__seed mb-4 inline-block">
                  <Icon name="leaf" size={40} className="text-[var(--sim-forest-accent)]" />
                </div>
                <strong className="block text-xl font-serif mb-2">COMING SOON</strong>
                <p className="text-[var(--sim-text-muted)]">
                  Stay tuned. Kesempatan baru untuk menciptakan dampak segera hadir
                </p>
              </div>
            )}

            <div className="text-center mt-12">
              <Link
                className="btn btn--leaf text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm hover:-translate-y-0.5 transition-transform"
                href="/events"
              >
                Pusat Pendaftaran Kegiatan <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ OUR JOURNEY PREVIEW (SECTION 05 - RATA TENGAH) ============ */}
        <section className="sec sec--dark grain on-dark py-24 bg-[var(--forest-dark)] text-white">
          <Divider type="cream-dark" />
          <div className="wrap max-w-5xl mx-auto px-4">
            <header className="shead text-center max-w-2xl mx-auto mb-16">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sand)] font-semibold mb-2">
                <b>05</b>
                <span>Our Journey</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--ivory)] leading-tight mb-4">
                The People Behind the <em className="it font-normal text-[var(--sand)]">Impact</em>
              </h2>
              <p className="text-lg text-white/80">
                Jelajahi peta kepanitiaan digital SIM. Setiap divisi adalah landmark yang merawat gerakan ini
              </p>
            </header>

            <div className="max-w-3xl mx-auto">
              <Link
                href="/journey"
                className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--sand)] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group block shadow-sm text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[var(--sand)]/20 text-[var(--sand)] border border-[var(--sand)]/30">
                    Kepanitiaan Tahun Ini
                  </span>
                  <span className="text-xs text-white/70 font-medium">
                    7 Divisi Pelaksana
                  </span>
                </div>
                <h4 className="font-serif text-2xl md:text-4xl font-bold mb-3 text-[var(--ivory)] group-hover:text-[var(--sand)] transition-colors">
                  Social Is Me 2027
                </h4>
                <p className="text-base text-white/80 mb-6 leading-relaxed max-w-xl mx-auto">
                  Buka peta formasi interaktif panitia SIM 2027 untuk melihat seluruh divisi pelaksana, koordinator, dan anggota yang merawat gerakan ini
                </p>
                <span className="link-arrow text-sm md:text-base font-semibold inline-flex items-center gap-2 text-[var(--sand)]">
                  Masuki Hutan Kepanitiaan <Icon name="arrow" size={18} />
                </span>
              </Link>
            </div>
          </div>
          <Divider type="dark-cream" />
        </section>

        {/* ============ CTA AKHIR (RATA TENGAH & TANPA TITIK) ============ */}
        <section className="cta grain py-24 bg-[var(--forest-dark)] text-white text-center">
          <div className="wrap max-w-3xl mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-[var(--ivory)] leading-tight mb-6">
              Mulai menanam <br />
              <em className="it font-normal text-[var(--sand)]">hari ini</em>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10">
              Setiap langkah kecilmu menjadi bagian dari perubahan besar, bergabung bersama kami mewujudkan pengabdian nyata
            </p>
            <div className="hero__actions flex flex-wrap items-center justify-center gap-4">
              <a
                className="btn btn--sand text-base font-semibold px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-transform"
                href={settings.google_form_url || "https://forms.gle/SIM2027Registration"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Movement <Icon name="arrow" size={18} />
              </a>
              <Link
                className="btn btn--ghost text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all"
                href="/about"
              >
                Pelajari Tentang SIM
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
