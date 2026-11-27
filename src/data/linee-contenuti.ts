/**
 * Contenuti estesi delle pagine di linea (/la-gamma/<linea>/).
 * Fonte: president-handoff/riferimenti/03-linea-sensitive.html.
 *
 * Oggi solo SENSITIVE ha i contenuti completi. Per le altre linee le sezioni
 * senza contenuto vengono omesse dal template.
 * TODO (altre 8 linee): cover dedicata a tutta larghezza, benefici con icone,
 * "Il problema", testi della "Soluzione", "La scienza dietro la linea", "Lo spazzolino della linea".
 * Testi HTML: solo <b> per le parole in grassetto.
 */
import type { IconaLinea } from './icone';

export interface ContenutiLinea {
  /** Foto a tutta larghezza della cover. Senza: <id>-still.jpg nella metà destra. */
  cover?: { immagine: string; alt: string; larghezza: number; altezza: number };
  /** Benefici brevi della cover, con icona. Senza: i primi 3 benefici della linea con icone generiche. */
  coverBenefici?: { icona: IconaLinea; testo: string }[];

  problema?: {
    titolo: string;
    paragrafi: string[];
    stimoliTitolo: string;
    stimoli: { icona: IconaLinea; testo: string }[];
    /** Illustrazione SVG disponibile (componente in src/components/illustrazioni/). */
    illustrazione: 'molare-sensibilita';
    didascalia: string;
  };

  soluzione?: {
    sottotitolo?: string;
    /** Paragrafo (HTML). Senza: la descrizione della linea. */
    testo?: string;
    /** Frase di chiusura in evidenza. */
    frase?: string;
  };

  scienza?: {
    sottotitolo: string;
    rda: { prodotto: string; testo: string };
    mils: { prodotto: string; testo: string };
    fonte: string;
  };

  spazzolino?: {
    /** slug del prodotto in prodotti.ts */
    prodotto: string;
    immagine: string;
    alt: string;
    larghezza: number;
    altezza: number;
    /** Riga accanto al badge: HTML. */
    dettaglioMils: string;
    paragrafi: string[];
    plus: string[];
    nota?: string;
  };
}

export const contenutiLinee: Record<string, ContenutiLinea> = {
  sensitive: {
    cover: {
      immagine: '/assets/img/sensitive-hero.jpg',
      alt: 'I prodotti della linea SENSITIVE su fondo azzurro: collutorio, dentifrici, spazzolino e gel gengivale',
      larghezza: 2880,
      altezza: 1280,
    },
    coverBenefici: [
      { icona: 'dente-fulmine', testo: 'Riduce la sensibilità agli stimoli esterni' },
      { icona: 'scudo', testo: 'Rinforza lo smalto e protegge le gengive' },
      { icona: 'brillio', testo: 'Pulizia efficace e delicata' },
    ],
    problema: {
      titolo: 'Cos’è la sensibilità dentinale?',
      paragrafi: [
        'È quella <b>sensazione fastidiosa o dolorosa</b> che si avverte quando la dentina resta esposta e gli stimoli esterni (<b>caldo, freddo, dolce, acido</b>) raggiungono le terminazioni nervose del dente.',
        'Spesso le cause sono la <b>recessione gengivale</b>, l’usura dello smalto, i trattamenti sbiancanti aggressivi o l’uso di spazzolini duri e dentifrici abrasivi.',
      ],
      stimoliTitolo: 'Gli stimoli che la scatenano',
      stimoli: [
        { icona: 'caldo', testo: 'Caldo' },
        { icona: 'freddo', testo: 'Freddo' },
        { icona: 'dolce', testo: 'Dolce' },
        { icona: 'acido', testo: 'Acido' },
      ],
      illustrazione: 'molare-sensibilita',
      didascalia:
        'Quando la gengiva si ritira, la dentina della radice resta scoperta: gli stimoli arrivano al nervo attraverso i tubuli dentinali.',
    },
    soluzione: {
      sottotitolo: 'Soluzioni efficaci, delicate e ben tollerate dai tessuti più vulnerabili',
      testo:
        'Alla base delle formulazioni, <b>attivi selezionati che agiscono in sinergia</b> per ridurre la sensibilità, rinforzare lo smalto e proteggere le gengive.',
      frase: 'Con PRESIDENT SENSITIVE, gengive protette, per un sorriso senza fastidi, giorno dopo giorno.',
    },
    scienza: {
      sottotitolo: 'Valori misurati e dichiarati, per scegliere con consapevolezza',
      rda: {
        prodotto: 'dentifricio-sensitive',
        testo:
          '<b>Abrasività molto bassa</b>, delicata su smalto e dentina. Valore misurato da un laboratorio indipendente, l’Oral Health Research Institute dell’<b>Indiana University</b>, secondo la norma <b>ISO 11609</b>.',
      },
      mils: {
        prodotto: 'spazzolino-sensitive',
        testo:
          'I MILS misurano il diametro delle setole (1 MIL = 0,0254 mm): <b>meno MILS significa setole più sottili e flessibili</b>, più delicate su denti e gengive.',
      },
      fonte:
        'Fonte RDA: Determination of the Relative Dentin Abrasion Level of Dentifrices, RDA Study 09-70B, Oral Health Research Institute, Indiana University School of Dentistry, 2009 (metodo Hefferren, ISO 11609). MILS: diametro delle setole dichiarato in confezione, catalogo PRESIDENT 2027.',
    },
    spazzolino: {
      prodotto: 'spazzolino-sensitive',
      immagine: '/assets/img/spazzolino-sensitive-testina.png',
      alt: 'Primo piano della testina dello spazzolino Sensitive Extra Soft: testina ovale compatta con setole bianche extra morbide su base blu',
      larghezza: 882,
      altezza: 1093,
      dettaglioMils: '<b>4 MILS</b>: setole extra soft, Ø 0,10 mm',
      paragrafi: [
        'Assicura una <b>pulizia efficace e delicata</b> su denti e gengive sensibili. La testina compatta raggiunge con facilità anche le zone più difficili, mentre le <b>setole extra soft (4 MILS)</b> proteggono smalto e gengive.',
        'Le setole esterne, microfini e affusolate, puliscono le superfici interdentali e massaggiano il bordo gengivale; quelle interne, morbide e molto arrotondate, rimuovono la placca rispettando lo smalto.',
      ],
      plus: [
        'Testina compatta di forma ovale',
        'Setole esterne microfini e affusolate',
        'Setole interne morbide e arrotondate',
        'Manico ergonomico',
      ],
      nota: 'Ogni spazzolino è sterilizzato in fase di confezionamento, per la massima igiene.',
    },
  },
};

export const getContenuti = (id: string): ContenutiLinea => contenutiLinee[id] ?? {};
