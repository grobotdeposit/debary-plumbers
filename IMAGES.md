# Image Guide — Debary Plumbers

Replace placeholder images in `public/images/` with real photos. Do **not** hotlink images from the web — download royalty-free photos and save them locally.

## Recommended sources

- [Unsplash](https://unsplash.com/s/photos/plumber) — search "plumber", "plumbing", "water heater"
- [Pexels](https://www.pexels.com/search/plumber/) — same search terms

All images should be optimized (JPEG quality ~80%, or WebP) before uploading.

## Image slots

| File | Used in | Recommended size | Notes |
|------|---------|------------------|-------|
| `hero-plumber.jpg` | Hero section (`Hero.tsx`) | 1200 × 900 px (4:3) | Plumber in action — fixing a pipe, under a sink, or with tools. Bright, trustworthy. |
| `service-leak.jpg` | Services strip (optional) | 400 × 300 px | Leak or burst pipe repair |
| `service-clog.jpg` | Services strip (optional) | 400 × 300 px | Drain / clog work |
| `service-heater.jpg` | Services strip (optional) | 400 × 300 px | Water heater install or repair |
| `service-install.jpg` | Services strip (optional) | 400 × 300 px | Fixture installation |
| `service-emergency.jpg` | Services strip (optional) | 400 × 300 px | Emergency plumbing scene |

## Current placeholders

The site currently uses `hero-plumber.svg` as a vector placeholder. To switch to a photo:

1. Add `hero-plumber.jpg` to `public/images/`
2. In `src/components/Hero.tsx`, change the `src` from `/images/hero-plumber.svg` to `/images/hero-plumber.jpg`

## Tips

- Use photos with natural lighting and real-looking work environments
- Avoid stock photos with obvious watermarks or overly staged poses
- Crop to focus on the plumber and the work being done
- Compress large files — aim for under 200 KB per image where possible
