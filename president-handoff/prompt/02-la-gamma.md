# Prompt 2/4 · PRESIDENT · La gamma (indice delle 9 linee)

Costruisci in codice la pagina **La gamma**, fedele alla tavola approvata "REV · La gamma ad agenda · desktop · ALTERNATIVA: cover come pagina SENSITIVE".

## Prima di iniziare

1. Leggi `president-handoff/FONDAMENTA.md`. Se token, font, dati delle linee, header, menu a tendina e footer esistono già nel progetto (creati dal prompt della Homepage), **riusali**. Altrimenti creali come descritto lì.
2. Il riferimento esatto è `president-handoff/riferimenti/02-la-gamma.html`. La tavola approvata mostra l'**indice**: hero + griglia 3×3. Nel file ci sono anche 9 viste di linea nascoste (`<sc-if value="{{false}}">`, id `t-<linea>`): non vanno costruite in questa pagina. Servono come **fonte dei contenuti** delle 9 linee per il file dati (titolo, descrizione, benefici, attivi, prodotti con formato e badge).
3. Rotta: `/la-gamma/`. Nell'header la voce attiva è LA GAMMA (`aria-current="page"`).

## Struttura della pagina

### 1. Breadcrumb

Home › La gamma (corrente).

### 2. Cover

Alta 640px, a tutta larghezza, fondo #F3F5F6. Stesso schema della cover della pagina di linea.

**Immagine**
- `gamma-hero-famiglia.jpg` a tutta larghezza: `object-fit: cover`, `object-position: 100% 50%`.
- Alt: "Una famiglia di tre generazioni si lava i denti insieme davanti allo specchio del bagno, con i prodotti PRESIDENT sul lavabo".
- La foto è già sfumata nel fondo chiaro a sinistra, dove stanno i testi: non aggiungere velature.

**Testi** (nel contenitore da 1200px, colonna larga 500px, centrata verticalmente)
- H1 "LA GAMMA": 80px Bold, line-height 1, .02em, #1D1D1B.
- Sottotitolo "Da due referenze a nove linee al servizio della salute dentale": 24px Bold Italic, line-height 1.35, margine superiore 16px.
- Paragrafo: "Dal suo debutto con due referenze, **PRESIDENT** è cresciuto fino a sviluppare una **gamma completa** di prodotti per l'igiene orale, formulati con ingredienti sicuri e delicati." (18px / 1.65, #3C3C3B, margine superiore 20px).
- Paragrafo: "Una risposta specifica a ogni esigenza: dalla **protezione quotidiana** alla **cura più avanzata**, dalla prevenzione della carie alla salute delle gengive, fino all'**igiene dei più piccoli**." (margine superiore 12px).

**Pulsanti** (riga senza a capo, gap 16px, margine superiore 36px)
- "SCOPRI LE LINEE ↓" (primario, `<button>`): fa scorrere fino alla griglia e porta il focus sul suo titolo. Con `prefers-reduced-motion` lo scorrimento è immediato.
- "ACQUISTA SU AMAZON ↗" (secondario, fondo bianco): link a `https://www.amazon.it/s?k=president+dentifricio`, nuova scheda, con `aria-label` che lo dice.

### 3. "Un colore, un'esigenza"

Sezione con il titolo collegato (`aria-labelledby`), padding 50px sopra e 100px sotto, contenitore 1200px.
- H2 "Un colore, un'esigenza" (44px Light MAIUSCOLO).
- Sottotitolo "Un linguaggio visivo che guida la scelta" (22px Bold Italic).
- Griglia di **3 colonne × 3 righe**, gap 24px, margine superiore 48px, con le 9 linee nell'ordine dei dati. Usa una lista.

**Ogni tessera** è un **link** alla pagina della linea `/la-gamma/<id>/` (template del prompt 3).
- Contenitore: alta 350px, raggio 4px, `overflow: hidden`, fondo nel colore della linea, testo nel colore "testo sul colore".
- In alto: la foto still della linea (`<id>-still.jpg`), alta 190px, larga quanto la tessera, `object-fit: cover`, `object-position: 50% Y%` (valori in FONDAMENTA). È decorativa: `alt=""`, perché il nome della linea è nel testo.
- Corpo (padding 18px 22px 20px; colonna con lo spazio tra parte alta e riga in basso):
  - nome della linea: 22px Bold, .03em, line-height 1.2
  - esigenza: 17px Medium, line-height 1.35
  - riga in basso: claim (12px Light MAIUSCOLO, .06em, max 85% della larghezza) e freccia → da 22px
- Hover e focus:
  - la tessera si solleva di 3px con ombra `0 16px 32px rgba(29,29,27,.20)`
  - la foto fa uno **zoom leggero** (`scale(1.07)`, origine `50% 100%`, transizione .45s)
  - con `prefers-reduced-motion` niente zoom né sollevamento

### 4. Footer

Il footer globale.

## Dati delle linee

Completa il file dati delle 9 linee con i contenuti delle viste nascoste del riferimento. Per ogni linea servono:
- titolo della linea
- descrizione con le parole in grassetto
- benefici
- attivi selezionati (nome + funzione)
- foto lifestyle e still
- elenco prodotti: nome, claim, formato, badge RDA/MILS/fluoro, immagine

Per BABY-CHILDREN i prodotti sono divisi per fascia d'età (0-3, 3-6, 6+, 12+), con i gusti. Questi dati alimentano le pagine di linea e le schede prodotto.

## Mobile (390px)

- **Cover**: la foto sta sopra (alta circa 280px, inquadrata sulla famiglia) e i testi sotto, su fondo #F3F5F6. H1 48px. I pulsanti vanno in colonna, larghi quanto il contenitore.
- **Griglia**: 1 colonna, tessere alte circa 300px con foto da 160px. In alternativa 2 colonne compatte, purché nome ed esigenza restino leggibili senza troncamenti.

## Criteri di accettazione

- A 1440px la pagina corrisponde al riferimento: cover, titoli, griglia 3×3, colori e contrasti.
- Le 9 tessere sono link veri, raggiungibili con Tab, con focus visibile. Testo scuro sulle linee chiare (WHITE, DEFENSE, ORTHO-IMPLANT, BABY-CHILDREN, DENTURE).
- "Scopri le linee" porta alla griglia e sposta il focus. Il link Amazon si apre in una nuova scheda e lo dichiara.
- Il file dati delle 9 linee è completo e pronto per le pagine di linea. Zero errori axe/Lighthouse accessibilità.
