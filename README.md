# VFFC.vn — Standalone Portfolio Website

Standalone single-page responsive website for **VFFC.vn** (Vietnam France Financial & Construction Consulting).

## Features Included
- **Executive Profile**: Mr. Quang Le (CTO) — Florida Institute of Technology alumnus with 15+ years in software development, digital transformation, and process optimization.
- **Project Showcase**: Color project photography across real estate, infrastructure, digital transformation, and corporate consulting mandates.
- **Bilingual Support**: Dynamic English / Vietnamese (EN/VI) language toggle covering all navigation, hero headlines, service descriptions, executive bios, project case studies, and the contact inquiry form.
- **Design & Layout**: Clean modern minimalist styling, sticky top navigation bar, 3-column project grid with modal lightboxes, and a responsive contact form optimized for mobile, tablet, and desktop.
- **Shared Site Header**: The announcement bar and desktop/mobile navigation are defined once in `site-header.js` and used by both HTML pages.
- **Zero Build Dependencies**: Pages use embedded high-resolution imagery and Tailwind CSS via CDN. Bilingual text is kept in `bilingual-data.js` for easier editing.

## Usage
Keep both HTML pages, `site-header.js`, `bilingual-data.js`, and `style.css` together. Open either `index.html` or `vffc-portfolio-standalone-original.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge). No web server or build process is required.
