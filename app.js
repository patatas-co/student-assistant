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

    const modals = document.querySelectorAll('.modal');
    const modalTriggers = document.querySelectorAll('[data-modal-target]');

    const openModal = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('data-modal-target');
        const modal = document.getElementById(targetId);
        if (!modal) return;
        modal.classList.add('is-open');
        document.body.classList.add('modal-open');
        const focusable = modal.querySelector('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
    };

    const closeModal = (modal) => {
        if (!modal) return;
        modal.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    };

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', openModal);
    });

    modals.forEach((modal) => {
        const closeButtons = modal.querySelectorAll('[data-modal-close]');
        closeButtons.forEach((button) => {
            button.addEventListener('click', () => closeModal(modal));
        });
    });

    // Add click outside to close for each modal
    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Add escape key to close any open modal
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal.is-open');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
});