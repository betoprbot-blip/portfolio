/* ============================================
   Gilberto Miranda — Portfolio Site Scripts
   Navigation toggle, smooth scroll, active states.
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var current = '';

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 120;
      var sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // --- Load profile data (future: fetch profile.json) ---
  // TODO: When profile.json is ready, fetch and populate dynamic fields
  // fetch('data/profile.json')
  //   .then(function(r) { return r.json(); })
  //   .then(function(data) {
  //     // Populate dynamic content
  //   });

})();
