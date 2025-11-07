// Menunggu sampai seluruh halaman (HTML) selesai dimuat
document.addEventListener('DOMContentLoaded', function () {

    // 1. Ambil elemen tombol dari HTML menggunakan ID-nya
    const tombol = document.getElementById('tombol-rahasia');

    // 2. Ambil elemen pesan tersembunyi
    const pesan = document.getElementById('pesan-tersembunyi');

    // 3. Tambahkan "pendengar" (listener) pada tombol.
    // Ketika tombol di-klik, fungsi di dalamnya akan dijalankan.
    tombol.addEventListener('click', function () {

        // Periksa apakah pesan saat ini tersembunyi
        if (pesan.classList.contains('tersembunyi')) {
            // Jika tersembunyi, hapus class 'tersembunyi' agar pesan muncul
            pesan.classList.remove('tersembunyi');
            // Ganti teks tombol
            tombol.textContent = 'Pesan Sudah Muncul!';
        } else {
            // Jika sudah muncul, sembunyikan lagi (opsional)
            pesan.classList.add('tersembunyi');
            tombol.textContent = 'Klik Untuk Pesan Tambahan';
        }
    });
});