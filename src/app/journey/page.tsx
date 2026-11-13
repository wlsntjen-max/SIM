"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeavesArt, ForestMapBackground } from "@/lib/art";
import { Icon } from "@/lib/icons";
import { useData } from "@/context/DataContext";
import { Division } from "@/types";
import { levelLabel } from "@/lib/utils";

export default function JourneyPage() {
  const { committees } = useData();

  // Hanya kepanitiaan tahun ini (tanpa arsip tahun lalu)
  const currentCommittee = committees[0];
  const divisions = currentCommittee?.divisions || [];

  // Active division state for drawer
  const [activeDivision, setActiveDivision] = useState<Division | null>(null);

  // Total committee members
  const totalMembers = divisions.reduce(
    (sum, d) => sum + (d.members?.length || 0),
    0
  );

  const mapDivisions = divisions.map((d) => ({
    id: d.id,
    mapX: d.landmarkX || 50,
    mapY: d.landmarkY || 50,
  }));

  return (
    <>
      <Navbar theme="dark" />

      <main id="main">
        {/* ============ PHERO (RATA TENGAH & BERSIH) ============ */}
        <section className="phero py-20 md:py-28 bg-[var(--forest-dark)] text-white relative overflow-hidden">
          <LeavesArt className="phero__art" />
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[var(--sand)]/50 text-[var(--sand)] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm">
              The People Behind The Impact
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[var(--ivory)] leading-tight mb-3">
              Kepanitiaan <em className="it font-normal text-[var(--sand)]">{currentCommittee.name}</em>
            </h1>
            <p className="lead text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Peta formasi seluruh divisi dan anggota panitia yang merawat serta menjalankan gerakan Social Is Me tahun ini
            </p>

            <div className="flex items-center gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[var(--sand)]/20 text-[var(--sand)] flex items-center justify-center font-bold font-serif text-xl border border-[var(--sand)]/30">
                60
              </div>
              <div className="text-left">
                <span className="block text-[11px] uppercase tracking-wider text-[var(--sand)] font-semibold">
                  Total Panitia
                </span>
                <span className="text-sm font-medium text-white/90">
                  60 Anggota &nbsp;·&nbsp; {divisions.length} Divisi Pelaksana
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FULL-WIDTH EXPANSIVE INTERACTIVE MAP (WRAP--WIDE) ============ */}
        <section className="w-full bg-[var(--forest-dark)] relative overflow-hidden py-8 border-y border-white/10">
          <div className="wrap--wide">
            <div className="flex items-center justify-between mb-4 px-2">
              <p className="text-xs uppercase tracking-widest text-[var(--sand)] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--sand)] animate-ping" />
                Peta Formasi Panitia Interaktif
              </p>
              <span className="text-xs text-white/60 hidden sm:inline">
                Klik ikon divisi pada peta untuk membuka rincian anggota
              </span>
            </div>

            {/* Expansive Full Forest Canvas */}
            <div className="forest-wrap relative w-full aspect-[21/10] min-h-[580px] md:min-h-[720px] lg:min-h-[820px] rounded-3xl overflow-hidden border border-white/15 bg-[#0a1e17] shadow-2xl">
              {/* Procedural River & Tree Canopy with River Flow and Tree Sway */}
              <ForestMapBackground divisions={mapDivisions} />

              {/* Division Landmark Node Pins */}
              {divisions.map((d) => {
                const isOn = activeDivision?.id === d.id;
                const isBPH = d.code === "BPH";

                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setActiveDivision(d)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-300 focus:outline-none group ${
                      isOn ? "scale-110 z-30" : "hover:scale-105"
                    }`}
                    style={{
                      left: `${d.landmarkX}%`,
                      top: `${d.landmarkY}%`,
                    }}
                    title={`Lihat Divisi ${d.name}`}
                  >
                    {/* Node Visual */}
                    <div
                      className={`relative flex items-center gap-3.5 p-2.5 sm:p-3.5 rounded-2xl backdrop-blur-md shadow-xl border-2 transition-all ${
                        isOn
                          ? "bg-black/90 ring-4 ring-[var(--sand)] border-[var(--sand)] text-white"
                          : "bg-black/70 border-white/30 text-white/95 group-hover:bg-black/85 group-hover:border-[var(--sand)]"
                      }`}
                      style={{
                        minWidth: isBPH ? "220px" : "190px",
                      }}
                    >
                      {/* Avatar / Icon Indicator */}
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex flex-col items-center justify-center font-bold text-white shrink-0 shadow-inner border border-white/20 overflow-hidden"
                        style={{ backgroundColor: d.accentColor || "#879B78" }}
                      >
                        <Icon name="users" size={20} />
                        <span className="text-[10px] font-sans font-normal opacity-90">
                          {d.code}
                        </span>
                      </div>

                      {/* Info Badge */}
                      <div className="text-left min-w-0 pr-1">
                        <span className="block text-[10px] uppercase tracking-wider text-[var(--sand)] font-semibold truncate">
                          {d.landmarkName}
                        </span>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight truncate">
                          {d.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-white/75">
                          <span>{d.members?.length || 0} Orang</span>
                          <span>•</span>
                          <span className="text-[var(--sand)] group-hover:underline">Buka</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Bottom Helper Bar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-black/75 backdrop-blur-md text-white/90 text-xs sm:text-sm border border-white/20 shadow-lg pointer-events-none flex items-center gap-2">
                <Icon name="spark" size={16} className="text-[var(--sand)]" />
                Peta Formasi Panitia SIM 2027 — Klik divisi untuk rincian
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPLETE DIVISION ROSTER (FULL-WIDTH EXPANSIVE RECAP) ============ */}
        <section className="sec py-20 bg-[var(--sim-bg-primary)]">
          <div className="wrap max-w-6xl mx-auto px-4">
            <header className="shead mb-14 text-center max-w-2xl mx-auto">
              <p className="label label--num text-sm uppercase tracking-wider text-[var(--sim-forest-accent)] font-semibold mb-2">
                <b>01</b>
                <span>Struktur Kepanitiaan</span>
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--sim-text-primary)] mb-3">
                Seluruh Divisi SIM 2027
              </h2>
            </header>

            {/* Grid of All Divisions with Clean Photo Placeholder Frames */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((div) => (
                <article
                  key={div.id}
                  className="rounded-3xl border border-[var(--sim-border)] bg-[var(--sim-bg-card)] p-8 shadow-sm flex flex-col justify-between hover:border-[var(--sim-forest-accent)] transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: div.accentColor || "#879B78" }}
                      >
                        {div.code}
                      </span>
                      <span className="text-xs font-serif italic text-[var(--sim-text-muted)]">
                        {div.landmarkName}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[var(--sim-text-primary)] mb-3">
                      {div.name}
                    </h3>

                    <p className="text-sm text-[var(--sim-text-muted)] leading-relaxed mb-6">
                      {div.description}
                    </p>

                    {/* Clean Photo Placeholder Frame */}
                    <div className="mb-6 p-6 rounded-2xl border-2 border-dashed border-[var(--sim-border)] bg-[var(--sim-bg-secondary)]/50 text-center flex flex-col items-center justify-center min-h-[140px] group hover:border-[var(--sim-forest-accent)] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] flex items-center justify-center mb-2">
                        <Icon name="camera" size={20} />
                      </div>
                      <span className="text-xs font-semibold text-[var(--sim-text-primary)]">
                        Tempat Foto Divisi
                      </span>
                    </div>

                    {/* Members List */}
                    <div className="border-t border-[var(--sim-border)] pt-4 space-y-3">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[var(--sim-text-muted)] block">
                        Anggota Divisi ({div.members?.length || 0})
                      </span>
                      {div.members && div.members.length > 0 && (
                        <div className="space-y-2.5">
                          {div.members.map((m) => (
                            <div
                              key={m.id}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--sim-bg-secondary)] text-sm"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] flex items-center justify-center font-bold text-xs">
                                  {m.name.charAt(0)}
                                </div>
                                <div>
                                  <b className="block text-xs md:text-sm text-[var(--sim-text-primary)]">
                                    {m.name}
                                  </b>
                                  <span className="text-[11px] text-[var(--sim-text-muted)]">
                                    {m.position}
                                  </span>
                                </div>
                              </div>
                              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--sim-bg-card)] border border-[var(--sim-border)] text-[var(--sim-text-muted)]">
                                {levelLabel(m.level)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--sim-border)]">
                    <button
                      type="button"
                      onClick={() => setActiveDivision(div)}
                      className="w-full py-2.5 rounded-xl border border-[var(--sim-border)] text-xs font-semibold text-[var(--sim-forest-accent)] hover:bg-[var(--sim-bg-hover)] transition-colors flex items-center justify-center gap-2"
                    >
                      Buka Rincian Divisi <Icon name="arrow" size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DRAWER SIDEBAR (SLIDE-IN MODAL IDENTICAL TO SIM1) ============ */}
        {activeDivision && (
          <>
            <div
              className="drawer-bg is-on"
              onClick={() => setActiveDivision(null)}
              aria-hidden="true"
            />
            <aside
              className="drawer is-on"
              role="dialog"
              aria-modal="true"
              aria-label={`Rincian Divisi ${activeDivision.name}`}
            >
              <div
                className="drawer__head relative"
                style={
                  {
                    "--a": activeDivision.accentColor || "#879B78",
                  } as React.CSSProperties
                }
              >
                <button
                  type="button"
                  className="drawer__close"
                  onClick={() => setActiveDivision(null)}
                  aria-label="Tutup panel"
                >
                  <Icon name="x" size={20} />
                </button>

                <div
                  className="emblem"
                  style={{
                    backgroundColor: activeDivision.accentColor || "#879B78",
                  }}
                >
                  <Icon name="users" size={32} />
                </div>

                <p className="label">{activeDivision.landmarkName}</p>
                <h2 className="text-3xl font-serif font-bold text-white">
                  {activeDivision.name}
                </h2>
                <p className="text-sm text-white/80 mt-2">
                  {activeDivision.description}
                </p>
              </div>

              <div className="drawer__body p-8 space-y-8">
                {/* Photo Placeholder Slot */}
                <div>
                  <h3 className="text-lg font-serif font-bold mb-3">Foto Bersama Divisi</h3>
                  <div className="aspect-video rounded-2xl border-2 border-dashed border-[var(--sim-border)] bg-[var(--sim-bg-secondary)] flex flex-col items-center justify-center text-center p-6">
                    <Icon name="camera" size={32} className="text-[var(--sim-forest-accent)] mb-2" />
                    <span className="text-xs font-semibold text-[var(--sim-text-primary)]">
                      Tempat Foto Bersama Divisi
                    </span>
                  </div>
                </div>

                {/* Member Roster */}
                <div>
                  <h3 className="text-lg font-serif font-bold mb-4">
                    Susunan Anggota ({activeDivision.members?.length || 0})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeDivision.members?.map((m) => (
                      <div
                        key={m.id}
                        className="p-3.5 rounded-2xl bg-[var(--sim-bg-card)] border border-[var(--sim-border)] flex items-center gap-3 shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[var(--sim-forest-accent)]/15 text-[var(--sim-forest-accent)] flex items-center justify-center font-bold text-sm shrink-0">
                          {m.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <b className="block text-sm font-semibold truncate text-[var(--sim-text-primary)]">
                            {m.name}
                          </b>
                          <span className="text-xs text-[var(--sim-text-muted)] truncate block">
                            {m.position}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
