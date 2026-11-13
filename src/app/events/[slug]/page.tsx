"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CoverArt, SeedArt } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";
import { tgl, statusLabel } from "@/lib/utils";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { getEventBySlug, sdgs, events, settings } = useData();

  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <>
        <Navbar theme="dark" />
        <main id="main">
          <section className="sec py-32 bg-[var(--sim-bg-primary)]">
            <div className="wrap max-w-xl mx-auto text-center">
              <div className="p-12 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)]">
                <Icon name="calendar" size={40} className="mx-auto mb-4 text-[var(--sim-text-muted)]" />
                <h3 className="text-2xl font-serif font-bold mb-2">Kegiatan tidak ditemukan</h3>
                <p className="text-sm text-[var(--sim-text-muted)] mb-6">
                  Tautan mungkin salah atau kegiatan sudah dipindahkan
                </p>
                <Link className="btn btn--leaf text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2" href="/events">
                  Kembali ke Kegiatan <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const isOpen =
    event.status === "open_registration" && !!event.registrationType;

  // SDGs linked to this event
  const eventSDGs = (event.sdgIds || [])
    .map((sdgNo) => sdgs.find((s) => s.number === sdgNo))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Related events
  const relatedEvents = events
    .filter((e) => e.id !== event.id && !e.isArchived)
    .slice(0, 3);

  const tone: "moss" | "clay" | "sand" =
    event.categorySlug === "social-outreach"
      ? "moss"
      : event.categorySlug === "blood-donation"
      ? "clay"
      : "sand";

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ PHERO ============ */}
        <section className="phero py-24 md:py-32 bg-[var(--forest-dark)] text-white relative overflow-hidden">
          <div className="wrap max-w-5xl mx-auto px-4 relative z-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] shadow-sm">
                {event.categoryName}
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/90 border border-white/20">
                Edisi {event.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-4">
              {event.title}
            </h1>

            {event.shortDescription && (
              <p className="lead text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
                {event.shortDescription}
              </p>
            )}
          </div>
        </section>

        {/* ============ DETAIL CONTENT ============ */}
        <section className="sec page-sec py-20 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {event.status === "coming_soon" && (
                <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] flex items-center justify-center shrink-0">
                    <SeedArt className="w-8 h-8" />
                  </div>
                  <div>
                    <strong className="block text-xl font-serif mb-1">Segera Dibuka</strong>
                    <p className="text-sm text-[var(--sim-text-muted)]">
                      Persiapan kegiatan sedang berlangsung. Pantau terus kanal resmi SIM untuk jadwal pembukaan pendaftaran
                    </p>
                  </div>
                </div>
              )}

              {event.description && (
                <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)]">
                  <h3 className="font-serif text-2xl font-bold text-[var(--sim-text-primary)] mb-4">
                    Tentang Kegiatan
                  </h3>
                  <p className="text-base text-[var(--sim-text-muted)] leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              )}

              {/* SDGs linked */}
              {eventSDGs.length > 0 && (
                <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)]">
                  <h3 className="font-serif text-2xl font-bold text-[var(--sim-text-primary)] mb-4">
                    SDGs yang Diangkat
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {eventSDGs.map((s) => (
                      <Link
                        key={s.id}
                        className="p-4 rounded-2xl border transition-all flex items-center gap-4 hover:shadow-sm group"
                        style={{ borderColor: s.color }}
                        href={`/sdgs?n=${s.number}`}
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm border border-black/10 bg-white">
                          <img
                            src={`/sdg-${s.number}.png`}
                            alt={`SDG ${s.number}: ${s.name}`}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <b className="block text-sm font-semibold text-[var(--sim-text-primary)] group-hover:text-[var(--sim-forest-accent)] transition-colors">
                            SDG {s.number}
                          </b>
                          <span className="text-xs text-[var(--sim-text-muted)]">
                            {s.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Linimasa kegiatan */}
              {event.timeline && event.timeline.length > 0 && (
                <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)]">
                  <h3 className="font-serif text-2xl font-bold text-[var(--sim-text-primary)] mb-6">
                    Linimasa Kegiatan
                  </h3>
                  <div className="space-y-6 border-l-2 border-[var(--sim-border)] ml-3 pl-6">
                    {event.timeline.map((t) => (
                      <div key={t.id} className="relative">
                        <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--sim-forest-accent)] ring-4 ring-[var(--sim-bg-card)]" />
                        <span className="text-xs uppercase tracking-wider font-semibold text-[var(--sim-forest-accent)] block mb-1">
                          {t.timeLabel}
                        </span>
                        <h5 className="font-serif text-lg font-bold text-[var(--sim-text-primary)]">
                          {t.title}
                        </h5>
                        {t.description && (
                          <p className="text-sm text-[var(--sim-text-muted)] mt-1">
                            {t.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rekap highlights */}
              {event.recap && (
                <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)]">
                  <h3 className="font-serif text-2xl font-bold text-[var(--sim-text-primary)] mb-4">
                    Sorotan &amp; Dokumentasi
                  </h3>
                  <p className="text-base text-[var(--sim-text-muted)] leading-relaxed mb-6">
                    {event.recap.summary}
                  </p>
                  <ul className="space-y-3">
                    {event.recap.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--sim-text-primary)]">
                        <Icon name="check" size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-3xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] sticky top-28">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--sim-bg-secondary)] mb-6">
                  {event.coverImage ? (
                    <img src={event.coverImage} alt={event.title} className="w-full h-full object-cover" />
                  ) : (
                    <CoverArt tone={tone} />
                  )}
                </div>

                <h4 className="font-serif text-xl font-bold text-[var(--sim-text-primary)] mb-4">
                  Informasi Penting
                </h4>

                <div className="space-y-4 text-sm divide-y divide-[var(--sim-border)]">
                  {event.eventDate && (
                    <div className="pt-3 first:pt-0">
                      <span className="block text-xs uppercase tracking-wider text-[var(--sim-text-muted)] font-semibold mb-1">
                        Tanggal Pelaksanaan
                      </span>
                      <span className="font-medium text-[var(--sim-text-primary)]">
                        {tgl(event.eventDate)}
                      </span>
                    </div>
                  )}

                  {event.location && (
                    <div className="pt-3">
                      <span className="block text-xs uppercase tracking-wider text-[var(--sim-text-muted)] font-semibold mb-1">
                        Lokasi Kegiatan
                      </span>
                      <span className="font-medium text-[var(--sim-text-primary)]">
                        {event.location}
                      </span>
                    </div>
                  )}

                  {event.quota && (
                    <div className="pt-3">
                      <span className="block text-xs uppercase tracking-wider text-[var(--sim-text-muted)] font-semibold mb-1">
                        Kuota Peserta
                      </span>
                      <span className="font-medium text-[var(--sim-text-primary)]">
                        {event.quota} Orang
                      </span>
                    </div>
                  )}

                  <div className="pt-3">
                    <span className="block text-xs uppercase tracking-wider text-[var(--sim-text-muted)] font-semibold mb-1">
                      Status Pendaftaran
                    </span>
                    <span className={`badge badge--${event.status}`}>
                      <i />
                      {statusLabel(event.status)}
                    </span>
                  </div>
                </div>

                {/* Direct Google Form Registration Button */}
                {isOpen && (
                  <div className="mt-8">
                    <a
                      className="btn btn--leaf w-full text-center py-3 text-sm font-semibold rounded-full block shadow-sm"
                      href={event.registrationUrl || settings.google_form_url || "https://forms.gle/SIM2027Registration"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Daftar (Google Form) <Icon name="arrow" size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
