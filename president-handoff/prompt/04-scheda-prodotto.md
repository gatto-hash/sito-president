# Prompt 4/4 · PRESIDENT · Scheda prodotto (template) · esempio Dentifricio Sensitive

Costruisci in codice la **scheda prodotto** come template valido per tutti i prodotti. Il primo esempio completo è il **Dentifricio Sensitive (tubo da 75 ml)**, fedele alla tavola approvata "A · Scheda prodotto · Dentifricio Sensitive · desktop copy".

## Prima di iniziare

1. Leggi `president-handoff/FONDAMENTA.md`. Se token, font, dati, header, menu a tendina, footer e card prodotto esistono già nel progetto, **riusali**: la card prodotto è la stessa della pagina di linea.
2. Il riferimento esatto è `president-handoff/riferimenti/04-scheda-dentifricio-sensitive.html`. I link della tavola verso altre tavole vanno sostituiti con le rotte di FONDAMENTA. Alcuni puntavano a tavole poi eliminate: usa sempre la pagina della linea, `/la-gamma/sensitive/`.
3. Rotta dinamica: `/la-gamma/<linea>/<prodotto>/`, per l'esempio `/la-gamma/sensitive/dentifricio-sensitive/`.
4. Nell'header la voce attiva è LA GAMMA (`aria-current="true"`). Nel menu a tendina la linea SENSITIVE è evidenziata.

## Dati del prodotto

Estendi il file prodotti con questi campi:
- slug, linea, nome, formato, claim
- descrizione: paragrafi con grassetti
- attivi caratterizzanti
- badge: RDA, fluoro in ppm, MILS
- galleria: immagini con alt
- INCI, codice, EAN
- URL Amazon
- prodotti correlati: di default gli altri prodotti della stessa linea

I claim sono gli stessi della pagina di linea. Nella tavola il Gel Sensitive Plus ha due claim diversi: vale quello dei dati, "Trattamento mirato".

## Struttura della pagina

### 1. Barra del percorso

Alta 56px, con bordo inferiore #E2E6E8. Contenitore 1200px con due elementi agli estremi.
- A sinistra il breadcrumb: Home › La gamma › ■ **SENSITIVE** › Dentifricio Sensitive. SENSITIVE è un link alla pagina della linea, in Bold nel colore della linea, con il quadratino 10×10px. La voce corrente è in Bold #1D1D1B con `aria-current="page"`.
- A destra il link "← Torna alla linea SENSITIVE" (14px Bold, colore della linea, alto almeno 44px).

### 2. Prodotto

Padding 64px. Griglia a 12 colonne.

**Galleria** (6 colonne)
- Immagine principale 588×588px, raggio `0 0 48px 0`, `overflow: hidden`. Due immagini:
  1. Packshot `sensitive-dentifricio.png` alto ~411px, centrato su `radial-gradient(110% 90% at 50% 65%, #FFFFFF 0%, #E6EDF4 50%, #B8CDDF 100%)`, con `drop-shadow(0 18px 24px rgba(0,40,90,.22))`. Alt "Dentifricio Sensitive: astuccio e tubo da 75 ml".
  2. Still life `sensitive-still.jpg`, `object-fit: cover`. Alt "Still life della linea Sensitive su fondo azzurro con gocce d'acqua".
- Miniature sotto (`role="group"`, `aria-label="Galleria immagini"`, gap 12px): pulsanti 96×96px con raggio 8px. Bordo 2px nel colore della linea se la miniatura è attiva, #E2E6E8 se no. Ogni pulsante ha `aria-pressed` e `aria-label="Mostra immagine 1 di 2"`.

