/**
 * Alchemia Molecular Aromatherapy - Laboratory Interface
 * Modern, accessible JavaScript with WCAG AAA compliance
 */

// State Management
const State = {
  cart: [],
  filters: {
    category: 'all',
    sort: 'purity'
  },
  mobileMenuOpen: false,
  cartOpen: false
};

// DOM Elements
const Elements = {
  menuToggle: null,
  mobileNav: null,
  cartButton: null,
  cartDrawer: null,
  cartClose: null,
  cartContent: null,
  backToTop: null,
  toast: null,
  toastMessage: null,
  currentYear: null,
  subscriptionForm: null,
  filters: null,
  sortSelect: null,
  loadMoreBtn: null,
  cartItems: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeElements();
  initializeEventListeners();
  initializeAnimations();
  updateCartCount();
  setCurrentYear();
});

/**
 * Initialize DOM Elements
 */
function initializeElements() {
  Elements.menuToggle = document.getElementById('menuToggle');
  Elements.mobileNav = document.getElementById('mobileNav');
  Elements.cartButton = document.getElementById('cartButton');
  Elements.cartDrawer = document.getElementById('cartDrawer');
  Elements.cartClose = document.getElementById('cartClose');
  Elements.cartContent = document.getElementById('cartContent');
  Elements.backToTop = document.getElementById('backToTop');
  Elements.toast = document.getElementById('toast');
  Elements.toastMessage = document.getElementById('toastMessage');
  Elements.currentYear = document.getElementById('currentYear');
  Elements.subscriptionForm = document.getElementById('subscriptionForm');
  Elements.filters = document.querySelectorAll('[data-filter]');
  Elements.sortSelect = document.getElementById('sortSelect') || document.querySelector('.compounds__sort-select');
  Elements.loadMoreBtn = document.getElementById('loadMoreBtn');
  
  // Initialize Intersection Observer for animations
  initializeIntersectionObserver();
}

/**
 * Initialize Event Listeners
 */
function initializeEventListeners() {
  // Mobile Menu
  if (Elements.menuToggle) {
    Elements.menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking links
  document.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
  
  // Cart
  if (Elements.cartButton) {
    Elements.cartButton.addEventListener('click', toggleCart);
  }
  
  if (Elements.cartClose) {
    Elements.cartClose.addEventListener('click', closeCart);
  }
  
  // Close cart when clicking outside
  document.addEventListener('click', (event) => {
    if (State.cartOpen && 
        !Elements.cartDrawer.contains(event.target) && 
        !Elements.cartButton.contains(event.target)) {
      closeCart();
    }
  });
  
  // Back to Top
  if (Elements.backToTop) {
    Elements.backToTop.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleBackToTop);
  }
  
  // Filters
  if (Elements.filters.length > 0) {
    Elements.filters.forEach(filter => {
      filter.addEventListener('click', handleFilterClick);
    });
  }
  
  // Sort Select
  if (Elements.sortSelect) {
    Elements.sortSelect.addEventListener('change', handleSortChange);
  }
  
  // Load More
  if (Elements.loadMoreBtn) {
    Elements.loadMoreBtn.addEventListener('click', loadMoreCompounds);
  }
  
  // Add to Cart buttons
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-compound]');
    if (addButton) {
      event.preventDefault();
      const compound = addButton.dataset.compound;
      const name = addButton.closest('.compound-card')?.querySelector('.compound-card__title')?.textContent || 'Compound';
      const price = parseFloat(addButton.closest('.compound-card')?.querySelector('.compound-card__price')?.textContent?.replace('$', '')) || 0;
      addToCart(compound, name, price);
    }
  });
  
  // Subscription Form
  if (Elements.subscriptionForm) {
    Elements.subscriptionForm.addEventListener('submit', handleSubscription);
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Keyboard Navigation
  document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Initialize Animations
 */
function initializeAnimations() {
  // Animate stats counters
  const statNumbers = document.querySelectorAll('[data-count]');
  if (statNumbers.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
  }
  
  // Staggered animations for cards
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (animatedElements.length > 0) {
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => staggerObserver.observe(el));
  }
}

/**
 * Initialize Intersection Observer for scroll animations
 */
function initializeIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Add specific class based on element type
        if (entry.target.classList.contains('hero')) {
          entry.target.classList.add('hero--visible');
        } else if (entry.target.classList.contains('compound-card')) {
          entry.target.classList.add('compound-card--visible');
        } else if (entry.target.classList.contains('process__step')) {
          entry.target.classList.add('process__step--visible');
        }
      }
    });
  }, observerOptions);
  
  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Observe specific elements
  document.querySelectorAll('.compound-card, .testimonial-card, .process__step').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Toggle Mobile Menu
 */
function toggleMobileMenu() {
  State.mobileMenuOpen = !State.mobileMenuOpen;
  
  if (Elements.menuToggle) {
    Elements.menuToggle.setAttribute('aria-expanded', State.mobileMenuOpen);
    Elements.menuToggle.classList.toggle('active');
  }
  
  if (Elements.mobileNav) {
    Elements.mobileNav.classList.toggle('active');
    Elements.mobileNav.setAttribute('aria-hidden', !State.mobileMenuOpen);
    
    // Trap focus in mobile menu when open
    if (State.mobileMenuOpen) {
      trapFocus(Elements.mobileNav);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

/**
 * Close Mobile Menu
 */
function closeMobileMenu() {
  State.mobileMenuOpen = false;
  
  if (Elements.menuToggle) {
    Elements.menuToggle.setAttribute('aria-expanded', 'false');
    Elements.menuToggle.classList.remove('active');
  }
  
  if (Elements.mobileNav) {
    Elements.mobileNav.classList.remove('active');
    Elements.mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/**
 * Toggle Cart Drawer
 */
function toggleCart() {
  State.cartOpen = !State.cartOpen;
  
  if (Elements.cartDrawer) {
    Elements.cartDrawer.classList.toggle('active');
    Elements.cartDrawer.setAttribute('aria-hidden', !State.cartOpen);
    
    if (State.cartOpen) {
      updateCartDisplay();
      trapFocus(Elements.cartDrawer);
    }
  }
}

/**
 * Close Cart Drawer
 */
function closeCart() {
  State.cartOpen = false;
  
  if (Elements.cartDrawer) {
    Elements.cartDrawer.classList.remove('active');
    Elements.cartDrawer.setAttribute('aria-hidden', 'true');
  }
}

/**
 * Add Item to Cart
 */
function addToCart(compoundId, name, price) {
  const existingItem = State.cart.find(item => item.id === compoundId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    State.cart.push({
      id: compoundId,
      name: name,
      price: price,
      quantity: 1
    });
  }
  
  updateCartCount();
  updateCartDisplay();
  showToast(`${name} added to collection vial`);
  
  // Visual feedback on button
  const button = document.querySelector(`[data-compound="${compoundId}"]`);
  if (button) {
    button.classList.add('added');
    setTimeout(() => button.classList.remove('added'), 500);
  }
}

/**
 * Update Cart Count Display
 */
function updateCartCount() {
  const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  if (Elements.cartButton) {
    Elements.cartButton.setAttribute('data-count', totalItems);
    Elements.cartButton.setAttribute('aria-label', `Cart: ${totalItems} items`);
  }
  
  // Update cart drawer title
  const cartTitle = document.querySelector('.cart-drawer__title');
  if (cartTitle && totalItems > 0) {
    cartTitle.textContent = `Collection Vial (${totalItems})`;
  }
}

/**
 * Update Cart Display
 */
function updateCartDisplay() {
  if (!Elements.cartContent) return;
  
  if (State.cart.length === 0) {
    Elements.cartContent.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Your collection vial is empty</p>
        <a href="#compounds" class="btn btn--outline" onclick="closeCart()">Browse Compounds</a>
      </div>
    `;
    
    updateCartTotal(0);
    return;
  }
  
  let cartHTML = '<div class="cart-items">';
  
  State.cart.forEach((item, index) => {
    const total = item.price * item.quantity;
    cartHTML += `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item__info">
          <h4 class="cart-item__name">${item.name}</h4>
          <div class="cart-item__meta">
            <span class="cart-item__price">$${item.price.toFixed(2)}</span>
            <span class="cart-item__separator">×</span>
            <span class="cart-item__quantity">${item.quantity}</span>
          </div>
        </div>
        <div class="cart-item__actions">
          <div class="cart-item__total">$${total.toFixed(2)}</div>
          <button class="cart-item__remove" onclick="removeFromCart('${item.id}')" aria-label="Remove ${item.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  });
  
  cartHTML += '</div>';
  Elements.cartContent.innerHTML = cartHTML;
  
  // Update total
  const total = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  updateCartTotal(total);
}

/**
 * Update Cart Total
 */
function updateCartTotal(total) {
  const totalElement = document.querySelector('.cart-drawer__total-value');
  if (totalElement) {
    totalElement.textContent = `$${total.toFixed(2)}`;
  }
}

/**
 * Remove Item from Cart
 */
function removeFromCart(compoundId) {
  State.cart = State.cart.filter(item => item.id !== compoundId);
  updateCartCount();
  updateCartDisplay();
  showToast('Compound removed from collection');
}

/**
 * Show Toast Notification
 */
function showToast(message) {
  if (!Elements.toast || !Elements.toastMessage) return;
  
  Elements.toastMessage.textContent = message;
  Elements.toast.classList.add('active');
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    Elements.toast.classList.remove('active');
  }, 3000);
  
  // Announce to screen readers
  announceToScreenReader(message);
}

/**
 * Announce to Screen Reader
 */
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-announcement';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Toggle Back to Top Button
 */
function toggleBackToTop() {
  if (!Elements.backToTop) return;
  
  if (window.scrollY > 500) {
    Elements.backToTop.classList.add('visible');
  } else {
    Elements.backToTop.classList.remove('visible');
  }
  
  // Add scrolled class to header
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

/**
 * Scroll to Top
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Handle Filter Click
 */
function handleFilterClick(event) {
  const filter = event.currentTarget;
  const category = filter.dataset.filter;
  
  // Update active filter
  document.querySelectorAll('.compounds__filter').forEach(f => {
    f.classList.remove('compounds__filter--active');
  });
  filter.classList.add('compounds__filter--active');
  
  // Update state
  State.filters.category = category;
  
  // Filter compounds
  filterCompounds();
}

/**
 * Handle Sort Change
 */
function handleSortChange(event) {
  State.filters.sort = event.target.value;
  sortCompounds();
}

/**
 * Filter Compounds
 */
function filterCompounds() {
  const compounds = document.querySelectorAll('.compound-card');
  
  compounds.forEach(compound => {
    const compoundCategory = compound.dataset.category;
    
    if (State.filters.category === 'all' || State.filters.category === compoundCategory) {
      compound.style.display = 'block';
      // Trigger animation
      compound.classList.add('filtered-in');
      setTimeout(() => compound.classList.remove('filtered-in'), 300);
    } else {
      compound.style.display = 'none';
    }
  });
  
  // Update count
  const visibleCount = document.querySelectorAll('.compound-card[style="display: block"]').length;
  const totalCount = compounds.length;
  
  const counter = document.querySelector('.compounds__counter-current');
  if (counter) {
    counter.textContent = visibleCount;
  }
}

/**
 * Sort Compounds
 */
function sortCompounds() {
  const container = document.querySelector('.compounds__grid');
  if (!container) return;
  
  const compounds = Array.from(container.querySelectorAll('.compound-card'));
  
  compounds.sort((a, b) => {
    switch (State.filters.sort) {
      case 'purity':
        return parseFloat(b.dataset.purity) - parseFloat(a.dataset.purity);
      case 'complexity':
        return parseFloat(b.dataset.complexity) - parseFloat(a.dataset.complexity);
      case 'price':
        return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
      case 'popularity':
        return parseFloat(b.dataset.popularity) - parseFloat(a.dataset.popularity);
      default:
        return 0;
    }
  });
  
  // Reorder DOM
  compounds.forEach(compound => {
    container.appendChild(compound);
  });
  
  // Trigger reflow for animation
  compounds.forEach((compound, index) => {
    setTimeout(() => {
      compound.classList.add('sorted');
      setTimeout(() => compound.classList.remove('sorted'), 300);
    }, index * 50);
  });
}

/**
 * Load More Compounds
 */
function loadMoreCompounds() {
  // In a real application, this would fetch from an API
  // For now, we'll simulate loading more items
  
  const loadMoreBtn = Elements.loadMoreBtn;
  if (!loadMoreBtn) return;
  
  // Show loading state
  const originalText = loadMoreBtn.querySelector('.btn__text').textContent;
  loadMoreBtn.querySelector('.btn__text').textContent = 'Analyzing...';
  loadMoreBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Reset button
    loadMoreBtn.querySelector('.btn__text').textContent = originalText;
    loadMoreBtn.disabled = false;
    
    // Show notification
    showToast('Additional compounds loaded');
    
    // In a real app, you would append new compounds here
    // For demonstration, we'll update the counter
    const counter = document.querySelector('.compounds__counter-current');
    if (counter) {
      const current = parseInt(counter.textContent);
      const total = parseInt(document.querySelector('.compounds__counter-total').textContent);
      
      if (current < total) {
        counter.textContent = Math.min(current + 4, total);
      }
      
      if (parseInt(counter.textContent) >= total) {
        loadMoreBtn.style.display = 'none';
      }
    }
  }, 1500);
}

/**
 * Handle Subscription Form
 */
function handleSubscription(event) {
  event.preventDefault();
  
  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');
  const consentCheckbox = form.querySelector('input[type="checkbox"]');
  
  if (!emailInput || !consentCheckbox) return;
  
  // Validate email
  const email = emailInput.value.trim();
  if (!isValidEmail(email)) {
    showToast('Please enter a valid email address');
    emailInput.focus();
    return;
  }
  
  // Validate consent
  if (!consentCheckbox.checked) {
    showToast('Please consent to receive research papers');
    consentCheckbox.focus();
    return;
  }
  
  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.querySelector('.subscription__submit-text').textContent;
  submitButton.querySelector('.subscription__submit-text').textContent = 'Subscribing...';
  submitButton.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Reset form
    form.reset();
    submitButton.querySelector('.subscription__submit-text').textContent = originalText;
    submitButton.disabled = false;
    
    // Show success
    showToast('Welcome to Molecular Insights. Check your email for verification.');
    
    // In a real app, you would send data to your backend here
    console.log('Subscription submitted:', { email });
  }, 1500);
}

/**
 * Validate Email
 */
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Animate Counter
 */
function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  const duration = 1500; // ms
  const steps = 60;
  const increment = target / steps;
  const stepTime = duration / steps;
  
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
}

