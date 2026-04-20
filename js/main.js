/* ============================================================
   MAISON VALE BAKERY — Shared JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky Nav ----
  const nav = document.querySelector('.site-nav');
  const isDark = nav && nav.classList.contains('dark-start');

  const handleScroll = () => {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      nav.classList.remove('dark-start');
    } else {
      nav.classList.remove('scrolled');
      if (isDark) nav.classList.add('dark-start');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile Menu ----
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobile = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (mobileClose) mobileClose.addEventListener('click', closeMobile);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));
  }

  // ---- Scroll Reveals ----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // ---- Active nav link ----
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---- Form submissions (preventDefault + success msg) ----
  document.querySelectorAll('form.site-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>Message Sent — Thank You</span>';
      btn.disabled = true;
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; form.reset(); }, 4000);
    });
  });

  // ---- Parallax hero (subtle) ----
  const heroBg = document.querySelector('.hero-parallax');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.35;
      heroBg.style.transform = `translateY(${y}px)`;
    }, { passive: true });
  }

});
