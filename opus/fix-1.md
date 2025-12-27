Comprehensive Patch Plan: Atelier Arôme
Executive Summary
This patch addresses all critical and high-priority issues identified in the analysis while preserving the aesthetic integrity of the illuminated manuscript design.

Patch Manifest
File	Action	Changes
index.html	PATCH	Font preloading, aria improvements, meta viewport
styles.css	PATCH	Reduced motion, contrast fixes, mobile optimization, performance
main.js	PATCH	Form accessibility, animation throttling, event cleanup
critical.css	NEW	Above-the-fold critical styles for performance
Phase 1: HTML Patches
File: index.html
HTML

<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="Aromatherapy elevated to artisanal alchemy. Handcrafted botanical essences from our atelier, where ancient wisdom meets modern sensibility.">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Atelier Arôme | Artisanal Alchemy for the Senses">
  <meta property="og:description" content="Where botanical science becomes sensory poetry. Experience our handcrafted aromatic compounds.">
  <meta property="og:image" content="/social-preview.jpg">
  
  <title>Atelier Arôme | Artisanal Alchemy for the Senses</title>
  
  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Preload Critical Fonts (Display & Body only) -->
  <link rel="preload" href="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjYrEtFmSqn5mM.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="https://fonts.gstatic.com/s/crimsonpro/v24/q5uUsoa5M_tv7IihmnkabC5XiXCAlXGks1WZ.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Critical CSS (Inlined for above-the-fold content) -->
  <style>
    /* Critical CSS - Inlined for performance */
    :root {
      --color-ink: #2A2D26;
      --color-ink-light: #4A4D46;
      --color-ink-muted: #545752;
      --color-gold: #C9A769;
      --color-gold-light: #E8D8B6;
      --color-gold-dark: #8B7355;
      --color-parchment: #FAF8F5;
      --color-parchment-dark: #F5F1EB;
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-body: 'Crimson Pro', Georgia, serif;
    }
    
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    
    html { 
      scroll-behavior: smooth; 
      background-color: var(--color-parchment);
    }
    
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
    }
    
    body {
      font-family: var(--font-body);
      font-size: 1rem;
      line-height: 1.6;
      color: var(--color-ink);
      background-color: var(--color-parchment);
      overflow-x: hidden;
    }
    
    .skip-link {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-ink);
      color: var(--color-parchment);
      padding: 0.75rem 1.5rem;
      z-index: 9999;
      transition: top 0.15s ease;
    }
    
    .skip-link:focus { top: 1rem; }
    
    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(250, 248, 245, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    
    /* Prevent FOUT */
    .fonts-loading body { opacity: 0; }
    .fonts-loaded body { opacity: 1; transition: opacity 0.3s ease; }
  </style>
  
  <!-- Google Fonts - Optimized subset -->
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&display=swap" rel="stylesheet">
  
  <!-- Main Styles (deferred) -->
  <link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
  
  <!-- Favicon - Alchemical Symbol -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M50 20 L80 50 L50 80 L20 50 Z' fill='%23C9A769' stroke='%232A2D26' stroke-width='2'/><circle cx='50' cy='50' r='15' fill='%232A2D26'/></svg>">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#2A2D26">
  
  <!-- Modern CSS/JS Features Detection -->
  <script>
    // Remove no-js, add js class
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
    
    // Font loading detection
    document.documentElement.classList.add('fonts-loading');
    
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('400 1em "Cormorant Garamond"'),
        document.fonts.load('400 1em "Crimson Pro"')
      ]).then(() => {
        document.documentElement.classList.remove('fonts-loading');
        document.documentElement.classList.add('fonts-loaded');
      }).catch(() => {
        document.documentElement.classList.remove('fonts-loading');
        document.documentElement.classList.add('fonts-loaded');
      });
    } else {
      // Fallback for browsers without Font Loading API
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    }
    
    // Reduced motion detection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
    }
    
    // Listen for changes to motion preference
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      document.documentElement.classList.toggle('reduce-motion', e.matches);
    });
  </script>
