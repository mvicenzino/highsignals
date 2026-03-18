# HighSignals.com — Website Redesign

Marketing website for **HighSignals**, a Launch Intelligence company that helps B2B SaaS & AI companies build pressure-tested GTM launch plans.

**Live site:** [highsignals.vercel.app](https://highsignals.vercel.app)

## Stack

- **React 18** + **Vite**
- **Tailwind CSS v3**
- **React Router v6** (BrowserRouter)
- Deployed on **Vercel**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Social Proof, Problems, Deliverables, Results, Diagnostic CTA, Contact |
| `/solutions` | Solutions — Engagement process, 3 pricing tiers, Deliverables, Diagnostic CTA |
| `/about` | About — Team, Advisory Board, Values |

## Design

- Dark navy theme (`#0B1929` base)
- Liquid glass UI — translucent buttons with `backdrop-filter: blur()`, layered box shadows
- Animated fluid blob hero background
- Custom SVG logo mark (circular radar/targeting design)
- Google Fonts: Playfair Display (display) + DM Sans (body)

## Development

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run build     # Vite production build → dist/
vercel --prod     # Deploy to Vercel
```

SPA routing handled via `vercel.json` rewrites.

## Credits

Designed and built by [Cloverhill AI](https://cloverhill.vercel.app)
