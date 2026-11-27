/**
 * Prodotti PRESIDENT, nell'ordine dei caroselli di linea.
 * Fonte: blocchi t-<linea> di president-handoff/riferimenti/02-la-gamma.html.
 * Correzioni dai prompt successivi (prevalgono sul riferimento):
 *  - Dentifricio Sensitive: fluoro 950 ppm F⁻ (prompt 3 e 4).
 *  - Gel gengivale Sensitive Plus: claim "Trattamento mirato" (prompt 3 e 4).
 * I campi della scheda prodotto (descrizione, attivi, galleria, INCI, codice, EAN, Amazon)
 * si completano con il prompt 4.
 */
import { rotte } from './rotte';

export type TipoProdotto =
  | 'dentifricio'
  | 'gel'
  | 'collutorio'
  | 'spazzolino'
  | 'filo'
  | 'scovolini'
  | 'kit'
  | 'adesivo';

export interface Gusto {
  nome: string;
  /** /assets/img/gusto-<nome>.png */
  immagine: string;
}

export interface Prodotto {
  /** Slug usato nella rotta /la-gamma/<linea>/<slug>/ */
  slug: string;
  linea: string;
  nome: string;
  tipo: TipoProdotto;
  /** Claim breve della card (13px Light MAIUSCOLO). */
  claim: string;
  /** Formato di vendita, es. "Tubo da 75 ml". */
  formato?: string;
  /** Riga aggiuntiva della card al posto del formato (misure, colori, aromi). */
  varianti?: string;
  /** Packshot. Assente = "Foto in arrivo" (stemma segnaposto). */
  immagine?: string;
  /** Abrasività dichiarata (dentifrici). */
  rda?: number;
  /** Diametro delle setole (spazzolini). */
  mils?: number;
  /** Fluoro in ppm F⁻. */
  fluoroPpm?: number;
  /** Disponibilità futura, es. "Disponibile da gennaio 2027". */
  disponibilita?: string;
  /** Solo BABY-CHILDREN: fascia d'età (vedi fasceEta). */
  fascia?: FasciaEtaId;
  /** Solo BABY-CHILDREN: gusti con icona. */
  gusti?: Gusto[];

  /* ---- Scheda prodotto ---- */
  /** Paragrafi HTML con <b> per le parole in grassetto. Senza: la descrizione della linea. */
  descrizione?: string[];
  /** Attivi caratterizzanti (elenco breve). */
  attivi?: string[];
  /** Spiegazione dei badge sotto i badge (HTML). Senza: generata da RDA, fluoro e MILS. */
  notaBadge?: string;
  /** Galleria. Senza: packshot + still della linea. */
  galleria?: { src: string; alt: string; tipo: 'packshot' | 'foto' }[];
  inci?: string;
  /** Sale di fluoro, es. "Fluoruro di sodio" (voce "Contenuto di fluoro"). */
  fluoroSale?: string;
  codice?: string;
  /** EAN: da listino (punto aperto). */
  ean?: string;
  /** Link Amazon. Senza: ricerca provvisoria "president <tipo> <linea>". */
  amazonUrl?: string;
  /** Slug dei prodotti correlati, in ordine. Senza: gli altri prodotti della linea. */
  correlati?: string[];
}

/* ---------------- BABY-CHILDREN: fasce d'età ---------------- */
export type FasciaEtaId = '0-3' | '3-6' | '6+' | '12+';
export interface FasciaEta {
  id: FasciaEtaId;
  nome: string;
  /** Fluoro della fascia; assente se senza fluoro. */
  fluoroPpm?: number;
  nota?: string;
}
export const fasceEta: FasciaEta[] = [
  { id: '0-3', nome: 'BABY', nota: 'Senza fluoro' },
  { id: '3-6', nome: 'KIDS', fluoroPpm: 430 },
  { id: '6+', nome: 'JUNIOR', fluoroPpm: 950 },
  { id: '12+', nome: 'TEENS', fluoroPpm: 950 },
];

/* ---------------- Scala RDA (FONDAMENTA · Badge e scale tecniche) ---------------- */
export const scalaRda = [
  { da: 0, a: 70, livello: 'bassa', larghezza: 28, colore: '#A4D4C2' },
  { da: 71, a: 100, livello: 'media', larghezza: 12, colore: '#F9C772' },
  { da: 101, a: 150, livello: 'alta', larghezza: 20, colore: '#F09A79' },
  { da: 151, a: 250, livello: 'limite', larghezza: 40, colore: '#E8605D' },
] as const;

