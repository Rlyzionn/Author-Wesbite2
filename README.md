# Hal Manogue Reading Room

An illustrated author website inspired by Hal Manogue's books and their cover art.

Public preview: https://tinyurl.com/28l2r62p

## Features

- Interactive showcase of 11 books, reading moods, reviews and sample-chapter links.
- About page with an enhanced author portrait and original-photo comparison.
- Artist Corner, interactive Ace trademark story, charity, contact and Blogger journal pages.
- AI reading guide and editable blog-draft studio.
- Responsive layouts, finite illustration animations, scroll reveals and reduced-motion support.

## Run locally

Use Node.js 22.13.0 or newer.

```sh
npm run install:ci
npm run dev
```

The default local URL is http://localhost:5173.

```sh
npm run build
npm start
```

The project uses React, TypeScript, Vinext/Vite and a Cloudflare Worker. Keep the included framework scripts and hosting manifest when deploying with Sites. GitHub stores the source; pushing here does not replace the existing live deployment.

## AI configuration

Configure `OPENROUTER_API_KEY` as a server-side Worker secret in the deployment environment. The API routes use this secret for OpenRouter. Never include the actual key in source, a browser bundle or this README. Without the secret, the site still renders, while AI requests return a connection message.

## Content notes

Long biographies and reviews are condensed. Full original texts and chapters are linked through their original sources or dated Internet Archive captures. The contact form prepares a message in the visitor's email application; it does not send mail or enroll subscribers on a server. Blog drafts require human review and are not automatically published to Blogger. The portrait enhancement is labeled and the original remains available for comparison.

Original book art, Ace and author content remain the property of their respective owners. This repository does not grant a separate license to those assets.

## Validation

The published source passed TypeScript and production-build checks, a 41-route production sweep, and desktop/mobile interaction and layout checks. Generated builds, dependencies, credentials and temporary research files are excluded from version control.
