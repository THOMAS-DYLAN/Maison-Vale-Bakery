# Maison Vale Bakery — Website Documentation

## Overview
A complete 5-page premium bakery website built for Maison Vale Bakery.
Designed for immediate deployment or handoff to a client.

---

## File Structure

```
maison-vale/
├── index.html          ← Home page
├── menu.html           ← Full menu with tabbed sections
├── custom-orders.html  ← Custom cake inquiry
├── about.html          ← Brand story + founder
├── contact.html        ← Contact form, map, hours
│
├── css/
│   ├── styles.css      ← Global design system (shared across all pages)
│   ├── home.css        ← Home page styles
│   ├── menu.css        ← Menu page styles (also used by page-hero on other pages)
│   ├── custom-orders.css
│   ├── about.css
│   └── contact.css
│
├── js/
│   ├── layout.js       ← Injects nav + footer into every page
│   ├── main.js         ← Scroll animations, sticky nav, mobile menu, forms
│   └── menu.js         ← Menu tab switching
```

---

## How to Edit

### Business Information
Search and replace across all files:
- **Name**: "Maison Vale" → your bakery name
- **Address**: "42 Willow Lane, Millbrook, NY 12545"
- **Email**: "hello@maisonvale.com"
- **Phone**: "(845) 555-0148"
- **Hours**: Found in `js/layout.js` → `renderFooter()`
- **Social handles**: "@maisonvale"

### Colors (css/styles.css)
All colors are CSS custom properties at the top of `styles.css`:
```css
--cream, --warm-white, --parchment, --linen,
--taupe, --mocha, --espresso, --bark,
--dusty-rose, --sage, --gold, --gold-light
```

### Fonts
Google Fonts imports are in `styles.css`. Currently using:
- **Display**: Cormorant Garamond
- **Script**: Great Vibes
- **Body**: Jost

### Navigation & Footer
Edit `js/layout.js` — both `renderNav()` and `renderFooter()` functions.
All pages automatically inherit these changes.

### Images
All images currently use Unsplash URLs. Replace with:
- Hosted image URLs on your server
- Or local paths: `images/hero-croissant.jpg`

Recommended image sizes:
- Hero: 1800×1200px minimum
- Grid cards: 700×900px
- Gallery: 500×700px

### Map Embed
In `contact.html`, replace the Google Maps `<iframe>` src with your actual embed code from:
https://developers.google.com/maps/documentation/embed/get-started

---

## How to Deploy

### Option 1: Static Hosting (Recommended)
Upload the entire `maison-vale/` folder to:
- **Netlify**: Drag the folder to netlify.com/drop
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push to repo, enable Pages

No server required. Pure HTML/CSS/JS.

### Option 2: Existing Web Server
Upload all files to your web root (e.g. `public_html/`) maintaining folder structure.

---

## What to Replace for Production
- [ ] All Unsplash image URLs → real bakery photos
- [ ] Google Maps embed → real location embed
- [ ] Email → real bakery email
- [ ] Phone → real phone number
- [ ] Hours → verified operating hours
- [ ] Social links → real social media URLs
- [ ] Form action → connect to email service (Formspree, EmailJS, etc.)

---

## Form Setup
Forms use `class="site-form"` and trigger a built-in success message on submit.
To connect to a real backend:
1. Add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag
2. Add `method="POST"`
3. Remove the `site-form` class (or keep for UX and let Formspree handle redirect)

---

## Design System Reference

| Token | Value | Use |
|-------|-------|-----|
| `--cream` | #F8F4EE | Card backgrounds |
| `--warm-white` | #FDFAF6 | Page background |
| `--parchment` | #EDE5D8 | Section alternates |
| `--bark` | #2E211A | Dark elements, footer |
| `--gold` | #C4A46B | Accents, CTAs |
| `--mocha` | #8B6F5A | Secondary text |

---

## Estimated Build Value
This site represents $2,500–$5,000 in custom web development value at standard agency rates, based on:
- 5 fully unique page layouts
- Complete shared design system
- Interactive components (tabs, parallax, reveals, mobile menu)
- Full responsive design
- Client-ready documentation

Built for the **Business package tier** ($500) by [Your Agency Name].
