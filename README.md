# Jeevaa Studio Website

A modern, mobile-first website for **Jeevaa Studio**, a local photo studio in Tamil Nadu, India.

The website is designed to make it easy for customers to discover studio services, view photography work, contact the studio, and send print/photography enquiries through WhatsApp.

## Overview

Jeevaa Studio provides:

- Passport-size photos
- 6×4 photo prints and other print sizes
- Photo frames
- Photo albums
- Marriage photography
- Function photography
- Patta / Chitta services
- Printout
- Xerox
- Scan and document services

The website is intentionally simple to use on Android phones and desktop computers, with a premium dark photography style and a light theme option.

## Main Features

### Bilingual Website

The website supports:

- **English** — default language
- **Tamil (தமிழ்)** — second language

Use the language switch in the header to change the visible website content.

Language preference is saved in the browser using `localStorage`.

### Dark and Light Themes

The website includes two themes:

- **Dark theme** — cinematic photography style with warm gold accents
- **Light theme** — clean, warm, premium photography style

The selected theme is saved in `localStorage`, so it remains after refreshing the page.

### WhatsApp Enquiries

WhatsApp is the main enquiry channel.

Studio WhatsApp number:

**+91 99439 79798**

WhatsApp link:

`https://wa.me/919943979798`

Customers can use WhatsApp buttons throughout the website or submit the enquiry form, which generates a pre-filled WhatsApp message.

### Phone Calling

The Call buttons use the studio number directly:

`tel:+919943979798`

### Gallery

The gallery supports categories such as:

- Marriage
- Functions
- Album
- Frame
- Photo Print

Images can be filtered and opened in a larger lightbox view.

### Responsive Design

The layout is designed for:

- Android/mobile phones
- Tablets
- Laptops
- Desktop screens

Special attention is given to small mobile widths such as 360px, 390px and 430px.

### Tamil Typography

Tamil has its own typography rules so that Tamil text does not use the same oversized English heading styles.

The design should prioritize:

- readable Tamil fonts
- natural line wrapping
- correct line height
- no horizontal overflow
- comfortable mobile reading

## Technology

The project uses:

- **React 19**
- **Vite 8**
- **Tailwind CSS 4**
- **Lucide React** for icons
- **JavaScript (ES modules)**

There is no backend and no database.

## Run the Website Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The current project configuration runs Vite on port `3000`.

Open:

```text
http://localhost:3000
```

### 3. Create production build

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

### 4. Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── EnquiryForm.jsx
│   ├── EverydayServices.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── Footer.jsx
│   ├── Gallery.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── LanguageToggle.jsx
│   ├── MarriagePhotography.jsx
│   ├── PhotoPrinting.jsx
│   ├── Services.jsx
│   ├── ThemeToggle.jsx
│   ├── TrustStrip.jsx
│   └── VisualBreak.jsx
│
├── context/
│   ├── LanguageContext.jsx
│   └── ThemeContext.jsx
│
├── data/
│   ├── studioConfig.js
│   └── translations.js
│
├── utils/
│   └── whatsapp.js
│
├── App.jsx
├── index.css
└── main.jsx
```

## Where to Edit Studio Details

Most business-specific information is centralized in:

```text
src/data/studioConfig.js
```

Important values include:

| Information | Variable |
|---|---|
| Studio name | `STUDIO_NAME` |
| Phone number | `PHONE_NUMBER` |
| Display phone | `PHONE_DISPLAY` |
| WhatsApp number | `WHATSAPP_NUMBER` |
| Address | `ADDRESS` |
| Google Maps link | `MAPS_URL` |
| Map coordinates | `MAP_COORDS` |
| Opening hours | `OPENING_HOURS` |
| Services | `SERVICES` |
| Gallery categories | `GALLERY_CATEGORIES` |
| Gallery images | `GALLERY_IMAGES` |
| Hero image | `HERO_IMAGE` |
| Photography images | `PHOTOGRAPHY_IMAGE_1`, `PHOTOGRAPHY_IMAGE_2` |

### Current Studio Information

```text
Studio: Jeevaa Studio
Phone: 9943979798
Display: +91 99439 79798
WhatsApp: 919943979798
```

### WhatsApp Number Format

When editing `WHATSAPP_NUMBER`, use the international country code but do not include `+`, spaces or brackets.

Example:

```js
export const WHATSAPP_NUMBER = "919943979798";
```

## Where to Edit Website Text

All major English and Tamil UI text is stored in:

```text
src/data/translations.js
```

The translation object contains:

```text
en = English

