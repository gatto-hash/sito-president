# PRESIDENT · Fondamenta condivise del sito

Questo file vale per tutte e 4 le pagine (Homepage, La gamma, Pagina linea, Scheda prodotto). Il primo prompt che lo usa crea token, font, dati e componenti globali. I prompt successivi li riusano senza duplicarli.

## Stack e convenzioni

- Stack: **[indica qui lo stack del progetto]**. Se il repository ha già uno stack e delle convenzioni, seguile.
- Se il repository è vuoto, usa **Astro** con **CSS puro**: custom properties, un file di token e CSS per componente. Per le interazioni usa **JavaScript vanilla**. Niente framework UI, librerie di componenti o Tailwind.
- HTML semantico, `lang="it"`, una sola `<h1>` per pagina.
- Responsive mobile-first: breakpoint di riferimento 390px (mobile) e 1440px (desktop). Contenitore massimo 1200px.
- Le tavole approvate sono desktop 1440. Per il mobile non c'è una tavola approvata: segui le regole "Mobile" di ogni prompt.

## Il materiale in `president-handoff/`

- `riferimenti/*.html` contiene la sorgente esatta delle tavole approvate sul canvas di design. Gli stili inline sono i **valori di riferimento**: colori, misure, pesi e spaziature. Non è HTML da copiare così com'è:
  - `{{nome}}` è un valore dinamico.
  - `<sc-if value="…">` è un blocco condizionale.
  - `<sc-for list="…" as="x">` è una lista.
  - Lo `<script type="text/x-dc">` in fondo al file contiene stato e handler.
  - Le **altezze fisse delle sezioni** (es. `height: 772px`) servono solo al canvas. In codice usa padding verticali e altezza automatica.
  - I `href` verso file `.dc.html` sono collegamenti tra tavole: in codice usa le rotte qui sotto.
- `assets/img/` e `assets/fonts/` contengono immagini e font con i nomi usati nei riferimenti. `ASSETS.md` spiega cosa è cosa.
- Le immagini vengono dal PDF del catalogo e sono **in bassa risoluzione**. Usale come segnaposto definitivi di layout. Quando arrivano gli originali si sostituiscono con lo stesso nome file. Metti sempre `width`/`height` e `loading="lazy"` (tranne le immagini sopra la piega).

## Rotte

| Pagina | Rotta |
|---|---|
| Homepage | `/` |
| La gamma (indice delle 9 linee) | `/la-gamma/` |
| Pagina di linea (template) | `/la-gamma/<linea>/` (es. `/la-gamma/sensitive/`) |
| Scheda prodotto (template) | `/la-gamma/<linea>/<prodotto>/` (es. `/la-gamma/sensitive/dentifricio-sensitive/`) |
| Chi siamo | `/chi-siamo/` |
| Ricerca | `/ricerca/qualita-e-innovazione/` · `/ricerca/abrasivita-dichiarata/` · `/ricerca/gli-spazzolini/` |
| Contatti | `/contatti/` |

Costruisci solo le pagine richieste dal prompt. I link verso le altre pagine puntano già alle rotte previste.

## Dati

Crea un file dati unico per le 9 linee (es. `src/data/linee.(ts|json)`). Lo usano il menu LA GAMMA, le tessere, il navigatore tra linee, la striscia colorata del footer e le pagine di linea. Crea un file per i prodotti (es. `src/data/prodotti.(ts|json)`). L'ordine delle linee è quello dell'alberatura ed è fisso.

| id | nome | esigenza | colore | testo sul colore | colore testo su bianco (AA) | tinta chiara | tinta media |
|---|---|---|---|---|---|---|---|
| classic | CLASSIC | Protezione quotidiana | #00603E | #FFFFFF | #00603E | #E6EFEC | #B8D2C9 |
| white | WHITE | Denti macchiati o ingialliti | #B1B1AE | #1D1D1B | #757573 | #F7F7F7 | #E9E9E8 |
| active | ACTIVE | Gengive che sanguinano | #AA0C38 | #FFFFFF | #AA0C38 | #F6E7EB | #E7BBC7 |
| sensitive | SENSITIVE | Denti sensibili | #004B8D | #FFFFFF | #004B8D | #E6EDF4 | #B8CDDF |
| profi | PROFI | Dopo interventi e gengive infiammate | #642271 | #FFFFFF | #642271 | #F0E9F1 | #D4C1D7 |
| defense | DEFENSE | Alito cattivo e placca | #EB690B | #1D1D1B | #BE5509 | #FDF0E7 | #F9D5BB |
| ortho | ORTHO-IMPLANT | Apparecchi e impianti | #00A6A5 | #1D1D1B | #008181 | #E6F6F6 | #B8E6E6 |
| baby | BABY-CHILDREN | Bambini da 0 a 12+ anni | #EAA300 | #1D1D1B | #9A6C00 | #FDF6E6 | #F9E5B8 |
| denture | DENTURE | Protesi dentarie | #77BE91 | #1D1D1B | #507F61 | #F1F8F4 | #D9EDE0 |

