// Toggle menu untuk HP
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Fungsi toggle menu
function toggleMenu() {
  navLinks.classList.toggle("active");
}

// Event klik hamburger
menuToggle.addEventListener("click", toggleMenu);

// Tutup menu otomatis setelah klik link (khusus HP/Tablet)
navItems.forEach(item => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
    }
  });
});

// Pastikan menu normal saat resize ke desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});

/* 
📌 Catatan:
- Script ini aman dipakai di semua perangkat.
- Navbar akan responsif otomatis.
- Tinggal tambahkan Google Sheets API di bawah jika ingin integrasi database.
*/

// Contoh placeholder integrasi Google Sheets API:
/*
function sendDataToGoogleSheets(data) {
  fetch("URL_WEB_APP_SCRIPT", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(result => {
    console.log("Data berhasil dikirim:", result);
  })
  .catch(err => console.error("Error:", err));
}
*/



// ADMINISTRASI
// Toggle menu untuk HP
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("resize", () => {
  if(window.innerWidth > 768) navLinks.classList.remove("active");
});

// =============================
// Fungsi berpindah view
// =============================
function showView(viewId){
  // Sembunyikan semua view-content
  document.querySelectorAll('.view-content').forEach(v => v.style.display = 'none');
  // Tampilkan view yang dipilih
  const view = document.getElementById(viewId);
  if(view) view.style.display = 'block';
}

// Kembali ke tampilan sebelumnya
function backToDashboard(){
  showView('dashboard-main');
}

// Saat pertama kali load halaman, tampilkan konten utama (hero)
document.addEventListener("DOMContentLoaded", () => {
  // Sembunyikan semua view-content kecuali dashboard-main
  document.querySelectorAll('.view-content').forEach(v => v.style.display = 'none');
  // Bisa diganti tampilkan hero biasa jika ingin default hero
});



// Fungsi buka file di modal
function openFile(url) {
  document.getElementById('file-frame').src = url;
  document.getElementById('file-modal').style.display = 'flex';
}

// Tutup modal dan kembali ke dashboard
function closeFile() {
  document.getElementById('file-frame').src = ''; // reset iframe
  document.getElementById('file-modal').style.display = 'none';
}
