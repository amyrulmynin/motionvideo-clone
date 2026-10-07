# MotionVideo landing page brief

## Route map

- Source: `https://video.azbahri.link/`
- Local: `/`
- Scope: public landing page only.
- Logo/home links resolve locally to `/`.
- Out-of-scope links remain on source: `/login`, `/terms`, `/privacy-policy`, `/refund-policy`, `/shipping-policy`.

## Evidence

- Source HTML: `docs/research/video-azbahri/source.html`
- Source compiled CSS (reference only; do not paste bundle): `docs/research/video-azbahri/source.css.reference`
- Desktop screenshot: `docs/design-references/video-azbahri-source-desktop-1440x1000.png`
- Mobile screenshot: `docs/design-references/video-azbahri-source-mobile-390x844.png`
- Local assets: `public/sites/video-azbahri/`
- Asset provenance: `asset-map.json`

## Visual system

- Font: Instrument Sans, local weights 400/500/600/700.
- Colors: ink 950 `#0a0e11`, ink 900 `#10161a`, ink 800 `#172026`, ink 700 `#202a31`, ink 600 `#2b3740`; foreground `#eef2f4`; muted `#8d9aa4`; faint `#5d6a73`; accent `#ffc53d`; accent hover `#ffd26b`; on-accent `#1b1400`.
- Root is dark, body background ink-950. Default typography from source is `0.875rem/1.25rem`; panels use ink-900, 1px white/5 ring and 1rem radius.
- Content max width: 72rem with 1rem horizontal padding.
- Section spacing: mobile 2.5rem vertical; desktop 3.5rem.

## Section order and content

1. Sticky header: logo, `Log in`, amber `Get started`.
2. Hero: `44 video styles ready to use` pill; heading `Pick a style. Add your story.` plus amber `Get the full video prompt.`; supporting copy; CTA; three continuously moving portrait-image columns.
3. `How it works`: three cards — Pick a style, Add your content, Get your prompt.
4. `Your content, in a proven style`: paragraph, three check bullets, generated prompt preview using Neon sign.
5. `Made for every platform`: 16:9, 9:16, 1:1, 4:5 cards.
6. `A library of styles`: 12 actual style images and labels in 3 columns mobile, 4 small-tablet, 6 desktop.
7. Warm amber-to-orange CTA: `Ready to make your first video prompt?` with clipped decorative image grid on desktop only.
8. Footer: logo, Terms/Privacy/Refunds/Shipping, copyright.

Use every exact text string from source HTML. Use local assets, not hotlinks.

## Desktop rules (>= 64rem)

- Header inner height 3.5rem.
- Hero grid `1.1fr 1fr`, center-aligned, 3rem gap, `pt-14 pb-16`; image area height 34rem.
- Heading 3rem with 1.1 line height. Hero supporting copy max 28rem.
- How-it-works cards form three equal columns.
- Proven-style section forms two equal columns with 3rem gap.
- Platform cards form four columns.
- Library forms six columns.
- CTA is wide with 1.5rem radius; decorative grid sits at right, slightly rotated and clipped.
- Footer is one row.

## Mobile rules (390px evidence)

- Header height about 57px; all three header items remain visible.
- Hero stacks. Heading 1.875rem/1.1. Marquee begins below copy and is 18rem tall, still three columns.
- How-it-works cards stack.
- Proven-style copy precedes prompt preview.
- Platform cards use two columns.
- Library uses three columns; labels truncate to one line.
- CTA is about 358px wide, text/button only; decorative grid hidden.
- Footer stacks and centers logo, links, then copyright.

## Motion and controls

- Three hero image columns loop upward linearly. Durations: 70s, 55s reversed, 80s. Duplicate each column's six images for seamless motion. Disable animation for reduced motion.
- Style library images scale to 105% on hover over 300ms.
- All visible CTA and style-card links are functional and point to source login.
- Preserve sticky header and backdrop blur.

## Validation targets

- No horizontal overflow at 390px or 1440px.
- All 20 local WebP assets return successfully.
- Header/hero, section order, responsive grids, animation, CTA, footer match source.
- `npm run check` passes.
