# WP Services Landing Page

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pglodzcloudflare/wpservices-logistics-in-motion)

A modern, full-stack landing page template built on Cloudflare Workers with a React frontend. Designed for high-performance, SEO-friendly service landing pages with built-in API routes, theming, and responsive UI components powered by shadcn/ui.

## Features

- **Full-Stack Architecture**: React SPA frontend served via Cloudflare Workers with Hono backend API routes.
- **Modern UI**: shadcn/ui components with Tailwind CSS, dark/light theme support, and smooth animations.
- **Type-Safe**: End-to-end TypeScript with proper type generation for Workers bindings.
- **Developer Experience**: Hot reload, error boundaries, TanStack Query for data fetching, React Router.
- **Performance Optimized**: Vite bundling, Cloudflare Pages compatibility, automatic asset handling.
- **Responsive Design**: Mobile-first layout with sidebar support and Tailwind utilities.
- **API Ready**: Pre-configured CORS, logging, health checks, and extensible user routes.
- **Deployment Ready**: One-command deploy to Cloudflare Workers.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, TanStack Query, React Router, Sonner (toasts)
- **Backend**: Cloudflare Workers, Hono, TypeScript
- **Utilities**: Zod (validation), Zustand (state), Immer, clsx, tailwind-merge
- **Dev Tools**: Bun (package manager), ESLint, Wrangler
- **UI Components**: Full shadcn/ui suite (buttons, modals, tables, charts, etc.)

## Quick Start

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start development server:
   ```bash
   bun run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Installation

Clone the repository and install dependencies using Bun:

```bash
git clone <repository-url>
cd wp-services-landing-9d0yjeo_czfa5-coy1vfm
bun install
```

Generate Workers types (if needed):
```bash
bun run cf-typegen
```

## Development

- **Run dev server** (frontend + worker): `bun run dev`
- **Build for production**: `bun run build`
- **Preview production build**: `bun run preview`
- **Lint code**: `bun run lint`
- **Type check**: `bun tsc --noEmit`

### Project Structure

```
├── src/              # React frontend (pages, components, hooks)
├── worker/           # Cloudflare Workers backend (add routes in userRoutes.ts)
├── tailwind.config.js # Tailwind + shadcn/ui config
└── wrangler.jsonc    # Workers deployment config
```

### Adding API Routes

Edit `worker/userRoutes.ts` and add routes to the Hono app:

```typescript
app.post('/api/users', async (c) => {
  // Your logic here
  return c.json({ success: true });
});
```

Routes are automatically loaded and protected by CORS/health checks.

### Customizing UI

- Edit `src/pages/HomePage.tsx` for the landing page.
- Use shadcn/ui components from `@/components/ui/*`.
- Toggle sidebar in layouts via `AppLayout`.
- Theme hook: `useTheme()` for dark/light mode.

## Deployment

Deploy to Cloudflare Workers with a single command:

```bash
bun run deploy
```

This builds the frontend assets and deploys the Worker.

### Manual Deployment Steps

1. Build assets: `bun run build`
2. Deploy with Wrangler: `npx wrangler deploy`

Configure your `wrangler.toml` or `wrangler.jsonc` with account bindings as needed.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/pglodzcloudflare/wpservices-logistics-in-motion)

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |
| `bun run deploy` | Build + deploy to Cloudflare |
| `bun run cf-typegen` | Generate Worker types |

## Environment Variables

No required env vars. Add bindings in `wrangler.jsonc`:

```jsonc
[env]
KV_NAMESPACES = [{ binding = "MY_KV", id = "xxx" }]
```

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Install deps and run `bun run dev`.
4. Submit a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.