**Informazioni** (dalla colonna 7, larga 6, padding sinistro 24px; colonna con gap 18px)
- H1 "DENTIFRICIO SENSITIVE": 40px Bold, .02em, colore della linea. Segue, in linea, "Tubo da 75 ml" in 18px italic #3C3C3B.
- Claim "DENTI SENSIBILI": 24px Light, .04em, #1D1D1B.
- Badge: RDA 20 (lime) e fluoro "950 ppm F⁻" (icona esagonale #2B757E). Entrambi con `role="img"` e `aria-label` esplicativo.
- Spiegazione 14px #5E5E5C: "**RDA 20**: abrasività molto bassa, sicura per smalto e dentina. **950 ppm F⁻**: quantità di fluoro, che rinforza lo smalto."
- Due paragrafi di descrizione 17px / 1.65, con i grassetti del riferimento.
- "ATTIVI CARATTERIZZANTI": titoletto 15px Bold Italic nel colore della linea, poi "– Nitrato di Potassio – Idrossiapatite – Bisabololo – Tiglio – Camomilla" in 17px Bold Italic nel colore della linea.
- CTA: pulsante primario "ACQUISTA ↗" (alto 56px, padding 0 30px) verso `https://www.amazon.it/s?k=president+dentifricio+sensitive`, in nuova scheda, con `aria-label="Acquista su Amazon (si apre in una nuova scheda)"`. Sotto, la nota 13px #5E5E5C "Su Amazon.it · si apre in una nuova scheda".

### 3. Modulo RDA

Fondo #F2F1F0, padding 88px.

**Colonna sinistra** (5 colonne)
- Badge RDA 20 + "ABRASIVITÀ DICHIARATA".
- H2 "Delicato su smalto e dentina" (36px Light MAIUSCOLO).
- Testo: "L'**RDA** (Relative Dentin Abrasion) misura quanto un dentifricio consuma la dentina, secondo la norma **ISO 11609**. Un valore fino a 70 è considerato sicuro per dentina, cemento e smalto."
- Link "Scopri l'abrasività dichiarata →" verso `/ricerca/abrasivita-dichiarata/`.

**Colonna destra** (dalla colonna 7)
- Scala RDA larga 588px (vedi FONDAMENTA): segmenti alti 44px con le etichette dei range, marcatore "RDA 20 · questo prodotto" all'8%, tacche 0 · 70 · 100 · 150 · 250.
- Legenda a 2 colonne in 14px:
  - **Bassa**: sicura per dentina, cemento e smalto
  - **Media**: sicura per lo smalto, attenzione sulla dentina
  - **Alta**: rischiosa per dentina e cemento
  - **Limite**: oltre 150 è considerata potenzialmente lesiva
- `role="group"` con `aria-label="Scala RDA da 0 a 250: questo dentifricio ha RDA 20, abrasività bassa"`.

**Variante del template**: per gli spazzolini, al posto del modulo RDA compare il **modulo MILS** (stessa scala MILS della pagina di linea, con la riga del prodotto evidenziata) e il link "Come scegliere lo spazzolino →" verso `/ricerca/gli-spazzolini/`. Al posto dei badge RDA e fluoro compare il badge MILS. Per i prodotti senza RDA né MILS il modulo non compare.

### 4. Informazioni tecniche

Padding 96px.
- **Colonna sinistra** (4 colonne): H2 "INFORMAZIONI TECNICHE" (32px Light) e la nota "Dati dal listino prodotti 2027." (15px #5E5E5C).
- **Colonna destra** (dalla colonna 5, larga 8): **accordion** di 4 voci.
  - Ogni voce è un `<h3>` con dentro un `<button>` (alto almeno 64px, 18px Bold, icona +/− a destra) con `aria-expanded` e `aria-controls`. Il pannello ha `role="region"`, padding inferiore 24px, testo 15px / 1.7.
  - Le voci sono separate da filetti #E2E6E8.
  - Si apre **una voce alla volta**. La prima è aperta di default; cliccando la voce aperta si chiude.
- Le 4 voci:
  1. Ingredienti (INCI): il testo completo è nel riferimento.
  2. Contenuto di fluoro: "Fluoruro di sodio · 950 ppm F⁻"
  3. Codice prodotto: "Cod. 0061"
  4. EAN: "[EAN da listino]" (segnaposto da compilare)

### 5. Completa la tua routine

Fondo tinta chiara della linea (#E6EDF4), padding 96px.

**Intestazione**
- A sinistra: H2 "COMPLETA LA TUA ROUTINE **SENSITIVE**" (36px Light, con il nome della linea in Bold nel suo colore) e il sottotitolo "I prodotti della linea agiscono in sinergia" (20px Bold Italic).
- A destra: il link "Tutta la linea SENSITIVE →" verso la pagina della linea.

**Griglia di 4 card prodotto** (gap 24px, card alte ~372px)
- Stesso componente della pagina di linea, con link alle rispettive schede.
- Sono gli altri prodotti della linea, escluso quello corrente: Collutorio Sensitive (200 ml), Gel gengivale Sensitive Plus (30 ml), Spazzolino Sensitive (4 MILS), Filo interdentale Sensitive.

### 6. Footer

Il footer globale.

## Mobile (390px)

- La barra del percorso va su due righe: breadcrumb, poi "Torna alla linea".
- Galleria a tutta larghezza, quadrata, con le miniature sotto. Le informazioni seguono in una colonna e la CTA "ACQUISTA" è a tutta larghezza.
- Modulo RDA: il testo sta sopra la scala, che occupa tutta la larghezza con le etichette dei range leggibili (se serve, sotto la barra).
- Accordion a tutta larghezza.
- "Completa la tua routine": carosello orizzontale con scroll-snap.

## Criteri di accettazione

- A 1440px la scheda corrisponde al riferimento in tutte le sezioni.
- Galleria, accordion e link funzionano da tastiera, con stati ARIA corretti (`aria-pressed`, `aria-expanded`).
- Il template funziona con uno spazzolino (variante MILS) e con un prodotto senza badge tecnici, senza sezioni vuote.
- Il breadcrumb e "Torna alla linea" portano a `/la-gamma/sensitive/`. Zero errori axe/Lighthouse accessibilità.
