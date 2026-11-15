# Namaste India 24

Next.js App Router site for Namaste India 24. React 19, TypeScript, and Tailwind CSS v4.

## Scripts

- `pnpm dev` starts the development server
- `pnpm build` creates the production build
- `pnpm start` serves the production build
- `pnpm lint` runs ESLint

## Structure

- `src/app` — routes, metadata, sitemap, and robots
- `src/components` — layout, icons, and page sections
- `src/lib` — tours, itineraries, copy, and structured data
- `public/images` — photographs used across the site
- `src/app/globals.css` — global styles and the Tailwind import

Use Tailwind utility classes in JSX. Keep global element styles inside `@layer base` so utilities can still override them.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
