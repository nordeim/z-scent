# Sample Design Reference (follow the thought process to complete naturally)

You will re-imagine it into a sophisticated, modern single-page website with enhanced UI/UX aesthetics. The design will feature:

- Elegant typography using Playfair Display + Inter from Google Fonts
- Organic color palette with sage greens, warm ambers, and cream tones
- Glass-morphism effects and subtle animations
- Improved accessibility with ARIA labels and keyboard navigation
- Enhanced interactivity with scroll animations, smooth transitions, and micro-interactions
- Mobile-first responsive design with hamburger menu

File 1: index.html
HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover handcrafted aromatherapy essentials. Pure essential oils, botanical soaps, and wellness rituals designed to restore balance and calm.">
  <meta name="keywords" content="aromatherapy, essential oils, wellness, natural skincare, botanical, self-care">
  <meta name="author" content="The Scent">
  <meta name="theme-color" content="#4a5d52">
  
  <!-- Open Graph / Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="The Scent | Artisan Aromatherapy">
  <meta property="og:description" content="Handcrafted aromatherapy essentials for daily wellness rituals.">
  
  <title>The Scent | Artisan Aromatherapy & Wellness</title>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>">
</head>
<body>
  <!-- Skip Navigation for Accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Announcement Bar -->
  <div class="announcement-bar" role="banner">
    <div class="announcement-bar__content">
      <span class="announcement-bar__icon">✦</span>
      <p>Complimentary shipping on orders over $75 | Use code <strong>SERENITY</strong> for 15% off</p>
      <span class="announcement-bar__icon">✦</span>
    </div>
  </div>
  
  <!-- Header -->
  <header class="header" id="header">
    <div class="header__container">
      <!-- Logo -->
      <a href="#hero" class="header__logo" aria-label="The Scent - Home">
        <div class="header__logo-mark">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
            <path d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z" fill="currentColor" opacity="0.2"/>
            <path d="M20 10C20 10 14 17 14 22C14 25.3137 16.6863 28 20 28C23.3137 28 26 25.3137 26 22C26 17 20 10 20 10Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="header__logo-text">
          <span class="header__logo-name">The Scent</span>
          <span class="header__logo-tagline">Artisan Aromatherapy</span>
        </div>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="header__nav" aria-label="Main navigation">
        <ul class="header__nav-list">
          <li><a href="#hero" class="header__nav-link active">Home</a></li>
          <li><a href="#about" class="header__nav-link">Our Story</a></li>
          <li><a href="#products" class="header__nav-link">Shop</a></li>
          <li><a href="#testimonials" class="header__nav-link">Reviews</a></li>
          <li><a href="#contact" class="header__nav-link">Contact</a></li>
        </ul>
      </nav>
      
      <!-- Header Actions -->
      <div class="header__actions">
        <button class="header__search-btn" aria-label="Search products">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        
        <button class="header__cart-btn" id="cartButton" aria-label="Shopping cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span class="header__cart-count" id="cartCount">0</span>
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button class="header__menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
          <span class="header__menu-bar"></span>
          <span class="header__menu-bar"></span>
          <span class="header__menu-bar"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
      <ul class="mobile-nav__list">
        <li><a href="#hero" class="mobile-nav__link">Home</a></li>
        <li><a href="#about" class="mobile-nav__link">Our Story</a></li>
        <li><a href="#products" class="mobile-nav__link">Shop</a></li>
        <li><a href="#testimonials" class="mobile-nav__link">Reviews</a></li>
        <li><a href="#contact" class="mobile-nav__link">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main id="main-content">
    
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__container">
        <div class="hero__content">
          <div class="hero__badge animate-on-scroll">
            <span class="hero__badge-dot"></span>
            <span>Handcrafted with Intention</span>
          </div>
          
          <h1 class="hero__title animate-on-scroll">
            Elevate Your <em>Daily Rituals</em> with Nature's Finest Essences
          </h1>
          
          <p class="hero__description animate-on-scroll">
            Discover our collection of artisan aromatherapy blends, crafted in small batches using pure botanical extracts. Each creation is designed to restore balance, nurture well-being, and transform ordinary moments into sacred rituals.
          </p>
          
          <div class="hero__cta animate-on-scroll">
            <a href="#products" class="btn btn--primary">
              <span>Explore Collection</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" class="btn btn--secondary">
              <span>Our Philosophy</span>
            </a>
          </div>
          
          <div class="hero__features animate-on-scroll">
            <div class="hero__feature">
              <div class="hero__feature-icon">🌿</div>
              <span>100% Natural</span>
            </div>
            <div class="hero__feature">
              <div class="hero__feature-icon">🧪</div>
              <span>Small Batch</span>
            </div>
            <div class="hero__feature">
              <div class="hero__feature-icon">🌍</div>
              <span>Eco-Conscious</span>
            </div>
          </div>
        </div>
        
        <div class="hero__visual animate-on-scroll">
          <div class="hero__visual-wrapper">
            <div class="hero__visual-glow"></div>
            <div class="hero__visual-image">
              <div class="hero__bottles">
                <div class="hero__bottle hero__bottle--1">
                  <div class="hero__bottle-cap"></div>
                  <div class="hero__bottle-body">
                    <div class="hero__bottle-liquid"></div>
                    <div class="hero__bottle-label">
                      <span class="hero__bottle-type">Calm Blend</span>
                      <span class="hero__bottle-name">Lavender & Chamomile</span>
                    </div>
                  </div>
                </div>
                <div class="hero__bottle hero__bottle--2">
                  <div class="hero__bottle-cap"></div>
                  <div class="hero__bottle-body">
                    <div class="hero__bottle-liquid hero__bottle-liquid--alt"></div>
                    <div class="hero__bottle-label">
                      <span class="hero__bottle-type">Focus Blend</span>
                      <span class="hero__bottle-name">Rosemary & Mint</span>
                    </div>
                  </div>
                </div>
                <div class="hero__bottle hero__bottle--3">
                  <div class="hero__bottle-cap"></div>
                  <div class="hero__bottle-body">
                    <div class="hero__bottle-liquid hero__bottle-liquid--third"></div>
                    <div class="hero__bottle-label">
                      <span class="hero__bottle-type">Uplift Blend</span>
                      <span class="hero__bottle-name">Citrus & Bergamot</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hero__floating-elements">
                <div class="hero__floating-leaf hero__floating-leaf--1">🍃</div>
                <div class="hero__floating-leaf hero__floating-leaf--2">🌸</div>
                <div class="hero__floating-leaf hero__floating-leaf--3">✨</div>
              </div>
            </div>
            <div class="hero__promo-badge">
              <span class="hero__promo-text">New</span>
              <span class="hero__promo-subtitle">Spring Collection</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about" id="about">
      <div class="about__container">
        <div class="about__header animate-on-scroll">
          <span class="section-label">Our Philosophy</span>
          <h2 class="section-title">Crafted with Purpose, <br>Rooted in Nature</h2>
          <p class="section-description">
            We believe that true wellness begins with intentional moments of self-care. Our formulations honor ancient aromatherapy traditions while embracing modern sustainability practices.
          </p>
        </div>
        
        <div class="about__grid">
          <article class="about__card animate-on-scroll">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M24 4C24 4 8 18 8 28C8 36.8366 15.1634 44 24 44C32.8366 44 40 36.8366 40 28C40 18 24 4 24 4Z"/>
                <path d="M24 14V30" stroke-linecap="round"/>
                <path d="M18 24H30" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="about__card-label">Pure Ingredients</span>
            <h3 class="about__card-title">Botanical Excellence</h3>
            <p class="about__card-text">
              Every ingredient is thoughtfully sourced from sustainable farms and distilleries worldwide, ensuring the highest quality essential oils and plant extracts.
            </p>
          </article>
          
          <article class="about__card animate-on-scroll">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="24" cy="24" r="20"/>
                <path d="M24 12V24L32 28"/>
              </svg>
            </div>
            <span class="about__card-label">Mindful Process</span>
            <h3 class="about__card-title">Small Batch Artistry</h3>
            <p class="about__card-text">
              Each blend is handcrafted in small batches to preserve potency and ensure freshness. We never rush the process—quality takes time.
            </p>
          </article>
          
          <article class="about__card animate-on-scroll">
            <div class="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="24" cy="24" r="20"/>
                <path d="M16 24C16 19.5817 19.5817 16 24 16"/>
                <path d="M24 32C28.4183 32 32 28.4183 32 24"/>
                <circle cx="24" cy="24" r="4"/>
              </svg>
            </div>
            <span class="about__card-label">Daily Rituals</span>
            <h3 class="about__card-title">Moments of Calm</h3>
            <p class="about__card-text">
              From morning energizing routines to evening wind-down rituals, our products are designed to integrate seamlessly into your daily wellness practice.
            </p>
          </article>
        </div>
        
        <!-- Stats Section -->
        <div class="about__stats animate-on-scroll">
          <div class="about__stat">
            <span class="about__stat-number" data-count="50">0</span>
            <span class="about__stat-suffix">+</span>
            <span class="about__stat-label">Pure Essential Oils</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number" data-count="15000">0</span>
            <span class="about__stat-suffix">+</span>
            <span class="about__stat-label">Happy Customers</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number" data-count="100">0</span>
            <span class="about__stat-suffix">%</span>
            <span class="about__stat-label">Natural Ingredients</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number" data-count="5">0</span>
            <span class="about__stat-suffix">★</span>
            <span class="about__stat-label">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Products Section -->
    <section class="products" id="products">
      <div class="products__container">
        <div class="products__header animate-on-scroll">
          <div class="products__header-text">
            <span class="section-label">Our Collection</span>
            <h2 class="section-title">Artisan Aromatherapy Essentials</h2>
          </div>
          
          <div class="products__filters">
            <div class="products__filter-group">
              <label for="categoryFilter" class="visually-hidden">Filter by category</label>
              <select id="categoryFilter" class="products__filter-select">
                <option value="all">All Products</option>
                <option value="oils">Essential Oils</option>
                <option value="soaps">Botanical Soaps</option>
                <option value="mists">Room Mists</option>
                <option value="sets">Gift Sets</option>
              </select>
            </div>
            
            <div class="products__filter-group">
              <label for="sortSelect" class="visually-hidden">Sort products</label>
              <select id="sortSelect" class="products__filter-select">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="products__grid" id="productGrid">
          <!-- Product 1 -->
          <article class="product-card animate-on-scroll" data-price="38" data-category="oils" data-rating="5" data-date="2024-01">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--lavender"></div>
              <span class="product-card__badge product-card__badge--bestseller">Bestseller</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Essential Oil Blend</span>
              <h3 class="product-card__title">Serenity Lavender Dreams</h3>
              <p class="product-card__description">Calming blend with lavender, chamomile, and ylang-ylang for peaceful evenings.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(128 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$38.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Serenity Lavender Dreams', 38)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 2 -->
          <article class="product-card animate-on-scroll" data-price="32" data-category="oils" data-rating="5" data-date="2024-02">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--eucalyptus"></div>
              <span class="product-card__badge product-card__badge--new">New Arrival</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Essential Oil</span>
              <h3 class="product-card__title">Pure Eucalyptus Clarity</h3>
              <p class="product-card__description">Invigorating eucalyptus for mental clarity and respiratory support.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(89 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$32.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Pure Eucalyptus Clarity', 32)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 3 -->
          <article class="product-card animate-on-scroll" data-price="28" data-category="mists" data-rating="4" data-date="2024-01">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--rose"></div>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Room Mist</span>
              <h3 class="product-card__title">Rose Garden Sanctuary</h3>
              <p class="product-card__description">Romantic rose and geranium mist for a luxurious atmosphere.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★☆</div>
                <span class="product-card__reviews">(64 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$28.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Rose Garden Sanctuary', 28)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 4 -->
          <article class="product-card animate-on-scroll" data-price="14" data-category="soaps" data-rating="5" data-date="2023-12">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--citrus"></div>
              <span class="product-card__badge product-card__badge--sale">20% Off</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Artisan Soap</span>
              <h3 class="product-card__title">Citrus Sunrise Bar</h3>
              <p class="product-card__description">Cold-processed soap with orange, lemon, and shea butter.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(156 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-original">$18.00</span>
                  <span class="product-card__price-current">$14.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Citrus Sunrise Bar', 14)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 5 -->
          <article class="product-card animate-on-scroll" data-price="42" data-category="oils" data-rating="5" data-date="2024-02">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--mint"></div>
              <span class="product-card__badge product-card__badge--limited">Limited Edition</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Essential Oil Blend</span>
              <h3 class="product-card__title">Peppermint Focus Blend</h3>
              <p class="product-card__description">Energizing peppermint and rosemary for enhanced concentration.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(94 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$42.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Peppermint Focus Blend', 42)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 6 -->
          <article class="product-card animate-on-scroll" data-price="12" data-category="soaps" data-rating="4" data-date="2023-11">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--lavender"></div>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Artisan Soap</span>
              <h3 class="product-card__title">Lavender Honey Bar</h3>
              <p class="product-card__description">Moisturizing soap with lavender essential oil and raw honey.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★☆</div>
                <span class="product-card__reviews">(73 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$12.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Lavender Honey Bar', 12)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 7 -->
          <article class="product-card animate-on-scroll" data-price="85" data-category="sets" data-rating="5" data-date="2024-01">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--gold"></div>
              <span class="product-card__badge product-card__badge--bestseller">Gift Set</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Wellness Set</span>
              <h3 class="product-card__title">Complete Ritual Collection</h3>
              <p class="product-card__description">Curated set with 5 essential oils, soap, and linen mist.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(201 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-original">$110.00</span>
                  <span class="product-card__price-current">$85.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Complete Ritual Collection', 85)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Product 8 -->
          <article class="product-card animate-on-scroll" data-price="24" data-category="mists" data-rating="5" data-date="2024-02">
            <div class="product-card__image">
              <div class="product-card__image-bg product-card__image-bg--eucalyptus"></div>
              <span class="product-card__badge product-card__badge--new">New</span>
              <div class="product-card__quick-actions">
                <button class="product-card__wishlist" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
                <button class="product-card__quick-view" aria-label="Quick view">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="product-card__content">
              <span class="product-card__category">Linen Mist</span>
              <h3 class="product-card__title">Dreamtime Pillow Spray</h3>
              <p class="product-card__description">Soothing blend for peaceful sleep with lavender and cedarwood.</p>
              <div class="product-card__rating">
                <div class="product-card__stars">★★★★★</div>
                <span class="product-card__reviews">(112 reviews)</span>
              </div>
              <div class="product-card__footer">
                <div class="product-card__price">
                  <span class="product-card__price-current">$24.00</span>
                </div>
                <button class="product-card__add-btn" onclick="addToCart(event, 'Dreamtime Pillow Spray', 24)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span>Add</span>
                </button>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Load More -->
        <div class="products__load-more animate-on-scroll">
          <button class="btn btn--outline" id="loadMoreBtn">
            <span>View All Products</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials" id="testimonials">
      <div class="testimonials__container">
        <div class="testimonials__header animate-on-scroll">
          <span class="section-label">Customer Stories</span>
          <h2 class="section-title">Trusted by Wellness Seekers</h2>
        </div>
        
        <div class="testimonials__grid">
          <article class="testimonial-card testimonial-card--featured animate-on-scroll">
            <div class="testimonial-card__content">
              <div class="testimonial-card__quote">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <blockquote class="testimonial-card__text">
                "The Serenity blend has completely transformed my evening routine. The scent is subtle yet profound—it truly helps me unwind after long days. I've tried many brands, but The Scent's quality is unmatched."
              </blockquote>
              <div class="testimonial-card__rating">★★★★★</div>
              <footer class="testimonial-card__author">
                <div class="testimonial-card__avatar">
                  <span>SM</span>
                </div>
                <div class="testimonial-card__info">
                  <cite class="testimonial-card__name">Sarah Mitchell</cite>
                  <span class="testimonial-card__title">Yoga Instructor, California</span>
                </div>
              </footer>
            </div>
          </article>
          
          <article class="testimonial-card animate-on-scroll">
            <div class="testimonial-card__content">
              <blockquote class="testimonial-card__text">
                "I bought the Complete Ritual Collection as a gift, and now I'm ordering one for myself. The quality and presentation exceeded all expectations."
              </blockquote>
              <div class="testimonial-card__rating">★★★★★</div>
              <footer class="testimonial-card__author">
                <div class="testimonial-card__avatar">
                  <span>JC</span>
                </div>
                <div class="testimonial-card__info">
                  <cite class="testimonial-card__name">James Chen</cite>
                  <span class="testimonial-card__title">Verified Buyer</span>
                </div>
              </footer>
            </div>
          </article>
          
          <article class="testimonial-card animate-on-scroll">
            <div class="testimonial-card__content">
              <blockquote class="testimonial-card__text">
                "Finally, products that are both effective and truly natural. The Eucalyptus oil is now a staple in my morning wellness routine."
              </blockquote>
              <div class="testimonial-card__rating">★★★★★</div>
              <footer class="testimonial-card__author">
                <div class="testimonial-card__avatar">
                  <span>EP</span>
                </div>
                <div class="testimonial-card__info">
                  <cite class="testimonial-card__name">Emma Peterson</cite>
                  <span class="testimonial-card__title">Wellness Coach</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
        
        <!-- Trust Badges -->
        <div class="testimonials__trust animate-on-scroll">
          <div class="trust-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>100% Secure Checkout</span>
          </div>
          <div class="trust-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="1" y="3" width="15" height="13" rx="2"/>
              <path d="M16 8h4l3 3v5a2 2 0 01-2 2h-5"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span>Free Shipping Over $75</span>
          </div>
          <div class="trust-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
              <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
            <span>30-Day Returns</span>
          </div>
          <div class="trust-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Same Day Dispatch</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="newsletter" id="contact">
      <div class="newsletter__container">
        <div class="newsletter__content animate-on-scroll">
          <span class="section-label section-label--light">Stay Connected</span>
          <h2 class="newsletter__title">Join Our Wellness Journey</h2>
          <p class="newsletter__description">
            Subscribe for exclusive offers, aromatherapy tips, and early access to new collections. Be part of a community that values mindful living.
          </p>
          <form class="newsletter__form" id="newsletterForm">
            <div class="newsletter__form-group">
              <label for="emailInput" class="visually-hidden">Email address</label>
              <input 
                type="email" 
                id="emailInput" 
                class="newsletter__input" 
                placeholder="Enter your email address" 
                required
                autocomplete="email"
              >
              <button type="submit" class="newsletter__submit">
                <span>Subscribe</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
            <p class="newsletter__consent">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </form>
        </div>
        
        <!-- Decorative Elements -->
        <div class="newsletter__decoration">
          <div class="newsletter__leaf newsletter__leaf--1">🌿</div>
          <div class="newsletter__leaf newsletter__leaf--2">🍃</div>
          <div class="newsletter__leaf newsletter__leaf--3">✨</div>
        </div>
      </div>
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <!-- Brand Column -->
        <div class="footer__brand">
          <a href="#hero" class="footer__logo">
            <div class="footer__logo-mark">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z" fill="currentColor" opacity="0.2"/>
                <path d="M20 10C20 10 14 17 14 22C14 25.3137 16.6863 28 20 28C23.3137 28 26 25.3137 26 22C26 17 20 10 20 10Z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <span class="footer__logo-text">The Scent</span>
          </a>
          <p class="footer__tagline">
            Artisan aromatherapy crafted with intention for your daily wellness rituals.
          </p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Follow us on Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12c0-2.5 1.5-5 4-5s4 2.5 4 5-1.5 5-4 7l-1-4"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Follow us on Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer__links">
          <h3 class="footer__heading">Quick Links</h3>
          <ul class="footer__list">
            <li><a href="#products">Shop All</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div class="footer__links">
          <h3 class="footer__heading">Support</h3>
          <ul class="footer__list">
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div class="footer__contact">
          <h3 class="footer__heading">Get in Touch</h3>
          <address class="footer__address">
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:hello@thescent.co">hello@thescent.co</a>
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Los Angeles, California</span>
            </p>
          </address>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © <span id="currentYear">2025</span> The Scent. All rights reserved. Crafted with 🤍 for wellness seekers.
        </p>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Back to Top Button -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
  
  <!-- Toast Notification -->
  <div class="toast" id="toast" role="alert" aria-live="polite">
    <div class="toast__content">
      <svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span class="toast__message" id="toastMessage">Item added to cart!</span>
    </div>
    <button class="toast__close" aria-label="Close notification">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
  
  <!-- Scripts -->
  <script src="main.js"></script>
</body>
</html>
File 2: styles.css
CSS

/* ============================================
   THE SCENT - ARTISAN AROMATHERAPY
   Modern, Elegant, Nature-Inspired Design
   ============================================ */

/* ============================================
   CSS CUSTOM PROPERTIES (Variables)
   ============================================ */
:root {
  /* Color Palette - Organic & Warm */
  --color-primary: #4a5d52;
  --color-primary-light: #6b8068;
  --color-primary-dark: #3a4a42;
  
  --color-accent: #c9a87c;
  --color-accent-light: #e5d4b8;
  --color-accent-dark: #a68a5b;
  
  --color-background: #faf8f5;
  --color-background-alt: #f5f1eb;
  --color-background-dark: #1a1a1a;
  
  --color-surface: #ffffff;
  --color-surface-elevated: #ffffff;
  
  --color-text: #2c2c2c;
  --color-text-muted: #6b6b6b;
  --color-text-light: #9a9a9a;
  --color-text-inverse: #ffffff;
  
  --color-border: #e8e4de;
  --color-border-light: #f0ece6;
  
  --color-success: #4a9d6b;
  --color-warning: #d4a84b;
  --color-error: #c75050;
  
  /* Product Colors */
  --color-lavender: #b8a9c9;
  --color-eucalyptus: #7cb9a0;
  --color-rose: #e8b4b8;
  --color-citrus: #f5d489;
  --color-mint: #98d4bb;
  --color-gold: #d4b896;
  
  /* Typography */
  --font-heading: 'Playfair Display', 'Georgia', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-accent: 'Cormorant Garamond', 'Georgia', serif;
  
  /* Font Sizes - Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --text-4xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  
  /* Spacing Scale */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  
  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(1rem, 5vw, 2rem);
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 40px rgba(74, 93, 82, 0.15);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
  --transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-Index Scale */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-toast: 400;
}

/* ============================================
   CSS RESET & BASE STYLES
   ============================================ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Selection */
::selection {
  background-color: var(--color-accent-light);
  color: var(--color-text);
}

/* Links */
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

/* Images */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Lists */
ul,
ol {
  list-style: none;
}

/* Buttons */
button {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  cursor: pointer;
}

/* Form Elements */
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

/* Accessibility */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  z-index: 9999;
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-md);
}

/* ============================================
   TYPOGRAPHY
   ============================================ */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-text);
}

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.section-label--light {
  color: var(--color-accent-light);
}

.section-title {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-md);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 600px;
}

/* ============================================
   BUTTONS
   ============================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-xl);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn--primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-text-inverse);
  box-shadow: 0 4px 16px rgba(74, 93, 82, 0.3);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(74, 93, 82, 0.4);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn--secondary:hover {
  background: var(--color-background-alt);
  border-color: var(--color-primary-light);
}

.btn--outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--outline:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

/* ============================================
   ANNOUNCEMENT BAR
   ============================================ */
.announcement-bar {
  background: linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  padding: var(--space-sm) var(--container-padding);
  text-align: center;
}

.announcement-bar__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  font-size: var(--text-sm);
}

.announcement-bar__icon {
  color: var(--color-accent);
}

.announcement-bar__content strong {
  color: var(--color-accent);
}

/* ============================================
   HEADER
   ============================================ */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-md) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
}

