"use client";

import React from "react";
import Link from "next/link";
import { Event } from "@/types";
import { CoverArt } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { tgl, regTypeLabel, statusLabel } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  isArchive?: boolean;
}

export function EventCard({ event, isArchive = false }: EventCardProps) {
  const isOpen =
    event.status === "open_registration" && !!event.registrationType;
  const href = `/events/${event.slug}`;

  const tone: "moss" | "clay" | "sand" =
    event.categorySlug === "social-outreach"
      ? "moss"
      : event.categorySlug === "blood-donation"
      ? "clay"
      : "sand";

  return (
    <article
      className="ecard reveal is-in flex flex-col justify-between rounded-2xl overflow-hidden border border-[var(--sim-border)] bg-[var(--sim-bg-card)] transition-all hover:shadow-lg hover:border-[var(--sim-forest-accent)]"
      data-year={event.year}
      data-cat={event.categorySlug}
      data-name={event.title.toLowerCase()}
    >
      <div className="ecard__media relative aspect-[16/10] overflow-hidden bg-[var(--sim-bg-secondary)]">
        {event.coverImage ? (
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <CoverArt tone={tone} />
        )}

        <span className="ecard__year absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20">
          {event.year}
        </span>
      </div>

      <div className="ecard__body p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="ecard__top flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[var(--sim-text-muted)] mb-2">
            <span className="ecard__cat">{event.categoryName}</span>
            {event.isSample && (
              <span className="badge badge--sample text-[11px] px-2 py-0.5 rounded border border-amber-500/30 text-amber-600 bg-amber-500/10">
                Contoh
              </span>
            )}
          </div>

          <h3 className="ecard__title font-serif text-xl font-bold text-[var(--sim-text-primary)] mb-2 leading-snug">
            <Link href={href} className="hover:text-[var(--sim-forest-accent)] transition-colors">
              {event.title}
            </Link>
          </h3>

          {event.shortDescription && (
            <p className="ecard__desc text-sm text-[var(--sim-text-muted)] line-clamp-2 mb-4 leading-relaxed">
              {event.shortDescription}
            </p>
          )}

          {event.eventDate && (
            <p className="ecard__date text-xs text-[var(--sim-text-muted)] flex items-center gap-1.5 mb-4">
              <Icon name="calendar" size={14} />
              {tgl(event.eventDate)}
            </p>
          )}
        </div>

        <div className="ecard__foot pt-4 border-t border-[var(--sim-border)] flex items-center justify-between gap-3 mt-4">
          <span className={`badge badge--${event.status}`}>
            <i />
            {statusLabel(event.status)}
          </span>

          <div className="flex items-center gap-2">
            {isOpen && (
              <a
                className="btn btn--sm btn--leaf text-xs font-semibold px-3.5 py-1.5 rounded-full"
                href={event.registrationUrl || "https://forms.gle/SIM2027Registration"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Daftar
              </a>
            )}
            <Link className="link-arrow text-xs font-semibold text-[var(--sim-forest-accent)] hover:underline inline-flex items-center gap-1" href={href}>
              {event.status === "completed" ? "Rekap" : "Detail"} <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
