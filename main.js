document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. The Spotlight Effect (Mouse Tracking) ---
    const spotlight = document.getElementById('spotlight');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Update spotlight position
        spotlight.style.left = `${x}px`;
        spotlight.style.top = `${y}px`;
        
        // Subtle parallax for hero bottles
        const moveX = (window.innerWidth / 2 - x) * 0.01;
        const moveY = (window.innerHeight / 2 - y) * 0.01;
        
        const bottle = document.querySelector('.b-1');
        if(bottle) {
            bottle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // --- 2. Magnetic Buttons (Premium Feel) ---
    const magneticBtns = document.querySelectorAll('.magnetic');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Move button slightly towards cursor
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // --- 3. Smooth Scroll & Sticky Nav ---
    const nav = document.querySelector('.nav-layer');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- 4. Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optional: Unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-up animation classes dynamically
    const animateElements = document.querySelectorAll('.phil-text, .art-card, .luxe-card, .newsletter-inner');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Define the class to trigger animation
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

});

// --- 5. Cart Interaction ---
window.addToCart = function() {
    const btn = document.querySelector('.cart-indicator');
    let count = parseInt(btn.innerText);
    
    // Animation
    btn.style.transform = 'scale(1.5)';
    btn.style.background = '#D4AF37'; // Gold flash
    
    setTimeout(() => {
        btn.innerText = count + 1;
        btn.style.transform = 'scale(1)';
        btn.style.background = '#1A1A1A'; // Back to black
    }, 200);
}
