document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Header Scroll Effect ---
    const header = document.getElementById('header');
    const announcementHeight = document.querySelector('.announcement-bar').offsetHeight;
    
    // Adjust initial position
    header.style.top = `${announcementHeight}px`;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.top = '0px'; // Snap to top when scrolled
        } else {
            header.classList.remove('scrolled');
            header.style.top = `${announcementHeight}px`;
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.querySelector('.nav');
    const mobileLinks = document.querySelectorAll('.nav__link');

    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate hamburger lines if desired (optional visual cue)
        const spans = mobileToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            // Reset hamburger
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // --- 3. Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.animate-on-scroll, .card, .product-card');
    scrollElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // --- 4. Product Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10); // Fade in
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });

    // --- 5. Back to Top Button ---
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

// --- 6. Cart & Toast Interactions ---
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');

// Global function for onclick in HTML
window.addToCart = function() {
    cartCount++;
    cartCountEl.textContent = cartCount;
    
    // Bump animation
    cartCountEl.style.transform = 'scale(1.2)';
    setTimeout(() => cartCountEl.style.transform = 'scale(1)', 200);

    showToast('Added to your ritual bag');
}

window.showToast = function(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
