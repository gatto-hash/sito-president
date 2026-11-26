/** Rotte del sito (vedi FONDAMENTA.md · Rotte). Le pagine non ancora costruite hanno già la rotta definitiva. */
export const rotte = {
  home: '/',
  chiSiamo: '/chi-siamo/',
  gamma: '/la-gamma/',
  linea: (linea: string) => `/la-gamma/${linea}/`,
  prodotto: (linea: string, prodotto: string) => `/la-gamma/${linea}/${prodotto}/`,
  ricerca: {
    qualita: '/ricerca/qualita-e-innovazione/',
    abrasivita: '/ricerca/abrasivita-dichiarata/',
    spazzolini: '/ricerca/gli-spazzolini/',
  },
  contatti: '/contatti/',
  /** TODO: destinazione di "Trova lo store" da confermare con il cliente (punto aperto). */
  trovaStore: '/contatti/',
  privacy: '/privacy-policy/',
  cookie: '/cookie-policy/',
  noteLegali: '/note-legali/',
} as const;

export type SezioneId = 'home' | 'chi-siamo' | 'la-gamma' | 'ricerca' | 'contatti';

/** Voci del menu RICERCA ▾ (header e footer). */
export const vociRicerca = [
  { titolo: 'Qualità e innovazione', descrizione: 'Formulazioni, analisi e certificazioni', href: rotte.ricerca.qualita },
  { titolo: 'Abrasività dichiarata', descrizione: 'Cos’è l’RDA e perché conta', href: rotte.ricerca.abrasivita },
  { titolo: 'Gli spazzolini', descrizione: 'MILS: la misura della delicatezza', href: rotte.ricerca.spazzolini },
] as const;