</head>
<body>
  <!-- Parchment Texture Overlay -->
  <div class="texture-overlay" aria-hidden="true"></div>
  
  <!-- Gold Leaf Accents -->
  <div class="gold-leaf gold-leaf--1" aria-hidden="true"></div>
  <div class="gold-leaf gold-leaf--2" aria-hidden="true"></div>
  <div class="gold-leaf gold-leaf--3" aria-hidden="true"></div>
  
  <!-- Skip Navigation -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Live Region for Announcements -->
  <div id="a11y-announcer" class="visually-hidden" aria-live="polite" aria-atomic="true"></div>
  
  <!-- Atelier Hours Banner -->
  <div class="atelier-banner" role="banner">
    <div class="atelier-banner__container">
      <span class="atelier-banner__icon" aria-hidden="true">✷</span>
      <span class="atelier-banner__text">The Atelier is Open</span>
      <span class="atelier-banner__subtext">Current Batch: <em>N° 724 • Lavandula × intermedia</em></span>
      <span class="atelier-banner__icon" aria-hidden="true">✷</span>
    </div>
  </div>
  
  <!-- Header - Atelier Studio -->
  <header class="header" id="header" role="banner">
    <div class="header__container">
      <!-- Atelier Seal -->
      <a href="#hero" class="header__seal" aria-label="Atelier Arôme - Return to home">
        <div class="header__seal-inner">
          <svg class="header__seal-svg" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2"/>
            <path d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 20 50 Q30 30 50 20 Z" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
            <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <div class="header__seal-text">
            <span class="header__seal-name">Atelier</span>
            <span class="header__seal-name">Arôme</span>
          </div>
        </div>
        <span class="header__seal-tagline">Est. 2024</span>
      </a>
      
      <!-- Navigation - Atelier Sections -->
      <nav class="header__nav" aria-label="Primary navigation">
        <ul class="header__nav-list" role="list">
          <li class="header__nav-item">
            <a href="#compounds" class="header__nav-link">
              <span class="header__nav-number" aria-hidden="true">— I —</span>
              <span class="header__nav-label">Compendium</span>
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#process" class="header__nav-link">
              <span class="header__nav-number" aria-hidden="true">— II —</span>
              <span class="header__nav-label">Alchemy</span>
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#atelier" class="header__nav-link">
              <span class="header__nav-number" aria-hidden="true">— III —</span>
              <span class="header__nav-label">The Atelier</span>
            </a>
          </li>
          <li class="header__nav-item">
            <a href="#manuscript" class="header__nav-link">
              <span class="header__nav-number" aria-hidden="true">— IV —</span>
              <span class="header__nav-label">Manuscript</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <!-- Atelier Tools -->
      <div class="header__tools">
        <button class="header__tool" type="button" aria-label="Search the compendium" data-tooltip="Search">
          <svg class="header__tool-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        
        <button class="header__tool" type="button" id="cartButton" aria-label="Collection vial - 0 items" aria-haspopup="dialog" data-count="0" data-tooltip="Collection">
          <svg class="header__tool-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button class="header__menu-toggle" type="button" id="menuToggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobileNav">
          <span class="header__menu-quill" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation" aria-hidden="true" inert>
      <div class="mobile-nav__container">
        <div class="mobile-nav__header">
          <div class="mobile-nav__seal" aria-hidden="true"></div>
          <span class="mobile-nav__title">Atelier Folio</span>
        </div>
        
        <ul class="mobile-nav__list" role="list">
          <li class="mobile-nav__item">
            <a href="#compounds" class="mobile-nav__link">
              <span class="mobile-nav__ornament" aria-hidden="true">❖</span>
              <span class="mobile-nav__label">Compendium</span>
              <span class="mobile-nav__page" aria-hidden="true">Folio I</span>
            </a>
          </li>
          <li class="mobile-nav__item">
            <a href="#process" class="mobile-nav__link">
              <span class="mobile-nav__ornament" aria-hidden="true">❖</span>
              <span class="mobile-nav__label">Alchemy</span>
              <span class="mobile-nav__page" aria-hidden="true">Folio II</span>
            </a>
          </li>
          <li class="mobile-nav__item">
            <a href="#atelier" class="mobile-nav__link">
              <span class="mobile-nav__ornament" aria-hidden="true">❖</span>
              <span class="mobile-nav__label">The Atelier</span>
              <span class="mobile-nav__page" aria-hidden="true">Folio III</span>
            </a>
          </li>
          <li class="mobile-nav__item">
            <a href="#manuscript" class="mobile-nav__link">
              <span class="mobile-nav__ornament" aria-hidden="true">❖</span>
              <span class="mobile-nav__label">Manuscript</span>
              <span class="mobile-nav__page" aria-hidden="true">Folio IV</span>
            </a>
          </li>
        </ul>
        
        <div class="mobile-nav__colophon">
          <span class="mobile-nav__colophon-text">Atelier Arôme</span>
          <span class="mobile-nav__colophon-year">Anno MMXXIV</span>
        </div>
      </div>
    </nav>
  </header>
  
  <!-- Main Content -->
  <main id="main-content" tabindex="-1">
    
    <!-- Hero Section - Illuminated Manuscript -->
    <section class="hero" id="hero" aria-labelledby="hero-title">
      <!-- Hand-drawn Border -->
      <div class="hero__border" aria-hidden="true">
        <div class="hero__border-corner hero__border-corner--tl"></div>
        <div class="hero__border-corner hero__border-corner--tr"></div>
        <div class="hero__border-corner hero__border-corner--bl"></div>
        <div class="hero__border-corner hero__border-corner--br"></div>
      </div>
      
      <!-- Watermark Illustration -->
      <div class="hero__watermark" aria-hidden="true">
        <svg class="hero__watermark-svg" viewBox="0 0 400 400">
          <path d="M200 100 Q300 150 300 250 Q250 350 200 350 Q150 350 100 250 Q100 150 200 100 Z" fill="none" stroke="currentColor" stroke-width="2" opacity="0.1"/>
          <path d="M200 120 Q280 160 280 240 Q240 320 200 320 Q160 320 120 240 Q120 160 200 120 Z" fill="none" stroke="currentColor" stroke-width="1" opacity="0.08"/>
        </svg>
      </div>
      
      <div class="hero__container">
        <!-- Illuminated Initial -->
        <div class="hero__initial" aria-hidden="true">
          <span class="hero__initial-letter">A</span>
          <div class="hero__initial-flourish"></div>
        </div>
        
        <div class="hero__content">
          <!-- Calligraphic Title -->
          <h1 class="hero__title" id="hero-title">
            <span class="hero__title-line hero__title-line--1">
              <span class="hero__title-word">The</span>
              <span class="hero__title-word">Art</span>
            </span>
            <span class="hero__title-line hero__title-line--2">
              <span class="hero__title-word">of</span>
              <span class="hero__title-word hero__title-word--emph">Scent</span>
            </span>
            <span class="hero__title-line hero__title-line--3">
              <span class="hero__title-word">as</span>
              <span class="hero__title-word">Alchemy</span>
            </span>
          </h1>
          
          <!-- Subtitle with Flourish -->
          <div class="hero__subtitle">
            <div class="hero__subtitle-flourish hero__subtitle-flourish--left" aria-hidden="true"></div>
            <p class="hero__subtitle-text">Where Botany Becomes Poetry</p>
            <div class="hero__subtitle-flourish hero__subtitle-flourish--right" aria-hidden="true"></div>
          </div>
          
          <!-- Manuscript Excerpt -->
          <div class="hero__excerpt">
            <p class="hero__excerpt-text">
              Within our atelier, time slows to the rhythm of distillation. Each botanical is treated as a verse in nature's manuscript, its essence carefully extracted and preserved. Our practice honors the ancient alchemical tradition—transforming raw botanical matter into olfactory gold through patience, precision, and profound respect for the natural world.
            </p>
            <div class="hero__excerpt-rule" aria-hidden="true"></div>
            <cite class="hero__excerpt-citation">— Master Perfumer's Journal</cite>
          </div>
          
          <!-- Atelier Actions -->
          <div class="hero__actions">
            <a href="#compounds" class="btn btn--primary">
              <span class="btn__text">Enter the Atelier</span>
              <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#process" class="btn btn--secondary">
              <span class="btn__text">Our Alchemy</span>
              <span class="btn__ornament" aria-hidden="true">❧</span>
            </a>
          </div>
          
          <!-- Atelier Credentials -->
          <dl class="hero__credentials">
            <div class="hero__credential">
              <dt class="visually-hidden">Distillation Time</dt>
              <dd>
                <span class="hero__credential-number">72</span>
                <span class="hero__credential-label">Hour Distillation</span>
              </dd>
            </div>
            <div class="hero__credential">
              <dt class="visually-hidden">Our Philosophy</dt>
              <dd>
                <span class="hero__credential-number" aria-label="Infinite">∞</span>
                <span class="hero__credential-label">Patience</span>
              </dd>
            </div>
            <div class="hero__credential">
              <dt class="visually-hidden">Production Method</dt>
              <dd>
                <span class="hero__credential-number">100%</span>
                <span class="hero__credential-label">Artisanal</span>
              </dd>
            </div>
          </dl>
        </div>
        
        <!-- Hero Visual - Hand-blown Vessel -->
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__vessel-container">
            <!-- Vessel -->
            <div class="hero__vessel">
              <div class="hero__vessel-neck"></div>
              <div class="hero__vessel-body">
                <div class="hero__vessel-liquid">
                  <div class="vessel__meniscus"></div>
                  <div class="vessel__reflection"></div>
                </div>
                <div class="hero__vessel-label">
                  <span class="vessel-label__n">N°</span>
                  <span class="vessel-label__number">724</span>
                </div>
              </div>
              <div class="hero__vessel-base"></div>
            </div>
            
            <!-- Vessel Stand -->
            <div class="hero__vessel-stand"></div>
            
            <!-- Botanical Specimens -->
            <div class="hero__botanicals">
              <div class="hero__botanical hero__botanical--lavender">
                <div class="botanical__stem"></div>
                <div class="botanical__blossom"></div>
              </div>
              <div class="hero__botanical hero__botanical--rose">
                <div class="botanical__stem"></div>
                <div class="botanical__petals"></div>
              </div>
              <div class="hero__botanical hero__botanical--eucalyptus">
                <div class="botanical__stem"></div>
                <div class="botanical__leaves"></div>
              </div>
            </div>
          </div>
          
          <!-- Alchemical Symbol -->
          <div class="hero__symbol">
            <svg class="hero__symbol-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="1,2"/>
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="hero__scroll-indicator" aria-hidden="true">
        <div class="scroll-indicator__quill">
          <div class="quill__nib"></div>
          <div class="quill__shaft"></div>
          <div class="quill__feather"></div>
        </div>
        <span class="scroll-indicator__label">Continue Reading</span>
      </div>
    </section>
    
    <!-- Compounds Section - Botanical Compendium -->
    <section class="compendium" id="compounds" aria-labelledby="compendium-title">
      <!-- Section Border -->
      <div class="section-border" aria-hidden="true">
        <span class="section-border__ornament">❦</span>
      </div>
      
      <div class="compendium__container">
        <!-- Compendium Header -->
        <header class="compendium__header">
          <span class="section-label">First Folio</span>
          <h2 class="section-title" id="compendium-title">
            <span class="section-title__line">The Botanical</span>
            <span class="section-title__line section-title__line--emph">Compendium</span>
          </h2>
          <div class="compendium__rule" aria-hidden="true"></div>
          <p class="section-description">
            A curated collection of botanical essences, each documented with the care of an illuminated manuscript. These are not merely scents, but captured moments of nature's poetry.
          </p>
        </header>
        
        <!-- Botanical Filter -->
        <div class="compendium__filters" role="group" aria-label="Filter and sort essences">
          <div class="compendium__filter-group">
            <span class="compendium__filter-label" id="filter-label">Filter by Humour:</span>
            <div class="compendium__filter-buttons" role="group" aria-labelledby="filter-label">
              <button class="compendium__filter" type="button" data-filter="all" aria-pressed="true">
                <span class="compendium__filter-text">All Essences</span>
                <span class="compendium__filter-ornament" aria-hidden="true">✦</span>
              </button>
              <button class="compendium__filter" type="button" data-filter="calming" aria-pressed="false">
                <span class="compendium__filter-text">Calming</span>
                <span class="compendium__filter-icon" aria-hidden="true">☾</span>
              </button>
              <button class="compendium__filter" type="button" data-filter="uplifting" aria-pressed="false">
                <span class="compendium__filter-text">Uplifting</span>
                <span class="compendium__filter-icon" aria-hidden="true">☀</span>
              </button>
              <button class="compendium__filter" type="button" data-filter="grounding" aria-pressed="false">
                <span class="compendium__filter-text">Grounding</span>
                <span class="compendium__filter-icon" aria-hidden="true">♁</span>
              </button>
              <button class="compendium__filter" type="button" data-filter="clarifying" aria-pressed="false">
                <span class="compendium__filter-text">Clarifying</span>
                <span class="compendium__filter-icon" aria-hidden="true">☁</span>
              </button>
            </div>
          </div>
          
          <!-- Manuscript Sort -->
          <div class="compendium__sort">
            <label for="sortSelect" class="visually-hidden">Sort compendium by</label>
            <select class="compendium__sort-select" id="sortSelect">
              <option value="folio">Folio Order</option>
              <option value="humour">By Humour</option>
              <option value="rarity">By Rarity</option>
              <option value="season">By Season</option>
            </select>
            <div class="compendium__sort-ornament" aria-hidden="true"></div>
          </div>
        </div>
        
        <!-- Botanical Cards Grid -->
        <div class="compendium__grid" role="list" aria-label="Botanical essences">
          <!-- Essence 1 - Featured -->
          <article class="essence-card essence-card--featured" role="listitem" data-humour="calming" data-rarity="rare" data-season="spring">
            <div class="essence-card__illumination">
              <div class="essence-card__illustration" aria-hidden="true">
                <svg class="essence-card__botanical-svg" viewBox="0 0 200 200">
                  <path d="M100 180 L100 80" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                  <g transform="translate(100 60)">
                    <circle cx="0" cy="0" r="8" fill="currentColor" opacity="0.6"/>
                    <circle cx="15" cy="-10" r="6" fill="currentColor" opacity="0.5"/>
                    <circle cx="-15" cy="-10" r="6" fill="currentColor" opacity="0.5"/>
                    <circle cx="0" cy="-20" r="5" fill="currentColor" opacity="0.4"/>
                  </g>
                </svg>
              </div>
              
              <div class="essence-card__folio">
                <span class="essence-card__folio-number" aria-label="Folio 1">I</span>
              </div>
              
              <div class="essence-card__badge">
                <span class="essence-card__badge-text">Rare</span>
                <div class="essence-card__badge-ornament" aria-hidden="true"></div>
              </div>
            </div>
            
            <div class="essence-card__content">
              <div class="essence-card__latin">
                <span class="essence-card__latin-name">Lavandula × intermedia</span>
                <div class="essence-card__latin-rule" aria-hidden="true"></div>
              </div>
              
              <h3 class="essence-card__title">Provence Lavender</h3>
              
              <div class="essence-card__humour">
                <span class="essence-card__humour-icon" aria-hidden="true">☾</span>
                <span class="essence-card__humour-label">Calming</span>
              </div>
              
              <p class="essence-card__description">
                Harvested at dawn in the Provençal hills, this lavender possesses a sweetness found only in blossoms kissed by the morning's first light. Its effect is one of profound calm, like the silence between breaths.
              </p>
              
              <dl class="essence-card__notes">
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Season</dt>
                  <dd class="essence-card__note-value">Early Summer</dd>
                </div>
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Notes</dt>
                  <dd class="essence-card__note-value">Floral • Herbaceous • Sweet</dd>
                </div>
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Extraction</dt>
                  <dd class="essence-card__note-value">Steam Distillation</dd>
                </div>
              </dl>
              
              <div class="essence-card__footer">
                <div class="essence-card__pricing">
                  <span class="essence-card__price">$42</span>
                  <span class="essence-card__measure">per 5ml phial</span>
                </div>
                <button class="essence-card__action" type="button" aria-label="Add Provence Lavender to collection vial - $42">
                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span class="essence-card__action-text">To Vial</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Essence 2 -->
          <article class="essence-card" role="listitem" data-humour="clarifying" data-rarity="common" data-season="autumn">
            <div class="essence-card__illumination">
              <div class="essence-card__illustration" aria-hidden="true">
                <svg class="essence-card__botanical-svg" viewBox="0 0 200 200">
                  <path d="M100 180 L100 100" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <ellipse cx="100" cy="80" rx="25" ry="35" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <div class="essence-card__folio">
                <span class="essence-card__folio-number" aria-label="Folio 2">II</span>
              </div>
            </div>
            
            <div class="essence-card__content">
              <div class="essence-card__latin">
                <span class="essence-card__latin-name">Eucalyptus globulus</span>
                <div class="essence-card__latin-rule" aria-hidden="true"></div>
              </div>
              <h3 class="essence-card__title">Tasmanian Eucalyptus</h3>
              <div class="essence-card__humour">
                <span class="essence-card__humour-icon" aria-hidden="true">☁</span>
                <span class="essence-card__humour-label">Clarifying</span>
              </div>
              <p class="essence-card__description">
                The crisp, clean scent of Tasmania's ancient forests. This essence clears the mind as morning mist clears from mountain valleys.
              </p>
              <dl class="essence-card__notes">
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Season</dt>
                  <dd class="essence-card__note-value">Autumn</dd>
                </div>
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Notes</dt>
                  <dd class="essence-card__note-value">Camphorous • Fresh • Clean</dd>
                </div>
              </dl>
              <div class="essence-card__footer">
                <div class="essence-card__pricing">
                  <span class="essence-card__price">$36</span>
                  <span class="essence-card__measure">per 5ml phial</span>
                </div>
                <button class="essence-card__action" type="button" aria-label="Add Tasmanian Eucalyptus to collection vial - $36">
                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span class="essence-card__action-text">To Vial</span>
                </button>
              </div>
            </div>
          </article>
          
          <!-- Essence 3 -->
          <article class="essence-card" role="listitem" data-humour="uplifting" data-rarity="limited" data-season="spring">
            <div class="essence-card__illumination">
              <div class="essence-card__illustration" aria-hidden="true">
                <svg class="essence-card__botanical-svg" viewBox="0 0 200 200">
                  <circle cx="100" cy="80" r="30" fill="currentColor" opacity="0.25"/>
                  <circle cx="100" cy="80" r="20" fill="currentColor" opacity="0.35"/>
                </svg>
              </div>
              <div class="essence-card__folio">
                <span class="essence-card__folio-number" aria-label="Folio 3">III</span>
              </div>
              <div class="essence-card__badge">
                <span class="essence-card__badge-text">Limited</span>
                <div class="essence-card__badge-ornament" aria-hidden="true"></div>
              </div>
            </div>
            
            <div class="essence-card__content">
              <div class="essence-card__latin">
                <span class="essence-card__latin-name">Citrus bergamia</span>
                <div class="essence-card__latin-rule" aria-hidden="true"></div>
              </div>
              <h3 class="essence-card__title">Calabrian Bergamot</h3>
              <div class="essence-card__humour">
                <span class="essence-card__humour-icon" aria-hidden="true">☀</span>
                <span class="essence-card__humour-label">Uplifting</span>
              </div>
              <p class="essence-card__description">
                From Italy's sun-drenched Calabrian coast, this essence captures the joyful brightness of citrus groves at harvest. A note of pure sunlight.
              </p>
              <dl class="essence-card__notes">
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Season</dt>
                  <dd class="essence-card__note-value">Late Winter</dd>
                </div>
                <div class="essence-card__note">
                  <dt class="essence-card__note-label">Notes</dt>
                  <dd class="essence-card__note-value">Citrus • Bright • Spicy</dd>
                </div>
              </dl>
              <div class="essence-card__footer">
                <div class="essence-card__pricing">
                  <span class="essence-card__price">$48</span>
                  <span class="essence-card__measure">per 5ml phial</span>
                </div>
                <button class="essence-card__action" type="button" aria-label="Add Calabrian Bergamot to collection vial - $48">
                  <svg class="essence-card__action-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  <span class="essence-card__action-text">To Vial</span>
                </button>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Compendium Footer -->
        <footer class="compendium__footer">
          <div class="compendium__counter" aria-live="polite">
            <span class="compendium__counter-current">3</span>
            <span class="compendium__counter-separator">of</span>
            <span class="compendium__counter-total">12</span>
            <span class="compendium__counter-label">Essences Documented</span>
          </div>
          <button class="btn btn--outline" type="button" id="loadMoreEssences">
            <span class="btn__text">Continue Reading</span>
            <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </footer>
      </div>
    </section>
    
    <!-- Process Section - The Alchemy -->
    <section class="alchemy" id="process" aria-labelledby="alchemy-title">
      <!-- Watermark -->
      <div class="alchemy__watermark" aria-hidden="true">
        <span class="alchemy__watermark-text">Ars Magna</span>
      </div>
      
      <div class="alchemy__container">
        <header class="alchemy__header">
          <span class="section-label section-label--light">Second Folio</span>
          <h2 class="section-title" id="alchemy-title">
            <span class="section-title__line">The Art of</span>
            <span class="section-title__line section-title__line--emph">Alchemical Transformation</span>
          </h2>
          <div class="alchemy__rule" aria-hidden="true"></div>
          <p class="section-description">
            Our practice follows the ancient alchemical principle: solve et coagula. To dissolve and reconstitute. To transform base botanical matter into olfactory gold through time, heat, and intention.
          </p>
        </header>
        
        <!-- Alchemical Process Steps -->
        <ol class="alchemy__process" role="list">
          <!-- Step 1 -->
          <li class="alchemy-step">
            <div class="alchemy-step__number" aria-hidden="true">
              <span class="alchemy-step__roman">I</span>
            </div>
            <div class="alchemy-step__content">
              <h3 class="alchemy-step__title">Nigredo • The Blackening</h3>
              <p class="alchemy-step__description">
                The raw botanical material undergoes its initial transformation through careful drying and preparation. This stage represents the dissolution of the material's original form, a necessary darkness before illumination.
              </p>
              <dl class="alchemy-step__details">
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Duration</dt>
                  <dd class="alchemy-step__detail-value">7-14 Days</dd>
                </div>
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Temperature</dt>
                  <dd class="alchemy-step__detail-value">Ambient</dd>
                </div>
              </dl>
            </div>
            <div class="alchemy-step__symbol" aria-hidden="true">♁</div>
          </li>
          
          <!-- Step 2 -->
          <li class="alchemy-step">
            <div class="alchemy-step__number" aria-hidden="true">
              <span class="alchemy-step__roman">II</span>
            </div>
            <div class="alchemy-step__content">
              <h3 class="alchemy-step__title">Albedo • The Whitening</h3>
              <p class="alchemy-step__description">
                Through gentle steam distillation at precisely 40°C, the volatile aromatic compounds are released. This careful extraction preserves the most delicate notes that higher temperatures would destroy.
              </p>
              <dl class="alchemy-step__details">
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Duration</dt>
                  <dd class="alchemy-step__detail-value">72 Hours</dd>
                </div>
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Temperature</dt>
                  <dd class="alchemy-step__detail-value">40°C ±0.1</dd>
                </div>
              </dl>
            </div>
            <div class="alchemy-step__symbol" aria-hidden="true">☁</div>
          </li>
          
          <!-- Step 3 -->
          <li class="alchemy-step">
            <div class="alchemy-step__number" aria-hidden="true">
              <span class="alchemy-step__roman">III</span>
            </div>
            <div class="alchemy-step__content">
              <h3 class="alchemy-step__title">Citrinitas • The Yellowing</h3>
              <p class="alchemy-step__description">
                The separated essential oil undergoes a period of maturation in hand-blown glass vessels. During this stage, the aromatic profile deepens and complexifies, much like wine aging in oak barrels.
              </p>
              <dl class="alchemy-step__details">
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Duration</dt>
                  <dd class="alchemy-step__detail-value">30-90 Days</dd>
                </div>
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Vessel</dt>
                  <dd class="alchemy-step__detail-value">Hand-blown Glass</dd>
                </div>
              </dl>
            </div>
            <div class="alchemy-step__symbol" aria-hidden="true">☀</div>
          </li>
          
          <!-- Step 4 -->
          <li class="alchemy-step">
            <div class="alchemy-step__number" aria-hidden="true">
              <span class="alchemy-step__roman">IV</span>
            </div>
            <div class="alchemy-step__content">
              <h3 class="alchemy-step__title">Rubedo • The Reddening</h3>
              <p class="alchemy-step__description">
                The final essence is evaluated, filtered, and bottled by hand. Each phial receives our wax seal, marking the completion of the transformation from raw botanical to perfected essence.
              </p>
              <dl class="alchemy-step__details">
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Process</dt>
                  <dd class="alchemy-step__detail-value">Hand-bottling</dd>
                </div>
                <div class="alchemy-step__detail">
                  <dt class="alchemy-step__detail-label">Seal</dt>
                  <dd class="alchemy-step__detail-value">Beeswax</dd>
                </div>
              </dl>
            </div>
            <div class="alchemy-step__symbol" aria-hidden="true">❤</div>
          </li>
        </ol>
        
        <!-- Alchemical Apparatus -->
        <div class="alchemy__apparatus" role="list" aria-label="Alchemical apparatus">
          <div class="apparatus__item apparatus__item--still" role="listitem">
            <div class="apparatus__illustration" aria-hidden="true"></div>
            <p class="apparatus__caption">Copper Alembic Still</p>
          </div>
          <div class="apparatus__item apparatus__item--vessel" role="listitem">
            <div class="apparatus__illustration" aria-hidden="true"></div>
            <p class="apparatus__caption">Maturation Vessels</p>
          </div>
          <div class="apparatus__item apparatus__item--tools" role="listitem">
            <div class="apparatus__illustration" aria-hidden="true"></div>
            <p class="apparatus__caption">Alchemist's Tools</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials - Patron's Manuscript -->
    <section class="manuscript" id="manuscript" aria-labelledby="manuscript-title">
      <!-- Aged Paper Background -->
      <div class="manuscript__paper" aria-hidden="true">
        <div class="manuscript__stain manuscript__stain--1"></div>
        <div class="manuscript__stain manuscript__stain--2"></div>
        <div class="manuscript__watermark"></div>
      </div>
      
      <div class="manuscript__container">
        <header class="manuscript__header">
          <span class="section-label">Fourth Folio</span>
          <h2 class="section-title" id="manuscript-title">
            <span class="section-title__line">Patron's</span>
            <span class="section-title__line section-title__line--emph">Manuscript</span>
          </h2>
          <div class="manuscript__rule" aria-hidden="true"></div>
          <p class="section-description">
            Words from those who have experienced our alchemical transformations. These testimonials are preserved as illuminated entries in our patron's manuscript.
          </p>
        </header>
        
        <!-- Testimonial Entries -->
        <div class="manuscript__entries" role="list" aria-label="Patron testimonials">
          <!-- Entry 1 - Illuminated -->
          <article class="manuscript-entry manuscript-entry--illuminated" role="listitem">
            <div class="manuscript-entry__border" aria-hidden="true">
              <div class="manuscript-entry__corner manuscript-entry__corner--tl"></div>
              <div class="manuscript-entry__corner manuscript-entry__corner--tr"></div>
              <div class="manuscript-entry__corner manuscript-entry__corner--bl"></div>
              <div class="manuscript-entry__corner manuscript-entry__corner--br"></div>
            </div>
            
            <div class="manuscript-entry__content">
              <div class="manuscript-entry__initial" aria-hidden="true">T</div>
              
              <blockquote class="manuscript-entry__quote">
                <p>
                  The Provence Lavender has transformed my evening ritual into a sacred practice. Its scent is not merely pleasant—it is profound, layered, and seems to hold within it the very quiet of the Provençal hills at dusk. This is not aromatherapy; it is time travel for the senses.
                </p>
              </blockquote>
              
              <footer class="manuscript-entry__attribution">
                <div class="manuscript-entry__author">
                  <cite class="manuscript-entry__name">Isabelle Moreau</cite>
                  <span class="manuscript-entry__title">Writer & Historian, Paris</span>
                </div>
                <div class="manuscript-entry__seal">
                  <span class="manuscript-entry__seal-text">Verified Patron</span>
                </div>
              </footer>
              
              <div class="manuscript-entry__folio" aria-hidden="true">
                <span class="manuscript-entry__folio-number">Folio VII, Entry 12</span>
              </div>
            </div>
          </article>
          
          <!-- Entry 2 -->
          <article class="manuscript-entry" role="listitem">
            <div class="manuscript-entry__content">
              <blockquote class="manuscript-entry__quote">
                <p>
                  As a chef, I understand transformation. What Atelier Arôme achieves with botanicals is culinary artistry for the soul. The Calabrian Bergamot is sunshine captured—it brightens not just a room, but one's very disposition.
                </p>
              </blockquote>
              <footer class="manuscript-entry__attribution">
                <div class="manuscript-entry__author">
                  <cite class="manuscript-entry__name">Marco Ferrara</cite>
                  <span class="manuscript-entry__title">Michelin-starred Chef, Florence</span>
                </div>
              </footer>
            </div>
          </article>
          
          <!-- Entry 3 -->
          <article class="manuscript-entry" role="listitem">
            <div class="manuscript-entry__content">
              <blockquote class="manuscript-entry__quote">
                <p>
                  The attention to detail is evident in every aspect. From the wax seal on the phial to the complexity of the scent itself—this is craftsmanship of the highest order. Each essence tells a story.
                </p>
              </blockquote>
              <footer class="manuscript-entry__attribution">
                <div class="manuscript-entry__author">
                  <cite class="manuscript-entry__name">Dr. Evelyn Reed</cite>
                  <span class="manuscript-entry__title">Botanical Researcher, Oxford</span>
                </div>
              </footer>
            </div>
          </article>
        </div>
        
        <!-- Manuscript Navigation -->
        <nav class="manuscript__navigation" aria-label="Testimonial pages">
          <button class="manuscript__nav-button" type="button" aria-label="Previous testimonials" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div class="manuscript__pagination" aria-live="polite">
            <span class="manuscript__page-current">1</span>
            <span class="manuscript__page-separator" aria-hidden="true">/</span>
            <span class="manuscript__page-total">7</span>
            <span class="visually-hidden">pages</span>
          </div>
          <button class="manuscript__nav-button" type="button" aria-label="Next testimonials">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </nav>
      </div>
    </section>
    
    <!-- Newsletter - Correspondence -->
    <section class="correspondence" id="correspondence" aria-labelledby="correspondence-title">
      <!-- Wax Seal Background -->
      <div class="correspondence__seal" aria-hidden="true">
        <div class="correspondence__seal-ring"></div>
        <div class="correspondence__seal-center"></div>
      </div>
      
      <div class="correspondence__container">
        <div class="correspondence__content">
          <span class="section-label section-label--light">Correspondence</span>
          <h2 class="correspondence__title" id="correspondence-title">
            <span class="correspondence__title-line">Receive Our</span>
            <span class="correspondence__title-line correspondence__title-line--emph">Quarterly Folio</span>
          </h2>
          
          <div class="correspondence__rule" aria-hidden="true"></div>
          
          <p class="correspondence__description">
            Each season, we dispatch a handwritten folio detailing new discoveries, alchemical notes, and insights from the atelier. Join our correspondence to receive these missives directly.
          </p>
          
          <form class="correspondence__form" id="correspondenceForm" novalidate>
            <div class="correspondence__field">
              <label for="correspondenceName" class="visually-hidden">Your name (required)</label>
              <input 
                type="text" 
                id="correspondenceName" 
                name="name"
                class="correspondence__input" 
                placeholder="Your name"
                autocomplete="name"
                required
                aria-required="true"
              >
              <div class="correspondence__field-ornament" aria-hidden="true"></div>
            </div>
            
            <div class="correspondence__field">
              <label for="correspondenceEmail" class="visually-hidden">Your email address (required)</label>
              <input 
                type="email" 
                id="correspondenceEmail" 
                name="email"
                class="correspondence__input" 
                placeholder="Your email address"
                autocomplete="email"
                required
                aria-required="true"
              >
              <div class="correspondence__field-ornament" aria-hidden="true"></div>
            </div>
            
            <div class="correspondence__consent">
              <input 
                type="checkbox" 
                id="correspondenceConsent" 
                name="consent"
                class="correspondence__checkbox" 
                required
                aria-required="true"
              >
              <label for="correspondenceConsent" class="correspondence__consent-label">
                I wish to receive the quarterly folio and occasional atelier updates. I understand I may withdraw my consent at any time.
              </label>
            </div>
            
            <button type="submit" class="correspondence__submit">
              <span class="correspondence__submit-text">Subscribe to Correspondence</span>
              <svg class="correspondence__submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M22 2L11 13"/>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>
        
        <!-- Correspondence Visual -->
        <div class="correspondence__visual" aria-hidden="true">
          <div class="correspondence__envelope">
            <div class="envelope__flap"></div>
            <div class="envelope__body"></div>
            <div class="envelope__wax-seal">
              <div class="wax-seal__ring"></div>
              <div class="wax-seal__initial">A</div>
            </div>
          </div>
          
          <div class="correspondence__quill">
            <div class="quill__feather"></div>
            <div class="quill__shaft"></div>
            <div class="quill__nib"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  <!-- Footer - Colophon -->
  <footer class="colophon" role="contentinfo">
    <div class="colophon__container">
      <!-- Atelier Information -->
      <div class="colophon__atelier">
        <a href="#hero" class="colophon__seal">
          <div class="colophon__seal-graphic" aria-hidden="true"></div>
          <span class="colophon__atelier-name">Atelier Arôme</span>
        </a>
        <address class="colophon__address">
          <p>Rue des Alchimistes, 7</p>
          <p>Provence-Alpes-Côte d'Azur</p>
          <p>France</p>
        </address>
        <div class="colophon__hours">
          <p>The Atelier is open by appointment only</p>
          <p>Correspondence welcome at all hours</p>
        </div>
      </div>
      
      <!-- Navigation -->
      <nav class="colophon__navigation" aria-label="Footer navigation">
        <h3 class="colophon__heading">The Folios</h3>
        <ul class="colophon__list" role="list">
          <li><a href="#compounds" class="colophon__link">Compendium</a></li>
          <li><a href="#process" class="colophon__link">Alchemy</a></li>
          <li><a href="#atelier" class="colophon__link">The Atelier</a></li>
          <li><a href="#manuscript" class="colophon__link">Manuscript</a></li>
        </ul>
      </nav>
      
      <!-- Correspondence -->
      <div class="colophon__correspondence">
        <h3 class="colophon__heading">Correspondence</h3>
        <ul class="colophon__list" role="list">
          <li>
            <svg class="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:correspondence@atelierarome.com">correspondence@atelierarome.com</a>
          </li>
          <li>
            <svg class="colophon__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Provence, France</span>
          </li>
        </ul>
        
        <!-- Social Links -->
        <div class="colophon__social">
          <a href="#" class="colophon__social-link" aria-label="Follow us on Instagram">
            <svg class="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="18" cy="6" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" class="colophon__social-link" aria-label="Follow us on Pinterest">
            <svg class="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12c0-2.5 1.5-5 4-5s4 2.5 4 5-1.5 5-4 7l-1-4"/>
            </svg>
          </a>
          <a href="#correspondence" class="colophon__social-link" aria-label="Subscribe to our newsletter">
            <svg class="colophon__social-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Colophon Proper -->
      <div class="colophon__details">
        <h3 class="colophon__heading">Colophon</h3>
        <div class="colophon__text">
          <p>This digital folio was typeset in Cormorant Garamond and Crimson Pro.</p>
          <p>Illustrations are original to the atelier.</p>
          <p>The alchemical processes described herein are both literal and metaphorical.</p>
        </div>
      </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="colophon__bottom">
      <div class="colophon__bottom-container">
        <p class="colophon__copyright">
          <small>© Anno MMXXIV Atelier Arôme. All rights preserved.</small>
        </p>
        <nav class="colophon__legal" aria-label="Legal links">
          <a href="#" class="colophon__legal-link">Manuscript Rights</a>
          <a href="#" class="colophon__legal-link">Correspondence Terms</a>
          <a href="#" class="colophon__legal-link">Atelier Visits</a>
        </nav>
      </div>
    </div>
  </footer>
  
  <!-- Back to Top -->
  <button class="back-to-top" type="button" id="backToTop" aria-label="Return to top of page">
    <svg class="back-to-top__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
  
  <!-- Cart Drawer - Collection Vial -->
  <aside class="vial-drawer" id="vialDrawer" aria-label="Collection vial" aria-hidden="true" role="dialog" aria-modal="true" inert>
    <div class="vial-drawer__container">
      <header class="vial-drawer__header">
        <h2 class="vial-drawer__title" id="vialDrawerTitle">Collection Vial</h2>
        <button class="vial-drawer__close" type="button" id="vialClose" aria-label="Close collection vial">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </header>
      <div class="vial-drawer__content" id="vialContent" role="list" aria-label="Items in collection">
        <!-- Vial items will be injected here -->
      </div>
      <footer class="vial-drawer__footer">
        <div class="vial-drawer__total">
          <span class="vial-drawer__total-label">Total Essence Value:</span>
          <span class="vial-drawer__total-value" aria-live="polite">$0</span>
        </div>
        <button class="vial-drawer__dispatch btn btn--primary" type="button">
          <span class="btn__text">Dispatch to Atelier</span>
          <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M22 2L11 13"/>
            <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
        </button>
      </footer>
    </div>
  </aside>
  
  <!-- Toast Notification -->
  <div class="toast" id="toast" role="status" aria-live="polite" aria-atomic="true">
    <div class="toast__content">
      <div class="toast__seal" aria-hidden="true">
        <div class="toast__seal-ring"></div>
      </div>
      <span class="toast__message" id="toastMessage">Essence added to collection vial</span>
    </div>
  </div>
  
  <!-- Scripts -->
  <script src="main.js" defer></script>
