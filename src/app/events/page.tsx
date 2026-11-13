"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/ui/EventCard";
import { NetArt, CoverArt } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";
import { tgl, regTypeLabel } from "@/lib/utils";

function EventsPageContent() {
  const { events, settings } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance hero slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const showSample = settings.show_sample_data === "1";

  // Visible events based on settings
  const visibleEvents = events.filter(
    (e) => !e.isArchived && (showSample || !e.isSample)
  );

  // Upcoming events
  const upcomingEvents = visibleEvents.filter((e) => e.status !== "completed");
  const openEvents = upcomingEvents.filter(
    (e) => e.status === "open_registration" && !!e.registrationType
  );
  const restUpcoming = upcomingEvents.filter(
    (e) => !(e.status === "open_registration" && !!e.registrationType)
  );

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ HERO SLIDER (PERSIS SIM1: SLIDING BACKGROUND + DOTS) ============ */}
        <section className="phero phero--slider" id="heroSlider" data-count="3">
          <div className="hslides" aria-hidden="true">
            {/* Slide 1: Botanical Forest Tone */}
            <div className={`hslide hslide--art ${currentSlide === 0 ? "is-on" : ""}`}>
              <NetArt className="phero__art" />
            </div>

            {/* Slide 2: Warm Earthy Forest Tone */}
            <div className={`hslide hslide--art hslide--b ${currentSlide === 1 ? "is-on" : ""}`}>
              <NetArt className="phero__art" />
            </div>

            {/* Slide 3: Deep Emerald Tone */}
            <div className={`hslide hslide--art hslide--c ${currentSlide === 2 ? "is-on" : ""}`}>
              <NetArt className="phero__art" />
            </div>
          </div>

          <div className="phero__shade" aria-hidden="true" />

          <div className="wrap">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
              Registration Hub
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-4">
              Temukan tempatmu <em className="it" style={{ color: "var(--sand)" }}>bertumbuh</em>
            </h1>

            {/* 3 Slide Indicator Dots (Clickable & expands when active) */}
            <div className="hdots" role="group" aria-label="Pilih slide">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`hdot ${currentSlide === idx ? "is-on" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ UPCOMING EVENTS (PERSIS SIM1 & IMAGE 6) ============ */}
        <section className="sec py-20 bg-[var(--sim-bg-primary)]" id="daftar">
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead mb-14 text-center max-w-2xl mx-auto">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>01</b>
                <span>Upcoming Events</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] leading-tight">
                Kegiatan yang Akan Datang
              </h2>
            </header>

            {/* Featured Open Registration Card (Image 6 style) */}
            {openEvents.map((ev) => (
              <article
                key={ev.id}
                className="hub-open rounded-3xl overflow-hidden border border-[var(--sim-border)] bg-[var(--sim-bg-card)] grid grid-cols-1 lg:grid-cols-12 mb-12 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[280px] bg-[var(--sim-bg-secondary)] overflow-hidden">
                  <CoverArt tone="moss" />
                  <span className="ecard__year">{ev.year}</span>
                </div>

                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="badge badge--open_registration text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 flex items-center gap-2">
                        <i className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        Pendaftaran Dibuka
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-[var(--sim-text-primary)] mb-3">
                      {ev.title}
                    </h3>

                    {ev.shortDescription && (
                      <p className="text-base text-[var(--sim-text-muted)] leading-relaxed mb-6">
                        {ev.shortDescription}
                      </p>
                    )}

                    <div className="hub-meta flex flex-wrap gap-4 text-xs md:text-sm text-[var(--sim-text-muted)] mb-8">
                      {ev.registrationType && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <Icon name="users" size={16} />
                          {regTypeLabel(ev.registrationType)}
                        </span>
                      )}
                      {ev.registrationClose && (
                        <span className="flex items-center gap-1.5">
                          <Icon name="calendar" size={16} /> Ditutup {tgl(ev.registrationClose)}
                        </span>
                      )}
                      {ev.quota && (
                        <span className="flex items-center gap-1.5">
                          <Icon name="check" size={16} /> Kuota {ev.quota} Peserta
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Manual Google Form Registration Button */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      className="btn btn--leaf text-sm md:text-base font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-sm hover:-translate-y-0.5 transition-transform"
                      href={ev.registrationUrl || settings.google_form_url || "https://forms.gle/SIM2027Registration"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Daftar Sekarang <Icon name="arrow" size={18} />
                    </a>
                    <Link
                      className="btn btn--ghost text-sm md:text-base font-semibold px-6 py-3.5 rounded-full border border-[var(--sim-border)] hover:bg-[var(--sim-bg-hover)]"
                      href={`/events/${ev.slug}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Remaining Upcoming Cards: Day 01 Social Outreach & Day 02 Blood Donation (Image 6 style) */}
            {restUpcoming.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {restUpcoming.map((ev) => (
                  <EventCard key={ev.id} event={ev} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--sim-bg-primary)]" />}>
      <EventsPageContent />
    </Suspense>
  );
}
