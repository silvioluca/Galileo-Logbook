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
    immagine: 'images/strumenti/calibro-nonio.jpg',
  },
  {
    nome: 'Micrometro (calibro Palmer)',
    branca: 'Misura',
    grandezza: 'Lunghezza',
    unita: 'mm',
    sensibilita: '0,01 mm',
    descrizione:
      "Sfrutta una vite micrometrica per misurare spessori e diametri molto piccoli con precisione superiore al calibro a nonio. Un tamburo graduato, collegato alla vite, converte una rotazione minima in uno spostamento assiale leggibile con grande risoluzione.",
    immagine: 'images/strumenti/micrometro-palmer.jpg',
  },
  {
    nome: 'Bilancia',
    branca: 'Misura',
    grandezza: 'Massa',
    unita: 'g, kg',
    sensibilita: 'da 0,1 g (bilancia tecnica) a 1 mg (bilancia analitica)',
    descrizione:
      "Confronta la massa di un corpo con masse campione (bilance a bracci uguali) oppure misura la deformazione elastica indotta dal peso su un sensore (bilance elettroniche a cella di carico). In laboratorio didattico si usano soprattutto bilance elettroniche per rapidità e precisione.",
    immagine: 'images/strumenti/bilancia.jpg',
  },
  {
    nome: 'Cronometro',
    branca: 'Misura',
    grandezza: 'Tempo',
    unita: 's',
    sensibilita: '0,01 s (manuale); μs–ns (elettronico con fotocellule)',
    descrizione:
      "Misura intervalli di tempo. Il cronometro manuale introduce un tempo di reazione dell'operatore (qualche centesimo di secondo) che diventa un errore sistematico non trascurabile su misure brevi; per questo negli esperimenti di cinematica si preferiscono cronometri elettronici avviati e fermati da fotocellule.",
    immagine: 'images/strumenti/cronometro.jpg',
  },
  {
    nome: 'Goniometro',
    branca: 'Misura',
    grandezza: 'Angolo',
    unita: '°, rad',
    sensibilita: '1°, o pochi primi d\'arco nei modelli con nonio',
    descrizione:
      "Misura angoli tra due direzioni o superfici tramite un settore graduato e un braccio mobile. È alla base di molti strumenti ottici (banco ottico, spettrometro a prisma) dove serve leggere con precisione l'angolo di incidenza, riflessione o rifrazione di un raggio.",
    immagine: 'images/strumenti/goniometro.jpg',
  },
  {
    nome: 'Dinamometro',
    branca: 'Meccanica',
    grandezza: 'Forza',
    unita: 'N',
    sensibilita: 'dipende dalla molla; tipicamente 0,1 N',
    descrizione:
      "Misura una forza tramite l'allungamento di una molla calibrata, sfruttando la legge di Hooke (F = kx). Usato per pesare corpi, misurare l'attrito statico e dinamico, o verificare l'equilibrio di più forze concorrenti.",
    immagine: 'images/strumenti/dinamometro.jpg',
  },
  {
    nome: 'Rotaia a cuscino d\'aria',
    branca: 'Meccanica',
    grandezza: 'Posizione, velocità, accelerazione',
    unita: 'm, m/s, m/s²',
    sensibilita: 'dipende dal sistema di rilevazione (fotocellule o sensore a ultrasuoni)',
    descrizione:
      "Un binario forato da cui esce un getto d'aria sostiene un carrello praticamente senza attrito, permettendo di studiare moto rettilineo uniforme, uniformemente accelerato e urti in condizioni molto vicine a quelle ideali previste dalla teoria.",
    immagine: 'images/strumenti/rotaia-cuscino-aria.jpg',
  },
  {
    nome: 'Diapason',
    branca: 'Acustica',
    grandezza: 'Frequenza',
    unita: 'Hz',
    sensibilita: 'frequenza fissa e nota (es. 440 Hz), non regolabile',
    descrizione:
      "Barra metallica a forcella che, percossa, vibra a una frequenza fissa e molto stabile determinata dalla sua geometria. Serve come sorgente sonora di riferimento per esperimenti su onde stazionarie, risonanza e battimenti.",
    immagine: 'images/strumenti/diapason.jpg',
  },
  {
    nome: 'Termometro',
    branca: 'Termologia',
    grandezza: 'Temperatura',
    unita: '°C, K',
    sensibilita: 'da 1 °C (a mercurio/alcol) a 0,1 °C (digitale)',
    descrizione:
      "Misura la temperatura sfruttando una proprietà fisica che varia con essa: la dilatazione di un liquido in un capillare (termometri a mercurio o alcol), o la variazione di resistenza/tensione di un sensore elettronico (termocoppie, termoresistenze) nei modelli digitali.",
    immagine: 'images/strumenti/termometro.jpg',
  },
  {
    nome: 'Calorimetro',
    branca: 'Termologia',
    grandezza: 'Calore, capacità termica',
    unita: 'J, J/K',
    sensibilita: 'limitata dalla precisione del termometro accoppiato',
    descrizione:
      "Recipiente isolato termicamente (spesso a doppia parete, tipo vaso Dewar) usato per misurare scambi di calore tra corpi a temperatura diversa senza dispersioni verso l'ambiente esterno, alla base della determinazione di calori specifici e calori latenti.",
    immagine: 'images/strumenti/calorimetro.jpg',
  },
  {
    nome: 'Barometro',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione atmosferica',
    unita: 'Pa, hPa, mmHg',
    sensibilita: '~1 hPa',
    descrizione:
      "Misura la pressione atmosferica. Il barometro a mercurio (Torricelli) la deduce dall'altezza di una colonna di mercurio sostenuta dalla pressione dell'aria; i modelli aneroidi usano invece una capsula metallica che si deforma con la pressione, più pratici ma meno diretti nel principio fisico.",
    immagine: 'images/strumenti/barometro.jpg',
  },
  {
    nome: 'Manometro',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione (di un fluido in un circuito)',
    unita: 'Pa, bar',
    sensibilita: 'dipende dal modello, tipicamente qualche kPa',
    descrizione:
      "Misura la pressione di un gas o liquido contenuto in un recipiente o circuito, spesso per differenza rispetto alla pressione atmosferica (pressione relativa). I modelli a tubo a U sfruttano il dislivello di un liquido manometrico; quelli meccanici una membrana o un tubo di Bourdon.",
    immagine: 'images/strumenti/manometro.jpg',
  },
  {
    nome: 'Banco ottico',
    branca: 'Ottica',
    grandezza: 'Distanze (oggetto, immagine, focale)',
    unita: 'cm, m',
    sensibilita: 'dipende dalla scala graduata del binario, tipicamente 1 mm',
    descrizione:
      "Guida rettilinea graduata su cui scorrono sorgente luminosa, lenti/specchi e schermo, mantenendoli allineati sullo stesso asse ottico. Permette di verificare sperimentalmente l'equazione dei punti coniugati e di misurare distanze focali di lenti e specchi.",
    immagine: 'images/strumenti/banco-ottico.jpg',
  },
  {
    nome: 'Prisma ottico',
    branca: 'Ottica',
    grandezza: 'Indice di rifrazione, angolo di deviazione',
    unita: 'adimensionale, °',
    sensibilita: 'limitata dal goniometro usato per leggere gli angoli',
    descrizione:
      "Blocco trasparente a sezione triangolare che scompone la luce bianca nelle sue componenti cromatiche per rifrazione, poiché l'indice di rifrazione del vetro dipende leggermente dalla lunghezza d'onda (dispersione). Usato per studiare la dispersione della luce e misurare indici di rifrazione.",
    immagine: 'images/strumenti/prisma-ottico.jpg',
  },
  {
    nome: 'Multimetro',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione, corrente, resistenza',
    unita: 'V, A, Ω',
    sensibilita: 'dipende dal modello, tipicamente 3-4 cifre e mezza',
    descrizione:
      "Strumento digitale multifunzione che riunisce voltmetro, amperometro e ohmetro in un unico dispositivo con selettore di modalità. Ha reso in gran parte superfluo l'impiego di voltmetri e amperometri analogici separati nei laboratori didattici moderni.",
    immagine: 'images/strumenti/multimetro.jpg',
  },
  {
    nome: 'Voltmetro',
    branca: 'Elettromagnetismo',
    grandezza: 'Differenza di potenziale',
    unita: 'V',
    sensibilita: 'dipende dal modello',
    descrizione:
      "Misura la differenza di potenziale tra due punti di un circuito. Va collegato in parallelo all'elemento di cui si vuole misurare la tensione e deve avere resistenza interna molto alta per non alterare apprezzabilmente il circuito in esame.",
    immagine: 'images/strumenti/voltmetro.jpg',
  },
  {
    nome: 'Amperometro',
    branca: 'Elettromagnetismo',
    grandezza: 'Intensità di corrente',
    unita: 'A',
    sensibilita: 'dipende dal modello',
    descrizione:
      "Misura l'intensità della corrente che lo attraversa. Va inserito in serie nel ramo di circuito da misurare e deve avere resistenza interna molto bassa, così da non introdurre una caduta di potenziale significativa che alterebbe la corrente stessa.",
    immagine: 'images/strumenti/amperometro.jpg',
  },
  {
    nome: 'Generatore di funzioni',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione variabile nel tempo',
    unita: 'V, Hz',
    sensibilita: 'ampiezza e frequenza regolabili con continuità',
    descrizione:
      "Produce segnali elettrici periodici di forma (sinusoidale, quadra, triangolare), ampiezza e frequenza regolabili. Alimenta circuiti in corrente alternata per studiare fenomeni come risonanza, circuiti RLC e onde stazionarie su una corda o in un tubo sonoro.",
    immagine: 'images/strumenti/generatore-funzioni.jpg',
  },
  {
    nome: 'Oscilloscopio',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione in funzione del tempo',
    unita: 'V (asse verticale), s (asse orizzontale)',
    sensibilita: 'dipende dal modello; risoluzione temporale fino a ns',
    descrizione:
      "Visualizza graficamente l'andamento nel tempo di una tensione elettrica, permettendo di misurare ampiezza, periodo, frequenza e sfasamento di segnali anche molto rapidi, cosa impossibile con un semplice voltmetro che dà solo un valore istantaneo o medio.",
    immagine: 'images/strumenti/oscilloscopio.jpg',
  },
  {
    nome: 'Fotocellula (sensore a interruzione di raggio)',
    branca: 'Misura',
    grandezza: 'Tempo di passaggio',
    unita: 's',
    sensibilita: 'fino al μs, a seconda dell\'elettronica di acquisizione collegata',
    descrizione:
      "Rileva il passaggio di un oggetto interrompendo un raggio (spesso infrarosso) e invia il segnale a un cronometro elettronico o a un'interfaccia di acquisizione dati. Elimina il tempo di reazione umano tipico del cronometraggio manuale, rendendo affidabili le misure di velocità istantanea e accelerazione.",
    immagine: 'images/strumenti/fotocellula.jpg',
  },

  // ---- Strumenti classici, antichi e storici ----

  {
    nome: 'Bussola magnetica',
    branca: 'Misura',
    grandezza: 'Direzione (orientamento)',
    unita: '°',
    descrizione:
      "Un ago magnetizzato libero di ruotare su un perno si allinea al campo magnetico terrestre indicando il nord. Nota in Cina già nell'antichità e diffusa in Europa dal XII secolo per la navigazione, è uno dei più antichi strumenti di misura mai costruiti dall'uomo.",
    immagine: 'images/strumenti/bussola.jpg',
  },
  {
    nome: 'Sestante',
    branca: 'Misura',
    grandezza: 'Angolo (altezza di un astro sull\'orizzonte)',
    unita: '°',
    sensibilita: 'circa 0,2\' (minuti d\'arco) nei modelli marittimi di precisione',
    descrizione:
      "Misura l'angolo tra un astro e l'orizzonte riflettendo la luce su due specchi, uno dei quali semiargentato: ruotando un braccio graduato si sovrappongono le due immagini. Perfezionato nel 1757, per due secoli è stato lo strumento cardine della navigazione astronomica in mare aperto.",
    immagine: 'images/strumenti/sestante.jpg',
  },
  {
    nome: 'Teodolite',
    branca: 'Misura',
    grandezza: 'Angoli orizzontali e verticali',
    unita: '°',
    sensibilita: 'fino a pochi secondi d\'arco nei modelli topografici',
    descrizione:
      "Strumento ottico su treppiede che misura angoli orizzontali e verticali con estrema precisione tramite un cannocchiale girevole su due assi e cerchi graduati. Introdotto nel Cinquecento, resta lo strumento base della topografia e del rilevamento del territorio.",
    immagine: 'images/strumenti/teodolite.jpg',
  },
  {
    nome: 'Orologio a pendolo di Huygens',
    branca: 'Misura',
    grandezza: 'Tempo',
    unita: 's',
    descrizione:
      "Christiaan Huygens brevettò nel 1656 il primo orologio regolato da un pendolo, sfruttando l'isocronismo delle piccole oscillazioni già osservato da Galileo. Passò la precisione della misura del tempo da minuti a pochi secondi al giorno, rendendolo per secoli il riferimento per ogni misura di durata in laboratorio.",
    immagine: 'images/strumenti/orologio-huygens.jpg',
  },
  {
    nome: 'Areometro',
    branca: 'Misura',
    grandezza: 'Densità relativa di un liquido',
    unita: 'kg/L (o scala arbitraria, es. gradi Baumé)',
    descrizione:
      "Galleggiante di vetro zavorrato e graduato che affonda in un liquido fino a una profondità legata alla densità del liquido stesso, per il principio di Archimede. Più il liquido è denso, meno l'areometro affonda: una lettura diretta, senza bilance né calcoli.",
    immagine: 'images/strumenti/areometro.jpg',
  },
  {
    nome: 'Igrometro a capello',
    branca: 'Misura',
    grandezza: 'Umidità relativa dell\'aria',
    unita: '%',
    descrizione:
      "Un capello (o una fibra sintetica) si allunga leggermente con l'umidità dell'aria; l'allungamento, amplificato meccanicamente, muove una lancetta su una scala percentuale. Ideato da Horace-Bénédict de Saussure nel 1783, resta un principio ancora usato in molti igrometri economici.",
    immagine: 'images/strumenti/igrometro-capello.jpg',
  },

  {
    nome: 'Piano inclinato di Galileo',
    branca: 'Meccanica',
    grandezza: 'Spazio percorso in funzione del tempo',
    unita: 'm, s',
    descrizione:
      "Una rotaia di legno levigata, inclinata di un piccolo angolo, su cui Galileo fece rotolare sfere per \"diluire\" nel tempo la caduta libera, troppo rapida per essere cronometrata con i mezzi del Seicento. Misurando gli spazi percorsi in tempi uguali (contati a orecchio con un canto, o con una clessidra ad acqua) dimostrò che lo spazio cresce col quadrato del tempo.",
    immagine: null,
  },
  {
    nome: 'Macchina di Atwood',
    branca: 'Meccanica',
    grandezza: 'Accelerazione',
    unita: 'm/s²',
    sensibilita: 'accelerazioni ridotte a pochi cm/s², facilmente cronometrabili',
    descrizione:
      "Due masse quasi uguali collegate da un filo su una carrucola: la piccola differenza di massa produce un'accelerazione molto minore di g, facile da misurare con gli strumenti dell'epoca. Ideata da George Atwood nel 1784 per verificare sperimentalmente le leggi di Newton sul moto uniformemente accelerato.",
    immagine: 'images/strumenti/macchina-atwood.jpg',
  },
  {
    nome: 'Pendolo di Foucault',
    branca: 'Meccanica',
    grandezza: 'Rotazione terrestre (velocità angolare apparente del piano di oscillazione)',
    unita: '°/h',
    descrizione:
      "Un pendolo lungo e pesante, lasciato libero di oscillare a lungo, mantiene il proprio piano di oscillazione nello spazio mentre la Terra ruota sotto di esso: un osservatore vede il piano ruotare lentamente. Presentato da Léon Foucault nel 1851 sotto la cupola del Panthéon di Parigi, fu la prima prova diretta e visibile della rotazione terrestre.",
    immagine: 'images/strumenti/pendolo-foucault.jpg',
  },
  {
    nome: 'Bilancia di torsione di Cavendish',
    branca: 'Meccanica',
    grandezza: 'Costante di gravitazione universale G',
    unita: 'N·m²/kg²',
    descrizione:
      "Un manubrio con due piccole sfere, sospeso a un filo sottilissimo, ruota impercettibilmente per l'attrazione gravitazionale di due sfere di massa nota avvicinate ai lati. Misurando la torsione del filo, Henry Cavendish determinò nel 1798 la costante G e, con essa, la densità media della Terra.",
    immagine: 'images/strumenti/bilancia-cavendish.jpg',
  },
  {
    nome: 'Giroscopio',
    branca: 'Meccanica',
    grandezza: 'Momento angolare, precessione',
    unita: 'kg·m²/s',
    descrizione:
      "Un disco che ruota velocemente attorno al proprio asse, montato su supporti che gli lasciano libertà di orientamento (sospensione cardanica), conserva la direzione del proprio asse di rotazione e reagisce alle forze esterne con una precessione anziché ribaltandosi. Usato fin dall'Ottocento per mostrare la conservazione del momento angolare.",
    immagine: 'images/strumenti/giroscopio.jpg',
  },

  {
    nome: 'Termoscopio di Galileo',
    branca: 'Termologia',
    grandezza: 'Variazioni di temperatura (senza scala numerica)',
    unita: '—',
    descrizione:
      "Un bulbo di vetro con un lungo tubo immerso in un liquido colorato: riscaldando il bulbo l'aria si dilata e spinge giù il livello del liquido nel tubo. Costruito da Galileo intorno al 1593, non aveva ancora una vera scala graduata ma fu il primo strumento a rendere visibili le variazioni di temperatura, antenato diretto del termometro.",
    immagine: 'images/strumenti/termoscopio-galileo.jpg',
  },
  {
    nome: 'Anello di Gravesande',
    branca: 'Termologia',
    grandezza: 'Dilatazione termica lineare',
    unita: 'mm',
    descrizione:
      "Una sfera metallica passa esattamente attraverso un anello a temperatura ambiente; scaldata alla fiamma, si dilata quel tanto che basta a restare incastrata. Ideato da Willem 's Gravesande nel Settecento, rende visibile e memorabile la dilatazione termica dei solidi con un semplice esperimento qualitativo.",
    immagine: 'images/strumenti/anello-gravesande.jpg',
  },
  {
    nome: 'Radiometro di Crookes',
    branca: 'Termologia',
    grandezza: 'Intensità della radiazione luminosa incidente (qualitativa)',
    unita: 'giri/min',
    descrizione:
      "Quattro palette, nere da un lato e lucide dall'altro, ruotano libere in un bulbo di vetro a bassissima pressione quando colpite dalla luce: il lato nero assorbe più energia e riscalda il gas rarefatto circostante, che lo spinge via. Costruito da William Crookes nel 1873, mostra in modo spettacolare l'effetto meccanico della radiazione.",
    immagine: 'images/strumenti/radiometro-crookes.jpg',
  },

  {
    nome: 'Monocordo (sonometro)',
    branca: 'Acustica',
    grandezza: 'Frequenza di vibrazione di una corda',
    unita: 'Hz',
    descrizione:
      "Una corda tesa su una cassa di risonanza, con un ponticello mobile che ne varia la lunghezza vibrante. Già usato da Pitagora per collegare i rapporti tra lunghezze di corda e gli intervalli musicali, resta lo strumento più diretto per studiare come frequenza, lunghezza, tensione e massa di una corda determinano il suono prodotto.",
    immagine: 'images/strumenti/monocordo.jpg',
  },
  {
    nome: 'Sirena di Cagniard de la Tour',
    branca: 'Acustica',
    grandezza: 'Frequenza del suono',
    unita: 'Hz',
    descrizione:
      "Un disco forato ruota davanti a un getto d'aria che, interrotto a intervalli regolari dai fori, produce un suono la cui altezza dipende dalla velocità di rotazione. Inventata nel 1819, è stato il primo strumento capace di misurare direttamente la frequenza di un suono contando i giri del disco.",
    immagine: null,
  },
  {
    nome: 'Tubo di Kundt',
    branca: 'Acustica',
    grandezza: 'Velocità del suono in un gas',
    unita: 'm/s',
    descrizione:
      "Un tubo di vetro orizzontale, cosparso all'interno di polvere leggera (sughero o licopodio), viene eccitato da un'onda sonora stazionaria: la polvere si accumula nei nodi di vibrazione, disegnando un motivo regolare da cui si ricava la lunghezza d'onda e, nota la frequenza, la velocità del suono nel gas contenuto. Ideato da August Kundt nel 1866.",
    immagine: 'images/strumenti/tubo-kundt.jpg',
  },

  {
    nome: 'Cannocchiale di Galileo',
    branca: 'Ottica',
    grandezza: 'Ingrandimento angolare',
    unita: 'x (numero di ingrandimenti)',
    descrizione:
      "Combina una lente convergente (obiettivo) e una divergente (oculare) per ingrandire oggetti lontani mantenendo l'immagine diritta. Perfezionato da Galileo nel 1609 e puntato per primo verso il cielo, rivelò i crateri lunari, le fasi di Venere e i satelliti di Giove, cambiando per sempre l'astronomia.",
    immagine: 'images/strumenti/cannocchiale-galileo.jpg',
  },
  {
    nome: 'Telescopio riflettore di Newton',
    branca: 'Ottica',
    grandezza: 'Ingrandimento angolare, raccolta di luce',
    unita: 'x (ingrandimenti), mm (diametro dello specchio)',
    descrizione:
      "Usa uno specchio concavo al posto di una lente per raccogliere e focalizzare la luce, evitando l'aberrazione cromatica che affliggeva i telescopi a lenti dell'epoca. Costruito da Isaac Newton nel 1668, è il capostipite di tutti i grandi telescopi astronomici moderni, che sono quasi tutti riflettori.",
    immagine: 'images/strumenti/telescopio-newton.jpg',
  },
  {
    nome: 'Specchio ustorio',
    branca: 'Ottica',
    grandezza: 'Concentrazione dell\'energia luminosa',
    unita: '—',
    descrizione:
      "Uno specchio concavo (sferico o parabolico) concentra i raggi solari paralleli in un punto, il fuoco, dove la temperatura può salire abbastanza da incendiare materiali combustibili. Noto fin dall'antichità greca e legato alla leggendaria (e discussa) difesa di Siracusa attribuita ad Archimede, illustra in modo diretto la riflessione e la concentrazione dell'energia luminosa.",
    immagine: 'images/strumenti/specchio-ustorio.jpg',
  },
  {
    nome: 'Camera oscura',
    branca: 'Ottica',
    grandezza: 'Formazione dell\'immagine (qualitativa)',
    unita: '—',
    descrizione:
      "Una scatola o una stanza buia con un piccolo foro su una parete proietta sulla parete opposta un'immagine capovolta di ciò che sta all'esterno: il principio della propagazione rettilinea della luce, descritto già da pensatori antichi e studiato sistematicamente nel Rinascimento, è anche l'antenato diretto della fotografia.",
    immagine: 'images/strumenti/camera-oscura.jpg',
  },
  {
    nome: 'Reticolo di diffrazione',
    branca: 'Ottica',
    grandezza: 'Lunghezza d\'onda della luce',
    unita: 'nm',
    sensibilita: 'risoluzione spettrale che cresce con il numero di righe per millimetro (tipicamente 300-1200 righe/mm)',
    descrizione:
      "Una superficie incisa con migliaia di righe sottilissime e parallele scompone la luce nei suoi colori per interferenza e diffrazione, con una precisione superiore a quella di un prisma. Perfezionato da Joseph von Fraunhofer nell'Ottocento, è alla base di ogni spettrometro moderno.",
    immagine: 'images/strumenti/reticolo-diffrazione.jpg',
  },
  {
    nome: 'Spettroscopio a prisma',
    branca: 'Ottica',
    grandezza: 'Composizione spettrale della luce',
    unita: 'nm',
    descrizione:
      "Un cannocchiale, una fenditura e un prisma montati insieme permettono di osservare e misurare le righe dello spettro di una sorgente luminosa. Sviluppato da Kirchhoff e Bunsen nel 1859, ha permesso di identificare gli elementi chimici presenti nelle stelle, incluso l'elio, scoperto nello spettro solare prima che sulla Terra.",
    immagine: 'images/strumenti/spettroscopio-prisma.jpg',
  },
  {
    nome: 'Interferometro di Michelson',
    branca: 'Ottica',
    grandezza: 'Differenza di cammino ottico',
    unita: 'frazioni di lunghezza d\'onda',
    sensibilita: 'frazioni di micrometro, dell\'ordine della lunghezza d\'onda della luce visibile',
    descrizione:
      "Divide un fascio di luce in due percorsi perpendicolari con uno specchio semiriflettente, poi li ricombina: anche minime differenze di cammino ottico producono frange di interferenza visibili. L'esperimento di Michelson e Morley del 1887, che cercava invano di rilevare il moto della Terra rispetto all'etere, aprì la strada alla relatività ristretta di Einstein.",
    immagine: 'images/strumenti/interferometro-michelson.jpg',
  },

  {
    nome: 'Pila di Volta',
    branca: 'Elettromagnetismo',
    grandezza: 'Tensione elettrica continua',
    unita: 'V',
    descrizione:
      "Una pila di dischi di rame e zinco alternati, separati da panni imbevuti di acqua salata, produce una corrente elettrica continua e costante nel tempo. Presentata da Alessandro Volta nel 1800, fu il primo generatore di elettricità della storia e rese per la prima volta possibile studiare la corrente elettrica invece dei soli fenomeni elettrostatici.",
    immagine: 'images/strumenti/pila-volta.jpg',
  },
  {
    nome: 'Bottiglia di Leida',
    branca: 'Elettromagnetismo',
    grandezza: 'Carica elettrica accumulata',
    unita: 'C',
    descrizione:
      "Un vaso di vetro rivestito di stagnola sia dentro che fuori, con un'asta metallica che attraversa il tappo: è il primo condensatore della storia, capace di immagazzinare una carica elettrica e rilasciarla tutta insieme in una scarica netta. Scoperta nel 1745 a Leida, permise per la prima volta di accumulare elettricità invece di produrla e disperderla subito.",
    immagine: 'images/strumenti/bottiglia-leida.jpg',
  },
  {
    nome: 'Elettroscopio a foglie d\'oro',
    branca: 'Elettromagnetismo',
    grandezza: 'Presenza e segno di una carica elettrica (qualitativa)',
    unita: '—',
    descrizione:
      "Due sottilissime foglioline metalliche appese a un'asta si respingono divaricandosi quando l'asta viene caricata elettricamente, perché entrambe assumono carica dello stesso segno. Uno degli strumenti più antichi ed essenziali per rivelare l'elettrizzazione di un corpo, ancora oggi usato per l'estrema semplicità con cui rende visibile un fenomeno altrimenti invisibile.",
    immagine: 'images/strumenti/elettroscopio.jpg',
  },
  {
    nome: 'Macchina elettrostatica di Wimshurst',
    branca: 'Elettromagnetismo',
    grandezza: 'Alta tensione elettrostatica',
    unita: 'kV',
    descrizione:
      "Due dischi controrotanti coperti di settori metallici, con spazzole striscianti e collettori, accumulano cariche per induzione elettrostatica fino a generare scintille di parecchi centimetri. Inventata da James Wimshurst nel 1880 circa, era il generatore di alta tensione più diffuso nei laboratori didattici prima dell'elettronica.",
    immagine: 'images/strumenti/macchina-wimshurst.jpg',
  },
  {
    nome: 'Rocchetto di Ruhmkorff',
    branca: 'Elettromagnetismo',
    grandezza: 'Alta tensione impulsiva',
    unita: 'kV',
    descrizione:
      "Trasforma la bassa tensione continua di una pila in impulsi di alta tensione tramite due avvolgimenti (primario e secondario) e un interruttore vibrante che apre e chiude ripetutamente il circuito primario. Perfezionato da Heinrich Ruhmkorff a metà Ottocento, alimentò i tubi a scarica di gas con cui Röntgen scoprì i raggi X nel 1895.",
    immagine: 'images/strumenti/rocchetto-ruhmkorff.jpg',
  },
  {
    nome: 'Tubo di Crookes',
    branca: 'Elettromagnetismo',
    grandezza: 'Proprietà dei raggi catodici',
    unita: '—',
    descrizione:
      "Un tubo di vetro a bassissima pressione, con due elettrodi, in cui una scarica ad alta tensione produce un fascio di raggi catodici che viaggia in linea retta e viene deviato da campi elettrici e magnetici. Gli esperimenti di J.J. Thomson su questo tubo portarono nel 1897 alla scoperta dell'elettrone.",
    immagine: 'images/strumenti/tubo-crookes.jpg',
  },
  {
    nome: 'Bobina di Tesla',
    branca: 'Elettromagnetismo',
    grandezza: 'Alta tensione ad alta frequenza',
    unita: 'kV, MHz',
    descrizione:
      "Due circuiti risonanti accoppiati (un avvolgimento primario e uno secondario) trasformano una tensione moderata in tensioni altissime a radiofrequenza, capaci di produrre lunghi archi elettrici visibili e persino accendere lampade senza fili. Inventata da Nikola Tesla nel 1891 per i suoi studi su corrente alternata e trasmissione dell'energia.",
    immagine: 'images/strumenti/bobina-tesla.jpg',
  },
  {
    nome: 'Galvanometro',
    branca: 'Elettromagnetismo',
    grandezza: 'Piccole correnti elettriche',
    unita: 'A (o divisioni di scala)',
    sensibilita: 'fino a frazioni di microampere nei modelli a specchio',
    descrizione:
      "Una bobina percorsa da corrente, immersa in un campo magnetico, ruota di un angolo proporzionale all'intensità della corrente stessa, misurata leggendo la deviazione di un ago o di un fascio di luce riflesso da uno specchietto. Diretto discendente degli esperimenti di Ørsted e Ampère sull'elettromagnetismo, è il progenitore di amperometri e voltmetri analogici.",
    immagine: 'images/strumenti/galvanometro.jpg',
  },
  {
    nome: 'Contatore Geiger',
    branca: 'Elettromagnetismo',
    grandezza: 'Radioattività (conteggio di particelle ionizzanti)',
    unita: 'conteggi/s',
    descrizione:
      "Un tubo pieno di gas a bassa pressione, con un filo centrale a tensione elevata, produce un impulso elettrico misurabile ogni volta che una particella ionizzante lo attraversa e innesca una piccola scarica. Sviluppato da Hans Geiger nel 1908 e perfezionato con Walther Müller nel 1928, resta lo strumento più immediato per rivelare la radioattività.",
    immagine: 'images/strumenti/contatore-geiger.jpg',
  },

  {
    nome: 'Macchina pneumatica di Von Guericke',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione residua (vuoto parziale)',
    unita: 'Pa',
    descrizione:
      "Una pompa a stantuffo estrae l'aria da un recipiente chiuso, creando un vuoto parziale. Otto von Guericke la usò nel celebre esperimento degli emisferi di Magdeburgo (1654): due squadre di cavalli non riuscirono a separare due semisfere di rame tenute insieme dalla sola pressione atmosferica dopo che l'aria all'interno era stata evacuata.",
    immagine: 'images/strumenti/macchina-pneumatica.jpg',
  },
  {
    nome: 'Tubo di Venturi',
    branca: 'Fluidodinamica',
    grandezza: 'Portata e velocità di un fluido',
    unita: 'm³/s, m/s',
    descrizione:
      "Un condotto con un tratto ristretto fa aumentare la velocità del fluido e, per il teorema di Bernoulli, diminuire la sua pressione: misurando la differenza di pressione tra tratto largo e stretto si risale alla portata. Descritto da Giovanni Battista Venturi nel 1797, è ancora oggi alla base di molti misuratori di portata industriali e dei carburatori.",
    immagine: 'images/strumenti/tubo-venturi.jpg',
  },
  {
    nome: 'Fontana di Erone',
    branca: 'Fluidodinamica',
    grandezza: 'Pressione dell\'aria compressa da una colonna d\'acqua',
    unita: '—',
    descrizione:
      "Tre recipienti collegati da tubi sfruttano il dislivello e la pressione dell'aria intrappolata per far zampillare un getto d'acqua più in alto del livello di partenza, apparentemente sfidando l'intuizione. Descritta da Erone di Alessandria nel I secolo d.C., è uno dei più antichi congegni idraulici che sfrutta consapevolmente la pressione di un gas.",
    immagine: 'images/strumenti/fontana-erone.jpg',
  },
  {
    nome: 'Vaso di Mariotte',
    branca: 'Fluidodinamica',
    grandezza: 'Portata costante di efflusso',
    unita: 'm³/s',
    descrizione:
      "Un recipiente chiuso con un tubo che pesca fino a un livello fissato mantiene, sotto quel livello, una pressione di efflusso costante indipendente dal livello dell'acqua sopra di esso: il liquido esce quindi a portata costante finché il livello resta sopra l'estremità del tubo. Descritto da Edme Mariotte nel Seicento, è un classico esperimento di idrostatica.",
    immagine: 'images/strumenti/vaso-mariotte.jpg',
  },
];
