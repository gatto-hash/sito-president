# Prompt 3/4 · PRESIDENT · Pagina di linea (template) · esempio SENSITIVE

Costruisci in codice la **pagina di una singola linea** come template valido per tutte e 9 le linee. Il primo esempio, completo, è **SENSITIVE**, fedele alla tavola approvata "A · Pagina gamma · SENSITIVE · desktop".

## Prima di iniziare

1. Leggi `president-handoff/FONDAMENTA.md`. Se token, font, dati, header, menu a tendina e footer esistono già nel progetto, **riusali**. Altrimenti creali.
2. Il riferimento esatto è `president-handoff/riferimenti/03-linea-sensitive.html`.
3. Rotta dinamica: `/la-gamma/<linea>/`. La pagina è guidata dai dati della linea: nessun testo SENSITIVE scritto nel componente.
4. Nell'header la voce attiva è LA GAMMA (`aria-current="true"`). Nel menu a tendina la linea corrente è evidenziata.

## Struttura della pagina (SENSITIVE)

Sezioni nell'ordine della tavola. Padding verticale 112px, contenitore 1200px, griglia a 12 colonne.

### 1. Breadcrumb

Home › La gamma › ■ SENSITIVE (corrente, con quadratino 10×10px nel colore della linea).

### 2. Cover di linea

