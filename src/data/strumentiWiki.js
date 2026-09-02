// Catalogo degli strumenti di misura usati in laboratorio di fisica. Per ora
// solo testo (niente immagini): il campo `immagine` è già previsto per
// quando si vorranno aggiungere le foto, ma resta null.
export const STRUMENTI_WIKI = [
  {
    nome: 'Calibro a nonio',
    branca: 'Misura',
    grandezza: 'Lunghezza',
    unita: 'mm',
    sensibilita: '0,05 mm (nonio a 20 divisioni) o 0,02 mm (50 divisioni)',
    descrizione:
      "Misura lunghezze, diametri interni/esterni e profondità grazie a due coppie di becchi e un'astina di profondità. Il nonio, una scala ausiliaria che scorre affiancata alla scala principale, permette di leggere frazioni della più piccola divisione millimetrica senza bisogno di stime a occhio.",
    immagine: null,
  },
  {
    nome: 'Micrometro (calibro Palmer)',
    branca: 'Misura',
    grandezza: 'Lunghezza',
    unita: 'mm',
    sensibilita: '0,01 mm',
    descrizione:
      "Sfrutta una vite micrometrica per misurare spessori e diametri molto piccoli con precisione superiore al calibro a nonio. Un tamburo graduato, collegato alla vite, converte una rotazione minima in uno spostamento assiale leggibile con grande risoluzione.",
    immagine: null,
  },
  {
    nome: 'Bilancia',
    branca: 'Misura',
    grandezza: 'Massa',
    unita: 'g, kg',
    sensibilita: 'da 0,1 g (bilancia tecnica) a 1 mg (bilancia analitica)',
    descrizione:
      "Confronta la massa di un corpo con masse campione (bilance a bracci uguali) oppure misura la deformazione elastica indotta dal peso su un sensore (bilance elettroniche a cella di carico). In laboratorio didattico si usano soprattutto bilance elettroniche per rapidità e precisione.",
    immagine: null,
  },
  {
    nome: 'Cronometro',
    branca: 'Misura',
    grandezza: 'Tempo',
    unita: 's',
    sensibilita: '0,01 s (manuale); μs–ns (elettronico con fotocellule)',
    descrizione:
      "Misura intervalli di tempo. Il cronometro manuale introduce un tempo di reazione dell'operatore (qualche centesimo di secondo) che diventa un errore sistematico non trascurabile su misure brevi; per questo negli esperimenti di cinematica si preferiscono cronometri elettronici avviati e fermati da fotocellule.",
    immagine: null,
  },
  {
    nome: 'Goniometro',
    branca: 'Misura',
    grandezza: 'Angolo',
    unita: '°, rad',
    sensibilita: '1°, o pochi primi d\'arco nei modelli con nonio',
    descrizione:
      "Misura angoli tra due direzioni o superfici tramite un settore graduato e un braccio mobile. È alla base di molti strumenti ottici (banco ottico, spettrometro a prisma) dove serve leggere con precisione l'angolo di incidenza, riflessione o rifrazione di un raggio.",
    immagine: null,
  },
  {
    nome: 'Dinamometro',
    branca: 'Meccanica',
    grandezza: 'Forza',
    unita: 'N',
    sensibilita: 'dipende dalla molla; tipicamente 0,1 N',
    descrizione:
      "Misura una forza tramite l'allungamento di una molla calibrata, sfruttando la legge di Hooke (F = kx). Usato per pesare corpi, misurare l'attrito statico e dinamico, o verificare l'equilibrio di più forze concorrenti.",
    immagine: null,
  },
  {
    nome: 'Rotaia a cuscino d\'aria',
    branca: 'Meccanica',
    grandezza: 'Posizione, velocità, accelerazione',
    unita: 'm, m/s, m/s²',
    sensibilita: 'dipende dal sistema di rilevazione (fotocellule o sensore a ultrasuoni)',
    descrizione:
      "Un binario forato da cui esce un getto d'aria sostiene un carrello praticamente senza attrito, permettendo di studiare moto rettilineo uniforme, uniformemente accelerato e urti in condizioni molto vicine a quelle ideali previste dalla teoria.",
    immagine: null,
  },
  {
    nome: 'Diapason',
    branca: 'Acustica',
    grandezza: 'Frequenza',
    unita: 'Hz',
    sensibilita: 'frequenza fissa e nota (es. 440 Hz), non regolabile',
    descrizione:
      "Barra metallica a forcella che, percossa, vibra a una frequenza fissa e molto stabile determinata dalla sua geometria. Serve come sorgente sonora di riferimento per esperimenti su onde stazionarie, risonanza e battimenti.",
    immagine: null,
  },
  {
    nome: 'Termometro',
    branca: 'Termologia',
    grandezza: 'Temperatura',
    unita: '°C, K',
    sensibilita: 'da 1 °C (a mercurio/alcol) a 0,1 °C (digitale)',
    descrizione:
      "Misura la temperatura sfruttando una proprietà fisica che varia con essa: la dilatazione di un liquido in un capillare (termometri a mercurio o alcol), o la variazione di resistenza/tensione di un sensore elettronico (termocoppie, termoresistenze) nei modelli digitali.",
    immagine: null,
  },
  {
    nome: 'Calorimetro',
    branca: 'Termologia',
    grandezza: 'Calore, capacità termica',
    unita: 'J, J/K',
    sensibilita: 'limitata dalla precisione del termometro accoppiato',
    descrizione:
      "Recipiente isolato termicamente (spesso a doppia parete, tipo vaso Dewar) usato per misurare scambi di calore tra corpi a temperatura diversa senza dispersioni verso l'ambiente esterno, alla base della determinazione di calori specifici e calori latenti.",
    immagine: null,
  },
  {
    nome: 'Barometro',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione atmosferica',
    unita: 'Pa, hPa, mmHg',
    sensibilita: '~1 hPa',
    descrizione:
      "Misura la pressione atmosferica. Il barometro a mercurio (Torricelli) la deduce dall'altezza di una colonna di mercurio sostenuta dalla pressione dell'aria; i modelli aneroidi usano invece una capsula metallica che si deforma con la pressione, più pratici ma meno diretti nel principio fisico.",
    immagine: null,
  },
  {
    nome: 'Manometro',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione (di un fluido in un circuito)',
    unita: 'Pa, bar',
    sensibilita: 'dipende dal modello, tipicamente qualche kPa',
    descrizione:
      "Misura la pressione di un gas o liquido contenuto in un recipiente o circuito, spesso per differenza rispetto alla pressione atmosferica (pressione relativa). I modelli a tubo a U sfruttano il dislivello di un liquido manometrico; quelli meccanici una membrana o un tubo di Bourdon.",
    immagine: null,
  },
  {
    nome: 'Banco ottico',
    branca: 'Ottica',
    grandezza: 'Distanze (oggetto, immagine, focale)',
    unita: 'cm, m',
    sensibilita: 'dipende dalla scala graduata del binario, tipicamente 1 mm',
    descrizione:
      "Guida rettilinea graduata su cui scorrono sorgente luminosa, lenti/specchi e schermo, mantenendoli allineati sullo stesso asse ottico. Permette di verificare sperimentalmente l'equazione dei punti coniugati e di misurare distanze focali di lenti e specchi.",
    immagine: null,
  },
  {
    nome: 'Prisma ottico',
    branca: 'Ottica',
    grandezza: 'Indice di rifrazione, angolo di deviazione',
    unita: 'adimensionale, °',
    sensibilita: 'limitata dal goniometro usato per leggere gli angoli',
    descrizione:
      "Blocco trasparente a sezione triangolare che scompone la luce bianca nelle sue componenti cromatiche per rifrazione, poiché l'indice di rifrazione del vetro dipende leggermente dalla lunghezza d'onda (dispersione). Usato per studiare la dispersione della luce e misurare indici di rifrazione.",
    immagine: null,
  },
  {
    nome: 'Multimetro',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione, corrente, resistenza',
    unita: 'V, A, Ω',
    sensibilita: 'dipende dal modello, tipicamente 3-4 cifre e mezza',
    descrizione:
      "Strumento digitale multifunzione che riunisce voltmetro, amperometro e ohmetro in un unico dispositivo con selettore di modalità. Ha reso in gran parte superfluo l'impiego di voltmetri e amperometri analogici separati nei laboratori didattici moderni.",
    immagine: null,
  },
  {
    nome: 'Voltmetro',
    branca: 'Elettromagnetismo',
    grandezza: 'Differenza di potenziale',
    unita: 'V',
    sensibilita: 'dipende dal modello',
    descrizione:
      "Misura la differenza di potenziale tra due punti di un circuito. Va collegato in parallelo all'elemento di cui si vuole misurare la tensione e deve avere resistenza interna molto alta per non alterare apprezzabilmente il circuito in esame.",
    immagine: null,
  },
  {
    nome: 'Amperometro',
    branca: 'Elettromagnetismo',
    grandezza: 'Intensità di corrente',
    unita: 'A',
    sensibilita: 'dipende dal modello',
    descrizione:
      "Misura l'intensità della corrente che lo attraversa. Va inserito in serie nel ramo di circuito da misurare e deve avere resistenza interna molto bassa, così da non introdurre una caduta di potenziale significativa che alterebbe la corrente stessa.",
    immagine: null,
  },
  {
    nome: 'Generatore di funzioni',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione variabile nel tempo',
    unita: 'V, Hz',
    sensibilita: 'ampiezza e frequenza regolabili con continuità',
    descrizione:
      "Produce segnali elettrici periodici di forma (sinusoidale, quadra, triangolare), ampiezza e frequenza regolabili. Alimenta circuiti in corrente alternata per studiare fenomeni come risonanza, circuiti RLC e onde stazionarie su una corda o in un tubo sonoro.",
    immagine: null,
  },
  {
    nome: 'Oscilloscopio',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione in funzione del tempo',
    unita: 'V (asse verticale), s (asse orizzontale)',
    sensibilita: 'dipende dal modello; risoluzione temporale fino a ns',
    descrizione:
      "Visualizza graficamente l'andamento nel tempo di una tensione elettrica, permettendo di misurare ampiezza, periodo, frequenza e sfasamento di segnali anche molto rapidi, cosa impossibile con un semplice voltmetro che dà solo un valore istantaneo o medio.",
    immagine: null,
  },
  {
    nome: 'Fotocellula (sensore a interruzione di raggio)',
    branca: 'Misura',
    grandezza: 'Tempo di passaggio',
    unita: 's',
    sensibilita: 'fino al μs, a seconda dell\'elettronica di acquisizione collegata',
    descrizione:
      "Rileva il passaggio di un oggetto interrompendo un raggio (spesso infrarosso) e invia il segnale a un cronometro elettronico o a un'interfaccia di acquisizione dati. Elimina il tempo di reazione umano tipico del cronometraggio manuale, rendendo affidabili le misure di velocità istantanea e accelerazione.",
    immagine: null,
  },
];
