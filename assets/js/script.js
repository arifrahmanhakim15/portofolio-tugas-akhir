// Fungsi untuk menampilkan tahun saat ini di footer

document.addEventListener('DOMContentLoaded', function() {
    // 1. Dapatkan elemen <span> dengan ID 'current-year' dari index.html
    const yearSpan = document.getElementById('current-year');

    // 2. Cek apakah elemen tersebut ditemukan
    if (yearSpan) {
        // 3. Set konten teks elemen tersebut menjadi tahun saat ini
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Anda bisa menambahkan script JS sederhana lainnya di bawah ini, 
// misalnya untuk tombol navigasi mobile (jika ada) atau efek klik sederhana.