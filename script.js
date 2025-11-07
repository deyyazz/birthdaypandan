document.addEventListener('DOMContentLoaded', function () {

    // --- 1. LOGIKA PESAN RAHASIA ---

    // Tombol 1: Buka Pesan Rahasia (ID lama: tombol-rahasia diganti tombol-pesan)
    const tombolPesan = document.getElementById('tombol-pesan');
    const pesan = document.getElementById('pesan-tersembunyi');

    tombolPesan.addEventListener('click', function () {
        if (pesan.classList.contains('tersembhuni')) {
            pesan.classList.remove('tersembunyi');
            tombolPesan.textContent = 'Pesan Sudah Muncul!';
        } else {
            pesan.classList.add('tersembunyi');
            tombolPesan.textContent = 'Buka Pesan Spesial 💌';
        }
    });

    // --- 2. LOGIKA GALERI KADO MODAL ---

    // Tombol 2: Buka Kado (untuk Galeri)
    const tombolKado = document.getElementById('tombol-kado'); // ID Baru
    const modalGaleri = document.getElementById('modal-galeri');
    const tombolTutup = document.getElementsByClassName('close-button')[0];

    // Buka Modal ketika tombol Kado diklik
    tombolKado.addEventListener('click', function () {
        modalGaleri.style.display = 'block';
    });

    // Tutup Modal ketika tombol (x) diklik
    tombolTutup.addEventListener('click', function () {
        modalGaleri.style.display = 'none';
    });

    // Tutup Modal ketika area luar modal diklik
    window.addEventListener('click', function (event) {
        if (event.target == modalGaleri) {
            modalGaleri.style.display = 'none';
        }
    });

});