</body>
</html>
Phase 2: CSS Patches
File: styles.css (Complete Replacement with Fixes)
CSS

/* ============================================
   ATELIER ARÔME - ILLUMINATED AROMATHERAPY
   Renaissance Manuscript CSS Architecture
   
   CHANGELOG:
   - Added prefers-reduced-motion support
   - Fixed color contrast issues (WCAG AA)
   - Optimized animations for performance
   - Improved mobile experience
   - Added focus-visible polyfill styles
   ============================================ */

/* ============================================
   SECTION 1: CSS RESET & CUSTOM PROPERTIES
   ============================================ */

:root {
  /* Color System - Illuminated Manuscript */
  /* Primary Palette */
  --color-ink: #2A2D26;
  --color-ink-light: #4A4D46;
  --color-ink-muted: #545752; /* FIXED: Darkened for WCAG AA compliance */
  
  /* Gold Palette */
  --color-gold: #C9A769;
  --color-gold-light: #E8D8B6;
  --color-gold-dark: #8B7355; /* FIXED: Darkened for text use on light backgrounds */
  --color-gold-muted: rgba(201, 167, 105, 0.3);
  --color-gold-text: #7A6545; /* NEW: Accessible gold for text on parchment */
  
  /* Parchment Palette */
  --color-parchment: #FAF8F5;
  --color-parchment-dark: #F5F1EB;
  --color-parchment-darker: #E8E4D9;
  
  /* Accent Colors */
  --color-bronze: #9A8C6D;
  --color-rose: #B87D7D;
  --color-sage: #7C6354;
  --color-slate: #7A8C9D;
  
  /* Botanical Accents */
  --color-lavender: #B8A9C9;
  --color-eucalyptus: #7CB9A0;
  --color-bergamot: #F5D489;
  --color-rosehip: #E8B4B8;
  
  /* Feedback Colors */
  --color-success: #5D8A66;
  --color-warning: #C9A769;
  --color-error: #B87D7D;
  --color-info: #7A8C9D;
  
  /* Typography - Renaissance Elegance */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Crimson Pro', Georgia, serif;
  --font-accent: 'Great Vibes', cursive;
  --font-ornament: 'Playfair Display', serif;
  
  /* Fluid Typography Scale - Optimized */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.75rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
  --text-5xl: clamp(2.75rem, 2rem + 3.75vw, 4.5rem);
  
  /* Spacing - Golden Ratio Inspired */
  --space-3xs: 0.125rem;
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;
  --space-6xl: 12rem;
  
  /* Layout */
  --container-max: 1400px;
  --container-padding: clamp(1rem, 5vw, 2rem);
  
  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
  --radius-2xl: 2rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(42, 45, 38, 0.05);
  --shadow-md: 0 4px 12px rgba(42, 45, 38, 0.08);
  --shadow-lg: 0 8px 24px rgba(42, 45, 38, 0.1);
  --shadow-xl: 0 16px 48px rgba(42, 45, 38, 0.12);
  --shadow-gold: 0 0 40px rgba(201, 167, 105, 0.2);
  
  /* Focus Ring */
  --focus-ring: 0 0 0 2px var(--color-parchment), 0 0 0 4px var(--color-gold);
  --focus-ring-inset: inset 0 0 0 2px var(--color-gold);
  
  /* Transitions - Motion Safe Defaults */
  --transition-micro: 150ms ease;
  --transition-fast: 250ms ease;
  --transition-base: 400ms ease;
  --transition-slow: 600ms ease;
  --transition-bounce: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Z-Index Scale */
  --z-base: 1;
  --z-elevated: 10;
  --z-sticky: 100;
  --z-overlay: 1000;
  --z-modal: 2000;
  --z-toast: 3000;
  
  /* Animation Durations (for reduced-motion override) */
  --animation-duration-fast: 150ms;
  --animation-duration-base: 300ms;
  --animation-duration-slow: 600ms;
}

