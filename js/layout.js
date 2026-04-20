/* ============================================================
   MAISON VALE BAKERY — Navigation & Footer Templates
   ============================================================ */

function renderNav(isDark = false) {
  const navClass = isDark ? 'site-nav dark-start' : 'site-nav light-start';
  return `
<nav class="${navClass}">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="script-logo">Maison Vale</span>
      <span class="sub-logo">Artisan Bakery</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="menu.html">Menu</a></li>
      <li><a href="custom-orders.html">Custom Orders</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="custom-orders.html" class="nav-order">
      <span class="nav-order-text">Order Inquiry</span>
    </a>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu">
  <button class="mobile-close">✕</button>
  <a href="index.html">Home</a>
  <a href="menu.html">Menu</a>
  <a href="custom-orders.html">Custom Orders</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</div>`;
}

function renderFooter() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="script-logo">Maison Vale</span>
        <p>A neighborhood artisan bakery rooted in craft, warmth, and the beauty of simple ingredients done exceptionally well.</p>
        <div class="footer-social" style="margin-top:24px;">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Pinterest</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Explore</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="menu.html">Our Menu</a></li>
          <li><a href="custom-orders.html">Custom Orders</a></li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Specialties</h5>
        <ul>
          <li><a href="menu.html">Croissants & Viennoiserie</a></li>
          <li><a href="menu.html">Artisan Breads</a></li>
          <li><a href="menu.html">Celebration Cakes</a></li>
          <li><a href="menu.html">Seasonal Offerings</a></li>
          <li><a href="custom-orders.html">Wedding Cakes</a></li>
        </ul>
      </div>

      <div class="footer-col footer-hours">
        <h5>Hours & Location</h5>
        <p><strong>Tuesday – Friday</strong><br>7:00 am – 5:00 pm</p>
        <p style="margin-top:12px;"><strong>Saturday – Sunday</strong><br>8:00 am – 3:00 pm</p>
        <p style="margin-top:12px;"><strong>Monday</strong><br>Closed</p>
        <p style="margin-top:16px; font-size:0.82rem;">42 Willow Lane, Millbrook<br>hello@maisonvale.com</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Maison Vale Bakery. All rights reserved.</p>
      <p>Handcrafted with care, every morning.</p>
    </div>
  </div>
</footer>`;
}

// Inject nav + footer
document.getElementById('site-nav-placeholder').innerHTML = renderNav(
  document.body.dataset.navDark === 'true'
);
document.getElementById('site-footer-placeholder').innerHTML = renderFooter();