/* Logo */
.header__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header__logo-mark {
  width: 40px;
  height: 40px;
  color: var(--color-primary);
}

.header__logo-text {
  display: flex;
  flex-direction: column;
}

.header__logo-name {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.1;
}

.header__logo-tagline {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.08em;
}

/* Navigation */
.header__nav {
  display: none;
}

@media (min-width: 768px) {
  .header__nav {
    display: block;
  }
}

.header__nav-list {
  display: flex;
  gap: var(--space-xl);
}

.header__nav-link {
  position: relative;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  padding: var(--space-sm) 0;
  transition: color var(--transition-fast);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.header__nav-link:hover,
.header__nav-link.active {
  color: var(--color-text);
}

.header__nav-link:hover::after,
.header__nav-link.active::after {
  width: 100%;
}

/* Header Actions */
.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header__search-btn,
.header__cart-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  color: var(--color-text);
  transition: all var(--transition-fast);
}

.header__search-btn:hover,
.header__cart-btn:hover {
  background: var(--color-background-alt);
  color: var(--color-primary);
}

.header__cart-btn {
  position: relative;
}

.header__cart-count {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text);
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: 0 4px;
}

/* Mobile Menu Toggle */
.header__menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
}

@media (min-width: 768px) {
  .header__menu-toggle {
    display: none;
  }
}

