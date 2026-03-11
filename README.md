# MapleStory MVP Detector — Website

Landing page for the [MapleStory MVP Detector](https://github.com/NecturaLabs/MapleStory-MVP-Detector) — a free, browser-native tool that watches your MapleStory chat via OCR and fires Discord webhook alerts when an MVP is announced.

---

## Stack

| | |
|---|---|
| Framework | [Astro 5](https://astro.build) (static output) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Fonts | Press Start 2P + Inter (Google Fonts) |
| Testing | [Vitest](https://vitest.dev) |
| Package manager | [Bun](https://bun.sh) |
| Hosting | [Netlify](https://netlify.com) |

## Getting Started

```bash
git clone https://github.com/NecturaLabs/MapleStory-MVP-Detector-Website.git
cd MapleStory-MVP-Detector-Website

bun install
bun run dev        # http://localhost:4321
```

## Commands

| Command | Description |
|---|---|
| `bun run dev` | Start local dev server |
| `bun run build` | Build static output to `dist/` |
| `bun run preview` | Preview production build locally |
| `bun run check` | TypeScript type-check via `astro check` |
| `bun run test` | Run unit tests |

## CI & Deployment

Every push to `main` or `develop` runs the CI pipeline (type check → tests → build → Netlify deploy). Only `main` triggers production deployments. Pull requests get a Netlify preview deployment.

Required secrets:

| Secret | Description |
|---|---|
| `NETLIFY_AUTH_TOKEN` | Netlify personal access token (org-wide) |
| `NETLIFY_SITE_ID` | Netlify site ID for this repo |

Dependabot runs weekly for npm and GitHub Actions updates, targeting `develop`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) — NecturaLabs

---

> This project is not affiliated with, endorsed by, or sponsored by Nexon or NEXON Korea Corporation. MapleStory is a trademark of Nexon.
