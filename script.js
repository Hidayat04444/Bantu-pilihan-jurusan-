// script.js
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const field = document.getElementById('field').value;
    const location = document.getElementById('location').value;
    const questions = document.getElementById('questions').value;

    let jurusan = "";
    let kampus = "";

    // Rekomendasi jurusan dan kampus (contoh)
    if (field === "Teknologi") {
        jurusan = "Teknik Informatika, Teknik Elektro";
        kampus = "Kampus Terdekat: Universitas Negeri Medan, Kampus Lain: Universitas Indonesia";
    } else if (field === "Sosial") {
        jurusan = "Ilmu Komunikasi, Psikologi";
        kampus = "Kampus Terdekat: Universitas Sumatera Utara, Kampus Lain: Universitas Gadjah Mada";
    } else if (field === "Ekonomi") {
        jurusan = "Manajemen, Akuntansi";
        kampus = "Kampus Terdekat: Universitas Andalas, Kampus Lain: Universitas Bina Nusantara";
    } else if (field === "Kesehatan") {
        jurusan = "Kedokteran, Farmasi";
        kampus = "Kampus Terdekat: Universitas Diponegoro, Kampus Lain: Universitas Airlangga";
    } else if (field === "Seni & Desain") {
        jurusan = "Desain Grafis, Seni Rupa";
        kampus = "Kampus Terdekat: Universitas Kristen Satya Wacana, Kampus Lain: Institut Teknologi Bandung";
    } else if (field === "Hukum") {
        jurusan = "Ilmu Hukum, Hukum Bisnis";
        kampus = "Kampus Terdekat: Universitas Sebelas Maret, Kampus Lain: Universitas Padjadjaran";
    } else if (field === "Ilmu Alam") {
        jurusan = "Fisika, Biologi";
        kampus = "Kampus Terdekat: Universitas Negeri Surabaya, Kampus Lain: Universitas Gadjah Mada";
    }

    // Menampilkan hasil rekomendasi
    document.getElementById('recommended-jurusan').innerText = "Jurusan yang sesuai: " + jurusan;
    document.getElementById('recommended-kampus').innerText = "Rekomendasi Kampus: " + kampus;
    document.getElementById('result').style.display = 'block';
});
