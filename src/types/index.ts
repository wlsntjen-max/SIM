// Social Is Me (SIM) - TypeScript Domain Models
// Pure Frontend Architecture for Next.js

export type EventStatus =
  | "coming_soon"
  | "open_registration"
  | "registration_closed"
  | "completed";

export type RegistrationType = "volunteer" | "outreach" | "blood_donation";

export type ImpactMetric =
  | "volunteers"
  | "students_reached"
  | "schools_involved"
  | "blood_donations"
  | "activities_completed"
  | "community_initiatives"
  | string;

export type GalleryCategory =
  | "social_outreach"
  | "blood_donation"
  | "behind_the_scenes"
  | "committee_moments";

export type MemberLevel = "po" | "vpo" | "leader" | "member" | "special";

export interface SiteSettings {
  name: string;
  short: string;
  org: string;
  orgLong: string;
  tagline: string;
  current_year: string;
  show_sample_data: string;
  contact_email: string;
  instagram: string;
  whatsapp?: string;
  pmi_eligibility: string;
  google_form_url: string;
  registration_links: {
    volunteer: string;
    day1: string;
    day2: string;
  };
  [key: string]: any;
}

export interface EventCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface EventTimelineItem {
  id: number;
  eventId: number;
  timeLabel: string;
  title: string;
  description?: string;
  sortOrder: number;
}

export interface EventRecap {
  id: number;
  eventId: number;
  summary: string;
  highlights: string[];
  introduction?: string;
  reportUrl?: string;
  attendanceCount?: number;
  photosCount?: number;
}

export interface Event {
  id: number;
  slug: string;
  title: string;
  year: number;
  categoryId: number;
  categorySlug: string;
  categoryName: string;
  eventDate?: string;
  location?: string;
  registrationClose?: string;
  quota?: number;
  status: EventStatus;
  registrationType?: RegistrationType;
  registrationUrl?: string; // Manual Google Form URL
  shortDescription?: string;
  description?: string;
  background?: string;
  objectives?: string[];
  coverImage?: string;
  isArchived: boolean;
  isSample: boolean;
  timeline?: EventTimelineItem[];
  recap?: EventRecap;
  sdgs?: number[];
  sdgIds?: number[];
  stats?: { value: number; metric: string; label?: string }[];
}

export interface SDG {
  id: number;
  number: 3 | 12;
  name: string;
  color: string;
  official: string;
  connection: string;
  points: string[];
  description: string;
  problems: string;
  whyMatters: string;
  solutions: string;
  simContribution: string;
}

export interface Member {
  id: number;
  divisionId: number;
  name: string;
  position: string;
  level: MemberLevel;
  photo?: string;
  sortOrder: number;
  year?: number;
}

export interface Division {
  id: number;
  committeeId: number;
  name: string;
  code: string;
  description: string;
  landmarkName: string;
  landmarkX: number; // 0..100 percentage on interactive map
  landmarkY: number; // 0..100 percentage on interactive map
  sortOrder: number;
  accentColor?: string;
  groupPhoto?: string;
  members: Member[];
}

export interface Committee {
  id: number;
  year: number;
  name: string;
  theme: string;
  description?: string;
  divisions: Division[];
}

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  year: number;
  imageUrl?: string;
  caption?: string;
}
