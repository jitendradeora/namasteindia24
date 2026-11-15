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