/* ============================================
   SECTION 2: REDUCED MOTION SUPPORT
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Disable specific animations */
  .header__seal-svg,
  .hero__vessel-liquid,
  .hero__botanical,
  .hero__symbol-svg,
  .scroll-indicator__quill,
  .correspondence__quill,
  .mobile-nav__seal {
    animation: none !important;
  }
  
  /* Remove parallax effects */
  .gold-leaf {
    position: fixed;
    transform: none !important;
  }
  
  /* Simplify hover transitions */
  .btn::before {
    display: none;
  }
}

/* Class-based reduced motion (for JS detection) */
.reduce-motion *,
.reduce-motion *::before,
.reduce-motion *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}

/* ============================================
   SECTION 3: BASE STYLES
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
  background-color: var(--color-parchment);
  scroll-padding-top: 120px; /* Account for sticky header */
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-ink);
  background-color: var(--color-parchment);
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

/* Parchment Texture - Optimized */
.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Using CSS gradient instead of SVG filter for better performance */
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(42, 45, 38, 0.01) 2px,
      rgba(42, 45, 38, 0.01) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(42, 45, 38, 0.01) 2px,
      rgba(42, 45, 38, 0.01) 4px
    );
  opacity: 0.5;
  pointer-events: none;
  z-index: var(--z-base);
}

