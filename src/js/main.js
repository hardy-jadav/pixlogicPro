/**
 * Main JavaScript File
 * Project: PIXLOGIX
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log('PIXLOGIX Project Initialized');

  // Initialize mobile menu toggle
  initMobileMenu();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize animations
  initAnimations();

  // Initialize team slider
  initTeamSlider();

  // Initialize reviews carousel
  initReviewsCarousel();

  // Initialize FAQ accordion
  initFAQAccordion();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking on a link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/**
 * Smooth Scrolling for Navigation Links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Initialize Fade-in Animations on Scroll
 */
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation class
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Utility: Add active class to navigation
 */
function setActiveNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const currentLocation = location.href;

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
  });
}

// Call on page load
setActiveNavigation();

/**
 * Team Slider Functionality
 */
function initTeamSlider() {
  const slider = document.getElementById('teamSlider');
  const prevBtn = document.getElementById('teamPrevBtn');
  const nextBtn = document.getElementById('teamNextBtn');

  if (!slider || !prevBtn || !nextBtn) return;

  const wrapper = slider.parentElement;
  let currentOffset = 0;
  let slideWidth = 0;
  let slideGap = 0;
  let visibleSlides = 0;
  let maxOffset = 0;

  function calculateSizes() {
    const firstSlide = slider.children[0];
    if (!firstSlide || !wrapper) return;

    slideWidth = firstSlide.offsetWidth;
    slideGap = parseInt(getComputedStyle(slider).gap) || 0;
    visibleSlides = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    maxOffset = Math.max(0, slider.scrollWidth - wrapper.offsetWidth);

    if (currentOffset > maxOffset) {
      currentOffset = maxOffset;
    }
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${currentOffset}px)`;

    const atStart = currentOffset === 0;
    const atEnd = currentOffset >= maxOffset;

    prevBtn.classList.toggle('opacity-50', atStart);
    prevBtn.classList.toggle('cursor-not-allowed', atStart);
    nextBtn.classList.toggle('opacity-50', atEnd);
    nextBtn.classList.toggle('cursor-not-allowed', atEnd);

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  window.addEventListener('resize', () => {
    calculateSizes();
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    if (currentOffset > 0) {
      currentOffset = Math.max(0, currentOffset - (slideWidth + slideGap) * visibleSlides);
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentOffset < maxOffset) {
      currentOffset = Math.min(maxOffset, currentOffset + (slideWidth + slideGap) * visibleSlides);
      updateSlider();
    }
  });

  // Initialize slider on page load
  calculateSizes();
  updateSlider();
}

/**
 * Reviews Carousel Functionality
 * Shows 2 review cards at a time on desktop, 1 on mobile.
 * Navigation moves by the number of visible cards.
 */
function initReviewsCarousel() {
  const slider = document.getElementById('reviewSlider');
  const prevBtn = document.getElementById('reviewPrevBtn');
  const nextBtn = document.getElementById('reviewNextBtn');

  if (!slider || !prevBtn || !nextBtn) return;

  const wrapper = slider.parentElement;
  let currentOffset = 0;
  let slideWidth = 0;
  let slideGap = 0;
  let visibleSlides = 0;
  let maxOffset = 0;

  function calculateSizes() {
    const firstSlide = slider.children[0];
    if (!firstSlide || !wrapper) return;

    slideWidth = firstSlide.offsetWidth;
    slideGap = parseInt(getComputedStyle(slider).gap) || 0;
    // Show 2 cards on md+ screens, 1 on mobile
    visibleSlides = window.innerWidth < 768 ? 1 : 2;
    maxOffset = Math.max(0, slider.scrollWidth - wrapper.offsetWidth);

    if (currentOffset > maxOffset) {
      currentOffset = maxOffset;
    }
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${currentOffset}px)`;

    const atStart = currentOffset <= 0;
    const atEnd = currentOffset >= maxOffset;

    prevBtn.classList.toggle('opacity-50', atStart);
    prevBtn.classList.toggle('cursor-not-allowed', atStart);
    nextBtn.classList.toggle('opacity-50', atEnd);
    nextBtn.classList.toggle('cursor-not-allowed', atEnd);

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  window.addEventListener('resize', () => {
    calculateSizes();
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    if (currentOffset > 0) {
      const step = (slideWidth + slideGap) * visibleSlides;
      currentOffset = Math.max(0, currentOffset - step);
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentOffset < maxOffset) {
      const step = (slideWidth + slideGap) * visibleSlides;
      currentOffset = Math.min(maxOffset, currentOffset + step);
      updateSlider();
    }
  });

  // Initialize carousel on page load
  calculateSizes();
  updateSlider();
}

/**
 * FAQ Accordion Functionality
 * Only one accordion panel remains open at a time.
 * Active item gets border-brand-primary highlight and minus icon.
 */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  function closeItem(item) {
    const button = item.querySelector('.faq-button');
    const panel = item.querySelector('.faq-panel');
    const icon = item.querySelector('.faq-icon i');

    if (!button || !panel) return;

    button.setAttribute('aria-expanded', 'false');
    panel.classList.add('hidden');

    // Reset button styles
    button.style.backgroundColor = '';
    button.style.borderColor = '';

    // Only change the icon
    if (icon) {
      icon.classList.remove('fa-arrow-up');
      icon.classList.add('fa-arrow-down');
    }
  }

  function openItem(item) {
    const button = item.querySelector('.faq-button');
    const panel = item.querySelector('.faq-panel');
    const icon = item.querySelector('.faq-icon i');

    if (!button || !panel) return;

    button.setAttribute('aria-expanded', 'true');
    panel.classList.remove('hidden');

    // Apply custom styles to question button
    button.style.backgroundColor = '#F7F9FC';
    button.style.borderColor = '#7FA1C3';

    // Only change the icon
    if (icon) {
      icon.classList.remove('fa-arrow-down');
      icon.classList.add('fa-arrow-up');
    }
  }

  items.forEach(item => {
    const button = item.querySelector('.faq-button');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      items.forEach(i => closeItem(i));

      if (!isOpen) openItem(item);
    });
  });
}

