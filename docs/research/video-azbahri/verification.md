# Verification

## Automated checks

- `npm run check`: lint, TypeScript and production build pass.
- Route `/` renders as a static page.
- Local WebP assets: 20/20 return `200 image/webp`.
- Source and local body text match exactly after whitespace normalization.
- Source and local layout/style geometry compared through DOM at:
  - 390 × 844: same 3611 px page height and no horizontal overflow.
  - 1440 × 1000: same 3043 px page height and no horizontal overflow.
  - 1600 × 1000: same 3222 px page height and no horizontal overflow.
- Desktop deterministic pixel comparison at 1440 px: 0.2040% mismatched pixels. Differences are local-font naming/rasterization and header color serialization, not geometry.
- Marquee animations found with source durations/directions: 70s normal, 55s reverse, 80s normal.
- All images load from `/sites/video-azbahri/`; no source image hotlinks.

## Functional scope

- Logo/home links route to local `/`.
- Login, CTA, style-library and policy links preserve original external destinations.
- Hero marquee, responsive grids, style hover scaling, sticky header and reduced-motion fallback implemented.

## Known boundary

- Only public landing page cloned. Login and policy pages remain external by design.
