# Social Is Me (SIM) - Digital Platform
### Flagship Community Service Program of HIMSI Universitas Multimedia Nusantara (UMN)

> **Main Tagline:** Growing Together, Creating Impact.  
> **Supporting Tagline:** Three Pillars. One Purpose.

---

## 1. Project Overview

**Social Is Me (SIM)** adalah platform digital modern, responsif, dan interaktif yang dibangun untuk memperkenalkan program pengabdian masyarakat unggulan Himpunan Mahasiswa Sistem Informasi (HIMSI) UMN.

Platform ini mengintegrasikan tiga pilar aksi sosial utama:
1. **Social & Education** (*Knowledge Creates Change*): Edukasi literasi digital, pengenalan logika pemrograman Scratch, pendampingan sekolah dasar binaan, dan donasi buku pojok baca.
2. **Health & Humanity** (*A Drop Can Save Lives*): Aksi donor darah massal civitas kampus UMN bermitra dengan Palang Merah Indonesia (PMI) Tangerang dan edukasi pola hidup sehat.
3. **Environmental Sustainability** (*Waste Less, Create More*): Edukasi 3R (Reduce, Reuse, Recycle), audit sampah anorganik, dan workshop upcycling botol plastik bekas menjadi mini storage organizer meja serbaguna.

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Motion & Interactions:** Framer Motion
- **Data Visualization:** Recharts
- **State Management:** React Context API + LocalStorage persistence
- **Typography:** Playfair Display (Editorial Headlines) & DM Sans (UI Elements)

---

## 3. Brand Identity & Design System

| Palette Color | Hex Code | Purpose |
|---|---|---|
| **Sage Green** | `#879B78` | Warna identitas brand utama |
| **Soft Fern** | `#A9B99A` | Aksen hijau lembut |
| **Pale Moss** | `#D8DFC9` | Latar kartu pendukung |
| **Warm Ivory** | `#F4F0E5` | Latar belakang website utama |
| **Earth Terracotta** | `#B68B6A` | Aksen pilar Social & Education |
| **Soft Crimson** | `#C87979` | Aksen pilar Health & Humanity |
| **Recycled Green** | `#71977D` | Aksen pilar Environmental Sustainability |
| **Sunlit Gold** | `#D6B879` | Detail highlight & Hall of Fame |
| **Bark Brown** | `#806D5D` | Tipografi dan kontras teks hangat |
| **River Blue** | `#819DA3` | Aksen data visualisasi |

---

## 4. Complete Sitemap & Routes

### Website Publik
1. **Beranda (`/`)**: Hero editorial, perkenalan SIM, highlight 3 pilar, kegiatan unggulan mendatang, filosofi program, pratinjau dampak, kisah inspiratif, galeri cuplikan, dan ajakan aksi.
2. **Tentang SIM (`/about`)**: Latar belakang, visi & misi, nilai inti (*Humanis, Kolaborasi, Keberlanjutan, Integritas*), sasaran penerima manfaat, dan koneksi dengan HIMSI UMN.
3. **Pilar Social & Education (`/pillars/social-education`)**: Pendekatan pembelajaran anak, literasi digital Scratch, agenda terkait, dan dokumentasi.
4. **Pilar Health & Humanity (`/pillars/health-humanity`)**: Kemitraan PMI, prosedur donor darah, pemberitahuan resmi skrining kesehatan, agenda donor, dan dokumentasi.
5. **Pilar Sustainability (`/pillars/environmental-sustainability`)**: Workshop upcycling botol plastik menjadi mini storage box dengan panduan interaktif step-by-step.
6. **Kegiatan / Agenda (`/events`)**: Daftar kegiatan mendatang dan telah terlaksana, filter kategori pilar, tahun, status registrasi, pencarian live, dan modal "Ingatkan Saya".
7. **Detail Kegiatan (`/events/[slug]`)**: Rundown acara, sasaran peserta, tujuan, syarat pendaftaran, FAQ khusus acara, dan tombol aksi dinamis.
8. **Rekap Editorial Kegiatan (`/events/[slug]/recap`)**: Laporan bergaya majalah editorial, foto sorotan, data terverifikasi, kutipan peserta, dan refleksi akhir.
9. **Registration Hub (`/registration`)**: Formulir pendaftaran relawan terpadu dengan deteksi duplikasi email, seleksi program studi, dan catatan medis PMI.
10. **Konfirmasi Registrasi (`/registration/confirmation`)**: Nomor referensi pendaftaran unik (contoh: `SIM-MEN-8421-2026`), salin kode otomatis, dan instruksi langkah berikutnya.
11. **Pelacakan Status (`/registration/status`)**: Pencarian pendaftaran berbasis nomor referensi atau email dengan visual stepper status (Diajukan, Verifikasi, Terkonfirmasi).
12. **SDGs Explorer (`/sdgs`)**: Hubungan spesifik SIM dengan SDG 3, 4, 12, dan 17 menggunakan warna resmi PBB dan indikator pencapaian.
13. **Statistik & Dampak (`/impact`)**: Dashboard analitik interaktif menggunakan Recharts (tren relawan, proporsi 3 pilar, dan tabel indikator terverifikasi).
14. **Buku Tahunan & Arsip (`/journey`)**: Digital Yearbook "The People Behind the Impact" dengan arsip tahun 2026, 2025, 2024.
15. **Detail Kepanitiaan (`/journey/[year]`)**: Navigasi indeks divisi, profil anggota lengkap (*foto, biografi, kontribusi, fun fact, quote*), scrapbook momen foto, dan Hall of Fame.
16. **Galeri Dokumentasi (`/gallery`)**: Grid masonry editorial dengan filter kategori & tahun, serta Lightbox fullscreen navigasi keyboard (Escape, ArrowLeft, ArrowRight).
17. **Kisah & Refleksi (`/stories`)**: Artikel refleksi panjang dari relawan dan testimoni resmi.
18. **Pusat Bantuan (`/faq`)**: Akordion interaktif, filter kategori, dan pencarian instan.
19. **Kontak & Kemitraan (`/contact`)**: Formulir pengajuan kemitraan, sponsor, dan informasi sekretariat kampus HIMSI UMN.