/* Gold Leaf Accents - Performance Optimized */
.gold-leaf {
  position: fixed;
  background: radial-gradient(circle, var(--color-gold-muted) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-base);
  will-change: transform; /* Hint for GPU acceleration */
}

.gold-leaf--1 {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -200px;
  opacity: 0.4;
}

.gold-leaf--2 {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -150px;
  opacity: 0.3;
}

.gold-leaf--3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 10%;
  opacity: 0.2;
}

/* ============================================
   SECTION 4: FOCUS STYLES (WCAG AAA)
   ============================================ */

/* Default focus - removed for mouse users */
:focus {
  outline: none;
}

/* Visible focus for keyboard users */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

/* High contrast focus for dark backgrounds */
.alchemy :focus-visible,
.correspondence :focus-visible,
.colophon :focus-visible,
.mobile-nav :focus-visible {
  outline-color: var(--color-gold-light);
}

/* Focus within for composite components */
.essence-card:focus-within {
  box-shadow: var(--focus-ring);
}

/* Selection */
::selection {
  background-color: var(--color-gold-light);
  color: var(--color-ink);
}

/* ============================================
   SECTION 5: TYPOGRAPHY UTILITIES
   ============================================ */

/* Links */
a {
  color: inherit;
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-gold-dark);
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
  color: inherit;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Form Elements */
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

