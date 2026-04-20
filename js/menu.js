/* Menu Page — Tab Switching */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add('active');
        // Re-trigger reveals
        targetSection.querySelectorAll('.reveal').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      }
    });
  });

  // Activate all reveals in the initial active section
  document.querySelectorAll('.menu-section.active .reveal').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });
});