export const livelloRda = (rda: number) =>
  (scalaRda.find((s) => rda <= s.a) ?? scalaRda[scalaRda.length - 1]).livello;

/** Testi accessibili dei badge (role="img"). */
export const etichettaRda = (rda: number) => `RDA ${rda}: abrasività dichiarata ${livelloRda(rda)}`;
export const etichettaMils = (mils: number) =>
  `${mils} MILS: diametro delle setole, più basso significa più morbido`;
export const etichettaFluoro = (ppm: number) => `Fluoro: ${ppm} parti per milione di ioni fluoruro`;

/* ---------------- Dati ---------------- */
const img = (f: string) => `/assets/img/${f}`;
const gusto = (nome: string): Gusto => ({ nome, immagine: img(`gusto-${nome.toLowerCase()}.png`) });

export const prodotti: Prodotto[] = [
  /* CLASSIC */
  { slug: 'dentifricio-classic', linea: 'classic', nome: 'Dentifricio Classic', tipo: 'dentifricio', claim: 'Protezione carie', formato: 'Tubo da 75 ml', immagine: img('classic-dentifricio.png'), rda: 50 },
  { slug: 'dentifricio-eco-bio', linea: 'classic', nome: 'Dentifricio Eco-Bio', tipo: 'dentifricio', claim: 'Protezione carie', formato: 'Tubo da 75 ml', immagine: img('classic-ecobio.png'), rda: 50 },
  { slug: 'collutorio-classic', linea: 'classic', nome: 'Collutorio Classic', tipo: 'collutorio', claim: 'Protezione carie', formato: 'Flacone da 200 ml', immagine: img('classic-collutorio.png') },
  { slug: 'spazzolino-classic', linea: 'classic', nome: 'Spazzolino Classic', tipo: 'spazzolino', claim: 'Setole medie', immagine: img('classic-spazzolino.png'), mils: 8 },
  { slug: 'filo-interdentale-classic', linea: 'classic', nome: 'Filo interdentale Classic', tipo: 'filo', claim: 'In nylon, con menta e fluoruro', immagine: img('classic-filo.png') },
  { slug: 'scovolini-interdentali', linea: 'classic', nome: 'Scovolini interdentali', tipo: 'scovolini', claim: 'Disponibili in 3 misure', varianti: 'XXS · XS · S' },

  /* WHITE */
  { slug: 'dentifricio-white', linea: 'white', nome: 'Dentifricio White', tipo: 'dentifricio', claim: 'Sbiancante', formato: 'Tubo da 75 ml', immagine: img('white-dentifricio.png'), rda: 85 },
  { slug: 'dentifricio-white-plus', linea: 'white', nome: 'Dentifricio White Plus', tipo: 'dentifricio', claim: 'Antimacchie', formato: 'Tubo da 30 ml', immagine: img('white-plus.png'), rda: 200 },
  { slug: 'collutorio-white', linea: 'white', nome: 'Collutorio White', tipo: 'collutorio', claim: 'Azione sbiancante naturale', formato: 'Flacone da 200 ml', immagine: img('white-collutorio.png') },
  { slug: 'spazzolino-white-medium', linea: 'white', nome: 'Spazzolino White Medium', tipo: 'spazzolino', claim: 'Sbiancante', immagine: img('white-spazz-medium.png'), mils: 9 },
  { slug: 'spazzolino-white-smokers', linea: 'white', nome: 'Spazzolino White Smokers', tipo: 'spazzolino', claim: 'Hard', immagine: img('white-spazz-smokers.png'), mils: 10 },
  { slug: 'filo-interdentale-white', linea: 'white', nome: 'Filo interdentale White', tipo: 'filo', claim: 'Con carbone attivo e aloe vera', immagine: img('white-filo.png') },

  /* ACTIVE */
  { slug: 'dentifricio-active', linea: 'active', nome: 'Dentifricio Active', tipo: 'dentifricio', claim: 'Gengive sane', formato: 'Tubo da 75 ml', immagine: img('active-dentifricio.png'), rda: 50 },
  { slug: 'dentifricio-active-plus', linea: 'active', nome: 'Dentifricio Active Plus', tipo: 'dentifricio', claim: 'Trattamento intensivo', formato: 'Tubo da 30 ml', immagine: img('active-plus.png'), rda: 50 },
  { slug: 'collutorio-active', linea: 'active', nome: 'Collutorio Active', tipo: 'collutorio', claim: 'Ad attività gengivale', formato: 'Flacone da 200 ml', immagine: img('active-collutorio.png') },
  { slug: 'spazzolino-active', linea: 'active', nome: 'Spazzolino Active', tipo: 'spazzolino', claim: 'Soft', immagine: img('active-spazzolino.png'), mils: 6 },

  /* SENSITIVE */
  {
    slug: 'dentifricio-sensitive', linea: 'sensitive', nome: 'Dentifricio Sensitive', tipo: 'dentifricio', claim: 'Denti sensibili', formato: 'Tubo da 75 ml', immagine: img('sensitive-dentifricio.png'), rda: 20, fluoroPpm: 950,
    notaBadge: '<b>RDA 20</b>: abrasività molto bassa, sicura per smalto e dentina. <b>950 ppm F⁻</b>: quantità di fluoro, che rinforza lo smalto.',
    descrizione: [
      'Trattamento quotidiano e <b>delicato per i denti sensibili</b>. Il <b>Nitrato di Potassio</b> svolge un’azione desensibilizzante, riducendo la trasmissione degli stimoli dolorosi alle terminazioni nervose, mentre l’<b>Idrossiapatite</b> favorisce la remineralizzazione dello smalto.',
      'La <b>bassa abrasività</b> lo rende delicato su smalto e gengive e ideale per un <b>uso quotidiano e prolungato</b>. Tiglio, Camomilla e Bisabololo, dalle <b>proprietà lenitive</b>, alleviano le irritazioni del cavo orale. Contiene Fluoruro di sodio (950 ppm F⁻).',
    ],
    attivi: ['Nitrato di Potassio', 'Idrossiapatite', 'Bisabololo', 'Tiglio', 'Camomilla'],
    galleria: [
      { src: img('sensitive-dentifricio.png'), alt: 'Dentifricio Sensitive: astuccio e tubo da 75 ml', tipo: 'packshot' },
      { src: img('sensitive-still.jpg'), alt: 'Still life della linea Sensitive su fondo azzurro con gocce d’acqua', tipo: 'foto' },
    ],
    inci: 'Aqua (Water), Sorbitol, Hydrated Silica, Xylitol, Potassium Nitrate, Hydroxyapatite, Cellulose Gum, Aroma (Flavor), Sodium Myristoyl Sarcosinate, Sodium Cocoyl Glutamate, Propylene Glycol, Tilia Cordata Flower Extract, Chamomilla Recutita (Matricaria) Flower Extract, Sodium Fluoride, Sodium Saccharin, Bisabolol, Mentha Piperita (Peppermint) Oil, Menthol, Anethole, Limonene, Sodium Benzoate, CI 77891 (Titanium Dioxide), CI 42090 (Blue 1).',
    fluoroSale: 'Fluoruro di sodio',
    codice: '0061',
    correlati: ['collutorio-sensitive', 'gel-gengivale-sensitive-plus', 'spazzolino-sensitive', 'filo-interdentale-sensitive'],
  },
  { slug: 'gel-gengivale-sensitive-plus', linea: 'sensitive', nome: 'Gel gengivale Sensitive Plus', tipo: 'gel', claim: 'Trattamento mirato', formato: 'Tubo da 30 ml', immagine: img('sensitive-gel.png') },
  { slug: 'collutorio-sensitive', linea: 'sensitive', nome: 'Collutorio Sensitive', tipo: 'collutorio', claim: 'Denti sensibili', formato: 'Flacone da 200 ml', immagine: img('sensitive-collutorio.png') },
  { slug: 'spazzolino-sensitive', linea: 'sensitive', nome: 'Spazzolino Sensitive', tipo: 'spazzolino', claim: 'Extra soft', immagine: img('sensitive-spazzolino.png'), mils: 4 },
  { slug: 'filo-interdentale-sensitive', linea: 'sensitive', nome: 'Filo interdentale Sensitive', tipo: 'filo', claim: 'Extra piatto', immagine: img('sensitive-filo.png') },

  /* PROFI */
  { slug: 'dentifricio-profi', linea: 'profi', nome: 'Dentifricio Profi', tipo: 'dentifricio', claim: 'Azione intensiva', formato: 'Tubo da 75 ml', immagine: img('profi-dentifricio.png'), rda: 30 },
  { slug: 'dentifricio-profi-plus', linea: 'profi', nome: 'Dentifricio Profi Plus', tipo: 'dentifricio', claim: 'Balsamo gengivale', formato: 'Tubo da 30 ml', immagine: img('profi-plus.png') },
  { slug: 'collutorio-profi', linea: 'profi', nome: 'Collutorio Profi', tipo: 'collutorio', claim: 'Con clorexidina 0,20%', formato: 'Flacone da 200 ml', immagine: img('profi-collutorio.png') },
  { slug: 'collutorio-professional', linea: 'profi', nome: 'Collutorio Professional', tipo: 'collutorio', claim: 'Con clorexidina 0,12%', formato: 'Flacone da 1 litro' },
  { slug: 'spazzolino-profi', linea: 'profi', nome: 'Spazzolino Profi', tipo: 'spazzolino', claim: 'Extra soft', immagine: img('profi-spazzolino.png'), mils: 4 },

  /* DEFENSE */
  { slug: 'dentifricio-defense', linea: 'defense', nome: 'Dentifricio Defense', tipo: 'dentifricio', claim: 'Anti alitosi', formato: 'Tubo da 75 ml', immagine: img('defense-dentifricio.png'), rda: 30 },
  { slug: 'collutorio-defense', linea: 'defense', nome: 'Collutorio Defense', tipo: 'collutorio', claim: 'Anti alitosi', formato: 'Flacone da 200 ml', immagine: img('defense-collutorio.png') },
  { slug: 'spazzolino-defense', linea: 'defense', nome: 'Spazzolino Defense', tipo: 'spazzolino', claim: 'Medium', immagine: img('defense-spazzolino.png'), mils: 8 },

  /* ORTHO-IMPLANT */
  { slug: 'dentifricio-ortho-implant', linea: 'ortho', nome: 'Dentifricio Ortho-Implant', tipo: 'dentifricio', claim: 'Gel a bassa abrasività', formato: 'Tubo da 75 ml', immagine: img('ortho-dentifricio.png'), rda: 30 },
  { slug: 'collutorio-ortho-implant', linea: 'ortho', nome: 'Collutorio Ortho-Implant', tipo: 'collutorio', claim: 'Senza alcool', formato: 'Flacone da 200 ml', immagine: img('ortho-collutorio.png') },
  { slug: 'spazzolino-ortho-implant', linea: 'ortho', nome: 'Spazzolino Ortho-Implant', tipo: 'spazzolino', claim: 'Medium', immagine: img('ortho-spazzolino.png'), mils: 8 },
  { slug: 'spazzolino-single-tuft', linea: 'ortho', nome: 'Spazzolino Single-Tuft', tipo: 'spazzolino', claim: 'Monociuffo', varianti: 'In tre colori', immagine: img('ortho-singletuft.png'), mils: 5 },
  { slug: 'filo-interdentale-ortho-implant', linea: 'ortho', nome: 'Filo interdentale Ortho-Implant', tipo: 'filo', claim: 'In rocchetto, non pretagliato', immagine: img('ortho-filo.png') },
  { slug: 'kit-ortho-implant', linea: 'ortho', nome: 'Kit Ortho-Implant', tipo: 'kit', claim: 'L’essenziale a casa e in viaggio', disponibilita: 'Disponibile da gennaio 2027' },

  /* BABY-CHILDREN (per fascia d'età) */
  { slug: 'dentifricio-baby', linea: 'baby', nome: 'Dentifricio Baby', tipo: 'dentifricio', claim: '0-3 anni', formato: 'Tubo da 30 ml', immagine: img('baby-dentifricio.png'), rda: 15, fascia: '0-3', gusti: [gusto('Lampone'), gusto('Caramello')] },
  { slug: 'spazzolino-baby', linea: 'baby', nome: 'Spazzolino Baby', tipo: 'spazzolino', claim: 'Soft · 0-4 anni', immagine: img('baby-spazzolino.png'), mils: 6, fascia: '0-3' },
  { slug: 'dentifricio-kids', linea: 'baby', nome: 'Dentifricio Kids', tipo: 'dentifricio', claim: '3-6 anni', formato: 'Tubo da 50 ml', immagine: img('kids-dentifricio.png'), rda: 30, fluoroPpm: 430, fascia: '3-6', gusti: [gusto('Fragola'), gusto('Cola')] },
  { slug: 'dentifricio-junior', linea: 'baby', nome: 'Dentifricio Junior', tipo: 'dentifricio', claim: '6+ anni', formato: 'Tubo da 50 ml', immagine: img('junior-dentifricio.png'), rda: 30, fluoroPpm: 950, fascia: '6+', gusti: [gusto('Fragoline'), gusto('Cioccolato'), gusto('Lime')] },
  { slug: 'spazzolino-junior', linea: 'baby', nome: 'Spazzolino Junior', tipo: 'spazzolino', claim: 'Soft · 5-11 anni', immagine: img('junior-spazzolino.png'), mils: 6, fascia: '6+' },
  { slug: 'collutorio-children', linea: 'baby', nome: 'Collutorio Children', tipo: 'collutorio', claim: '6-12 anni', immagine: img('children-collutorio.png'), fascia: '6+' },
  { slug: 'dentifricio-teens', linea: 'baby', nome: 'Dentifricio Teens', tipo: 'dentifricio', claim: '12+ anni', formato: 'Tubo da 50 ml', immagine: img('teens-dentifricio.png'), rda: 40, fluoroPpm: 950, fascia: '12+', gusti: [gusto('Menta')] },
  { slug: 'spazzolino-teens', linea: 'baby', nome: 'Spazzolino Teens', tipo: 'spazzolino', claim: 'Soft · 12+ anni', immagine: img('teens-spazzolino.png'), mils: 6, fascia: '12+' },

  /* DENTURE */
  { slug: 'pasta-adesiva', linea: 'denture', nome: 'Pasta adesiva', tipo: 'adesivo', claim: 'Fissaggio forte', varianti: 'Alla menta o senza aroma', immagine: img('denture-pasta.png') },
];

