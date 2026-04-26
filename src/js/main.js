/**
 * Main JavaScript File
 * Project: PIXLOGIX
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('PIXLOGIX Project Initialized');
  
  // Initialize mobile menu toggle
  initMobileMenu();
  
  // Initialize smooth scrolling
  initSmoothScroll();
  
  // Initialize animations
  initAnimations();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on a link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
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
    link.addEventListener('click', function(e) {
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
  
  const observer = new IntersectionObserver(function(entries) {
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