.header__menu-bar {
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.header__menu-toggle[aria-expanded="true"] .header__menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__menu-toggle[aria-expanded="true"] .header__menu-bar:nth-child(2) {
  opacity: 0;
}

.header__menu-toggle[aria-expanded="true"] .header__menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-lg) var(--container-padding);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.mobile-nav.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.mobile-nav__link {
  display: block;
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-text);
  padding: var(--space-sm) 0;
}

.mobile-nav__link:hover {
  color: var(--color-primary);
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
  position: relative;
  padding: var(--space-3xl) var(--container-padding);
  background: linear-gradient(180deg, var(--color-background) 0%, var(--color-background-alt) 100%);
  overflow: hidden;
}

.hero__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4xl);
  }
}

/* Hero Content */
.hero__content {
  text-align: center;
}

@media (min-width: 1024px) {
  .hero__content {
    text-align: left;
  }
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: rgba(74, 93, 82, 0.08);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: var(--radius-full);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: var(--space-lg);
}

.hero__title em {
  font-style: italic;
  color: var(--color-primary);
}

.hero__description {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
  max-width: 540px;
}

@media (min-width: 1024px) {
  .hero__description {
    margin-left: 0;
    margin-right: auto;
  }
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
  margin-bottom: var(--space-2xl);
}

