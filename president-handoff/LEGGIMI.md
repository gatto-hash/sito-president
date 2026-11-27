# PRESIDENT · Pacchetto di sviluppo delle 4 pagine approvate

Questo pacchetto serve a costruire in codice, con Claude Code, le 4 tavole approvate del canvas "President — Analisi alberatura":

| # | Tavola approvata | Prompt | Riferimento |
|---|---|---|---|
| 1 | A · Homepage · desktop 1440 copy | `prompt/01-homepage.md` | `riferimenti/01-homepage.html` |
| 2 | REV · La gamma ad agenda · desktop · ALTERNATIVA: cover come pagina SENSITIVE | `prompt/02-la-gamma.md` | `riferimenti/02-la-gamma.html` |
| 3 | A · Pagina gamma · SENSITIVE · desktop | `prompt/03-pagina-linea-sensitive.md` | `riferimenti/03-linea-sensitive.html` |
| 4 | A · Scheda prodotto · Dentifricio Sensitive · desktop copy | `prompt/04-scheda-prodotto.md` | `riferimenti/04-scheda-dentifricio-sensitive.html` |

## Come si usa

1. Copia la cartella `president-handoff/` nella root del repository del sito.
2. Apri `FONDAMENTA.md` e, se il progetto ha già uno stack, scrivilo al posto di "[indica qui lo stack del progetto]". Se il repository è vuoto, lascia il segnaposto: il default è Astro con CSS puro.
3. In Claude Code incolla i prompt **uno alla volta, nell'ordine 1 → 4**:
   - Il primo crea le fondamenta comuni: token, font, dati delle 9 linee, header con i menu a tendina, footer.
   - Gli altri le riusano.
   - Rivedi ogni pagina prima di passare alla successiva.
4. Ogni prompt rimanda a `FONDAMENTA.md` e al suo file di riferimento. Non serve incollarli.

## Cosa contiene

- `FONDAMENTA.md`: stack, rotte, dati delle 9 linee, design token, componenti globali e regole di accessibilità comuni alle 4 pagine.
- `prompt/`: i 4 prompt, uno per tavola.
- `riferimenti/`: la sorgente esatta delle 4 tavole così come sono sul canvas, con i percorsi delle immagini già puntati ad `assets/`. Si leggono come specifica, non si aprono nel browser. Come leggerli è spiegato in `FONDAMENTA.md`.
- `assets/`: immagini e font usati dalle tavole. `ASSETS.md` spiega cosa è cosa e quali immagini vanno sostituite con gli originali in alta risoluzione.

## Punti aperti da confermare con il cliente

- Link dello store PRESIDENT su Amazon: nelle tavole ci sono ricerche Amazon provvisorie.
- Destinazione del pulsante "TROVA LO STORE" nella pagina di linea.
- EAN dei prodotti e P.IVA nel footer (segnaposto tra parentesi quadre).
- Originali in alta risoluzione delle immagini (vedi `ASSETS.md`).
- Licenza web del font Cera Pro.
- Homepage: "Cinquant'anni di eccellenza italiana" accanto a "PRESIDENT dal 2000". Va verificato che si riferisca a Betafarma e non al marchio, che ha 26 anni.
