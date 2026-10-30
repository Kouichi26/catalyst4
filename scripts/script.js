const hamburger = document.querySelector('.hamburger');
const navMenuUl = document.querySelector('.nav-menu ul');
const navLinks = document.querySelectorAll('.nav-menu a');
const navSections = Array.from(navLinks, link =>
  document.getElementById(link.hash.slice(1))
).filter(Boolean);

const updateActiveNavLink = () => {
  if (navSections.length === 0) return;

  const navbar = document.querySelector('.navbar');
  const activationPoint = (navbar?.offsetHeight ?? 0) + 1;
  let activeSection = navSections[0];

  navSections.forEach(section => {
    if (section.getBoundingClientRect().top <= activationPoint) {
      activeSection = section;
    }
  });

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
    activeSection = navSections[navSections.length - 1];
  }

  navLinks.forEach(link => {
    const isActive = link.hash === `#${activeSection.id}`;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

window.addEventListener('scroll', updateActiveNavLink, { passive: true });
window.addEventListener('resize', updateActiveNavLink);
window.addEventListener('hashchange', updateActiveNavLink);
updateActiveNavLink();

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
