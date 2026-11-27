/**
 * Le 9 linee PRESIDENT, nell'ordine fisso dell'alberatura.
 * Fonti: president-handoff/FONDAMENTA.md · Dati (colori, claim, foto) e
 * blocchi t-<linea> di riferimenti/02-la-gamma.html (titolo, descrizione, benefici, attivi).
 * Usato da: menu LA GAMMA, striscia del footer, card Novità, tessere La gamma, pagine di linea.
 * I prodotti sono in ./prodotti.ts (prodottiDellaLinea(id)).
 */
export interface Attivo {
  nome: string;
  funzione: string;
}

export interface Linea {
  id: string;
  nome: string;
  esigenza: string;
  /** Colore della linea (fondi, quadratini, strisce). */
  colore: string;
  /** Colore del testo appoggiato sul colore della linea (AA). */
  testoSuColore: string;
  /** Colore del testo nel colore della linea su fondo bianco (AA). */
  testoSuBianco: string;
  tintaChiara: string;
  tintaMedia: string;
  /** true se sul colore della linea il testo è scuro (#1D1D1B). */
  chiara: boolean;
  /** Claim breve delle tessere. */
  claim: string;
  /** Foto still: /assets/img/<id>-still.jpg */
  still: string;
  /** Posizione verticale della foto still, in % (object-position: 50% Y%). */
  stillY: number;
  /** Foto lifestyle: /assets/img/<id>-life.jpg */
  life: string;
  /** Posizione verticale della foto lifestyle, in %. */
  lifeY: number;
  /** Titolo della linea. */
  titolo: string;
  /** Descrizione: HTML con <b> per le parole in grassetto. */
  descrizione: string;
  benefici: string[];
  /** Attivi selezionati (vuoto se la linea non li dichiara, es. DENTURE). */
  attivi: Attivo[];
  /** Link Amazon della linea (provvisorio: ricerca, in attesa dello store PRESIDENT). */
  amazonUrl: string;
}

type LineaBase = Omit<Linea, 'still' | 'life' | 'lifeY' | 'chiara' | 'amazonUrl'>;