@media (min-width: 1024px) {
  .hero__cta {
    justify-content: flex-start;
  }
}

.hero__features {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  justify-content: center;
}

@media (min-width: 1024px) {
  .hero__features {
    justify-content: flex-start;
  }
}

.hero__feature {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.hero__feature-icon {
  font-size: 1.25rem;
}

/* Hero Visual */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  order: -1;
}

@media (min-width: 1024px) {
  .hero__visual {
    order: 0;
  }
}

.hero__visual-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.hero__visual-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%);
  filter: blur(60px);
  opacity: 0.6;
}

.hero__visual-image {
  position: relative;
  background: linear-gradient(145deg, #f5f1eb 0%, #e8e4de 100%);
  border-radius: var(--radius-2xl);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
}

.hero__visual-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%);
  pointer-events: none;
}

/* Hero Bottles */
.hero__bottles {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-xl) 0;
}

.hero__bottle {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: float 4s ease-in-out infinite;
}

.hero__bottle--1 { animation-delay: 0s; }
.hero__bottle--2 { animation-delay: 0.5s; }
.hero__bottle--3 { animation-delay: 1s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero__bottle-cap {
  width: 24px;
  height: 16px;
  background: linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  margin-bottom: -2px;
  z-index: 1;
}

.hero__bottle-body {
  position: relative;
  width: 60px;
  height: 120px;
  background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow: 
    inset 0 2px 4px rgba(255,255,255,0.5),
    0 8px 24px rgba(0,0,0,0.15);
  overflow: hidden;
}

.hero__bottle-liquid {
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 60%;
  background: linear-gradient(180deg, var(--color-lavender) 0%, #9584a8 100%);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}

.hero__bottle-liquid--alt {
  background: linear-gradient(180deg, var(--color-eucalyptus) 0%, #5a9a7a 100%);
}

.hero__bottle-liquid--third {
  background: linear-gradient(180deg, var(--color-citrus) 0%, #e8b854 100%);
}

.hero__bottle-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: var(--space-sm);
  background: rgba(255,255,255,0.95);
  border-radius: var(--radius-sm);
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.hero__bottle-type {
  display: block;
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-muted);
  margin-bottom: 2px;
}

.hero__bottle-name {
  display: block;
  font-size: 0.55rem;
  font-weight: 600;
  color: var(--color-text);
}

/* Floating Elements */
.hero__floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__floating-leaf {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.7;
  animation: floatLeaf 6s ease-in-out infinite;
}

.hero__floating-leaf--1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.hero__floating-leaf--2 {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.hero__floating-leaf--3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes floatLeaf {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(10deg); }
}

/* Promo Badge */
.hero__promo-badge {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
  border-radius: var(--radius-full);
  box-shadow: 0 8px 24px rgba(201, 168, 124, 0.4);
  animation: pulse 3s ease-in-out infinite;
}

.hero__promo-text {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-text-inverse);
}

.hero__promo-subtitle {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.8);
  text-align: center;
}

/* Scroll Indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  opacity: 0.7;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, var(--color-primary) 0%, transparent 100%);
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ============================================
   ABOUT SECTION
   ============================================ */
.about {
  padding: var(--space-4xl) var(--container-padding);
  background: var(--color-surface);
}

.about__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.about__header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.about__header .section-description {
  margin: 0 auto;
}

/* About Cards */
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.about__card {
  padding: var(--space-2xl);
  background: var(--color-background);
  border-radius: var(--radius-xl);
  text-align: center;
  transition: all var(--transition-base);
}

.about__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.about__card-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-lg);
  color: var(--color-primary);
}