/* ============================================
   SECTION 6: ACCESSIBILITY UTILITIES
   ============================================ */

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-ink);
  color: var(--color-parchment);
  padding: var(--space-sm) var(--space-lg);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: var(--z-toast);
  transition: top var(--transition-fast);
}

.skip-link:focus {
  top: var(--space-md);
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}

/* Inert Polyfill Styles */
[inert] {
  pointer-events: none;
  user-select: none;
}

[inert] * {
  pointer-events: none;
  user-select: none;
}

/* ============================================
   SECTION 7: ATELIER BANNER
   ============================================ */

.atelier-banner {
  background: linear-gradient(90deg, 
    var(--color-ink) 0%, 
    var(--color-sage) 50%, 
    var(--color-ink) 100%);
  color: var(--color-parchment);
  padding: var(--space-sm) var(--container-padding);
  text-align: center;
  position: relative;
  z-index: calc(var(--z-sticky) + 1);
}

.atelier-banner__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  font-size: var(--text-sm);
}

.atelier-banner__icon {
  color: var(--color-gold);
  opacity: 0.8;
}

.atelier-banner__text {
  font-weight: 500;
  letter-spacing: 0.05em;
}

.atelier-banner__subtext {
  font-size: var(--text-xs);
  opacity: 0.8;
  display: none;
}

