# My Portfolio

This repository contains my personal portfolio website, built with [Astro](https://astro.build).

You can find the site here:
[https://philippalber.de](https://philippalber.de)

[![🚀 Deploy website on push](https://github.com/coolusaHD/portfolio/actions/workflows/deployAtFTP.yml/badge.svg?branch=main)](https://github.com/coolusaHD/portfolio/actions/workflows/deployAtFTP.yml)

The idea behind this project is to create a small portfolio website as a modern companion to the traditional CV.
Version 1 was a React app — version 2 is a full rewrite with Astro: zero JavaScript frameworks at runtime, fully static, and fast by default.

## 📚`Stack`

- [Astro](https://astro.build) — static site generation with islands architecture
- TypeScript
- Vanilla CSS with design tokens (dark/light theme, brand colors kept from v1)
- Built-in i18n routing (German `/`, English `/en/`)
- [Fontsource](https://fontsource.org) — self-hosted Inter & Space Grotesk

## 🛠`Development`

```bash
npm install
npm run dev            # dev server at localhost:4321
npm run build          # production build to ./dist
npm run preview        # preview the production build
npm run lint           # astro check (types + a11y hints)
npm run prettier-check # code style
```

## 📃`License`

This project is licensed under the **MIT license**.

You can create your own portfolio with this project under following conditions:

- You must include a link to this repository.
- Do not use my name or my logo in your project.

## 🧑‍🤝‍🧑`Contributing`

If you have any questions or suggestions, please open an issue or pull request.
I really appreciate any feedback. Also if you find a better way to do something, do not hesitate to open a pull request and teach me how to improve this project.

## ✨`Inspirations`

- [craftzdog](https://github.com/craftzdog/craftzdog-homepage)
- [gazi](https://github.com/gazijarin/Gazi)