const base: LineaBase[] = [
  {
    id: 'classic', nome: 'CLASSIC', esigenza: 'Protezione quotidiana',
    colore: '#00603E', testoSuColore: '#FFFFFF', testoSuBianco: '#00603E', tintaChiara: '#E6EFEC', tintaMedia: '#B8D2C9',
    claim: 'Protezione quotidiana per un sorriso sano', stillY: 50,
    titolo: 'Protezione quotidiana per un sorriso sano',
    descrizione: 'Anche quando denti e gengive sono in buone condizioni, una <b>corretta igiene orale</b> è fondamentale per prevenire placca, carie, alito cattivo e irritazione gengivale. La linea comprende <b>dentifrici, collutori, spazzolini e prodotti interdentali</b> adatti a tutta la famiglia adulta.',
    benefici: [
      'Contrastare placca e carie',
      'Garantire una freschezza duratura',
      'Assicurare una pulizia profonda senza essere aggressivi',
    ],
    attivi: [
      { nome: 'Fluoruro di Sodio', funzione: 'rinforza lo smalto e aiuta a prevenire le carie' },
      { nome: 'Xilitolo', funzione: 'bilancia il pH orale e riduce la proliferazione batterica' },
      { nome: 'Salvia, Camomilla e Melissa', funzione: 'rinfrescano e leniscono i tessuti orali' },
    ],
  },
  {
    id: 'white', nome: 'WHITE', esigenza: 'Denti macchiati o ingialliti',
    colore: '#B1B1AE', testoSuColore: '#1D1D1B', testoSuBianco: '#757573', tintaChiara: '#F7F7F7', tintaMedia: '#E9E9E8',
    claim: 'Sbiancamento delicato, lucentezza naturale', stillY: 38,
    titolo: 'Sbiancamento delicato, lucentezza naturale',
    descrizione: 'Alimentazione, fumo, caffè, tè e vino possono macchiare e ingiallire lo smalto. La linea <b>restituisce luminosità al sorriso senza compromettere la salute dello smalto</b> ed è ideale per l’uso quotidiano.',
    benefici: [
      'Rimuovere macchie e imbrunimenti superficiali',
      'Prevenire la formazione di tartaro e placca',
      'Restituire lucentezza e freschezza duratura',
      'Rispettare e proteggere lo smalto',
    ],
    attivi: [
      { nome: 'Cloruro di Zinco', funzione: 'contrasta il tartaro e il sanguinamento gengivale' },
      { nome: 'Monofluorofosfato di Sodio', funzione: 'azione anticarie quotidiana' },
      { nome: 'Lichene Islandico e Usnea', funzione: 'proprietà antibatteriche e purificanti' },
      { nome: 'Fosfato Bicalcico e Terra di Diatomee', funzione: 'pulizia delicata e azione lucidante' },
    ],
  },
  {
    id: 'active', nome: 'ACTIVE', esigenza: 'Gengive che sanguinano',
    colore: '#AA0C38', testoSuColore: '#FFFFFF', testoSuBianco: '#AA0C38', tintaChiara: '#F6E7EB', tintaMedia: '#E7BBC7',
    claim: 'Azione astringente e lenitiva, per gengive più sane', stillY: 42,
    titolo: 'Azione astringente e lenitiva per gengive più sane',
    descrizione: 'Infiammazione e sanguinamento gengivale sono sintomi frequenti che, se trascurati, possono aggravarsi. La linea è <b>formulata specificamente per le gengive sensibili e infiammate</b>, per trattare questi disturbi fin dall’inizio.',
    benefici: [
      'Ridurre sanguinamento e infiammazione gengivale',
      'Rinforzare la barriera naturale del tessuto gengivale',
      'Svolgere un’azione astringente e antibatterica',
      'Prevenire la formazione di placca e tartaro',
    ],
    attivi: [
      { nome: 'Citrato di Zinco', funzione: 'aiuta a prevenire la formazione di tartaro' },
      { nome: 'Digluconato di Clorexidina', funzione: 'controlla placca e infiammazione' },
      { nome: 'Esetidina e Lattato di Zinco', funzione: 'azione antimicrobica ad ampio spettro' },
      { nome: 'Biancospino e Quercia', funzione: 'effetto astringente e lenitivo naturale' },
    ],
  },
  {
    id: 'sensitive', nome: 'SENSITIVE', esigenza: 'Denti sensibili',
    colore: '#004B8D', testoSuColore: '#FFFFFF', testoSuBianco: '#004B8D', tintaChiara: '#E6EDF4', tintaMedia: '#B8CDDF',
    claim: 'Per contrastare la sensibilità dentinale', stillY: 65,
    titolo: 'Azione protettiva per denti sensibili e gengive in recessione',
    descrizione: 'La sensibilità dentinale è il fastidio che si avverte quando caldo, freddo, dolce o acido raggiungono la dentina esposta. La linea offre <b>soluzioni efficaci, delicate e ben tollerate</b> anche dai tessuti più vulnerabili.',
    benefici: [
      'Ridurre la sensibilità agli stimoli esterni',
      'Rinforzare lo smalto e proteggere le gengive',
      'Assicurare una pulizia efficace e delicata',
    ],
    attivi: [
      { nome: 'Nitrato di Potassio', funzione: 'interrompe la trasmissione del segnale doloroso e riduce la sensibilità' },
      { nome: 'Idrossiapatite', funzione: 'favorisce la remineralizzazione dello smalto e chiude i tubuli dentinali' },
      { nome: 'Bisabololo e Tiglio', funzione: 'proprietà lenitive, alleviano le irritazioni dei tessuti orali' },
      { nome: 'Fluoruro di Sodio', funzione: 'rinforza lo smalto e aiuta a prevenire la carie' },
    ],
  },
  {
    id: 'profi', nome: 'PROFI', esigenza: 'Dopo interventi e gengive infiammate',
    colore: '#642271', testoSuColore: '#FFFFFF', testoSuBianco: '#642271', tintaChiara: '#F0E9F1', tintaMedia: '#D4C1D7',
    claim: 'Azione antibatterica intensiva con clorexidina', stillY: 42,
    titolo: 'Azione antibatterica intensiva con clorexidina',
    descrizione: 'Dopo un intervento odontoiatrico o nelle fasi acute delle malattie gengivali la mucosa orale diventa più fragile. La linea offre <b>trattamenti intensivi</b> per controllare l’infezione e accompagnare il recupero dei tessuti.',
    benefici: [
      'Controllare la proliferazione batterica',
      'Ridurre l’infiammazione e prevenire le infezioni secondarie',
      'Favorire la guarigione e il recupero dei tessuti',
    ],
    attivi: [
      { nome: 'Clorexidina Digluconato 0,20%', funzione: 'azione sanitizzante a effetto urto' },
      { nome: 'Malva e Camomilla', funzione: 'azione lenitiva' },
    ],
  },
  {
    id: 'defense', nome: 'DEFENSE', esigenza: 'Alito cattivo e placca',
    colore: '#EB690B', testoSuColore: '#1D1D1B', testoSuBianco: '#BE5509', tintaChiara: '#FDF0E7', tintaMedia: '#F9D5BB',
    claim: 'Azione antiplacca e anti-alitosi', stillY: 38,
    titolo: 'Azione antiplacca e anti-alitosi',
    descrizione: 'L’alito cattivo è spesso il segnale di un accumulo di placca batterica. Formulata con Esetidina e una <b>base emulsionata brevettata</b>, la linea è pensata anche come mantenimento dopo le terapie alla Clorexidina.',
    benefici: [
      'Ridurre la proliferazione batterica',
      'Lenire e proteggere i tessuti gengivali',
      'Aiutare a prevenire malattia parodontale, stomatite e alitosi',
    ],
    attivi: [
      { nome: 'Esetidina', funzione: 'azione antiplacca e sanitizzante' },
      { nome: 'Cloruro di Cetilpiridinio', funzione: 'azione antiplacca e anti-alitosi' },
      { nome: 'Propoli e Timo', funzione: 'estratti sanitizzanti naturali' },
    ],
  },
  {
    id: 'ortho', nome: 'ORTHO-IMPLANT', esigenza: 'Apparecchi e impianti',
    colore: '#00A6A5', testoSuColore: '#1D1D1B', testoSuBianco: '#008181', tintaChiara: '#E6F6F6', tintaMedia: '#B8E6E6',
    claim: 'Per portatori di apparecchi ortodontici e impianti dentali', stillY: 50,
    titolo: 'Azione protettiva per apparecchi ortodontici e impianti dentali',
    descrizione: 'Brackets, fili metallici e impianti creano zone difficili da raggiungere, dove placca e batteri si accumulano. La linea <b>pulisce in profondità anche nei punti più difficili</b> senza risultare abrasiva né danneggiare le zone delicate.',
    benefici: [
      'Contrastare l’accumulo di placca',
      'Ridurre il rischio di infiammazione gengivale',
      'Proteggere denti e gengive senza intaccare smalto e impianti',
    ],
    attivi: [
      { nome: 'Papaina', funzione: 'enzima ad azione antiplacca e igienizzante' },
      { nome: 'Cloruro di Cetilpiridinio', funzione: 'antibatterico ad ampio spettro, riduce la placca' },
    ],
  },
  {
    id: 'baby', nome: 'BABY-CHILDREN', esigenza: 'Bambini da 0 a 12+ anni',
    colore: '#EAA300', testoSuColore: '#1D1D1B', testoSuBianco: '#9A6C00', tintaChiara: '#FDF6E6', tintaMedia: '#F9E5B8',
    claim: 'Azione delicata e sicura per i denti dei bambini da 0 a 12+ anni', stillY: 42,
    titolo: 'Azione delicata e sicura per i denti dei bambini da 0 a 12+ anni',
    descrizione: 'Ogni fase della crescita porta esigenze diverse. Una linea completa per l’igiene orale dei bambini <b>dall’infanzia alla preadolescenza</b>, con gusti piacevoli e <b>fluoro dosato in base all’età</b>.',
    benefici: [
      'Proteggere i denti dalla carie con fluoro dosato in base all’età',
      'Favorire uno sviluppo orale sano fin dai primi dentini',
      'Rendere l’igiene quotidiana facile e piacevole',
    ],
    attivi: [
      { nome: 'Fluoro', funzione: 'rinforza lo smalto e previene la carie' },
      { nome: 'Xilitolo', funzione: 'bilancia il pH e riduce il rischio di carie' },
      { nome: 'Propoli', funzione: 'azione purificante naturale' },
      { nome: 'Malva e Camomilla', funzione: 'leniscono le gengive sensibili' },
    ],
  },
  {
    id: 'denture', nome: 'DENTURE', esigenza: 'Protesi dentarie',
    colore: '#77BE91', testoSuColore: '#1D1D1B', testoSuBianco: '#507F61', tintaChiara: '#F1F8F4', tintaMedia: '#D9EDE0',
    claim: 'Stabilità e comfort per chi porta protesi dentarie', stillY: 61,
    titolo: 'Stabilità e comfort per chi porta protesi dentarie',
    descrizione: 'Scarsa adesione, infiltrazioni di cibo, alito cattivo e irritazioni sono i disagi più comuni di chi porta protesi. La linea garantisce <b>un’adesione rapida e sicura</b> e stabilità per tutto il giorno.',
    benefici: [
      'Tenuta forte e prolungata, ben tollerata dalle gengive',
      'Previene irritazioni e fastidi legati alla fermentazione',
      'Facile da usare e affidabile ogni giorno',
    ],
    attivi: [],
  },
];

