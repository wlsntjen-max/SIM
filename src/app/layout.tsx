import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/DataContext";
import { ToastContainer } from "@/components/ui/ToastContainer";
import { BackToTop } from "@/components/ui/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Social Is Me (SIM) | HIMSI Universitas Multimedia Nusantara",
  description:
    "Growing Together, Creating Impact. Social Is Me adalah program pengabdian masyarakat unggulan HIMSI UMN yang berfokus pada Social & Education, Health & Humanity, dan Environmental Sustainability.",
  keywords: [
    "Social Is Me",
    "SIM HIMSI UMN",
    "HIMSI UMN",
    "Pengabdian Masyarakat",
    "Universitas Multimedia Nusantara",
    "Donor Darah",
    "Edukasi",
    "Upcycling",
  ],
  openGraph: {
    title: "Social Is Me (SIM) - Growing Together, Creating Impact",
    description:
      "Tiga Pilar. Satu Tujuan. Program pengabdian masyarakat unggulan HIMSI UMN.",
    url: "https://sim.himsi-umn.id",
    siteName: "Social Is Me HIMSI UMN",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal antialiased selection:bg-sage selection:text-white">
        <DataProvider>
          {children}
          <ToastContainer />
          <BackToTop />
        </DataProvider>
      </body>
    </html>
  );
}
