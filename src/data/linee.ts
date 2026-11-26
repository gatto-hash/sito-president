/**
 * Le 9 linee PRESIDENT, nell'ordine fisso dell'alberatura.
 * Fonte: president-handoff/FONDAMENTA.md · Dati.
 * Usato da: menu LA GAMMA, striscia colorata del footer, card Novità,
 * tessere e navigatore della pagina La gamma, pagine di linea.
 *
 * I testi estesi (titolo, descrizione, benefici, attivi) sono nei blocchi
 * `t-<linea>` di riferimenti/02-la-gamma.html e vanno aggiunti nei campi
 * opzionali qui sotto quando si costruisce la pagina La gamma.
 */
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
  /** Claim breve delle tessere. */
  claim: string;
  /** Posizione verticale della foto still, in % (object-position: 50% Y%). */
  stillY: number;
  /** Foto still: /assets/img/<id>-still.jpg */
  still: string;
  /** Foto lifestyle: /assets/img/<id>-life.jpg */
  life: string;
  /** Testi estesi (da riferimenti/02-la-gamma.html, blocchi t-<linea>). */
  titolo?: string;
  descrizione?: string;
  benefici?: string[];
  attivi?: { nome: string; descrizione: string }[];
}

type LineaBase = Omit<Linea, 'still' | 'life'>;

const base: LineaBase[] = [
  { id: 'classic', nome: 'CLASSIC', esigenza: 'Protezione quotidiana', colore: '#00603E', testoSuColore: '#FFFFFF', testoSuBianco: '#00603E', tintaChiara: '#E6EFEC', tintaMedia: '#B8D2C9', claim: 'Protezione quotidiana per un sorriso sano', stillY: 50 },
  { id: 'white', nome: 'WHITE', esigenza: 'Denti macchiati o ingialliti', colore: '#B1B1AE', testoSuColore: '#1D1D1B', testoSuBianco: '#757573', tintaChiara: '#F7F7F7', tintaMedia: '#E9E9E8', claim: 'Sbiancamento delicato, lucentezza naturale', stillY: 38 },
  { id: 'active', nome: 'ACTIVE', esigenza: 'Gengive che sanguinano', colore: '#AA0C38', testoSuColore: '#FFFFFF', testoSuBianco: '#AA0C38', tintaChiara: '#F6E7EB', tintaMedia: '#E7BBC7', claim: 'Azione astringente e lenitiva, per gengive più sane', stillY: 42 },
  { id: 'sensitive', nome: 'SENSITIVE', esigenza: 'Denti sensibili', colore: '#004B8D', testoSuColore: '#FFFFFF', testoSuBianco: '#004B8D', tintaChiara: '#E6EDF4', tintaMedia: '#B8CDDF', claim: 'Per contrastare la sensibilità dentinale', stillY: 65 },
  { id: 'profi', nome: 'PROFI', esigenza: 'Dopo interventi e gengive infiammate', colore: '#642271', testoSuColore: '#FFFFFF', testoSuBianco: '#642271', tintaChiara: '#F0E9F1', tintaMedia: '#D4C1D7', claim: 'Azione antibatterica intensiva con clorexidina', stillY: 42 },
  { id: 'defense', nome: 'DEFENSE', esigenza: 'Alito cattivo e placca', colore: '#EB690B', testoSuColore: '#1D1D1B', testoSuBianco: '#BE5509', tintaChiara: '#FDF0E7', tintaMedia: '#F9D5BB', claim: 'Azione antiplacca e anti-alitosi', stillY: 38 },
  { id: 'ortho', nome: 'ORTHO-IMPLANT', esigenza: 'Apparecchi e impianti', colore: '#00A6A5', testoSuColore: '#1D1D1B', testoSuBianco: '#008181', tintaChiara: '#E6F6F6', tintaMedia: '#B8E6E6', claim: 'Per portatori di apparecchi ortodontici e impianti dentali', stillY: 50 },
  { id: 'baby', nome: 'BABY-CHILDREN', esigenza: 'Bambini da 0 a 12+ anni', colore: '#EAA300', testoSuColore: '#1D1D1B', testoSuBianco: '#9A6C00', tintaChiara: '#FDF6E6', tintaMedia: '#F9E5B8', claim: 'Azione delicata e sicura per i denti dei bambini da 0 a 12+ anni', stillY: 42 },
  { id: 'denture', nome: 'DENTURE', esigenza: 'Protesi dentarie', colore: '#77BE91', testoSuColore: '#1D1D1B', testoSuBianco: '#507F61', tintaChiara: '#F1F8F4', tintaMedia: '#D9EDE0', claim: 'Stabilità e comfort per chi porta protesi dentarie', stillY: 61 },
];

export const linee: Linea[] = base.map((l) => ({
  ...l,
  still: `/assets/img/${l.id}-still.jpg`,
  life: `/assets/img/${l.id}-life.jpg`,
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