export const prodottiDellaLinea = (linea: string) => prodotti.filter((p) => p.linea === linea);
export const getProdotto = (linea: string, slug: string) =>
  prodotti.find((p) => p.linea === linea && p.slug === slug);
export const hrefProdotto = (p: Prodotto) => rotte.prodotto(p.linea, p.slug);

/** Prodotti correlati: quelli indicati nei dati, altrimenti gli altri prodotti della stessa linea. */
export const prodottiCorrelati = (p: Prodotto) =>
  p.correlati
    ? p.correlati.map((slug) => getProdotto(p.linea, slug)).filter((x): x is Prodotto => !!x)
    : prodottiDellaLinea(p.linea).filter((x) => x.slug !== p.slug);

/** Link Amazon del prodotto (provvisorio finché non c'è lo store PRESIDENT). */
export const amazonProdotto = (p: Prodotto) =>
  p.amazonUrl ?? `https://www.amazon.it/s?k=${['president', p.tipo, p.linea].join('+')}`;

/* ---------------- Scala MILS (riga del prodotto evidenziata) ---------------- */
export const scalaMils = [
  { min: 4, max: 4, etichetta: '4 MILS', durezza: 'ULTRA SOFT', diametro: 'Ø 0,10 mm', spessore: 2.2 },
  { min: 6, max: 6, etichetta: '6 MILS', durezza: 'SOFT', diametro: 'Ø 0,15 mm', spessore: 3.3 },
  { min: 7, max: 9, etichetta: '7-9 MILS', durezza: 'SOFT-MEDIUM', diametro: 'Ø 0,17-0,22 mm', spessore: 4.2 },
  { min: 9, max: 10, etichetta: '9-10 MILS', durezza: 'MEDIUM-HARD', diametro: 'Ø 0,22-0,25 mm', spessore: 5.3 },
] as const;

/** Indice della riga della scala MILS che contiene il valore (5 MILS → riga 4-6 più vicina). */
export const rigaMils = (mils: number) => {
  const i = scalaMils.findIndex((r) => mils >= r.min && mils <= r.max);
  if (i >= 0) return i;
  return mils < 6 ? 0 : scalaMils.length - 1;
};
