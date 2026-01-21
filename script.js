document.addEventListener('DOMContentLoaded', () => {
    console.log('Gemini Workshop LP Initialized');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .skill-card, .timeline-item, .tool-card, .benefit-item, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});