Alta 640px, fondo nella tinta chiara (#E6EDF4).

**Immagine**
- Foto prodotto a tutta larghezza `sensitive-hero.jpg`: `object-fit: cover`, `object-position: 100% 50%`.
- Alt: "I prodotti della linea SENSITIVE su fondo azzurro: collutorio, dentifrici, spazzolino e gel gengivale".
- Non c'è banda colorata con il logo: è stata tolta in revisione.

**Testi** (colonna di 588px, centrata verticalmente)
- Occhiello "LINEA PRESIDENT" nel colore della linea.
- H1 "SENSITIVE": 80px Bold, colore della linea.
- Promessa "Azione protettiva per denti sensibili e gengive in recessione": 26px Light MAIUSCOLO, line-height 1.25, #1D1D1B.
- Benefici: `<ul aria-label="Benefici della linea">`, 3 colonne, gap 20px, margine superiore 32px. Ogni voce ha un cerchio bianco da 56px con un'icona lineare da 28px nel colore della linea (`aria-hidden`) e il testo in 16px Bold:
  - Riduce la sensibilità agli stimoli esterni
  - Rinforza lo smalto e protegge le gengive
  - Pulizia efficace e delicata

**Pulsanti** (margine superiore 40px)
- "SCOPRI I PRODOTTI ↓" (primario): porta a `#prodotti`.
- "ACQUISTA SU AMAZON ↗" (secondario): link a `https://www.amazon.it/s?k=president+sensitive`, nuova scheda.

### 3. Il problema

**Colonna sinistra** (6 colonne)
- Occhiello "IL PROBLEMA".
- H2 "Cos'è la sensibilità dentinale?"
- Due paragrafi 18px, con grassetti come nel riferimento.
- Blocco "GLI STIMOLI CHE LA SCATENANO" (13px Bold .14em): 4 icone in cerchi da 52px nella tinta chiara, icona da 26px nel colore della linea, etichette 15px Bold: Caldo · Freddo · Dolce · Acido.

**Colonna destra** (dalla colonna 7, larga 6)
- `<figure>` su fondo tinta chiara, raggio `0 0 48px 0`, padding 42px.
- Contiene l'**illustrazione SVG della sezione di un molare** con gengiva in recessione e dentina esposta: copiala dal riferimento, con `role="img"` e il suo `<title>`.
- Figcaption 14px: "Quando la gengiva si ritira, la dentina della radice resta scoperta: gli stimoli arrivano al nervo attraverso i tubuli dentinali."

### 4. La soluzione

Fondo tinta chiara. Due colonne: testo (~440px) e pannello (~660px), distanti 100px.

**Testo**
- Occhiello "LA SOLUZIONE".
- H2 "Come agisce la linea SENSITIVE".
- Sottotitolo "Soluzioni efficaci, delicate e ben tollerate dai tessuti più vulnerabili".
- Paragrafo 17px.

**Pannello**
- Fondo pieno nel colore della linea, testo "sul colore", padding 48px, angoli vivi.
- H3 "ATTIVI SELEZIONATI" (13px Bold .14em).
- Lista a 2 colonne (gap 28px 32px): spunta da 20px, nome in 18px Bold, funzione in 16px:
  - Nitrato di Potassio: interrompe la trasmissione del segnale doloroso e riduce la sensibilità
  - Idrossiapatite: favorisce la remineralizzazione dello smalto e chiude i tubuli dentinali
  - Bisabololo e Tiglio: proprietà lenitive, alleviano le irritazioni dei tessuti orali
  - Fluoruro di Sodio: rinforza lo smalto e aiuta a prevenire la carie

**Frase di chiusura, in evidenza**
- Sotto le due colonne: margine superiore 72px, filo superiore 1px nella tinta media, padding superiore 56px, tutto centrato.
- Virgolette decorative da 96px al 35% di opacità (`aria-hidden`).
- Frase "Con PRESIDENT SENSITIVE, gengive protette, per un sorriso senza fastidi, giorno dopo giorno.": 40px Bold Italic, line-height 1.25, colore della linea, max 1040px.

### 5. La scienza dietro la linea

Fondo #F2F1F0.
- H2 + sottotitolo "Valori misurati e dichiarati, per scegliere con consapevolezza".
- 2 card bianche affiancate (raggio 12px, padding 40px, gap 24px).

**Card RDA**
- Intestazione: badge "RDA 20" + "ABRASIVITÀ DICHIARATA".
- H3 "Dentifricio Sensitive: RDA 20".
- Testo con la fonte: laboratorio indipendente, Oral Health Research Institute della Indiana University, norma ISO 11609.
- Scala RDA (vedi FONDAMENTA), con il marcatore "RDA 20 · Dentifricio Sensitive" all'8% e la legenda a 2 colonne:
  - Bassa (0-70): sicura per dentina, cemento e smalto
  - Media (71-100): sicura per lo smalto, attenzione sulla dentina
  - Alta (101-150): rischiosa per dentina e cemento
  - Limite (151-250): potenzialmente lesiva
- Link "Scopri l'abrasività dichiarata →" verso `/ricerca/abrasivita-dichiarata/`.

**Card MILS**
- Intestazione: badge "4 MILS" + "MORBIDEZZA DELLE SETOLE".
- H3 "Spazzolino Sensitive: 4 MILS, extra soft".
- Testo: "1 MIL = 0,0254 mm; meno MILS significa setole più sottili e flessibili".
- Scala MILS di 4 righe. Ogni riga ha un disegno delle setole con spessore crescente, l'etichetta e il diametro:
  - 4 MILS · ULTRA SOFT · Ø 0,10 mm
  - 6 MILS · SOFT · Ø 0,15 mm
  - 7-9 MILS · SOFT-MEDIUM · Ø 0,17-0,22 mm
  - 9-10 MILS · MEDIUM-HARD · Ø 0,22-0,25 mm
- La riga del prodotto ha bordo 2px #4A6FA0, ombra e l'etichetta "SPAZZOLINO SENSITIVE". Le altre hanno fondo #F2F1F0.
- Link "Come scegliere lo spazzolino →" verso `/ricerca/gli-spazzolini/`.

**Nota fonte** (13px #5E5E5C): il testo completo è nel riferimento.

Le due scale hanno `role="group"` (o `figure`) e un `aria-label` che dice il valore. L'informazione non è affidata solo al colore.

### 6. Lo spazzolino della linea

**Colonna sinistra** (6 colonne): `<figure>` alta ~730px.
- Raggio `0 0 48px 0`, fondo `radial-gradient(110% 90% at 45% 60%, #FFFFFF 0%, tinta chiara 50%, tinta media 100%)`.
- Immagine `spazzolino-sensitive-testina.png` (primo piano della testina, `object-fit: cover`), con l'alt del riferimento.
- Badge "4 MILS" in alto a sinistra (32px, 32px).

**Colonna destra** (dalla colonna 7), centrata verticalmente
- Occhiello "LO SPAZZOLINO DELLA LINEA".
- H2 "SPAZZOLINO SENSITIVE" (40px Bold nel colore della linea) seguito da "EXTRA SOFT" in Light #1D1D1B.
- Riga con badge "4 MILS" e testo "**4 MILS**: setole extra soft, Ø 0,10 mm".
- Due paragrafi 17px.
- H3 "PLUS DI PRODOTTO" e 4 voci con spunta nel colore della linea:
  - Testina compatta di forma ovale
  - Setole esterne microfini e affusolate
  - Setole interne morbide e arrotondate
  - Manico ergonomico
- Nota 15px #5E5E5C "Ogni spazzolino è sterilizzato in fase di confezionamento, per la massima igiene."

**Pulsanti**
- "SCHEDA PRODOTTO →" verso `/la-gamma/sensitive/spazzolino-sensitive/`.
- "ACQUISTA SU AMAZON ↗".

### 7. I prodotti della linea (`id="prodotti"`)

**Intestazione**
- H2 "I PRODOTTI **SENSITIVE**": "I PRODOTTI" in Light, il nome della linea in Bold nel suo colore.
- A destra il conteggio "5 prodotti".

**Nota esplicativa** (`role="note"`)
- Box bianco con bordo, raggio 10px, 2 colonne.
- Mini-badge + "**RDA** = abrasività dichiarata: più è bassa, più il dentifricio è delicato." e "**MILS** = diametro delle setole: meno MILS significa setole più morbide."

**Griglia di 5 card prodotto** (gap 24px). Ogni card è un **link** alla scheda `/la-gamma/sensitive/<prodotto>/`.
- Contenitore: bordo #E2E6E8, raggio 12px.
- Area immagine alta 200px con `radial-gradient(120% 90% at 50% 70%, #FFFFFF 0%, tinta chiara 55%, tinta media 100%)`. Packshot con altezza massima 164px e `drop-shadow(0 10px 14px rgba(29,29,27,.16))`. Badge in alto a destra.
- Corpo (padding 16px 18px 18px):
  - nome: 16px Bold MAIUSCOLO, colore testo su bianco
  - claim: 13px Light MAIUSCOLO
  - formato: 13px italic #5E5E5C
  - badge fluoro, se c'è
  - "Scheda prodotto →" in fondo

| Prodotto | Claim | Formato | Badge | Immagine |
|---|---|---|---|---|
| Dentifricio Sensitive | Denti sensibili | Tubo da 75 ml | RDA 20 · 950 ppm F⁻ | `sensitive-dentifricio.png` |
| Gel gengivale Sensitive Plus | Trattamento mirato | Tubo da 30 ml | – | `sensitive-gel.png` |
| Collutorio Sensitive | Denti sensibili | Flacone da 200 ml | – | `sensitive-collutorio.png` |
| Spazzolino Sensitive | Extra soft | – | 4 MILS | `sensitive-spazzolino.png` |
| Filo interdentale Sensitive | Extra piatto | – | – | `sensitive-filo.png` |

### 8. Acquista

Fascia piena nel colore della linea, testo "sul colore", alta circa 320px.

**A sinistra** (max 560px)
- Occhiello "ACQUISTA".
- H2 "Acquista i prodotti SENSITIVE" (36px Light MAIUSCOLO).
- Testo "Tutta la linea è disponibile online, sullo store PRESIDENT su Amazon."

**A destra**
- Pulsante bianco pieno "ACQUISTA SU AMAZON ↗".
- Pulsante a contorno bianco "TROVA LO STORE", con icona segnaposto e link da definire.
- Sotto, la nota 13px "Amazon si apre in una nuova scheda".

Sulle linee chiare la fascia usa testo e contorni scuri.

### 9. Navigatore tra le linee

`<nav aria-label="Altre linee PRESIDENT">`, padding superiore 96px.
- H2 "Scopri le altre linee" e sottotitolo "Un colore per ogni esigenza: passa alla linea più vicina alla tua".

**Precedente e successiva**
- Due grandi blocchi-link affiancati, con ordine circolare (prima di CLASSIC viene DENTURE). Per SENSITIVE: ← ACTIVE · Gengive che sanguinano / PROFI · Dopo interventi e gengive infiammate →.
- Fondo nel colore della linea di destinazione, altezza minima 160px, padding 28px 36px, raggio 4px.
- Etichetta "LINEA PRECEDENTE" / "LINEA SUCCESSIVA" (12px Bold .14em), nome 34px Bold, esigenza 18px Medium, freccia da 28px. Il blocco successivo è allineato a destra.
- `aria-label` completo, es. "Linea successiva: PROFI, Dopo interventi e gengive infiammate".

**Tutte le 9 linee**
- H3 "TUTTE LE 9 LINEE", poi una griglia di 9 tessere compatte (gap 12px, alte 132px, padding 14px 12px, raggio 4px). Testi **allineati in alto**: nome 13px Bold, esigenza 12.5px Medium.
- Ogni tessera è un link alla pagina della linea.
- La linea corrente **non è un link**: è uno `<span aria-current="page">` con doppio anello (`0 0 0 3px #FFF, 0 0 0 6px #1D1D1B`) e la pillola "SEI QUI" in basso a sinistra.

Chiude il link "Torna a tutta la gamma →" verso `/la-gamma/`.

### 10. Footer

Il footer globale.

## Template per le altre 8 linee

- Tutti i testi, i colori e i prodotti vengono dai dati. Le linee chiare usano testo scuro ovunque: cover, pannello attivi, fascia Acquista, tessere, blocchi del navigatore.
- Solo SENSITIVE ha oggi i contenuti completi di "Il problema", "La scienza" e "Lo spazzolino". Per le altre linee **ometti le sezioni senza contenuto** (niente titoli senza testo) e lascia i campi pronti nel file dati, con un TODO.
- Cover delle altre linee: finché non c'è una foto a tutta larghezza dedicata, usa `<id>-still.jpg` nella metà destra sul fondo nella tinta chiara della linea.
- BABY-CHILDREN: nella sezione prodotti raggruppa le card per fascia d'età (0-3, 3-6, 6+, 12+) con badge età e icone dei gusti (`gusto-*.png`).

## Mobile (390px)

- Stessi blocchi in colonna. Cover: foto sopra (alta ~280px), testi sotto. I benefici diventano una lista con le icone.
- Il problema: l'illustrazione va sotto il testo. La soluzione: il pannello attivi in una colonna. La scienza: le due card impilate. Lo spazzolino: immagine sopra.
- Card prodotto in **carosello orizzontale** con scroll-snap, mostrando il bordo della card successiva come indizio.
- Navigatore: precedente e successiva impilati, poi le 9 tessere in una fila a scorrimento orizzontale.
- **Barra fissa in basso "ACQUISTA SU AMAZON"**, con testo, alta almeno 56px. Compare dopo la cover e non copre il footer.

## Criteri di accettazione

- A 1440px la pagina SENSITIVE corrisponde al riferimento in ogni sezione, nell'ordine della tavola.
- Cambiando linea nei dati (es. ACTIVE o BABY-CHILDREN) il template funziona: colori, contrasti AA (testo scuro sulle linee chiare), navigatore circolare corretto, nessuna sezione vuota.
- Le scale RDA e MILS sono leggibili anche senza colori, con `aria-label` che dicono il valore.
- Link Amazon in nuova scheda e dichiarati. Zero errori axe/Lighthouse accessibilità.
