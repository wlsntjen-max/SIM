import {
  SiteSettings,
  EventCategory,
  SDG,
  Committee,
  Event,
  GalleryItem,
} from "@/types";

export const initialSettings: SiteSettings = {
  name: "Social Is Me",
  short: "SIM",
  org: "HIMSI UMN",
  orgLong: "Himpunan Mahasiswa Sistem Informasi, Universitas Multimedia Nusantara",
  tagline: "Every Act Connects, Every Action Matters",
  current_year: "2027",
  show_sample_data: "1",
  contact_email: "himsi@student.umn.ac.id",
  instagram: "https://www.instagram.com/himsi.umn",
  whatsapp: "https://wa.me/6281234567890",
  google_form_url: "https://forms.gle/SIM2027Registration",
  registration_links: {
    volunteer: "https://forms.gle/SIM2027Volunteer",
    day1: "https://forms.gle/SIM2027Day1Outreach",
    day2: "https://forms.gle/SIM2027Day2BloodDonation",
  },
  pmi_eligibility:
    "Syarat umum donor darah dari PMI: usia 17 hingga 60 tahun, berat badan minimal 45 kg, dalam kondisi sehat jasmani, istirahat cukup minimal 5 jam, dan tidak sedang mengonsumsi obat antibiotik. Pemeriksaan kelayakan dan pengambilan darah ditangani langsung oleh petugas Palang Merah Indonesia.",
};

export const initialCategories: EventCategory[] = [
  {
    id: 1,
    name: "Social Outreach",
    slug: "social-outreach",
    description: "Edukasi ramah anak dan upcycling kerajinan tangan kreatif",
  },
  {
    id: 2,
    name: "Blood Donation",
    slug: "blood-donation",
    description: "Aksi kemanusiaan donor darah bersama Palang Merah Indonesia (PMI)",
  },
  {
    id: 3,
    name: "Lainnya",
    slug: "lainnya",
    description: "Kegiatan kepanitiaan dan pengabdian masyarakat SIM",
  },
];

/** Hanya SDG 3 dan SDG 12 */
export const initialSDGs: SDG[] = [
  {
    id: 1,
    number: 3,
    name: "Good Health and Well-Being",
    color: "#4C9F38",
    official: "Ensure healthy lives and promote well-being for all at all ages.",
    connection:
      "SIM mendukung kehidupan yang sehat lewat donor darah bersama PMI dan menumbuhkan kesadaran tentang kesehatan dan kemanusiaan.",
    points: [
      "Kegiatan donor darah bersama Palang Merah Indonesia (PMI)",
      "Kesadaran akan kesehatan dan kemanusiaan",
      "Mendukung kesejahteraan dan kehidupan sesama",
    ],
    description:
      "Menjamin kehidupan yang sehat dan mendukung kesejahteraan bagi semua orang di segala usia.",
    problems:
      "Keterbatasan stok kantong darah di fasilitas medis, rendahnya partisipasi donor rutin di kalangan generasi muda, dan minimnya pemahaman awal tentang pentingnya gaya hidup sehat.",
    whyMatters:
      "Satu kantong darah yang didonorkan dapat menyelamatkan hingga tiga nyawa. Kesehatan adalah fondasi utama bagi setiap manusia untuk belajar, berkarya, dan berdaya.",
    solutions:
      "Menyediakan akses donor darah yang ramah, higienis, dan terorganisir di kampus dengan edukasi kesehatan yang menyeluruh bagi seluruh mahasiswa dan warga sekitar.",
    simContribution:
      "Melalui Day 02 Blood Donation, Social Is Me berkolaborasi dengan Unit Donor Darah PMI secara rutin untuk menyalurkan ratusan kantong darah bagi rumah sakit dan pasien yang membutuhkan.",
  },
  {
    id: 2,
    number: 12,
    name: "Responsible Consumption and Production",
    color: "#BF8B2E",
    official: "Ensure sustainable consumption and production patterns.",
    connection:
      "SIM mengajak peserta memakai sumber daya dengan lebih bijak dengan mengubah botol plastik bekas menjadi produk yang berguna.",
    points: [
      "Daur ulang dan upcycling kreatif",
      "Pemanfaatan kembali botol plastik bekas",
      "Mengubah barang bekas menjadi produk berguna (mini storage box)",
      "Mendorong penggunaan sumber daya yang bertanggung jawab",
    ],
    description:
      "Menjamin pola konsumsi dan produksi yang bertanggung jawab dan berkelanjutan.",
    problems:
      "Tumpukan sampah plastik sekali pakai yang terus meningkat dan kurangnya edukasi praktis mengenai cara memanfaatkan kembali limbah rumah tangga menjadi produk bernilai guna.",
    whyMatters:
      "Plastik membutuhkan waktu ratusan tahun untuk terurai. Menumbuhkan kesadaran pelestarian lingkungan dan keterampilan upcycling sejak dini adalah langkah krusial menjaga kelestarian bumi.",
    solutions:
      "Mengadakan lokakarya aplikatif yang mengajarkan anak-anak dan peserta umum cara mengubah barang bekas menjadi kerajinan fungsional yang bisa digunakan sehari-hari.",
    simContribution:
      "Melalui Day 01 Social Outreach, relawan SIM mendatangi sekolah dasar dan komunitas untuk mengadakan workshop upcycling mengubah botol plastik bekas menjadi tempat penyimpanan serbaguna (mini storage box).",
  },
];

