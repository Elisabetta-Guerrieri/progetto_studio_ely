/* =========================================================
   ALBA — ATELIER DI BELLEZZA
   FILE: testi.js — TUTTI I TESTI E I CONTENUTI SCRITTI
   Modifica solo questo file per cambiare le parole del sito.
   ========================================================= */

const TESTI = {

  nomeSalone: "ALBA",

  nav: {
    servizi: "Servizi",
    rituale: "Il Rituale",
    prezzi: "Prezzi",
    recensioni: "Recensioni",
    contatti: "Contatti",
    prenota: "Prenota ora"
  },

  hero: {
    eyebrow: "Atelier di bellezza · dal 2014",
    titolo: 'Il tempo si ferma<br>quando ti prendi <em>cura di te</em>',
    testo: "Trattamenti viso e corpo su misura, in un ambiente pensato per rallentare. A Grottammare, a due passi dal mare.",
    ctaPrimario: "Prenota un trattamento",
    ctaSecondario: "Scopri il rituale",
    statistiche: [
      { valore: "10+", etichetta: "anni di esperienza" },
      { valore: "1.200+", etichetta: "clienti fidelizzate" },
      { valore: "4,9/5", etichetta: "valutazione media" }
    ]
  },

  servizi: {
    eyebrow: "Cosa offriamo",
    titolo: "Trattamenti pensati<br>per ogni esigenza",
    testo: "Ogni servizio nasce da una consulenza personalizzata: analizziamo la pelle e lo stile di vita prima di scegliere il trattamento più adatto.",
    lista: [
      { numero: "01", nome: "Trattamenti viso", descrizione: "Pulizia profonda, idratazione, anti-age e protocolli specifici per pelli sensibili o impure.", prezzo: "da 45€" },
      { numero: "02", nome: "Massaggi corpo", descrizione: "Rilassante, decontratturante, drenante: ogni massaggio è calibrato su tensioni e obiettivi.", prezzo: "da 55€" },
      { numero: "03", nome: "Manicure & Pedicure", descrizione: "Cura delle mani e dei piedi con smalto semipermanente o tradizionale, ricostruzione inclusa.", prezzo: "da 25€" },
      { numero: "04", nome: "Epilazione", descrizione: "Ceretta tradizionale o a cera calda, su viso e corpo, con prodotti lenitivi post-trattamento.", prezzo: "da 12€" },
      { numero: "05", nome: "Make-up", descrizione: "Trucco giorno, sera o sposa, con prova trucco personalizzata su richiesta.", prezzo: "da 40€" },
      { numero: "06", nome: "Percorsi corpo", descrizione: "Programmi multi-seduta per rassodamento, drenaggio e rimodellamento corporeo.", prezzo: "da 180€" }
    ]
  },

  rituale: {
    eyebrow: "Il nostro segno distintivo",
    titolo: "Il Rituale del Viso Alba",
    testo: "Un percorso in quattro fasi, sempre nello stesso ordine: è la sequenza che rende il trattamento firma del salone davvero efficace.",
    fasi: [
      { label: "Fase 1", nome: "Detersione", descrizione: "Doppia detersione con oli e schiuma per rimuovere impurità e trucco senza seccare la pelle." },
      { label: "Fase 2", nome: "Esfoliazione", descrizione: "Scrub enzimatico delicato che rinnova la superficie e prepara la pelle ad assorbire i principi attivi." },
      { label: "Fase 3", nome: "Massaggio", descrizione: "Manualità linfodrenante che scioglie le tensioni del viso e ridona luminosità immediata." },
      { label: "Fase 4", nome: "Nutrizione", descrizione: "Maschera su misura e sieri specifici per sigillare i risultati e idratare in profondità." }
    ]
  },

  prezzi: {
    eyebrow: "Listino",
    titolo: "Prezzi trasparenti",
    testo: "Prezzi indicativi: la consulenza iniziale è sempre gratuita e serve a definire il trattamento più adatto.",
    colonna1: [
      { nome: "Pulizia viso profonda", durata: "60 minuti", valore: "50€" },
      { nome: "Rituale Alba (firma)", durata: "75 minuti", valore: "75€" },
      { nome: "Massaggio rilassante", durata: "50 minuti", valore: "55€" },
      { nome: "Massaggio decontratturante", durata: "50 minuti", valore: "60€" }
    ],
    colonna2: [
      { nome: "Manicure semipermanente", durata: "45 minuti", valore: "30€" },
      { nome: "Pedicure completa", durata: "50 minuti", valore: "35€" },
      { nome: "Ceretta gambe complete", durata: "30 minuti", valore: "22€" },
      { nome: "Trucco sposa (con prova)", durata: "2 sedute", valore: "150€" }
    ]
  },

  testimonianze: {
    eyebrow: "Parola alle clienti",
    titolo: "Cosa dicono di noi",
    lista: [
      { testo: "Il rituale in quattro fasi si sente davvero: esco sempre con la pelle diversa, non solo pulita.", autore: "Francesca R." },
      { testo: "Ambiente curato, personale gentile e mai fretta. È il momento della settimana che aspetto di più.", autore: "Martina D." },
      { testo: "Ho fatto il percorso corpo di 6 sedute: risultati visibili già dalla terza. Consigliatissimo.", autore: "Chiara P." }
    ]
  },

  prenota: {
    eyebrow: "Prenota il tuo momento",
    titolo: "Vieni a trovarci",
    testo: "Scrivici o chiamaci per fissare un appuntamento: la prima consulenza è sempre gratuita.",
    form: {
      labelNome: "Nome",
      placeholderNome: "Il tuo nome",
      labelTelefono: "Telefono",
      placeholderTelefono: "Il tuo numero",
      labelServizio: "Trattamento desiderato",
      opzioniServizio: ["Rituale Alba (firma)", "Trattamento viso", "Massaggio", "Manicure & Pedicure", "Altro"],
      labelNote: "Note (facoltativo)",
      placeholderNote: "Preferenze di orario, richieste particolari...",
      bottone: "Invia richiesta",
      bottoneInviato: "Richiesta inviata ✓",
      nota: "Ti ricontatteremo entro 24 ore per confermare l'appuntamento.",
      erroreNome: "Inserisci il tuo nome per continuare."
    }
  },

  footer: {
    descrizione: "Atelier di bellezza a Grottammare. Cura della pelle, del corpo e del tempo.",
    colonnaNaviga: {
      titolo: "Naviga",
      voci: ["Servizi", "Il Rituale", "Prezzi", "Recensioni"]
    },
    colonnaSocial: {
      titolo: "Seguici",
      voci: ["Instagram", "Facebook", "WhatsApp"]
    },
    copyright: "© 2026 Alba Atelier di Bellezza. Tutti i diritti riservati.",
    partitaIva: "P.IVA 00000000000"
  }
};