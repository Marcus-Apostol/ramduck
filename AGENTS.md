# AGENTS.md

RAMduck teaser landing page — a single-page marketing site for a stealth startup building something on the <span class="redacted">blockchain</span> (never call it an AI) that will end the RAM crisis — hence "RAM" in the name. The brand intent is **tease, don't reveal**: keep copy vague, playful and duck-themed; never invent concrete product details (chain names, mechanisms, dates).

## Stack

TanStack Start (React 19, file-based routing), Vite 7, Tailwind CSS 4, deployed on Netlify.

## Layout

```
public/
  __forms.html          # Static skeleton so Netlify Forms registers the "waitlist" form
  img/ramduck-logo.jpg  # Logo (duck on a pixel RAM chip), user-supplied
  img/ramduck-banner.jpg# Duck pattern banner, user-supplied
src/
  routes/__root.tsx     # HTML shell, SEO meta, Google Fonts, favicon
  routes/index.tsx      # The whole landing page (nav, hero, ticker, hints, banner, file, waitlist, footer)
  components/BootLog.tsx        # Animated terminal "boot" sequence in the hero
  components/ClassifiedFile.tsx # Redacted document with a "Declassify" button that always refuses
  components/WaitlistForm.tsx   # Netlify Forms waitlist (email + optional guess)
  styles.css            # Tailwind theme tokens (pond/lime/cream/beak colors, pixel/mono/sans fonts) + animations
```

## Conventions & decisions

- Colors and fonts are Tailwind theme tokens in `styles.css` (`bg-pond-950`, `text-lime`, `font-pixel`…). Reuse them rather than raw hex.
- Images are always served through the Netlify Image CDN (`/.netlify/images?url=/img/...&w=...&fm=webp`), never the originals.
- The waitlist form POSTs URL-encoded data to `/__forms.html` (not `/`, which the SSR function would intercept). If you add fields, add them to `public/__forms.html` too.
- `.redacted` spans render as solid bars; use them for teaser copy.
- All animations respect `prefers-reduced-motion`.
