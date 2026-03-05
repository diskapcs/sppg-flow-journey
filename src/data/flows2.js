/**
 * flows2.js
 * Flow data untuk infografis vertikal MBG — 5 tahap (tanpa Packing).
 *
 * Tahapan: Planning → QC Bahan → Cooking → Distribution → Feedback
 */

export const flows = [
  {
    id: 0,
    step: "Tahap 1",
    icon: "📋",
    title: "Planning",
    subtitle: "Menyiapkan Menu & Produksi",
    imageUrl: "/1planning.png",
    hotspot: { left: "2%", top: "8%", width: "96%", height: "13%" },
    color: {
      bg: "#e8f5ee",
      accent: "#2d7a4f",
      badge: "#d1fae5",
      badgeText: "#065f46",
    },
    overview:
      "Tahap perencanaan adalah fondasi seluruh operasional MBG. Tim SPPG menyusun menu bergizi, menghitung kebutuhan bahan baku, dan merencanakan jadwal produksi berdasarkan data kehadiran siswa.",
    steps: [
      {
        num: "1.1",
        text: "Menu Cycle Planning: Ahli Gizi menyusun siklus menu 10 hari sesuai AKG dan mendapat approval dari Yayasan.",
      },
      {
        num: "1.2",
        text: "Daily Production Planning: H-1 sebelum distribusi, SPPG menerima data kehadiran siswa untuk menentukan jumlah porsi.",
      },
      {
        num: "1.3",
        text: "Estimasi Bahan Baku: Purchase Order diterbitkan ke supplier berdasarkan jumlah porsi + buffer 5–10%.",
      },
      {
        num: "1.4",
        text: "Penjadwalan Armada: Jadwal distribusi dan armada kendaraan disiapkan sesuai rute sekolah.",
      },
    ],
    outputs: [
      { icon: "🥗", text: "Menu 10 hari/bulan berbasis AKG disetujui Yayasan" },
      {
        icon: "📊",
        text: "Lembar Kerja Produksi + estimasi bahan baku harian",
      },
      { icon: "🚛", text: "Jadwal distribusi dan armada terkonfirmasi" },
    ],
    extras: [
      { label: "Siklus Menu", value: "10 hari / 1 bulan" },
      { label: "Buffer Produksi", value: "5–10% dari data siswa" },
      { label: "Data Trigger", value: "Kehadiran siswa H-1" },
      { label: "Standar", value: "AKG (Angka Kecukupan Gizi)" },
    ],
  },
  {
    id: 1,
    step: "Tahap 2",
    icon: "🔍",
    title: "QC Bahan",
    subtitle: "Pemeriksaan Bahan Segar",
    imageUrl: "/2PO.png",
    hotspot: { left: "2%", top: "22%", width: "96%", height: "14%" },
    color: {
      bg: "#fef3c7",
      accent: "#d97706",
      badge: "#fde68a",
      badgeText: "#92400e",
    },
    overview:
      "Seluruh komoditas dari supplier wajib melewati Quality Control (QC) ketat untuk memastikan kesegaran, keamanan, dan kesesuaian standar food safety sebelum diproses.",
    steps: [
      {
        num: "2.1",
        text: "Receiving: Truck supplier tiba di SPPG. Tim memverifikasi jumlah dan kondisi kemasan setiap bahan baku.",
      },
      {
        num: "2.2",
        text: "Cek Kesegaran: Sayuran, buah, dan protein hewani diperiksa visual — warna, tekstur, aroma.",
      },
      {
        num: "2.3",
        text: "Cek Suhu: Protein hewani (daging, ayam, ikan) diukur suhunya sesuai persyaratan rantai dingin.",
      },
      {
        num: "2.4",
        text: "Cek Kadaluarsa: Label tanggal kadaluarsa diperiksa untuk semua bahan kemasan.",
      },
      {
        num: "2.5",
        text: "Penyimpanan FIFO: Bahan lolos QC disimpan di zona tepat (chiller/freezer/dry storage) sistem First In First Out.",
      },
    ],
    outputs: [
      {
        icon: "✅",
        text: "Bahan baku tersertifikasi segar dan aman digunakan",
      },
      { icon: "📝", text: "Form QC penerimaan terisi dan ditandatangani" },
      { icon: "🌡️", text: "Log suhu rantai dingin tercatat" },
    ],
    extras: [
      { label: "Sistem Stok", value: "FIFO (First In First Out)" },
      { label: "QC Check", value: "Visual, Suhu, Kadaluarsa" },
      { label: "Penyimpanan", value: "Chiller / Freezer / Dry Storage" },
      { label: "Reject", value: "Bahan tidak lolos dikembalikan ke supplier" },
    ],
  },
  {
    id: 2,
    step: "Tahap 3",
    icon: "👨‍🍳",
    title: "Cooking",
    subtitle: "Memasak & Pemorsian Makanan",
    imageUrl: "/3QC.png",
    hotspot: { left: "2%", top: "37%", width: "96%", height: "14%" },
    color: {
      bg: "#ffedd5",
      accent: "#ea580c",
      badge: "#fed7aa",
      badgeText: "#9a3412",
    },
    overview:
      "Proses memasak sekaligus pemorsian dilakukan di dapur SPPG yang terstandar HACCP. Metode staggered cooking memastikan makanan tiba segar dan hangat ke tangan siswa.",
    steps: [
      {
        num: "3.1",
        text: "Prep Area: Pencucian, pengupasan, dan pemotongan bahan di area terpisah dari area memasak.",
      },
      {
        num: "3.2",
        text: "Defrost Protein: Bahan beku dicairkan di area khusus dengan kontrol suhu untuk mencegah pertumbuhan bakteri.",
      },
      {
        num: "3.3",
        text: "Staggered Cooking: Memasak bertahap per batch sesuai jadwal distribusi agar makanan tetap segar.",
      },
      {
        num: "3.4",
        text: "CCP Monitoring: Suhu internal masakan diukur — minimal 74°C untuk protein hewani.",
      },
      {
        num: "3.5",
        text: "Pemorsian Langsung: Nasi, laok protein, sayur, dan buah diporsi ke ompreng sesuai gramasi standar.",
      },
      {
        num: "3.6",
        text: "Testing Panel: Sample makanan diuji organoleptik (rasa, aroma, tekstur) oleh tim QC sebelum distribusi.",
      },
    ],
    outputs: [
      { icon: "🍲", text: "Masakan matang lulus CCP suhu ≥74°C" },
      { icon: "⚖️", text: "Porsi terstandar: nasi + laok + sayur + buah" },
      { icon: "📋", text: "Log CCP dan testing panel organoleptik terisi" },
    ],
    extras: [
      { label: "Standar Keamanan", value: "HACCP — CCP Monitoring" },
      { label: "Metode", value: "Staggered Cooking per batch" },
      { label: "Suhu Min Masak", value: "≥74°C (protein hewani)" },
      { label: "QC Organoleptik", value: "Rasa, Aroma, Tekstur, Tampilan" },
    ],
  },
  {
    id: 3,
    step: "Tahap 4",
    icon: "🚐",
    title: "Distribution",
    imageUrl: "/4distribution.png",
    subtitle: "Distribusi ke Sekolah",
    hotspot: { left: "2%", top: "53%", width: "96%", height: "15%" },
    color: {
      bg: "#e0f2fe",
      accent: "#0369a1",
      badge: "#bae6fd",
      badgeText: "#075985",
    },
    overview:
      "Ompreng yang sudah terisi dimuat ke thermal box, diangkut armada distribusi, dan diserahkan ke pihak sekolah dengan dokumen TTO (Tanda Terima Ompreng) resmi.",
    steps: [
      {
        num: "4.1",
        text: "Sealing & Labeling: Ompreng diseal rapat. Label nama sekolah, tanggal, dan jam produksi ditempel.",
      },
      {
        num: "4.2",
        text: "Loading Thermal Box: Ompreng tersegel dimuat ke thermal box yang menjaga suhu selama distribusi.",
      },
      {
        num: "4.3",
        text: "Loading Armada: Thermal box dimuat ke kendaraan distribusi sesuai rute yang direncanakan.",
      },
      {
        num: "4.4",
        text: "Pengiriman: Armada berangkat sesuai jadwal agar makanan tiba tepat waktu sebelum jam makan siswa.",
      },
      {
        num: "4.5",
        text: "Handover di Sekolah: Ompreng diserahkan ke pihak sekolah. Jumlah diverifikasi dan TTO Barka Acora ditandatangani.",
      },
    ],
    outputs: [
      { icon: "📬", text: "Ompreng terkirim tepat waktu dan jumlah sesuai PO" },
      { icon: "📄", text: "TTO Barka Acora ditandatangani kedua pihak" },
      { icon: "🌡️", text: "Log suhu selama distribusi tercatat" },
    ],
    extras: [
      { label: "Media", value: "Thermal Box di atas Armada" },
      { label: "Label Wajib", value: "Sekolah, Tanggal, Jam Produksi" },
      { label: "Dokumen", value: "TTO Barka Acora (Berita Acara)" },
      { label: "Target Waktu", value: "Tiba sebelum jam makan siswa" },
    ],
  },
  {
    id: 4,
    step: "Tahap 5",
    icon: "📣",
    title: "Feedback",
    imageUrl: "/5monitoring.png",
    subtitle: "Siswa Menerima & Memberi Feedback",
    hotspot: { left: "2%", top: "69%", width: "96%", height: "15%" },
    color: {
      bg: "#ccfbf1",
      accent: "#0d9488",
      badge: "#99f6e4",
      badgeText: "#115e59",
    },
    overview:
      "Tahap penutup siklus: siswa menerima dan mengonsumsi makanan, lalu memberikan feedback. Data ini menjadi bahan evaluasi berkelanjutan untuk meningkatkan kualitas program MBG.",
    steps: [
      {
        num: "5.1",
        text: "Distribusi ke Siswa: Guru/petugas sekolah membagikan ompreng kepada siswa yang hadir sesuai presensi.",
      },
      {
        num: "5.2",
        text: "Monitoring Konsumsi: Petugas memantau proses makan dan mencatat sisa makanan per menu sebagai data waste.",
      },
      {
        num: "5.3",
        text: "Pengumpulan Feedback: Siswa memberi feedback tentang rasa, porsi, dan variasi menu melalui form atau wawancara singkat.",
      },
      {
        num: "5.4",
        text: "Pengumpulan Ompreng Kosong: Ompreng dikumpulkan, dikemas special crate, dijemput armada balik ke SPPG untuk dicuci.",
      },
      {
        num: "5.5",
        text: "Evaluasi & Update: Data waste dan feedback diinput ke Sistem MBG. Tim evaluasi mingguan dan update menu cycle berikutnya.",
      },
    ],
    outputs: [
      { icon: "😊", text: "Siswa mendapat makanan bergizi sesuai program MBG" },
      { icon: "📊", text: "Data waste & feedback tersimpan di Sistem MBG" },
      { icon: "🔄", text: "Menu cycle diperbarui untuk 10 hari berikutnya" },
    ],
    extras: [
      { label: "Monitor", value: "Guru / petugas sekolah" },
      { label: "Feedback", value: "Form siswa + observasi langsung" },
      { label: "Evaluasi", value: "Mingguan oleh tim SPPG & Yayasan" },
      { label: "Siklus", value: "Data kembali ke Tahap 1 → Continuous" },
    ],
  },
];