/**
 * Set Current Year in Footer
 */
function setCurrentYear() {
  if (Elements.currentYear) {
    Elements.currentYear.textContent = new Date().getFullYear();
  }
}

/**
 * Trap Focus in Modal
 */
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
    
    // Escape key closes modal
    if (e.key === 'Escape') {
      if (State.mobileMenuOpen) {
        closeMobileMenu();
      }
      if (State.cartOpen) {
        closeCart();
      }
    }
  });
}

/**
 * Handle Keyboard Navigation
 */
function handleKeyboardNavigation(event) {
  // Close modals with Escape
  if (event.key === 'Escape') {
    if (State.mobileMenuOpen) {
      closeMobileMenu();
    }
    if (State.cartOpen) {
      closeCart();
    }
  }
  
  // Navigate with arrow keys in product grid
  if (event.target.closest('.compound-card')) {
    const card = event.target.closest('.compound-card');
    const grid = card.closest('.compounds__grid');
    
    if (!grid) return;
    
    const cards = Array.from(grid.querySelectorAll('.compound-card'));
    const currentIndex = cards.indexOf(card);
    
    let nextCard = null;
    
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextCard = cards[currentIndex + 1];
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextCard = cards[currentIndex - 1];
        break;
      case 'Enter':
      case ' ':
        if (event.target.classList.contains('compound-card__action')) {
          event.preventDefault();
          event.target.click();
        }
        break;
    }
    
    if (nextCard) {
      const focusable = nextCard.querySelector('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (focusable) {
        focusable.focus();
        event.preventDefault();
      }
    }
  }
}

/**
 * Initialize Compound Cards with Lazy Loading
 */
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

/**
 * Performance Monitoring
 */
function monitorPerformance() {
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime, lastEntry);
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime, entry);
      });
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
  }
}

// Start performance monitoring
if (process.env.NODE_ENV === 'development') {
  monitorPerformance();
}

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    State,
    Elements,
    addToCart,
    removeFromCart,
    toggleMobileMenu,
    toggleCart
  };
}
