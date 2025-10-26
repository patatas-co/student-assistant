const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const yearEl = document.getElementById('year');

// Set current year
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Mobile navigation toggle
if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// New: Scroll-based animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .process-step, .matrix-card, .hero-copy, .hero-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset for smoother reveal
    });

    animatedElements.forEach((el) => observer.observe(el));
});