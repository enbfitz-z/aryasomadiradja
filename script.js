// ============================
// DATA PLANET
// ============================

const planetData = {
    Merkurius: {
        nama: "Merkurius",
        deskripsi: "Merkurius adalah planet terdekat dengan Matahari dan merupakan planet terkecil dalam tata surya."
    },

    Venus: {
        nama: "Venus",
        deskripsi: "Venus adalah planet terpanas karena memiliki atmosfer yang sangat tebal dan kaya karbon dioksida."
    },

    Bumi: {
        nama: "Bumi",
        deskripsi: "Bumi adalah satu-satunya planet yang diketahui memiliki kehidupan."
    },

    Mars: {
        nama: "Mars",
        deskripsi: "Mars dikenal sebagai Planet Merah karena permukaannya mengandung banyak oksida besi."
    },

    Jupiter: {
        nama: "Jupiter",
        deskripsi: "Jupiter adalah planet terbesar dalam tata surya dan memiliki Bintik Merah Besar."
    },

    Saturnus: {
        nama: "Saturnus",
        deskripsi: "Saturnus terkenal dengan sistem cincinnya yang sangat indah."
    },

    Uranus: {
        nama: "Uranus",
        deskripsi: "Uranus adalah planet raksasa es yang berputar miring hampir 98 derajat."
    },

    Neptunus: {
        nama: "Neptunus",
        deskripsi: "Neptunus merupakan planet terjauh dari Matahari dan memiliki angin tercepat di tata surya."
    }
};

// ============================
// MENAMPILKAN INFORMASI PLANET
// ============================

function showInfo(namaPlanet) {

    const planet = planetData[namaPlanet];

    document.getElementById("infoBox").innerHTML = `
        <h2>${planet.nama}</h2>
        <p>${planet.deskripsi}</p>
    `;

    playClickSound();
}

// ============================
// AUDIO KLIK
// ============================

function playClickSound() {

    const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-09.mp3"
    );

    audio.play();
}

// ============================
// KUIS
// ============================

function cekJawaban(jawaban) {

    const hasil = document.getElementById("hasil");

    if (jawaban === "B") {

        hasil.innerHTML =
            "✅ Benar! Jupiter adalah planet terbesar dalam tata surya.";

        hasil.style.color = "lightgreen";

    } else {

        hasil.innerHTML =
            "❌ Salah! Jawaban yang benar adalah Jupiter.";

        hasil.style.color = "tomato";
    }
}

// ============================
// FAKTA UNIK ACAK
// ============================

const faktaUnik = [
    "Satu hari di Venus lebih lama daripada satu tahun di Venus.",
    "Jupiter memiliki lebih dari 90 satelit alami.",
    "Neptunus memiliki angin dengan kecepatan lebih dari 2.000 km/jam.",
    "Mars memiliki gunung tertinggi di tata surya yaitu Olympus Mons.",
    "Saturnus dapat mengapung di air karena kepadatannya sangat rendah."
];

function tampilkanFaktaAcak() {

    const random =
        faktaUnik[Math.floor(Math.random() * faktaUnik.length)];

    const faktaElement =
        document.getElementById("faktaUnik");

    if (faktaElement) {
        faktaElement.innerHTML =
            "🌟 Fakta Unik: " + random;
    }
}

window.onload = tampilkanFaktaAcak;