export const linee: Linea[] = base.map((l) => ({
  ...l,
  chiara: l.testoSuColore !== '#FFFFFF',
  still: `/assets/img/${l.id}-still.jpg`,
  life: `/assets/img/${l.id}-life.jpg`,
  lifeY: 30,
  amazonUrl: `https://www.amazon.it/s?k=${encodeURIComponent(`president ${l.id}`).replace(/%20/g, '+')}`,
}));

export const getLinea = (id: string) => linee.find((l) => l.id === id);

/** Gradiente a fasce verticali uguali nei 9 colori, in ordine (card Novità, ecc.). */
export const gradienteLinee = (direzione = '90deg') => {
  const step = 100 / linee.length;
  const stops = linee
    .map((l, i) => `${l.colore} ${(i * step).toFixed(3)}% ${((i + 1) * step).toFixed(3)}%`)
    .join(', ');
  return `linear-gradient(${direzione}, ${stops})`;
};

/** Linea precedente e successiva, in ordine circolare (prima di CLASSIC viene DENTURE). */
export const lineeVicine = (id: string) => {
  const i = linee.findIndex((l) => l.id === id);
  const n = linee.length;
  return { precedente: linee[(i - 1 + n) % n], successiva: linee[(i + 1) % n] };
};

/* ---------------- Contrasto (WCAG) ---------------- */
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrasto = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

/**
 * Colore della linea da usare per il testo su un fondo chiaro (tinta chiara, bianco):
 * il "colore testo su bianco" se raggiunge il contrasto richiesto, altrimenti #1D1D1B.
 * minimo: 4.5 per testo normale, 3 per testo grande (≥ 24px, o ≥ 18.66px Bold).
 */
export const testoLineaSu = (linea: Linea, fondo: string, minimo = 4.5) =>
  contrasto(linea.testoSuBianco, fondo) >= minimo ? linea.testoSuBianco : '#1D1D1B';