### Dashboard Administrasi
20. **Admin Login (`/admin/login`)**: Simulasi autentikasi admin.
21. **Dashboard Overview (`/admin/dashboard`)**: KPI statistik utama, pendaftar terkini, dan jalan pintas modul.
22. **Kelola Kegiatan (`/admin/events`)**: Tambah, edit, hapus acara, dan pengubah status pendaftaran secara instan.
23. **Kelola Pendaftaran (`/admin/registrations`)**: Tabel pencarian, filter, ubah status pendaftaran (Confirmed/Under Review/Waitlisted), dan fitur **Ekspor CSV**.
24. **Kelola Kepanitiaan (`/admin/committees`)**: Tambah tahun baru, edit tema, kelola divisi, dan tambah anggota panitia.
25. **Kelola Galeri (`/admin/gallery`)**: Tambah foto dokumentasi, ubah takarir (caption), dan tandai foto unggulan.
26. **Kelola Indikator Dampak (`/admin/impact`)**: Tambah indikator capaian, perbarui angka capaian, dan ubah status verifikasi.
27. **Kelola Konten Situs (`/admin/content`)**: Sunting judul headline, narasi visi-misi, email, media sosial, dan banner pengumuman.

---

## 5. Cara Menjalankan Website (Development & Production)

### Prasyarat
- Node.js versi 18+ (disarankan Node.js 20 atau 22 LTS).

### Menjalankan Mode Development
Buka terminal PowerShell atau Command Prompt pada folder proyek `c:\Users\ASUS\OneDrive\Dokumen\SIM`:
```powershell
cd "c:\Users\ASUS\OneDrive\Dokumen\SIM"
npm run dev
```
Buka browser pada: [http://localhost:3000](http://localhost:3000)

### Menjalankan Mode Production Build
```powershell
npm run build
npm run start
```

---

## 6. Kredensial & Akses Simulasi Admin

- **URL Login Admin:** `/admin/login` atau klik tombol **Admin** di pojok kanan atas navigasi.
- **Username:** `admin@himsi.umn.ac.id` (atau sembarang input)
- **Password Simulasi:** `admin123` atau `sim2026`

> **Fitur Reset Data Demo:** Pada menu sidebar admin, terdapat tombol **"Reset Data Demo"** yang dapat digunakan kapan saja untuk mengembalikan seluruh modifikasi data ke pengaturan awal default.

---

## 7. Panduan Pembaruan Konten & Penggantian Foto Resmi

1. **Mengganti Foto dengan Dokumentasi Resmi:**
   - Foto dokumentasi disimpan dalam format URL. Anda dapat memasukkan URL foto resolusi tinggi dari Google Drive publik, hosting kampus UMN, atau menempatkan file gambar di dalam folder `public/images/` dan mereferensikannya sebagai `/images/nama-foto.jpg`.
   - Melalui panel `/admin/gallery` atau `/admin/events`, panitia dapat langsung memperbarui tautan gambar cover kegiatan dan foto dokumentasi.
2. **Memperbarui Data Kepanitiaan:**
   - Buka `/admin/committees`, pilih tahun kepanitiaan, lalu tambahkan divisi atau anggota panitia baru beserta fotonya. Perubahan akan langsung tampil di halaman `/journey/[year]`.
3. **Memperbarui Status Pendaftaran:**
   - Masuk ke `/admin/registrations`, cari nama peserta, lalu ubah status pada dropdown (Submitted, Under Review, Confirmed, Waitlisted, Cancelled). Peserta yang mengecek nomor referensinya di `/registration/status` akan langsung melihat perubahan tersebut.

---

## 8. Catatan Integrasi Backend Masa Depan

Platform ini dibangun sebagai antarmuka frontend produksi dengan simulasi data lokal (`localStorage`). Untuk menghubungkannya ke infrastruktur server skala penuh di masa mendatang:
- **Database:** Hubungkan ke PostgreSQL / Supabase / MongoDB menggunakan ORM seperti Prisma atau Drizzle.
- **Autentikasi:** Gantikan fungsi `login()` di `src/context/DataContext.tsx` dengan NextAuth.js / Supabase Auth dengan SSO akun Google Mahasiswa UMN (`@student.umn.ac.id`).
- **File Storage:** Integrasikan upload gambar ke AWS S3, Cloudinary, atau Supabase Storage.
- **Email & WhatsApp Notifikasi:** Integrasikan API email transactional (seperti Resend atau SendGrid) dan WhatsApp Gateway (Fonnte/Twilio) untuk mengirimkan e-ticket konfirmasi dan nomor referensi otomatis ke peserta.
