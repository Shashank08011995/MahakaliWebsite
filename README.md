# Mahakali Vedic Healing Shelter — Website

A modern, mobile-first React/Next.js website for **Mahakali Vedic Healing Shelter**, founded by Guru Didi Shweta Ji. Replaces the legacy WordPress/PHP site at https://mahakalivedichealingshelter.com while preserving its values and content.

All call-to-actions route to **WhatsApp Business** (`+91 78382 37702`) — the contact form opens a WhatsApp chat pre-filled with the user's submission.

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |
| Fonts | Cormorant Garamond, Inter, Tiro Devanagari Hindi (via `next/font`) |
| Hosting | Vercel (recommended) |

---

## Project structure

```
src/
  app/                Next.js App Router pages
    layout.tsx        Root layout: header, footer, fonts, metadata
    page.tsx          Home
    about/            /about
    services/         /services + /services/[slug]
    contact/          /contact (with WhatsApp form)
    globals.css       Tailwind base + custom utilities
  components/         Reusable UI (Navbar, Footer, Hero, etc.)
  data/               Site content as TypeScript
    services.ts       All services + categories. Edit here to add/change.
    testimonials.ts   Client testimonials. Replace placeholders before launch.
  lib/
    site.ts           Site config (name, contact, socials, rates)
    whatsapp.ts       WhatsApp deep-link builder

public/
  images/             Logo, deity imagery, hero assets
```

### Editing content

- **Services** — `src/data/services.ts`. Each service has `slug`, `title`, `category`, `short`, `long`, `image`. New services appear automatically on `/services` and at `/services/<slug>`.
- **Testimonials** — `src/data/testimonials.ts`. Currently placeholder text — **replace with real, approved testimonials before launch**.
- **Contact info, rates, socials** — `src/lib/site.ts`.
- **WhatsApp number** — change `contact.whatsapp` in `src/lib/site.ts` (digits only, no `+`).

### Editing visual style

- **Colours** — `tailwind.config.ts` (`saffron`, `marigold`, `sindoor`, `ink`, `cream`).
- **Fonts** — `src/app/layout.tsx` imports from `next/font/google`. Swap families there.
- **Global CSS** — `src/app/globals.css` (button, container, eyebrow utilities).

---

## Local development

You need Node.js 18.18+ (recommended: latest LTS).

```bash
# Install deps
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build (sanity-check before deploy)
npm run build
npm start
```

If Node isn't installed on your Mac, install with:

```bash
# Easiest: official installer
# https://nodejs.org/  → download macOS .pkg and run

# Or via Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

---

## Deploy to Vercel (free)

1. **Push to GitHub** (see *Git setup* below).
2. Go to https://vercel.com → **New Project** → **Import Git Repository**.
3. Select this repo. Vercel auto-detects Next.js. Click **Deploy**.
4. First deploy takes ~60s. You'll get a free `https://<project>.vercel.app` URL.
5. **Push to `main` = auto-deploy.** No CI/CD setup needed.

### Connecting a custom domain (later)

In the Vercel project → **Settings → Domains** → add `mahakalivedichealingshelter.com`. Vercel shows you the DNS records to add at your domain registrar. Free SSL is automatic.

---

## Git setup

This project ships with `.gitignore` and is ready to be a git repo.

```bash
cd mahakali-website
git init
git add .
git commit -m "Initial Phase 1: home, about, services, contact"

# Create a new repo on GitHub (private or public), then:
git remote add origin git@github.com:<your-username>/mahakali-website.git
git branch -M main
git push -u origin main
```

---

## What's in Phase 1

- ✅ Home — hero, mission, services preview, categories, testimonials, consultation CTA
- ✅ About — Guru Didi, principles, mission
- ✅ Services — overview with 6 categories, 28 individual service pages
- ✅ Contact — WhatsApp form, phone, email, consultation rates
- ✅ Mobile-responsive throughout
- ✅ All CTAs route to WhatsApp (no backend / no email service)
- ✅ SEO metadata per page
- ✅ Hindi mantra inline (no full EN/HI toggle yet)

## Phase 2 candidates

- Pujas & Jaaps — separate page with all 18 pujas + 7 jaaps
- Stories / Victim Testimonials — full archive with filtering
- Books, FAQs, Online Classes
- Gallery (photos + videos)
- Membership tiers
- Full English/Hindi toggle via `next-intl`
- Real Open Graph and Twitter card images
- Higher-resolution photography of Guru Didi and rituals

---

## Notes for the client

- The WhatsApp number is set to `+91 78382 37702`. Make sure this is registered as a **WhatsApp Business** account so messages arrive cleanly.
- Replace the placeholder testimonials in `src/data/testimonials.ts` with real, approved client quotes before going live.
- Add a real photograph of Guru Didi to `public/images/` and update the About page reference.
- Currently no e-commerce, no online payments. All bookings flow through WhatsApp by design.
