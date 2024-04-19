**Deskripsi Aplikasi**

Aplikasi ini adalah sebuah backend yang dibangun menggunakan Express JS. Aplikasi ini bertujuan untuk memenuhi proses rekrutmen sebagai Backend Developer Intern di Sagara Technology.

**Petunjuk Instalasi**

1. Pastikan Node.js telah terinstal di komputer Anda. Anda dapat mengunduhnya dari situs web resmi Node.js
2. Clone repository ini di komputer Anda
3. Masuk ke dalam directory repository tersebut
4. Jalankan perintah “npm install” untuk menginstal semua library yang diperlukan

**Konfigurasi Basis Data**

1. Pastikan MySQL/PostgreSQL telah terinstal di komputer Anda. Jika belum, Anda dapat mengunduhnya dari situs web RDBMS yang Anda gunakan
2. Rename file .env.example menjadi .env dan sesuaikan variabel di dalamnya dengan konfigurasi milik Anda
3. Jalankan perintah “npx prisma migrate dev” untuk mengimport schema model prisma ke dalam basis data Anda
4. Jalankan perintah “npm run seed” untuk mengisi beberapa data dummy ke dalam basis data Anda

**Menjalankan Aplikasi**

1. Setelah melakukan instalasi library dan konfigurasi basis data, jalankan perintah “npm run start” di terminal untuk memulai server
2. Server akan berjalan pada <http://localhost:3000> secara default
