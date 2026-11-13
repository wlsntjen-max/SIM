import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  EventStatus,
  RegistrationType,
  ImpactMetric,
  GalleryCategory,
  MemberLevel,
} from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BULAN = [
  "",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function tgl(dateStr?: string | null, withTime = false): string {
  if (!dateStr) return "";
  const d = new Date(dateStr.replace(/-/g, "/"));
  if (isNaN(d.getTime())) return dateStr;

  const day = d.getDate();
  const month = BULAN[d.getMonth() + 1] || "";
  const year = d.getFullYear();
  const dateFormatted = `${day} ${month} ${year}`;

  if (!withTime) return dateFormatted;

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${dateFormatted}, ${hours}.${minutes} WIB`;
}

export const formatDateIndo = tgl;

export function statusLabel(s: EventStatus | string): string {
  switch (s) {
    case "coming_soon":
    case "coming-soon":
      return "Segera Hadir";
    case "open_registration":
    case "open":
      return "Pendaftaran Dibuka";
    case "registration_closed":
    case "closed":
      return "Pendaftaran Ditutup";
    case "completed":
      return "Telah Selesai";
    default:
      return s;
  }
}

export function regTypeLabel(t: RegistrationType | string): string {
  switch (t) {
    case "volunteer":
      return "Relawan";
    case "outreach":
      return "Peserta Social Outreach";
    case "blood_donation":
      return "Pendonor Darah";
    default:
      return t;
  }
}

export function metricLabel(m: ImpactMetric | string): string {
  switch (m) {
    case "volunteers":
      return "Relawan";
    case "students_reached":
      return "Siswa Terjangkau";
    case "schools_involved":
      return "Sekolah Terlibat";
    case "blood_donations":
      return "Donor Darah Berhasil";
    case "activities_completed":
      return "Kegiatan Terlaksana";
    case "community_initiatives":
      return "Inisiatif Komunitas";
    default:
      return m;
  }
}

export function galleryCatLabel(c: GalleryCategory | string): string {
  switch (c) {
    case "social_outreach":
      return "Social Outreach";
    case "blood_donation":
      return "Blood Donation";
    case "behind_the_scenes":
      return "Behind the Scenes";
    case "committee_moments":
      return "Momen Panitia";
    case "volunteer_stories":
      return "Cerita Relawan";
    default:
      return c;
  }
}

export function levelLabel(l: MemberLevel | string): string {
  switch (l) {
    case "po":
      return "Project Officer";
    case "vpo":
      return "Vice Project Officer";
    case "leader":
      return "Ketua Divisi";
    case "member":
      return "Anggota";
    case "special":
      return "Kontributor Khusus";
    default:
      return l;
  }
}

export function makeSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateRegNumber(year: number = 2026): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SIM-${year}-${code}`;
}

export const generateReferenceNumber = (category?: string, year: number = 2026) => {
  return generateRegNumber(year);
};

export function generateQrToken(): string {
  const chars = "0123456789abcdef";
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

export function getStatusBadge(status: EventStatus | string) {
  switch (status) {
    case "open":
    case "open_registration":
      return {
        label: "Pendaftaran Dibuka",
        bg: "bg-emerald-50 text-emerald-800",
        border: "border-emerald-200",
        dot: "bg-emerald-500 animate-pulse",
      };
    case "closed":
    case "registration_closed":
      return {
        label: "Pendaftaran Ditutup",
        bg: "bg-amber-50 text-amber-800",
        border: "border-amber-200",
        dot: "bg-amber-500",
      };
    case "completed":
      return {
        label: "Telah Terlaksana",
        bg: "bg-slate-100 text-slate-700",
        border: "border-slate-200",
        dot: "bg-slate-400",
      };
    case "coming-soon":
    case "coming_soon":
    default:
      return {
        label: "Segera Hadir",
        bg: "bg-blue-50 text-blue-800",
        border: "border-blue-200",
        dot: "bg-blue-500",
      };
  }
}

export function getCategoryBadge(category: any) {
  const str = String(category);
  if (str.includes("social") || str.includes("outreach") || str.includes("education")) {
    return {
      label: "Social Outreach",
      bg: "bg-terracotta-50 text-terracotta-dark",
      border: "border-terracotta/30",
    };
  }
  if (str.includes("health") || str.includes("blood") || str.includes("donation")) {
    return {
      label: "Blood Donation",
      bg: "bg-crimson-50 text-crimson-dark",
      border: "border-crimson/30",
    };
  }
  return {
    label: "Lainnya",
    bg: "bg-recycled-50 text-recycled-dark",
    border: "border-recycled/30",
  };
}
