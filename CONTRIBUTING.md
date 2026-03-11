# Contributing

Thanks for your interest in contributing to the MapleStory MVP Detector landing page.

## Getting Started

```bash
git clone https://github.com/NecturaLabs/MapleStory-MVP-Detector-Website.git
cd MapleStory-MVP-Detector-Website
bun install
bun run dev
```

## Guidelines

- **Keep it simple.** This is a static landing page — avoid adding unnecessary dependencies or complexity.
- **No secrets in code.** All credentials go through GitHub Secrets, never in source files.
- **Test your changes.** Run `bun run check` and `bun run test` before opening a PR.
- **Match the style.** Follow the existing MapleStory pixel-art aesthetic and Tailwind v4 CSS variable conventions.

## Pull Requests

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Ensure `bun run check`, `bun run test`, and `bun run build` all pass
4. Open a PR — CI will run automatically and post a Netlify preview link

## Replacing Placeholder Assets

The following files in `public/` are 1×1 pixel placeholders that need real assets before launch:

| File | Description |
|---|---|
| `public/favicon.ico` | 32×32 favicon (ideally a maple leaf pixel icon) |
| `public/og-image.png` | 1200×630 Open Graph image |
| `public/screenshot.png` | 1200×675 screenshot of the app |

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
