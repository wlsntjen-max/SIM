"use client";

import React, { createContext, useContext, useState } from "react";
import {
  Event,
  EventCategory,
  SDG,
  Committee,
  GalleryItem,
  SiteSettings,
} from "@/types";
import {
  initialSettings,
  initialCategories,
  initialSDGs,
  initialCommittees,
  initialEvents,
  initialGallery,
} from "@/data/initialData";

interface ToastMessage {
  id: string;
  type: "ok" | "err" | "info";
  message: string;
}

interface DataContextType {
  settings: SiteSettings;
  categories: EventCategory[];
  sdgs: SDG[];
  committees: Committee[];
  events: Event[];
  gallery: GalleryItem[];
  getEventBySlug: (slug: string) => Event | undefined;
  getEventsByYear: (year: number) => Event[];
  getCommitteeByYear: (year: number) => Committee | undefined;
  toasts: ToastMessage[];
  addToast: (message: string, type?: "ok" | "err" | "info") => void;
  showToast: (message: string, type?: "ok" | "err" | "info") => void;
  removeToast: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [settings] = useState<SiteSettings>(initialSettings);
  const [categories] = useState<EventCategory[]>(initialCategories);
  const [sdgs] = useState<SDG[]>(initialSDGs);
  const [committees] = useState<Committee[]>(initialCommittees);
  const [events] = useState<Event[]>(initialEvents);
  const [gallery] = useState<GalleryItem[]>(initialGallery);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: "ok" | "err" | "info" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getEventBySlug = (slug: string) => {
    return events.find((e) => e.slug === slug);
  };

  const getEventsByYear = (year: number) => {
    return events.filter((e) => e.year === year);
  };

  const getCommitteeByYear = (year: number) => {
    return committees.find((c) => c.year === year);
  };

  return (
    <DataContext.Provider
      value={{
        settings,
        categories,
        sdgs,
        committees,
        events,
        gallery,
        getEventBySlug,
        getEventsByYear,
        getCommitteeByYear,
        toasts,
        addToast,
        showToast: addToast,
        removeToast,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(): DataContextType {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
