#!/bin/bash

# 1. Component Color Replacements
cat << 'NODE_EOF' > update-colors.js
const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (f.endsWith('.jsx') || f.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/bg-black-100/g, 'bg-surface-base');
      content = content.replace(/bg-black-200/g, 'bg-surface-alt');
      content = content.replace(/bg-black-300/g, 'bg-surface-card');
      content = content.replace(/bg-black-400/g, 'bg-border-subtle');
      
      content = content.replace(/border-black-100/g, 'border-border-subtle');
      content = content.replace(/border-black-200/g, 'border-border-subtle');
      content = content.replace(/border-black-300/g, 'border-border-subtle');
      content = content.replace(/border-black-400/g, 'border-border-subtle');
      
      content = content.replace(/text-black-100/g, 'text-surface-base');
      content = content.replace(/text-black-200/g, 'text-surface-base');
      content = content.replace(/text-black-300/g, 'text-surface-base');
      content = content.replace(/text-black-400/g, 'text-content-muted/60');

      content = content.replace(/text-text-white/g, 'text-content-main');
      content = content.replace(/text-text-muted/g, 'text-content-muted');

      content = content.replace(/text-gold-light/g, 'text-brand');
      content = content.replace(/text-gold/g, 'text-brand');
      
      content = content.replace(/bg-gold-light/g, 'bg-brand');
      content = content.replace(/bg-gold/g, 'bg-brand');
      
      content = content.replace(/border-gold/g, 'border-brand');
      content = content.replace(/ring-gold/g, 'ring-brand');
      
      content = content.replace(/shadow-black-100/g, 'shadow-black/20');
      content = content.replace(/text-whatsapp/g, 'text-[#25D366]');
      content = content.replace(/bg-whatsapp/g, 'bg-[#25D366]');

      fs.writeFileSync(fullPath, content);
    }
  });
}

processDir('src/components');
NODE_EOF

node update-colors.js
rm update-colors.js

# 2. Write src/index.css
cat << 'EOF' > src/index.css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-display: var(--font-heading);
  --font-body: var(--font-base);

  --color-surface-base: var(--color-bg-base);
  --color-surface-alt: var(--color-bg-alt);
  --color-surface-card: var(--color-bg-card);
  --color-content-main: var(--color-text-main);
  --color-content-muted: var(--color-text-muted);
  --color-border-subtle: var(--color-border);
  --color-brand: var(--color-accent);
}

:root {
  /* Light Theme (Clean, Warm, Photographic) */
  --color-bg-base: #FAF9F6;
  --color-bg-alt: #F3F1EC;
  --color-bg-card: #FFFFFF;
  --color-text-main: #181715;
  --color-text-muted: #66625B;
  --color-border: #E2DED5;
  --color-accent: #A67C32;

  --font-heading: "Playfair Display", serif;
  --font-base: "Inter", sans-serif;
}

:root:lang(ta) {
  --font-heading: "Noto Sans Tamil", sans-serif;
  --font-base: "Noto Sans Tamil", sans-serif;
}

.dark {
  /* Dark Theme (Premium, Cinematic) */
  --color-bg-base: #080808;
  --color-bg-alt: #11100E;
  --color-bg-card: #1B1916;
  --color-text-main: #F5F1E8;
  --color-text-muted: #A8A39A;
  --color-border: #2A2621;
  --color-accent: #C6A15B;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg-base);
  color: var(--color-text-main);
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.25s ease, color 0.25s ease;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, .font-display {
  font-family: var(--font-display);
}

/* Base English Typography */
body {
  font-size: 1rem;
  line-height: 1.5;
}

.hero-heading {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Tamil Typography Tuning - Prevents large wrapping and broken words */
:lang(ta) body {
  font-size: 1rem;
  line-height: 1.6;
}

:lang(ta) .hero-heading {
  font-size: clamp(2.1rem, 4.5vw, 4.25rem);
  line-height: 1.35;
  letter-spacing: normal;
  font-weight: 700;
  word-break: keep-all;
  overflow-wrap: break-word;
}

:lang(ta) p {
  word-break: keep-all;
  overflow-wrap: break-word;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

.max-w-7xl { max-width: 80rem; }

/* Cinematic Gradients for Theme */
.gradient-overlay {
  background: linear-gradient(to top, var(--color-bg-base) 0%, rgba(12,12,12,0.4) 50%, rgba(12,12,12,0.1) 100%);
}
.dark .gradient-overlay {
  background: linear-gradient(to top, var(--color-bg-base) 0%, rgba(8,8,8,0.7) 50%, rgba(8,8,8,0.1) 100%);
}

.gradient-overlay-right {
  background: linear-gradient(to right, var(--color-bg-base) 0%, rgba(12,12,12,0.3) 40%, rgba(12,12,12,0.1) 100%);
}
.dark .gradient-overlay-right {
  background: linear-gradient(to right, var(--color-bg-base) 0%, rgba(8,8,8,0.8) 40%, rgba(8,8,8,0.1) 100%);
}

.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
