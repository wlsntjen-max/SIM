"use client";

import React, { useEffect } from "react";
import { Icon } from "@/lib/icons";

export interface LightboxItem {
  src?: string;
  videoUrl?: string;
  caption?: string;
}

export function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onChangeIndex,
}: {
  items: LightboxItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChangeIndex((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onChangeIndex((currentIndex + 1) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex, items.length, onClose, onChangeIndex]);

  if (!isOpen || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div
      className="lightbox is-on"
      role="dialog"
      aria-modal="true"
      aria-label="Penampil foto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lb-btn lb-close" aria-label="Tutup" onClick={onClose}>
        <Icon name="x" size={22} />
      </button>

      {items.length > 1 && (
        <>
          <button
            className="lb-btn lb-prev"
            aria-label="Sebelumnya"
            onClick={() =>
              onChangeIndex((currentIndex - 1 + items.length) % items.length)
            }
          >
            <Icon name="arrow" size={22} />
          </button>
          <button
            className="lb-btn lb-next"
            aria-label="Berikutnya"
            onClick={() => onChangeIndex((currentIndex + 1) % items.length)}
          >
            <Icon name="arrow" size={22} />
          </button>
        </>
      )}

      <figure>
        {current.videoUrl ? (
          <iframe
            src={current.videoUrl}
            allowFullScreen
            loading="lazy"
            title="Video Dokumentasi"
          />
        ) : (
          <img src={current.src} alt={current.caption || "Dokumentasi SIM"} />
        )}
        {current.caption && <figcaption>{current.caption}</figcaption>}
      </figure>
    </div>
  );
}
