"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeavesArt } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { LightboxModal, LightboxItem } from "@/components/ui/LightboxModal";
import { useData } from "@/context/DataContext";
import { galleryCatLabel } from "@/lib/utils";
import { GalleryCategory } from "@/types";

export default function GalleryPage() {
  const { gallery } = useData();

  const [selectedCat, setSelectedCat] = useState<string>("");

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "social_outreach", label: "Social Outreach" },
    { id: "blood_donation", label: "Blood Donation" },
    { id: "committee_moments", label: "Momen Panitia" },
    { id: "behind_the_scenes", label: "Balik Layar" },
  ];

  const filteredItems = gallery.filter((g) => {
    return !selectedCat || g.category === selectedCat;
  });

  const lightboxItems: LightboxItem[] = filteredItems.map((g) => ({
    src: g.imageUrl || "",
    caption: g.caption || g.title,
  }));

  const openLightbox = (index: number) => {
    if (filteredItems[index]?.imageUrl) {
      setLightboxIndex(index);
      setIsLightboxOpen(true);
    }
  };

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ PHERO (RATA TENGAH & BERSIH) ============ */}
        <section className="phero py-24 md:py-32 bg-[var(--forest-dark)] text-white relative overflow-hidden">
          <LeavesArt className="phero__art" />
          <div className="wrap max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              Dokumentasi Kegiatan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-4">
              Momen yang kami <em className="it font-normal text-[var(--sand)]">rawat</em>
            </h1>
            <p className="lead text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed text-center">
              Kumpulan dokumentasi perjalanan Social Is Me dari aksi pengabdian di lapangan hingga kebersamaan panitia
            </p>
          </div>
        </section>

        {/* ============ GALLERY GRID (RATA TENGAH & BERSIH) ============ */}
        <section className="sec page-sec py-20 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-6xl mx-auto px-4">
            {/* Filters Centered */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
              <button
                type="button"
                onClick={() => setSelectedCat("")}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCat === ""
                    ? "bg-[var(--sim-forest-accent)] text-white shadow-sm"
                    : "bg-[var(--sim-bg-card)] text-[var(--sim-text-muted)] border border-[var(--sim-border)] hover:bg-[var(--sim-bg-hover)]"
                }`}
              >
                Semua Kategori
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCat(c.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCat === c.id
                      ? "bg-[var(--sim-forest-accent)] text-white shadow-sm"
                      : "bg-[var(--sim-bg-card)] text-[var(--sim-text-muted)] border border-[var(--sim-border)] hover:bg-[var(--sim-bg-hover)]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Grid of Clean Photo Placeholder Frames */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <article
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="rounded-3xl border border-[var(--sim-border)] bg-[var(--sim-bg-card)] p-8 aspect-[4/3] flex flex-col justify-between hover:border-[var(--sim-forest-accent)] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)]">
                      {galleryCatLabel(item.category)}
                    </span>
                    <span className="text-xs text-[var(--sim-text-muted)]">SIM 2027</span>
                  </div>

                  <div className="text-center my-auto py-4">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--sim-bg-secondary)] border border-[var(--sim-border)] text-[var(--sim-text-muted)] flex items-center justify-center mx-auto mb-3 group-hover:text-[var(--sim-forest-accent)] group-hover:border-[var(--sim-forest-accent)] transition-colors">
                      <Icon name="camera" size={24} />
                    </div>
                    <h3 className="font-serif text-base font-bold text-[var(--sim-text-primary)]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-center pt-3 border-t border-[var(--sim-border)]/60 text-xs text-[var(--sim-text-muted)]">
                    Tempat Foto Dokumentasi
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onChangeIndex={(i) => setLightboxIndex(i)}
      />

      <Footer />
    </>
  );
}
