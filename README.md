# Añil Dex

A web Pokédex for the *Pokémon Añil* fangame (built on Pokémon Essentials), built with Vue 3, TypeScript, and Vite.

## Features

- Full Pokédex browsing with species data, abilities, moves, and items sourced from the game's PBS files.
- Competitive set templates and heuristic movesets per species.
- Save-file roster and team viewer ("Mi partida").
- Seen/owned species tracking persisted in local storage.

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [TypeScript](https://www.typescriptlang.org/) (strict)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/)
- [Chart.js](https://www.chartjs.org/) for stat visualizations
- [Reka UI](https://reka-ui.com/) for headless UI primitives

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build |
| `pnpm test` | Run the test suite with Vitest |

## Data pipeline

`scripts/build-anil-data.mjs` parses the game's local PBS files (moves, abilities, items, Pokédex) and generates the JSON datasets consumed by the app under `src/data/`. It requires a local copy of the *Pokémon Añil* game files and is not part of the app's runtime build.

## Project structure

```
src/
  components/   Vue components (HUD, dex rail, sheets, save view)
  data/         Generated game data and competitive set templates
  lib/          Domain logic (engine, movepool, templates, save parsing)
```

## Assets

Type icons and Poké Ball artwork under `public/assets` are sourced from WikiDex; see `public/assets/README.md` for provenance and licensing notes.

## License

MIT — see [LICENSE](./LICENSE).