/**
 * HANYA Kepanitiaan Tahun Berjalan (SIM 2027) tanpa arsip tahun sebelumnya.
 * Gambar panitia dan divisi disediakan tempat kosong (placeholder frame) agar pengguna bisa mengunggah sendiri.
 */
export const initialCommittees: Committee[] = [
  {
    id: 1,
    year: 2027,
    name: "Social Is Me 2027",
    theme: "Roots of Change",
    description:
      "Peta formasi seluruh divisi kepanitiaan SIM 2027. Bersama menanam kepedulian dan mewujudkan dampak nyata.",
    divisions: [
      {
        id: 1,
        committeeId: 1,
        name: "Badan Pengurus Harian",
        code: "BPH",
        description:
          "Memimpin, mengoordinasikan, dan menyelaraskan arah gerak seluruh divisi dari awal perencanaan hingga evaluasi akhir.",
        landmarkName: "Pohon Induk",
        landmarkX: 50,
        landmarkY: 26,
        sortOrder: 1,
        accentColor: "#879B78",
        members: [
          { id: 101, divisionId: 1, name: "Project Officer", position: "Project Officer (PO)", level: "po", sortOrder: 1, year: 2027 },
          { id: 102, divisionId: 1, name: "Vice Project Officer", position: "Vice Project Officer (VPO)", level: "vpo", sortOrder: 2, year: 2027 },
          { id: 103, divisionId: 1, name: "Sekretaris 1", position: "Sekretaris Utama", level: "leader", sortOrder: 3, year: 2027 },
          { id: 104, divisionId: 1, name: "Sekretaris 2", position: "Sekretaris Pelaksana", level: "member", sortOrder: 4, year: 2027 },
          { id: 105, divisionId: 1, name: "Bendahara 1", position: "Bendahara Utama", level: "leader", sortOrder: 5, year: 2027 },
          { id: 106, divisionId: 1, name: "Bendahara 2", position: "Bendahara Pelaksana", level: "member", sortOrder: 6, year: 2027 },
        ],
      },
      {
        id: 2,
        committeeId: 1,
        name: "Acara & Kegiatan",
        code: "Event",
        description:
          "Merancang konsep, alur rundown, modul interaktif untuk Day 01 Social Outreach dan Day 02 Blood Donation.",
        landmarkName: "Lembah Pengetahuan",
        landmarkX: 24,
        landmarkY: 46,
        sortOrder: 2,
        accentColor: "#D6B879",
        members: [
          { id: 201, divisionId: 2, name: "Koordinator Acara", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 202, divisionId: 2, name: "Staff Acara 1", position: "Konseptor Day 01", level: "member", sortOrder: 2, year: 2027 },
          { id: 203, divisionId: 2, name: "Staff Acara 2", position: "Konseptor Day 02", level: "member", sortOrder: 3, year: 2027 },
          { id: 204, divisionId: 2, name: "Staff Acara 3", position: "Fasilitator Edukasi", level: "member", sortOrder: 4, year: 2027 },
          { id: 205, divisionId: 2, name: "Staff Acara 4", position: "Fasilitator Workshop", level: "member", sortOrder: 5, year: 2027 },
          { id: 206, divisionId: 2, name: "Staff Acara 5", position: "Time Keeper & Rundown", level: "member", sortOrder: 6, year: 2027 },
          { id: 207, divisionId: 2, name: "Staff Acara 6", position: "PIC Donor PMI", level: "member", sortOrder: 7, year: 2027 },
          { id: 208, divisionId: 2, name: "Staff Acara 7", position: "Pendamping Relawan", level: "member", sortOrder: 8, year: 2027 },
          { id: 209, divisionId: 2, name: "Staff Acara 8", position: "PIC Lapangan", level: "member", sortOrder: 9, year: 2027 },
          { id: 210, divisionId: 2, name: "Staff Acara 9", position: "Evaluasi & Notulensi", level: "member", sortOrder: 10, year: 2027 },
          { id: 211, divisionId: 2, name: "Staff Acara 10", position: "Technical Director", level: "member", sortOrder: 11, year: 2027 },
        ],
      },
      {
        id: 3,
        committeeId: 1,
        name: "Hubungan Masyarakat",
        code: "Humas",
        description:
          "Menghubungkan SIM dengan pihak sekolah binaan, Unit Donor Darah PMI, civitas akademika, dan mitra kolaborasi.",
        landmarkName: "Jembatan Sapa",
        landmarkX: 76,
        landmarkY: 44,
        sortOrder: 3,
        accentColor: "#819DA3",
        members: [
          { id: 301, divisionId: 3, name: "Koordinator Humas", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 302, divisionId: 3, name: "Staff Humas 1", position: "PIC Hubungan Sekolah", level: "member", sortOrder: 2, year: 2027 },
          { id: 303, divisionId: 3, name: "Staff Humas 2", position: "PIC Palang Merah Indonesia", level: "member", sortOrder: 3, year: 2027 },
          { id: 304, divisionId: 3, name: "Staff Humas 3", position: "Komunikasi Eksternal", level: "member", sortOrder: 4, year: 2027 },
          { id: 305, divisionId: 3, name: "Staff Humas 4", position: "Liaison Officer Tamu", level: "member", sortOrder: 5, year: 2027 },
          { id: 306, divisionId: 3, name: "Staff Humas 5", position: "Hubungan Civitas Kampus", level: "member", sortOrder: 6, year: 2027 },
          { id: 307, divisionId: 3, name: "Staff Humas 6", position: "Protokoler & Undangan", level: "member", sortOrder: 7, year: 2027 },
          { id: 308, divisionId: 3, name: "Staff Humas 7", position: "Customer Service Relawan", level: "member", sortOrder: 8, year: 2027 },
          { id: 309, divisionId: 3, name: "Staff Humas 8", position: "Administrasi Kerjasama", level: "member", sortOrder: 9, year: 2027 },
        ],
      },
      {
        id: 4,
        committeeId: 1,
        name: "Publikasi & Dokumentasi",
        code: "Pubdok",
        description:
          "Mengabadikan seluruh momen kegiatan, memproduksi aset visual, identitas grafis, dan video sorotan perjalanan SIM.",
        landmarkName: "Menara Lensa",
        landmarkX: 18,
        landmarkY: 72,
        sortOrder: 4,
        accentColor: "#C87979",
        members: [
          { id: 401, divisionId: 4, name: "Koordinator Pubdok", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 402, divisionId: 4, name: "Staff Pubdok 1", position: "Fotografer Utama Day 01", level: "member", sortOrder: 2, year: 2027 },
          { id: 403, divisionId: 4, name: "Staff Pubdok 2", position: "Fotografer Utama Day 02", level: "member", sortOrder: 3, year: 2027 },
          { id: 404, divisionId: 4, name: "Staff Pubdok 3", position: "Videografer & Editor", level: "member", sortOrder: 4, year: 2027 },
          { id: 405, divisionId: 4, name: "Staff Pubdok 4", position: "Desainer Grafis Konten", level: "member", sortOrder: 5, year: 2027 },
          { id: 406, divisionId: 4, name: "Staff Pubdok 5", position: "Social Media Admin", level: "member", sortOrder: 6, year: 2027 },
          { id: 407, divisionId: 4, name: "Staff Pubdok 6", position: "Aftermovie Producer", level: "member", sortOrder: 7, year: 2027 },
          { id: 408, divisionId: 4, name: "Staff Pubdok 7", position: "Live Report Editor", level: "member", sortOrder: 8, year: 2027 },
          { id: 409, divisionId: 4, name: "Staff Pubdok 8", position: "Arsip Dokumentasi", level: "member", sortOrder: 9, year: 2027 },
        ],
      },
      {
        id: 5,
        committeeId: 1,
        name: "Logistik & Perlengkapan",
        code: "Logistik",
        description:
          "Menyiapkan seluruh peralatan teknis kegiatan, bahan workshop upcycling botol bekas, dan kenyamanan venue acara.",
        landmarkName: "Gudang Pembekalan",
        landmarkX: 82,
        landmarkY: 70,
        sortOrder: 5,
        accentColor: "#71977D",
        members: [
          { id: 501, divisionId: 5, name: "Koordinator Logistik", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 502, divisionId: 5, name: "Staff Logistik 1", position: "PIC Bahan Workshop", level: "member", sortOrder: 2, year: 2027 },
          { id: 503, divisionId: 5, name: "Staff Logistik 2", position: "PIC Sound & Audio Visual", level: "member", sortOrder: 3, year: 2027 },
          { id: 504, divisionId: 5, name: "Staff Logistik 3", position: "Perlengkapan Medis PMI", level: "member", sortOrder: 4, year: 2027 },
          { id: 505, divisionId: 5, name: "Staff Logistik 4", position: "Tata Ruang & Venue", level: "member", sortOrder: 5, year: 2027 },
          { id: 506, divisionId: 5, name: "Staff Logistik 5", position: "Transportasi Lapangan", level: "member", sortOrder: 6, year: 2027 },
          { id: 507, divisionId: 5, name: "Staff Logistik 6", position: "Inventaris Barang", level: "member", sortOrder: 7, year: 2027 },
          { id: 508, divisionId: 5, name: "Staff Logistik 7", position: "Kebersihan & Sanitasi", level: "member", sortOrder: 8, year: 2027 },
          { id: 509, divisionId: 5, name: "Staff Logistik 8", position: "Keamanan Acara", level: "member", sortOrder: 9, year: 2027 },
        ],
      },
      {
        id: 6,
        committeeId: 1,
        name: "Konsumsi",
        code: "Konsumsi",
        description:
          "Menjaga asupan dan stamina relawan, panitia, serta konsumsi pemulihan nutrisi bagi para pendonor darah.",
        landmarkName: "Dapur Mata Air",
        landmarkX: 38,
        landmarkY: 82,
        sortOrder: 6,
        accentColor: "#A9B99A",
        members: [
          { id: 601, divisionId: 6, name: "Koordinator Konsumsi", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 602, divisionId: 6, name: "Staff Konsumsi 1", position: "Nutrisi Pendonor PMI", level: "member", sortOrder: 2, year: 2027 },
          { id: 603, divisionId: 6, name: "Staff Konsumsi 2", position: "Konsumsi Peserta Anak", level: "member", sortOrder: 3, year: 2027 },
          { id: 604, divisionId: 6, name: "Staff Konsumsi 3", position: "Logistik Air & Minuman", level: "member", sortOrder: 4, year: 2027 },
          { id: 605, divisionId: 6, name: "Staff Konsumsi 4", position: "Konsumsi Relawan", level: "member", sortOrder: 5, year: 2027 },
          { id: 606, divisionId: 6, name: "Staff Konsumsi 5", position: "Distribusi Konsumsi Lapangan", level: "member", sortOrder: 6, year: 2027 },
          { id: 607, divisionId: 6, name: "Staff Konsumsi 6", position: "Vendor Catering", level: "member", sortOrder: 7, year: 2027 },
          { id: 608, divisionId: 6, name: "Staff Konsumsi 7", position: "Snack & P3K Ringan", level: "member", sortOrder: 8, year: 2027 },
        ],
      },
      {
        id: 7,
        committeeId: 1,
        name: "Sponsorship",
        code: "Sponsor",
        description:
          "Menjalin kolaborasi dengan sponsor, donatur kemanusiaan, dan mitra kerja sama untuk kelancaran aksi sosial.",
        landmarkName: "Pondok Sahabat",
        landmarkX: 64,
        landmarkY: 84,
        sortOrder: 7,
        accentColor: "#B68B6A",
        members: [
          { id: 701, divisionId: 7, name: "Koordinator Sponsorship", position: "Koordinator Divisi", level: "leader", sortOrder: 1, year: 2027 },
          { id: 702, divisionId: 7, name: "Staff Sponsorship 1", position: "Penyusunan Proposal", level: "member", sortOrder: 2, year: 2027 },
          { id: 703, divisionId: 7, name: "Staff Sponsorship 2", position: "Negosiasi Mitra", level: "member", sortOrder: 3, year: 2027 },
          { id: 704, divisionId: 7, name: "Staff Sponsorship 3", position: "Crowdfunding & Donasi", level: "member", sortOrder: 4, year: 2027 },
          { id: 705, divisionId: 7, name: "Staff Sponsorship 4", position: "Kontraprestasi Sponsor", level: "member", sortOrder: 5, year: 2027 },
          { id: 706, divisionId: 7, name: "Staff Sponsorship 5", position: "Laporan Pertanggungjawaban", level: "member", sortOrder: 6, year: 2027 },
          { id: 707, divisionId: 7, name: "Staff Sponsorship 6", position: "Merchandise Partnership", level: "member", sortOrder: 7, year: 2027 },
          { id: 708, divisionId: 7, name: "Staff Sponsorship 7", position: "Media Partner", level: "member", sortOrder: 8, year: 2027 },
        ],
      },
    ],
  },
];