@media (min-width: 768px) {
  .atelier-banner__subtext {
    display: inline;
  }
}

.atelier-banner__subtext em {
  font-style: italic;
  color: var(--color-gold-light);
}

/* ============================================
   SECTION 8: HEADER
   ============================================ */

.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-parchment-dark);
  transition: box-shadow var(--transition-base);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--space-md) var(--container-padding);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-xl);
}

/* Atelier Seal */
.header__seal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  text-decoration: none;
  color: var(--color-ink);
  z-index: var(--z-elevated);
  border-radius: var(--radius-md);
  padding: var(--space-2xs);
}

.header__seal:hover {
  color: var(--color-ink);
}

.header__seal-inner {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__seal-svg {
  width: 100%;
  height: 100%;
  color: var(--color-ink);
  animation: rotateSeal 30s linear infinite;
}

@keyframes rotateSeal {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.header__seal-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.header__seal-name {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  line-height: 1;
}

.header__seal-tagline {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-ink-muted);
  letter-spacing: 0.1em;
}

/* Navigation */
.header__nav {
  display: none;
}

@media (min-width: 1024px) {
  .header__nav {
    display: block;
  }
}

.header__nav-list {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
}

.header__nav-item {
  position: relative;
}

.header__nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--color-ink-muted);
  padding: var(--space-xs);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast);
}

