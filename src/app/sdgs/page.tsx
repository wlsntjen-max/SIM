"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeavesArt } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";

function SDGsPageContent() {
  const searchParams = useSearchParams();
  const initialNo = parseInt(searchParams.get("n") || "0", 10);
  const { sdgs } = useData();

  // Exactly SDG 3 and SDG 12
  const [selectedNo, setSelectedNo] = useState<number>(
    initialNo === 12 ? 12 : 3
  );

  const selectedSDG = sdgs.find((s) => s.number === selectedNo) || sdgs[0];

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ PHERO (RATA TENGAH & BERSIH) ============ */}
        <section className="phero py-24 md:py-32 bg-[var(--forest-dark)] text-white relative overflow-hidden">
          <LeavesArt className="phero__art" />
          <div className="wrap max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              SDGs Explorer
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-4">
              Masalah besar, mulai dari <em className="it font-normal text-[var(--sand)]">langkah kecil</em>
            </h1>
            <p className="lead text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed text-center">
              Pelajari tujuan pembangunan berkelanjutan yang menjadi pijakan aksi Social Is Me untuk mewujudkan perubahan nyata
            </p>
          </div>
        </section>

        {/* ============ SDGs INTERACTIVE EXPLORER ============ */}
        <section className="sec page-sec py-20 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead mb-14 text-center max-w-2xl mx-auto">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>01</b>
                <span>Fokus Pembangunan Berkelanjutan</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Dua Pilar SDGs Gerakan SIM
              </h2>
            </header>

            {/* SDG Selector Tabs (SDG 3 & SDG 12) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              {sdgs.map((s) => {
                const isActive = s.number === selectedNo;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedNo(s.number)}
                    className={`text-left p-6 md:p-8 rounded-3xl transition-all border flex items-center gap-6 ${
                      isActive
                        ? "bg-[var(--sim-bg-card)] shadow-md border-2"
                        : "bg-[var(--sim-bg-secondary)]/60 border-[var(--sim-border)] hover:bg-[var(--sim-bg-card)] opacity-80"
                    }`}
                    style={{
                      borderColor: isActive ? s.color : undefined,
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center font-serif text-4xl font-bold text-white shrink-0 shadow-sm"
                      style={{ background: s.color }}
                    >
                      {s.number}
                    </div>
                    <div>
                      <span
                        className="text-xs uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full inline-block mb-1.5"
                        style={{
                          background: `${s.color}20`,
                          color: s.color,
                        }}
                      >
                        SDG {s.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[var(--sim-text-primary)]">
                        {s.name}
                      </h3>
                      <p className="text-xs text-[var(--sim-text-muted)] mt-1">
                        {s.number === 3 ? "Terkait Day 02: Blood Donation" : "Terkait Day 01: Social Outreach"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected SDG Detail Card */}
            {selectedSDG && (
              <article className="sdg-pane rounded-3xl overflow-hidden border border-[var(--sim-border)] bg-[var(--sim-bg-card)] shadow-md max-w-5xl mx-auto">
                {/* Header Banner */}
                <div
                  className="p-8 md:p-12 text-white relative overflow-hidden text-center md:text-left"
                  style={{
                    background: `linear-gradient(135deg, ${selectedSDG.color} 0%, #173D32 100%)`,
                  }}
                >
                  <p className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-2">
                    Tujuan Global PBB
                  </p>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                    SDG {selectedSDG.number}: {selectedSDG.name}
                  </h2>
                  <p className="font-serif italic text-lg md:text-xl text-white/95 max-w-3xl mb-6">
                    “{selectedSDG.official}”
                  </p>
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-md max-w-2xl border border-white/15">
                    <p className="text-sm md:text-base leading-relaxed text-white/90">
                      <strong>Korelasi SIM:</strong> {selectedSDG.connection}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 md:p-12 space-y-10">
                  {/* Key Action Points */}
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[var(--sim-text-primary)] mb-4 text-center md:text-left">
                      Fokus Aksi Nyata
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedSDG.points.map((pt, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-[var(--sim-bg-secondary)] border border-[var(--sim-border)] flex items-start gap-3"
                        >
                          <Icon name="check" size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-[var(--sim-text-primary)] leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4 Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[var(--sim-border)]">
                    <div className="p-6 rounded-2xl bg-[var(--sim-bg-secondary)]/50 border border-[var(--sim-border)]">
                      <h4 className="font-serif text-lg font-bold text-[var(--sim-text-primary)] mb-2 flex items-center gap-2">
                        <Icon name="spark" size={18} className="text-[var(--sim-forest-accent)]" />
                        Tantangan di Masyarakat
                      </h4>
                      <p className="text-sm md:text-base text-[var(--sim-text-muted)] leading-relaxed">
                        {selectedSDG.problems}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[var(--sim-bg-secondary)]/50 border border-[var(--sim-border)]">
                      <h4 className="font-serif text-lg font-bold text-[var(--sim-text-primary)] mb-2 flex items-center gap-2">
                        <Icon name="heart" size={18} className="text-rose-500" />
                        Mengapa Ini Penting
                      </h4>
                      <p className="text-sm md:text-base text-[var(--sim-text-muted)] leading-relaxed">
                        {selectedSDG.whyMatters}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[var(--sim-bg-secondary)]/50 border border-[var(--sim-border)]">
                      <h4 className="font-serif text-lg font-bold text-[var(--sim-text-primary)] mb-2 flex items-center gap-2">
                        <Icon name="users" size={18} className="text-blue-500" />
                        Solusi Berbasis Komunitas
                      </h4>
                      <p className="text-sm md:text-base text-[var(--sim-text-muted)] leading-relaxed">
                        {selectedSDG.solutions}
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[var(--sim-bg-secondary)]/50 border border-[var(--sim-border)]">
                      <h4 className="font-serif text-lg font-bold text-[var(--sim-text-primary)] mb-2 flex items-center gap-2">
                        <Icon name="leaf" size={18} className="text-emerald-600" />
                        Kontribusi Nyata SIM
                      </h4>
                      <p className="text-sm md:text-base text-[var(--sim-text-muted)] leading-relaxed">
                        {selectedSDG.simContribution}
                      </p>
                    </div>
                  </div>

                  {/* CTA Card */}
                  <div className="pt-6 border-t border-[var(--sim-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h5 className="font-serif text-lg font-bold">Ingin turut berkontribusi?</h5>
                      <p className="text-sm text-[var(--sim-text-muted)]">
                        Bergabunglah bersama kami pada kegiatan SIM berikutnya
                      </p>
                    </div>
                    <Link
                      href="/events"
                      className="btn btn--leaf text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 shrink-0"
                    >
                      Lihat Kegiatan SIM <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function SDGsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--sim-bg-primary)]" />}>
      <SDGsPageContent />
    </Suspense>
  );
}
