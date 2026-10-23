# VFFC.vn — Standalone Portfolio Website

Standalone single-page responsive website for **VFFC.vn** (Vietnam France Financial & Construction Consulting).

## Features Included
- **Executive Profile**: Mr. Quang Le (CTO) — Florida Institute of Technology alumnus with 15+ years in software development, digital transformation, and process optimization.
- **Project Showcase**: Color project photography across real estate, infrastructure, digital transformation, and corporate consulting mandates.
- **Bilingual Support**: Dynamic English / Vietnamese (EN/VI) language toggle covering all navigation, hero headlines, service descriptions, executive bios, project case studies, and the contact inquiry form.
- **Design & Layout**: Clean modern minimalist styling, sticky top navigation bar, 3-column project grid with modal lightboxes, and a responsive contact form optimized for mobile, tablet, and desktop.
- **Shared Site Header**: The announcement bar and desktop/mobile navigation are defined once in `site-header.js` and used by both HTML pages.
- **Shared Page Content**: All sections, including the contact form, credentials framework, footer, and modals, are defined once in `page-content.js`.
- **Shared Interactions**: Language switching, portfolio filtering, project/service/profile modals, mobile navigation, and form behavior are defined once in `interactions.js`.
- **Shared Bilingual Data, Styles, and Tailwind Config**: Both pages use `bilingual-data.js`, `style.css`, and `tailwind-config.js`, so translations, styling, and theme settings stay consistent.
- **Zero Build Dependencies**: Pages use embedded high-resolution imagery and Tailwind CSS via CDN.

## Usage
Keep both HTML pages, `site-header.js`, `page-content.js`, `interactions.js`, `bilingual-data.js`, `tailwind-config.js`, and `style.css` together. Open either `index.html` or `vffc-portfolio-standalone-original.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge). No web server or build process is required.
