# 🎂 CakeLetter - Birthday Web Template Marketplace

CakeLetter adalah platform katalog digital interaktif bergaya **Neo-Brutalism / Pixel-Retro** yang menyediakan berbagai template website ucapan ulang tahun premium. Aplikasi ini dirancang untuk memudahkan pengguna memilih, melihat pratinjau (*live preview*), dan memesan kustomisasi website ucapan ulang tahun digital secara instan.

Proyek ini dibuat menggunakan arsitektur frontend statis (*flat-structure*) yang sangat ringan tanpa memerlukan *build tools* rumit.

---

## ✨ Fitur Utama & Alur Bisnis
* **Katalog & Filter Produk:** Pengguna dapat menjelajahi berbagai tema template website (Romance, Minimalist, dll) dengan sistem filter yang cepat.
* **Live Preview Modal:** Fitur pop-up interaktif untuk melihat detail desain, fitur, dan tampilan kasar template sebelum memutuskan untuk membeli.
* **Sistem Pemesanan (WhatsApp Integration):** Integrasi otomatis yang merangkum data template pilihan dan detail kustomisasi menjadi format teks rapi, lalu meneruskannya ke WhatsApp untuk proses pembayaran dan finalisasi.
* **Manajemen Riwayat Lokal:** Memanfaatkan `localStorage` untuk menyimpan riwayat template yang pernah dilihat atau diminati oleh pengguna.

---

## 🛠️ Tech Stack & Optimasi UX
* **HTML5 & CSS3 (Neo-Brutalism):** Desain UI yang berani dengan kontras tinggi menggunakan CSS Variables untuk manajemen warna, serta dioptimalkan dengan media query khusus agar nyaman diakses di layar sentuh (*mobile friendly*).
* **Vanilla JavaScript:** Pengelolaan *state* aplikasi, manipulasi DOM murni, dan penanganan logika *checkout* yang aman dengan menerapkan *defensive programming* (pengecekan *null/undefined* elemen).

---

## 📂 Struktur Proyek
Proyek ini menggunakan struktur file tunggal (*flat-structure*) yang bersih:

├── index.html      # Struktur utama katalog dan antarmuka marketplace
├── style.css       # Desain tema retro, layouting, dan animasi interaktif
├── script.js       # Logika komersial, filter produk, modal, & integrasi WA
├── README.md       # Dokumentasi proyek
├── .gitignore      # File pengecualian Git
└── LICENSE         # Lisensi proyek (MIT)

---

## 🚀 Cara Menjalankan secara Lokal
1. Clone repository ini:
   git clone https://github.com/destiaanana/software-prototypes.git

2. Masuk ke direktori proyek:
   cd software-prototypes/01-CakeLetter

3. Buka file index.html langsung di browser, atau jalankan menggunakan ekstensi Live Server di VS Code.

---
Dibuat dengan ☕ oleh [@destiaanana](https://github.com/destiaanana)