Per ogni linea servono anche: il claim breve delle tessere, la foto still (`<id>-still.jpg`) con la sua posizione verticale e la foto lifestyle (`<id>-life.jpg`). I testi completi delle 9 linee (titolo, descrizione, benefici, attivi, prodotti con formato e badge) sono in `riferimenti/02-la-gamma.html`, nei blocchi `<sc-if value="{{false}}">` con id `t-<linea>`: usali per popolare i dati.

Claim e posizione verticale della foto still (`object-position: 50% Y%`):
CLASSIC "Protezione quotidiana per un sorriso sano" (50%) · WHITE "Sbiancamento delicato, lucentezza naturale" (38%) · ACTIVE "Azione astringente e lenitiva, per gengive più sane" (42%) · SENSITIVE "Per contrastare la sensibilità dentinale" (65%) · PROFI "Azione antibatterica intensiva con clorexidina" (42%) · DEFENSE "Azione antiplacca e anti-alitosi" (38%) · ORTHO-IMPLANT "Per portatori di apparecchi ortodontici e impianti dentali" (50%) · BABY-CHILDREN "Azione delicata e sicura per i denti dei bambini da 0 a 12+ anni" (42%) · DENTURE "Stabilità e comfort per chi porta protesi dentarie" (61%).

## Design token

