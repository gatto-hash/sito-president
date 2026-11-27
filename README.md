# sito-president

Sito PRESIDENT, costruito con **Astro**, CSS puro (custom properties) e JavaScript vanilla.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output statico in dist/
```

## Struttura

- `president-handoff/`: pacchetto di sviluppo (prompt, tavole di riferimento, asset originali, `FONDAMENTA.md`).
- `public/assets/`: immagini e font serviti dal sito (copiati da `president-handoff/assets/`; gli originali in alta risoluzione si sostituiscono con lo stesso nome file).
- `src/styles/tokens.css`: design token. `src/styles/global.css`: font, base, pulsanti, utility.
- `src/data/linee.ts`: le 9 linee (ordine fisso). `src/data/prodotti.ts`: prodotti. `src/data/rotte.ts`: rotte e voci del menu RICERCA.
- `src/components/`: Header (menu a tendina + menu mobile), Footer, Button, Icon; `home/` per le sezioni della Homepage.
- `src/scripts/`: interazioni (header, carosello).