export const initialEvents: Event[] = [
  {
    id: 1,
    slug: "open-recruitment-relawan-sim-2027",
    title: "Open Recruitment Relawan SIM 2027",
    year: 2027,
    categoryId: 3,
    categorySlug: "lainnya",
    categoryName: "Lainnya",
    eventDate: "25 - 26 November 2027",
    location: "SMA Harapan Bangsa dan Universitas Multimedia Nusantara",
    registrationClose: "2027-11-12",
    quota: 100,
    status: "open_registration",
    registrationType: "volunteer",
    registrationUrl: "https://forms.gle/SIM2027Volunteer",
    shortDescription:
      "Pendaftaran relawan fasilitator dan panitia pelaksana Social Is Me 2027. Bersama mewujudkan aksi nyata kepedulian.",
    description:
      "Pendaftaran terbuka bagi seluruh mahasiswa Universitas Multimedia Nusantara dari berbagai program studi. Menjadi relawan SIM memberikan kesempatan berharga untuk terjun langsung mengabdi kepada masyarakat, melatih kepekaan sosial, kepemimpinan lapangan, dan berjejaring dengan sesama agen perubahan.",
    isArchived: false,
    isSample: true,
    sdgIds: [3, 12],
    timeline: [
      {
        id: 101,
        eventId: 1,
        timeLabel: "03 - 12 Nov 2027",
        title: "Open Recruitment Relawan",
        description: "Pengisian formulir pendaftaran relawan via Google Form.",
        sortOrder: 1,
      },
      {
        id: 102,
        eventId: 1,
        timeLabel: "15 Nov 2027",
        title: "Pengumuman Penerimaan Volunteer",
        description: "Pengumuman hasil seleksi dan penerimaan relawan Social Is Me.",
        sortOrder: 2,
      },
      {
        id: 103,
        eventId: 1,
        timeLabel: "18 Nov 2027",
        title: "Pembekalan Volunteer",
        description: "Briefing dan pembekalan materi edukasi ramah anak dan SOP donor darah.",
        sortOrder: 3,
      },
      {
        id: 104,
        eventId: 1,
        timeLabel: "25 - 26 Nov 2027",
        title: "Pelaksanaan Kegiatan (Day 1 & Day 2)",
        description: "Pelaksanaan Day 1 di SMA Harapan Bangsa dan Day 2 di Universitas Multimedia Nusantara.",
        sortOrder: 4,
      },
    ],
  },
  {
    id: 2,
    slug: "sim-2027-day-01-social-outreach",
    title: "SIM 2027 Day 01: Social Outreach",
    year: 2027,
    categoryId: 1,
    categorySlug: "social-outreach",
    categoryName: "Social Outreach",
    eventDate: "2027-11-25",
    location: "SMA Harapan Bangsa",
    status: "coming_soon",
    registrationType: "outreach",
    registrationUrl: "https://forms.gle/SIM2027Day1Outreach",
    shortDescription:
      "Berbagi pengetahuan bersama komunitas sambil mengubah botol plastik bekas menjadi mini storage box yang berguna.",
    description:
      "Day 01 mempertemukan dua hal esensial: belajar bersama dengan hangat dan memberi kehidupan kedua pada barang bekas. Peserta tidak hanya mendengarkan materi, melainkan mempraktikkan langsung upcycling botol plastik menjadi kotak penyimpanan multifungsi.",
    isArchived: false,
    isSample: true,
    sdgIds: [12],
  },
  {
    id: 3,
    slug: "sim-2027-day-02-blood-donation",
    title: "SIM 2027 Day 02: Blood Donation",
    year: 2027,
    categoryId: 2,
    categorySlug: "blood-donation",
    categoryName: "Blood Donation",
    eventDate: "2027-11-26",
    location: "Universitas Multimedia Nusantara",
    status: "coming_soon",
    registrationType: "blood_donation",
    registrationUrl: "https://forms.gle/SIM2027Day2BloodDonation",
    shortDescription:
      "Donor darah bersama Palang Merah Indonesia. Satu kantong darah bisa berarti satu kesempatan hidup bagi yang membutuhkan.",
    description:
      "Day 02 adalah wujud konkret kepedulian kemanusiaan bagi sesama. Dilaksanakan bersama tenaga medis profesional dari Unit Donor Darah PMI Tangerang, kegiatan ini menyediakan sarana aman dan nyaman bagi para pendonor untuk berbagi kehidupan.",
    isArchived: false,
    isSample: true,
    sdgIds: [3],
  },
];