**Font**: Cera Pro, file woff2 in `assets/fonts/`. Pesi: Light 300, Regular 400, Medium 500, Bold 700, più Light, Regular e Bold italic. Usa `font-display: swap`. Fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`. Cera Pro è un font commerciale: verifica che la licenza copra l'uso web.

**Colori di base**
- Testo corrente #3C3C3B · titoli e testo forte #1D1D1B · testo secondario #5E5E5C
- Bordi e divisori #E2E6E8 · fondo grigio delle sezioni #F2F1F0 · fondo hero La gamma #F3F5F6
- Link e focus #2B757E (hover #1D1D1B) · acqua #B0DDE2 · acqua chiaro #EAF6F7 · voce di menu corrente #E8F4F5
- Footer: fondo #2B2B2A, testo #FFFFFF, testo secondario #BFC3C5, divisore rgba(255,255,255,.14)

**Badge e scale tecniche**
- Badge RDA: fondo lime #D9E021, testo e icona del dente #1D1D1B. È inclinato: `skewX(-12deg)` sul contenitore e `skewX(12deg)` sul contenuto, raggio 3px. Scritta "RDA" piccola + valore grande.
- Badge MILS: fondo #4A6FA0, testo bianco, stessa inclinazione, icona a 9 puntini di diametro crescente.
- Fluoro: icona esagonale con "F" in #2B757E + "950 ppm F⁻" in Bold.
- Scala RDA a 4 segmenti con larghezze proporzionali su 0-250:
  - 0-70: 28%, #A4D4C2
  - 71-100: 12%, #F9C772
  - 101-150: 20%, #F09A79
  - 151-250: 40%, #E8605D
  - Il marcatore del prodotto è un fumetto scuro con freccia. Sotto la barra ci sono le tacche 0 · 70 · 100 · 150 · 250 e una legenda a 2 colonne.

**Tipografia** (desktop)
- H1 hero: 80px / 1 · Bold · letter-spacing .02em
- H2 di sezione: 44px / 1.1 · Light · MAIUSCOLO · .02em
- Sottotitolo: 22px / 1.35 · Bold Italic · #1D1D1B
- Occhiello: 13px · Bold · MAIUSCOLO · .16em
- Corpo: 17-18px / 1.65, parole chiave in Bold
- Voci di menu: 14px · Medium · MAIUSCOLO · .08em

**Layout**
- Contenitore 1200px centrato, griglia a 12 colonne, gutter 24px, spaziature su scala di 8.
- Padding verticale delle sezioni: 112px su desktop, 64px su mobile.

**Pulsanti** (sempre con testo, mai solo icona)
- Forma: pillola (raggio 999px), altezza 56px, padding 0 28px, 15px Bold MAIUSCOLO, .06em.
- Primario: fondo #1D1D1B, testo bianco, hover #000.
- Secondario: fondo bianco con bordo 1.5px #1D1D1B, hover pieno scuro con testo bianco.
- Su fondo colorato: bianco pieno con testo scuro, oppure contorno bianco.
- Link esterni (Amazon): `target="_blank" rel="noopener"`, icona "freccia che esce", `aria-label` del tipo "Acquista su Amazon: si apre su Amazon in una nuova scheda".

**Stati**
- Focus sempre visibile: outline 3px #2B757E, offset 3px.
- Card: hover con sollevamento di 3px e ombra `0 16px 36px rgba(29,29,27,.12)`, transizione .2s.
- Con `prefers-reduced-motion: reduce` niente transizioni né zoom.

## Componenti globali

**Header** (88px, fondo bianco, bordo inferiore 1px #E2E6E8, `z-index` sopra il contenuto)
- A sinistra il logo `logo-nero.svg`, alto 40px, con link alla Home e `aria-label="PRESIDENT, torna alla Home"`.
- Al centro `<nav aria-label="Menu principale">`: HOME · CHI SIAMO · LA GAMMA ▾ · RICERCA ▾ · CONTATTI. La voce della sezione corrente è in Bold #1D1D1B con una linea inferiore di 3px #2B757E (`box-shadow: inset 0 -3px 0`). Ha `aria-current="page"` se è la pagina stessa, `aria-current="true"` se è una sua sottopagina.
- A destra il selettore lingua IT/EN, a pillola con bordo #E2E6E8 (`role="group"`, `aria-label="Lingua del sito"`). Ogni voce è un `<button>` con `aria-pressed` e `lang`; quella attiva ha fondo #1D1D1B e testo bianco. Le versioni in lingua non sono previste: per ora cambia solo lo stato.

**Menu a tendina LA GAMMA ▾** (pattern disclosure)
- Pulsante: freccia che ruota di 180° quando è aperto; `aria-expanded` e `aria-controls="menu-gamma"`.
- Pannello: largo 600px, sotto la voce (`top: 80px; left: -8px`). Fondo bianco, bordo 1px #E2E6E8, bordo superiore 3px #B0DDE2, raggio 0 0 12px 12px, ombra `0 18px 40px rgba(29,29,27,.14)`, padding 16px 12px 12px.
- Contenuto del pannello:
  - Occhiello "LE 9 LINEE PRESIDENT".
  - Lista a 2 colonne delle 9 linee. Ogni voce è un link alla pagina della linea (alto almeno 60px) con: quadratino 14×38px nel colore della linea, nome in 15px Bold, esigenza in 13px #5E5E5C.
  - In fondo, dopo un divisore, il link "Vedi tutta la gamma →" verso `/la-gamma/`, in #2B757E Bold.
- La linea in cui ci si trova (pagina di linea o scheda prodotto) ha fondo #E8F4F5 e `aria-current`. L'hover delle voci è #F2F1F0.

**Menu a tendina RICERCA ▾**
- Stesso stile, largo 340px.
- 3 voci, ognuna con titolo 16px Bold e descrizione 14px #5E5E5C:
  - Qualità e innovazione · Formulazioni, analisi e certificazioni
  - Abrasività dichiarata · Cos'è l'RDA e perché conta
  - Gli spazzolini · MILS: la misura della delicatezza

**Comportamento dei due menu**
- Uno solo aperto alla volta.
- Esc chiude il menu e riporta il focus al pulsante; anche il click fuori lo chiude.
- Usa un pattern disclosure (button + pannello), senza `role="menu"`.

**Breadcrumb** (dove previsto)
- `<nav aria-label="Percorso">` con `<ol>`, alta 56px, con bordo inferiore #E2E6E8.
- Link 14px sottolineati, separatore "›" in `aria-hidden`.
- La voce corrente in Bold #1D1D1B con `aria-current="page"`.
- La voce di una linea ha davanti un quadratino 10×10px nel suo colore.

**Footer**
- In alto una striscia decorativa di 6px con i 9 colori delle linee in parti uguali, in ordine (`aria-hidden`).
- Sotto, fondo #2B2B2A con padding 64px 0 48px, su 12 colonne:
  - Colonna 1 (4 col.): logo `logo-bianco.svg` alto 40px, "Il sorriso di cui ci si può fidare" in 18px Bold Italic, "Prodotti sviluppati e fabbricati in Italia" in 14px #BFC3C5.
  - Colonna 2 (2 col.): titoletto "MENU", poi Home, Chi siamo, La gamma, Contatti.
  - Colonna 3 (3 col.): titoletto "RICERCA", poi le 3 pagine.
  - Colonna 4 (3 col.): titoletto "AZIENDA", poi Betafarma S.p.A. · Via E. De Nicola, 10 · 20090 Cesano Boscone (MI), Italia · www.presi-dent.it.
  - I titoletti sono in 12px Bold MAIUSCOLO .14em #BFC3C5, i link in 15px bianchi.
- Barra inferiore alta 64px, con bordo superiore: a sinistra "© 2027 Betafarma S.p.A. · P.IVA [P.IVA]", a destra Privacy policy · Cookie policy · Note legali (13px #BFC3C5).

**Mobile (390px)** per i componenti globali
- Header alto 64px con il logo e il pulsante testuale "MENU" (diventa "CHIUDI"), che apre un menu a schermo intero.
- Nel menu, LA GAMMA e RICERCA diventano sezioni espandibili, con le 9 linee in lista.
- Il footer va in colonna singola.

## Accessibilità (WCAG 2.2 AA)

- Testo bianco solo su CLASSIC, ACTIVE, SENSITIVE e PROFI. Su WHITE, DEFENSE, ORTHO-IMPLANT, BABY-CHILDREN e DENTURE il testo è #1D1D1B.
- Testo nel colore della linea su fondo bianco: usa la colonna "colore testo su bianco".
- Il nome della linea è sempre scritto: il colore non è mai l'unico segnale.
- Aree cliccabili di almeno 44×44px. Ogni pulsante ha un testo visibile.
- Icone decorative con `aria-hidden="true"`. Immagini informative con `alt` descrittivo, quelle decorative con `alt=""`.
- Verifica finale con axe o Lighthouse: zero errori di accessibilità e nessun errore in console.
