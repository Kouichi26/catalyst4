const hamburger = document.querySelector('.hamburger');
const navMenuUl = document.querySelector('.nav-menu ul');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle buka/tutup menu saat hamburger diklik
if (hamburger && navMenuUl) {
  hamburger.addEventListener('click', () => {
    const isOpen = navMenuUl.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
  });
}

// Tutup menu otomatis setelah salah satu tautan diklik
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenuUl?.classList.remove('active');
    hamburger?.classList.remove('active');
    hamburger?.setAttribute('aria-expanded', 'false');
    hamburger?.setAttribute('aria-label', 'Buka menu navigasi');
  });
});