/**
 * Tempat kosong (placeholder frames) untuk foto galeri agar pengguna bisa mengisi fotonya sendiri.
 */
export const initialGallery: GalleryItem[] = [
  {
    id: 1,
    title: "Foto Dokumentasi Kegiatan 01",
    category: "social_outreach",
    year: 2027,
    caption: "Tempat foto dokumentasi kegiatan Social Outreach.",
  },
  {
    id: 2,
    title: "Foto Dokumentasi Kegiatan 02",
    category: "blood_donation",
    year: 2027,
    caption: "Tempat foto dokumentasi aksi donor darah bersama PMI.",
  },
  {
    id: 3,
    title: "Foto Bersama Divisi Panitia",
    category: "committee_moments",
    year: 2027,
    caption: "Tempat foto momen kebersamaan panitia pelaksana SIM.",
  },
  {
    id: 4,
    title: "Foto Balik Layar Persiapan",
    category: "behind_the_scenes",
    year: 2027,
    caption: "Tempat foto persiapan logistik, materi, dan perlengkapan.",
  },
  {
    id: 5,
    title: "Foto Suasana Lokakarya",
    category: "social_outreach",
    year: 2027,
    caption: "Tempat foto suasana interaktif pembuatan mini storage box.",
  },
  {
    id: 6,
    title: "Foto Fasilitator & Relawan",
    category: "committee_moments",
    year: 2027,
    caption: "Tempat foto kekompakan tim fasilitator di lapangan.",
  },
];
