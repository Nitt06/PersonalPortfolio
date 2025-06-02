// Navigation item click handlers
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Smooth scroll for scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');

scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Add parallax effect to background pattern
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgroundPattern = document.querySelector('.background-pattern');
    backgroundPattern.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add hover effects to social icons
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.2s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Add smooth fade-in animation for content
window.addEventListener('load', () => {
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.style.opacity = '0';
    contentWrapper.style.transform = 'translateY(20px)';
    contentWrapper.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
        contentWrapper.style.opacity = '1';
        contentWrapper.style.transform = 'translateY(0)';
    }, 300);
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
// Only observe .nav-item and .social-icon (both present in HTML)
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.nav-item, .social-icon');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function () {
            setTimeout(() => {
                form.reset();
            }, 100); // Give time for Formspree to process before clearing
        });
    }
});