ta = Tamil
```

English is currently the default language.

When adding or changing a visible heading, button or message, update both language sections so the language switch remains complete.

## Where to Replace Photos

Studio images are configured in:

```text
src/data/studioConfig.js
```

Replace values such as:

```text
HERO_IMAGE
PHOTOGRAPHY_IMAGE_1
PHOTOGRAPHY_IMAGE_2
GALLERY_IMAGES
```

### Using Local Images

For local project images, place them inside a suitable folder such as:

```text
src/assets/gallery/
```

Then import them in `studioConfig.js`.

Example:

```js
import wedding1 from "../assets/gallery/wedding1.jpg";
```

Then use:

```js
{ 
  id: 1,
  category: "marriage",
  src: wedding1,
  altEn: "Wedding photography",
  altTa: "திருமண புகைப்படம்"
}
```

Using real Jeevaa Studio photos is recommended for the final production site.

## WhatsApp Utility

WhatsApp link generation is handled in:

```text
src/utils/whatsapp.js
```

It provides:

- `buildWhatsAppUrl()`
- `openWhatsApp()`

The utility automatically URL-encodes messages before opening WhatsApp.

You normally only need to change the number in `studioConfig.js`.

## Language System

Language state is handled by:

```text
src/context/LanguageContext.jsx
```

The provider:

- defaults to English
- loads the saved language from `localStorage`
- updates the document language
- exposes translations to components

Storage key:

```text
studio-lang
```

## Theme System

Theme state is handled by:

```text
src/context/ThemeContext.jsx
```

Available themes:

```text
dark
light
```

Storage key:

```text
studio-theme
```

The root HTML element receives the `dark` class when dark mode is active.

Theme colors and typography are defined in:

```text
src/index.css
```

## Styling

The main styling system is Tailwind CSS 4 with custom CSS variables.

Theme variables include:

```text
--color-bg-base
--color-bg-alt
--color-bg-card
--color-text-main
--color-text-muted
--color-border
--color-accent
```

This allows the same components to adapt between dark and light modes.

## Main Page Sections

The main application is assembled in:

```text
src/App.jsx
```

Current section order:

1. Header
2. Hero
3. Trust Strip
4. Services
5. Photography visual break
6. Photo Printing
7. Marriage / Function Photography
8. Gallery
9. Everyday Services
10. About
11. Enquiry Form
12. Contact
13. Footer
14. Floating WhatsApp button

## Editing Services

Services are defined in:

```text
src/data/studioConfig.js
```

Each service contains:

- stable `id`
- icon
- Tamil name
- English name
- Tamil description
- English description

Keep service IDs unique because they are used by the enquiry form and WhatsApp message generation.

## Editing Gallery Categories

Categories are defined in:

```text
GALLERY_CATEGORIES
```

Each category has:

```text
id
name in Tamil
name in English
```

Gallery items use the category `id` to connect the image to its filter.

## Deployment

This is a static frontend application. No server or database is required for the website itself.

After:

```bash
npm run build
```

upload the contents of:

```text
dist/
```

to a static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- cPanel/static hosting

The Google Maps link and WhatsApp links work directly from the browser.

## Before Production Launch

Replace placeholder/stock images with actual Jeevaa Studio photos.

Verify:

- Studio name
- Phone number
- WhatsApp number
- Address
- Google Maps link
- Opening hours
- Gallery images
- Hero image
- Photography images
- Tamil translations

Then run:

```bash
npm run build
```

and confirm there are no build errors.

## Code Quality

Use the existing component architecture when making changes.

Prefer editing configuration and translation files rather than hard-coding business information inside components.

Keep the website:

- lightweight
- responsive
- accessible
- easy to edit
- easy to deploy
- easy for local customers to use

## License / Ownership

This repository is for the Jeevaa Studio website. Update this section if you later add a specific license or project ownership policy.
