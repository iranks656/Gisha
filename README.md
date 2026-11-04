# Gisha Freighters Uganda Ltd — website source

This is a lightweight, responsive static website built with plain HTML, CSS and JavaScript. No package installation or build framework is required.

## Source files

- `index.html` — all website content, navigation, service cards, resources, FAQ and contact form.
- `style.css` — brand palette, responsive layout, mobile menu and FAQ accordion styling.
- `main.js` — mobile navigation, form submission/status messaging and current-year display.
- `favicon.svg` — custom site icon.
- `manus-routes.json` — the public home-route declaration.
- `app.config.ts` — Manus project branding metadata.
- `run-preview.sh` — starts a local preview on port 3000.
- `TODO.md` — completed project acceptance criteria.
- `FAQ-SOURCES.md` — source notes for the adapted FAQ content.
- `SERVICE-IDEAS.md` — optional future service recommendations, not published as current offerings.

## Run locally

On Linux/macOS, run `./run-preview.sh` from the project directory and open `http://localhost:3000`. The script serves files on port 3000; Python 3 is the only runtime requirement. Alternatively, run `python3 -m http.server 3000` from this directory.

The configured static output is created by:

```sh
mkdir -p dist && cp index.html style.css main.js favicon.svg manus-routes.json dist/
```

## Contact form and external asset

The contact form posts to the Formspree endpoint supplied for this project: `https://formspree.io/f/xzzvlbzp`. Confirm that the endpoint remains active and belongs to the business before using the site in production.

The homepage hero references a durable Manus project-storage asset at `/manus-storage/async-images/jyff6DTTKyG7BCsIqZdK79/image-1.webp`. That reserved address resolves through the Manus project and its published hosting. The image file is not bundled in this source archive. If you host the archive elsewhere, place an image you own in your own asset storage and update the `src` in `index.html`.
