# anandu.dev

Personal portfolio of Anandu A Pillai, a frontend-first full stack developer. Live at [anandu.dev](https://www.anandu.dev).

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 and TypeScript
- Tailwind CSS 4
- [Motion](https://motion.dev) for animations and [Lucide](https://lucide.dev) icons

## Getting started

Requires Node.js 22.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | What it does                                                    |
| -------------------- | --------------------------------------------------------------- |
| `npm run dev`        | Start the development server                                    |
| `npm run dev:mobile` | Start the dev server on your local network to test on a phone   |
| `npm run build`      | Create a production build                                       |
| `npm run start`      | Serve the production build                                      |
| `npm run lint`       | Run ESLint                                                      |

## Editing content

- **Projects**: `src/data/projects.json`
  - Add a `featured` object to show a project on the home page (`order`, `code`, `tagline`, `brandColorClass`, `logoSize`). The hover cover image for a featured card is set by the `.project-<code>` rule in `src/app/globals.css`.
  - Projects without a `logo` show a letter tile.
  - Leave out `liveLink` or `github` to hide the matching button.
- **Work experience**: `src/data/experience.ts` (used on the home page and the About page)
- **Site URL, title, and description**: `src/lib/site.ts`
- **Resume**: `public/Resume/Anandu A Pillai-cv.pdf`

## Deployment

Hosted on Vercel. Pushes to `main` deploy to production at anandu.dev.
