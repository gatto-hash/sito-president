# Prompt 1/4 · PRESIDENT · Homepage

Costruisci in codice la **Homepage** del nuovo sito PRESIDENT, fedele alla tavola approvata "A · Homepage · desktop 1440 copy".

## Prima di iniziare

1. Leggi `president-handoff/FONDAMENTA.md` e applicalo. Contiene stack, rotte, token, dati delle 9 linee, header con i due menu a tendina, footer e regole di accessibilità. Questa è la prima pagina: crea tu token, font, file dati e componenti globali, riutilizzabili dalle altre 3 pagine.
2. Il riferimento visivo esatto è `president-handoff/riferimenti/01-homepage.html`: prendi da lì colori, misure e testi. Le immagini sono in `president-handoff/assets/img/` (vedi `ASSETS.md`).
3. Rotta: `/`. Nell'header la voce attiva è HOME (`aria-current="page"`).

## Struttura della pagina

### 1. Slideshow "In evidenza"

Alto 640px, a tutta larghezza.
- Semantica: `<section aria-roledescription="carousel" aria-label="In evidenza">`; ogni slide è `role="group"` con `aria-roledescription="slide"` e `aria-label="1 di 3"`.
- Le slide inattive sono nascoste anche agli screen reader.
- I testi partono da sinistra a 120px dal bordo, cioè allineati al contenitore da 1200px.
- Stile comune dei testi:
  - occhiello 13px Bold .16em
  - H2 58px Light MAIUSCOLO, line-height 1.06
  - paragrafo 21px Bold Italic, line-height 1.4, max 500px
  - pulsante primario alto 52px