.header__nav-number {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-gold-dark);
  margin-bottom: var(--space-3xs);
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.header__nav-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
}

.header__nav-label::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: width var(--transition-base);
}

.header__nav-link:hover,
.header__nav-link:focus-visible,
.header__nav-link.active {
  color: var(--color-ink);
}

.header__nav-link:hover .header__nav-number,
.header__nav-link:focus-visible .header__nav-number,
.header__nav-link.active .header__nav-number {
  opacity: 1;
}

.header__nav-link:hover .header__nav-label::after,
.header__nav-link:focus-visible .header__nav-label::after,
.header__nav-link.active .header__nav-label::after {
  width: 100%;
}

/* Header Tools */
.header__tools {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header__tool {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  color: var(--color-ink);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.header__tool:hover,
.header__tool:focus-visible {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
  color: var(--color-gold-dark);
  transform: translateY(-2px);
}

/* Tooltip */
.header__tool::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: var(--color-ink);
  color: var(--color-parchment);
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-xs);
  border-radius: var(--radius-sm);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  white-space: nowrap;
  pointer-events: none;
}

.header__tool:hover::before,
.header__tool:focus-visible::before {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-4px);
}

/* Cart Count Badge */
.header__tool[data-count]::after {
  content: attr(data-count);
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gold);
  color: var(--color-ink);
  font-size: 0.65rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: 0 4px;
}

.header__tool[data-count="0"]::after {
  display: none;
}

/* Mobile Menu Toggle */
.header__menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid var(--color-parchment-dark);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  position: relative;
}

@media (min-width: 1024px) {
  .header__menu-toggle {
    display: none;
  }
}

.header__menu-toggle:hover,
.header__menu-toggle:focus-visible {
  background: rgba(201, 167, 105, 0.1);
  border-color: var(--color-gold);
}

.header__menu-quill {
  width: 20px;
  height: 24px;
  position: relative;
  transition: all var(--transition-fast);
}

.header__menu-quill::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 20px;
  background: var(--color-ink);
  transition: all var(--transition-fast);
}

.header__menu-quill::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 8px;
  background: var(--color-ink);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transition: all var(--transition-fast);
}

.header__menu-toggle[aria-expanded="true"] .header__menu-quill::before {
  transform: translate(-50%, -50%) rotate(45deg);
  height: 24px;
}

.header__menu-toggle[aria-expanded="true"] .header__menu-quill::after {
  transform: translateX(-50%) rotate(-45deg);
  top: 8px;
  width: 16px;
}

/* ============================================
   SECTION 9: MOBILE NAVIGATION
   ============================================ */

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-ink);
  color: var(--color-parchment);
  z-index: var(--z-modal);
  transform: translateX(100%);
  transition: transform var(--transition-base) cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  overscroll-behavior: contain;
}

.mobile-nav.active {
  transform: translateX(0);
}

.mobile-nav__container {
  min-height: 100%;
  padding: var(--space-4xl) var(--container-padding) var(--space-2xl);
  display: flex;
  flex-direction: column;
  position: relative;
}

.mobile-nav__container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(201, 167, 105, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(124, 99, 84, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.mobile-nav__header {
  margin-bottom: var(--space-3xl);
  text-align: center;
  position: relative;
  z-index: var(--z-base);
}

.mobile-nav__seal {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-lg);
  border: 1px solid var(--color-gold);
  border-radius: 50%;
  position: relative;
}

.mobile-nav__seal::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 1px dashed var(--color-gold);
  border-radius: 50%;
}

.mobile-nav__title {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--color-gold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