.about__card-label {
  display: block;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-dark);
  margin-bottom: var(--space-sm);
}

.about__card-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-sm);
}

.about__card-text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Stats */
.about__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: var(--radius-xl);
  text-align: center;
}

@media (min-width: 768px) {
  .about__stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

.about__stat {
  color: var(--color-text-inverse);
}

.about__stat-number {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: 600;
  display: inline;
}

.about__stat-suffix {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 600;
}

.about__stat-label {
  display: block;
  font-size: var(--text-xs);
  opacity: 0.8;
  margin-top: var(--space-xs);
}

/* ============================================
   PRODUCTS SECTION
   ============================================ */
.products {
  padding: var(--space-4xl) var(--container-padding);
  background: var(--color-background-alt);
}

.products__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.products__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

@media (min-width: 768px) {
  .products__header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.products__filters {
  display: flex;
  gap: var(--space-md);
}

.products__filter-select {
  padding: var(--space-sm) var(--space-lg) var(--space-sm) var(--space-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--color-text);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b6b6b' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
  transition: all var(--transition-fast);
}

.products__filter-select:hover,
.products__filter-select:focus {
  border-color: var(--color-primary);
}

/* Product Grid */
.products__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 640px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Product Card */
.product-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.product-card__image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-card__image-bg {
  position: absolute;
  inset: 0;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__image-bg {
  transform: scale(1.05);
}

.product-card__image-bg--lavender {
  background: linear-gradient(145deg, #e8dff0 0%, var(--color-lavender) 100%);
}

.product-card__image-bg--eucalyptus {
  background: linear-gradient(145deg, #d4f0e3 0%, var(--color-eucalyptus) 100%);
}

.product-card__image-bg--rose {
  background: linear-gradient(145deg, #fce8ea 0%, var(--color-rose) 100%);
}

.product-card__image-bg--citrus {
  background: linear-gradient(145deg, #fef6dc 0%, var(--color-citrus) 100%);
}

.product-card__image-bg--mint {
  background: linear-gradient(145deg, #e0f5eb 0%, var(--color-mint) 100%);
}

.product-card__image-bg--gold {
  background: linear-gradient(145deg, #f5ebe0 0%, 
Som