**Slide 1** (fondo #B9B9B9)
- Immagine `cover-ribbon-ruotata.jpg`: nastro iridescente in verticale, `object-fit: cover`, `object-position: 50% 0%`.
- Sopra, una velatura `linear-gradient(90deg, #FFFFFF 23%, transparent 100%)` per la leggibilità del testo.
- Testo a top 104px, largo 480px:
  - occhiello "NOVE LINEE, UN COLORE PER OGNI ESIGENZA" (#1D1D1B)
  - H2 "L'igiene orale si colora di benessere"
  - paragrafo "Una gamma completa di derivazione professionale, sviluppata e prodotta in Italia."
  - pulsante "SCOPRI LA GAMMA →" verso `/la-gamma/`
- Nota: nel riferimento il blocco di testo della slide 1 sta fuori dal suo `<sc-if>` (è un residuo del canvas). In codice appartiene solo alla slide 1.

**Slide 2**
- Sfondo `mosaic-bg.jpg` (`object-position: 50% 70%`) con velatura `linear-gradient(90deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.78) 62%)`.
- A sinistra (top 40px) una griglia 3×3 delle 9 still `mosaic-1.jpg` … `mosaic-9.jpg`, 152×176px, gap 10px, raggio 4px, ombra `0 8px 18px rgba(29,29,27,.14)`.
- A destra (left 720px, top 108px, largo 560px):
  - occhiello "LA GAMMA PRESIDENT" in #2B757E
  - H2 "Il sorriso di cui ci si può fidare"
  - paragrafo "Dalla protezione quotidiana alla cura più avanzata, fino all'igiene dei più piccoli."
  - pulsante "SCOPRI LA GAMMA →"

**Slide 3**
- Sfondo `linear-gradient(115deg, #FFFFFF 0%, #EAF6F7 50%, #B0DDE2 100%)`.
- Stemma `stemma-nero.svg` largo 420px, a destra (right 150px, top 110px), con `alt="Il nuovo stemma PRESIDENT: una P coronata da un ramoscello di quercia"`.
- Testo a top 92px:
  - occhiello "IL NUOVO STEMMA" in #2B757E
  - H2 "Come si rinnova un'icona della salute orale"
  - paragrafo "Un nuovo stemma che guarda al futuro."
  - pulsanti "SCOPRI LA GAMMA →" (primario) e "LA NOSTRA STORIA" (secondario, verso `/chi-siamo/`)

**Controlli** (in basso a sinistra: left 120px, bottom 36px)
- Pulsanti "Slide precedente" e "Slide successiva": cerchi da 48px con bordo 1.5px #1D1D1B, fondo `rgba(255,255,255,.85)`, freccia e `aria-label`.
- Accanto, una pillola semitrasparente con 3 indicatori: pulsanti 64×44px con il numero "01/02/03" (12px Bold) sopra una barra 56×3px. Attivo: #1D1D1B; inattivo: barra #E2E6E8 e numero #5E5E5C. `aria-label="Vai alla slide 2 di 3"` e `aria-current="true"` sull'attivo.

**Comportamento**
- Nessun autoplay di default.
- Se viene attivato (opzione di configurazione): 7 secondi per slide, pulsante "Metti in pausa / Avvia la presentazione" sempre visibile, pausa al focus e all'hover, disattivato con `prefers-reduced-motion`.
- Frecce sinistra/destra della tastiera quando il focus è nei controlli.

### 2. Testo introduttivo

`aria-labelledby`, padding 112px. Griglia a 12 colonne.

**Colonna sinistra** (6 colonne)
- Occhiello "PRESIDENT DAL 2000" in #2B757E.
- H2 "Le radici di un sorriso sano" (44px Light MAIUSCOLO).
- Sottotitolo "Cinquant'anni di eccellenza italiana" (22px Bold Italic).
- Due paragrafi 18px / 1.65, con le parole in grassetto come nel riferimento.
- Due link testuali con freccia, 16px Bold, alti almeno 44px: "La nostra storia" verso `/chi-siamo/` e "Qualità e ricerca" verso `/ricerca/qualita-e-innovazione/`.

**Colonna destra** (dalla colonna 8, larga 5)
- 3 righe di dati, ognuna con bordo superiore 1px #B0DDE2 e padding 26px 0:
  - "2000": Nasce PRESIDENT, il brand di igiene orale firmato Betafarma
  - "9": Linee di prodotto, un colore per ogni esigenza
  - "30+": Paesi in cui PRESIDENT è distribuito
- Il numero è 64px Light, largo 150px; il testo è 17px.
- Ultima riga: mini tricolore decorativo 30×8px + "SVILUPPATO E PRODOTTO IN ITALIA" (13px Bold .14em).
- Usa una lista di definizioni o una lista semplice.

### 3. Novità

Fondo #EAF6F7, padding 104px.
- H2 "NOVITÀ".
- Griglia di 3 card (gap 24px, alte 520px), come `<article>`: fondo bianco, raggio 12px, ombra `0 1px 0 #E2E6E8`, visual in alto alto 240px.
- Corpo della card (padding 24px 26px 26px):
  - etichetta 13px Bold .16em #2B757E
  - H3 21px Bold
  - testo 15px / 1.6
  - link con freccia in fondo
- Le 3 card:
  1. Visual `linear-gradient(135deg, #FFFFFF 0%, #EAF6F7 45%, #B0DDE2 100%)` con `stemma-nero.svg` alto 158px. Etichetta "BRAND". H3 "PRESIDENT, un nome. Una missione." (a capo dopo "nome."). Testo "Una "P" coronata da un ramoscello di quercia con le ghiande: dopo 26 anni il marchio rinnova la propria immagine." Link "Scopri la storia" verso `/chi-siamo/`.
  2. Visual: 9 fasce verticali uguali nei colori delle linee, in ordine, dai dati, con `stemma-bianco.svg` alto 120px al centro e `drop-shadow(0 3px 6px rgba(0,0,0,.35))`. Etichetta "CATALOGO 2027". H3 "L'igiene orale si colora di benessere." Testo "Nove linee e un unico linguaggio visivo: un colore per ogni esigenza, dal benessere quotidiano alla cura più specifica." Link "Scopri la gamma" verso `/la-gamma/`.
  3. Foto `ortho-still.jpg` (`object-position: 50% 40%`). Etichetta "ORTHO-IMPLANT · GENNAIO 2027". H3 "Kit Ortho-Implant, disponibile da gennaio 2027." Testo "L'essenziale per l'igiene quotidiana di apparecchi e impianti, a casa e in viaggio: spazzolini, dentifricio, filo, scovolini e cera." Link "Vai alla linea" verso `/la-gamma/ortho/`.

### 4. Footer

Il footer globale.

## Mobile (390px)

- **Slideshow**: alto circa 560px. L'immagine occupa la parte superiore. Il testo va sotto, oppure sopra con una velatura bianca più forte, sempre a contrasto AA. Nella slide 2 il mosaico diventa una griglia 3×3 più piccola sopra il testo. I controlli vanno sotto le slide.
- **Testo introduttivo**: una colonna, con i 3 dati sotto il testo.
- **Novità**: card impilate oppure carosello orizzontale con scroll-snap. Ogni card resta interamente leggibile.

## Criteri di accettazione

- A 1440px la pagina corrisponde al riferimento per testi, colori, gerarchia e spaziature, senza altezze fisse.
- Menu LA GAMMA e RICERCA funzionanti da mouse e tastiera (Tab, Invio, Esc), con focus visibile.
- Carosello usabile da tastiera e da screen reader: le slide nascoste non sono lette.
- Nessun pulsante con sola icona senza etichetta accessibile. Zero errori axe/Lighthouse accessibilità.
- Componenti globali, token e dati creati in modo riutilizzabile per le pagine successive.
