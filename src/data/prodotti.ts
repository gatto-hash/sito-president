/**
 * Prodotti PRESIDENT.
 * Fonte: blocchi t-<linea> di president-handoff/riferimenti/02-la-gamma.html
 * (nome, formato, badge RDA/MILS, immagine) e riferimenti/04-scheda-*.html.
 * Si popola con la pagina La gamma (prompt 2) e la scheda prodotto (prompt 4).
 */
export interface Prodotto {
  /** Slug usato nella rotta /la-gamma/<linea>/<id>/ */
  id: string;
  linea: string;
  nome: string;
  tipo?: string;
  formato?: string;
  immagine: string;
  /** Abrasività dichiarata (dentifrici). */
  rda?: number;
  /** Diametro setole (spazzolini). */
  mils?: number;
  /** Fluoro in ppm. */
  fluoroPpm?: number;
  badge?: string[];
  ean?: string;
  amazonUrl?: string;
}

export const prodotti: Prodotto[] = [];

export const prodottiDellaLinea = (linea: string) => prodotti.filter((p) => p.linea === linea);
