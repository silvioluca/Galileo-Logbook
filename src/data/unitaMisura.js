// Catalogo delle unità di misura: le 7 fondamentali e una selezione di
// derivate del Sistema Internazionale, le principali unità del sistema
// imperiale/anglosassone ancora in uso, e alcune misure storiche/antiche.
// La formula dimensionale si riferisce alla grandezza fisica in sé, quindi
// resta la stessa per unità diverse che misurano la stessa grandezza
// (es. metro e piede sono entrambi [L]).
export const UNITA_MISURA = [
  // ---------------- SI - Unità fondamentali ----------------
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'metro',
    simboloUnita: 'm',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione:
      "Il metro è la distanza percorsa dalla luce nel vuoto in 1/299792458 di secondo.",
    storia:
      "Nato dalla Rivoluzione francese (1793) come la decimilionesima parte del quadrante del meridiano terrestre passante per Parigi, fu materializzato nel 1799 in una barra di platino conservata a Parigi (il \"metro campione\"). Ridefinito nel 1960 tramite la lunghezza d'onda di una radiazione del krypton-86, e infine nel 1983 tramite la velocità della luce, fissata per definizione a 299 792 458 m/s.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Massa',
    simboloGrandezza: 'M',
    unita: 'chilogrammo',
    simboloUnita: 'kg',
    formulaDimensionale: '[M]',
    branca: 'Misura',
    definizione:
      "Il chilogrammo è definito fissando il valore numerico della costante di Planck h a 6,62607015×10⁻³⁴ J·s.",
    storia:
      "Fino al 2019 era l'ultima unità SI ancora definita da un manufatto fisico: un cilindro di platino-iridio, il \"Grande K\", custodito a Sèvres dal 1889. La sua massa, per quanto conservata con estrema cura, poteva variare di pochi microgrammi nel tempo per contaminazione o usura. Il 20 maggio 2019 la definizione è passata a una costante fondamentale della natura, misurata con una bilancia di Kibble.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Tempo',
    simboloGrandezza: 'T',
    unita: 'secondo',
    simboloUnita: 's',
    formulaDimensionale: '[T]',
    branca: 'Misura',
    definizione:
      "Il secondo è la durata di 9 192 631 770 periodi della radiazione corrispondente alla transizione tra i due livelli iperfini dello stato fondamentale dell'atomo di cesio-133, a riposo e a 0 K.",
    storia:
      "Derivava anticamente dalla suddivisione sessagesimale babilonese del giorno (1/86400 del giorno solare medio). Poiché la rotazione terrestre non è perfettamente costante, nel 1967 la definizione fu ancorata a un fenomeno atomico invariabile, dando origine agli orologi atomici al cesio, oggi lo standard di precisione temporale più accurato mai realizzato.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Corrente elettrica',
    simboloGrandezza: 'I',
    unita: 'ampere',
    simboloUnita: 'A',
    formulaDimensionale: '[I]',
    branca: 'Elettromagnetismo',
    definizione:
      "L'ampere è definito fissando il valore numerico della carica elementare e a 1,602176634×10⁻¹⁹ coulomb.",
    storia:
      "Intitolato ad André-Marie Ampère, pioniere dell'elettrodinamica. Fino al 2019 era definito tramite la forza tra due fili paralleli percorsi da corrente, difficile da realizzare con precisione in laboratorio; la ridefinizione basata sulla carica dell'elettrone lo lega oggi a un conteggio diretto di cariche elementari.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Temperatura termodinamica',
    simboloGrandezza: 'Θ',
    unita: 'kelvin',
    simboloUnita: 'K',
    formulaDimensionale: '[Θ]',
    branca: 'Termologia',
    definizione:
      "Il kelvin è definito fissando il valore numerico della costante di Boltzmann k a 1,380649×10⁻²³ J/K.",
    storia:
      "Proposto da William Thomson (Lord Kelvin) nel 1848, introduce una scala assoluta con lo zero coincidente con lo zero assoluto (-273,15 °C), il limite teorico di minima energia termica. Fino al 2019 era definito tramite il punto triplo dell'acqua (273,16 K); oggi è ancorato alla costante di Boltzmann.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Quantità di sostanza',
    simboloGrandezza: 'N',
    unita: 'mole',
    simboloUnita: 'mol',
    formulaDimensionale: '[N]',
    branca: 'Misura',
    definizione:
      "La mole contiene esattamente 6,02214076×10²³ entità elementari (il numero di Avogadro), fissato per definizione.",
    storia:
      "Introdotta a fine Ottocento per collegare il mondo macroscopico (grammi) al numero di atomi e molecole coinvolti in una reazione chimica. Fino al 2019 era definita in riferimento alla massa del carbonio-12; oggi il numero di Avogadro è una costante fissata esattamente, rendendo la mole indipendente dal chilogrammo.",
  },
  {
    categoria: 'Fondamentali SI',
    grandezza: 'Intensità luminosa',
    simboloGrandezza: 'J',
    unita: 'candela',
    simboloUnita: 'cd',
    formulaDimensionale: '[J]',
    branca: 'Ottica',
    definizione:
      "La candela è l'intensità luminosa, in una direzione data, di una sorgente che emette radiazione monocromatica di frequenza 540×10¹² Hz con un'intensità energetica in quella direzione di 1/683 watt per steradiante.",
    storia:
      "Il nome ricorda l'unità storica di riferimento, la candela standard di cera, sostituita da fonti campione via via più riproducibili (lampade a filamento, poi radiatori a temperatura di fusione del platino) fino all'attuale definizione fisica basata su una precisa potenza radiante, adottata nel 1979.",
  },

  // ---------------- SI - Unità derivate ----------------
  {
    categoria: 'Derivate SI',
    grandezza: 'Angolo piano',
    simboloGrandezza: 'θ',
    unita: 'radiante',
    simboloUnita: 'rad',
    formulaDimensionale: '[1] (adimensionale, m/m)',
    branca: 'Misura',
    definizione:
      "Il radiante è l'angolo al centro di una circonferenza che sottende un arco di lunghezza pari al raggio.",
    storia:
      "Il termine fu coniato nel 1873 dal fisico James Thomson (fratello di Lord Kelvin), anche se il concetto di misurare angoli tramite il rapporto tra arco e raggio era già implicito nei lavori di Eulero nel Settecento. Essendo un rapporto tra due lunghezze, è formalmente adimensionale.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Angolo solido',
    simboloGrandezza: 'Ω',
    unita: 'steradiante',
    simboloUnita: 'sr',
    formulaDimensionale: '[1] (adimensionale, m²/m²)',
    branca: 'Misura',
    definizione:
      "Lo steradiante è l'angolo solido che, avendo vertice al centro di una sfera, individua sulla superficie di questa un'area equivalente a quella di un quadrato di lato pari al raggio.",
    storia:
      "Analogo tridimensionale del radiante, il nome combina il greco \"stereos\" (solido) con \"radiante\". L'intera sfera corrisponde a 4π steradianti, così come l'intero angolo giro corrisponde a 2π radianti.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Frequenza',
    simboloGrandezza: 'f',
    unita: 'hertz',
    simboloUnita: 'Hz',
    formulaDimensionale: '[T]⁻¹',
    branca: 'Acustica',
    definizione: "L'hertz è il numero di cicli o oscillazioni complete che si ripetono in un secondo.",
    storia:
      "Intitolato a Heinrich Hertz, che nel 1887 dimostrò sperimentalmente l'esistenza delle onde elettromagnetiche previste da Maxwell. Prima dell'adozione del suo nome (1930), la frequenza si esprimeva semplicemente in \"cicli al secondo\" (cps).",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Velocità',
    simboloGrandezza: 'v',
    unita: 'metro al secondo',
    simboloUnita: 'm/s',
    formulaDimensionale: '[L T⁻¹]',
    branca: 'Meccanica',
    definizione: "Rapporto tra lo spazio percorso da un corpo e il tempo impiegato a percorrerlo.",
    storia:
      "Il concetto moderno e quantitativo di velocità come rapporto spazio/tempo fu messo su basi rigorose da Galileo Galilei nei suoi studi sul moto (primi del Seicento), distinguendo per la prima volta velocità media e istantanea nello studio della caduta dei gravi.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Accelerazione',
    simboloGrandezza: 'a',
    unita: 'metro al secondo quadrato',
    simboloUnita: 'm/s²',
    formulaDimensionale: '[L T⁻²]',
    branca: 'Meccanica',
    definizione: "Rapporto tra la variazione di velocità di un corpo e il tempo in cui questa avviene.",
    storia:
      "Galileo la introdusse implicitamente descrivendo la caduta libera come un moto \"uniformemente accelerato\", ma fu Newton, nei Principia (1687), a collegarla esplicitamente alla forza applicata attraverso la sua seconda legge del moto.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Forza',
    simboloGrandezza: 'F',
    unita: 'newton',
    simboloUnita: 'N',
    formulaDimensionale: '[M L T⁻²]',
    branca: 'Meccanica',
    definizione:
      "Il newton è la forza che imprime a una massa di 1 kg un'accelerazione di 1 m/s² (F = ma).",
    storia:
      "Intitolato a Isaac Newton, che formulò la relazione fondamentale tra forza, massa e accelerazione. Il nome fu adottato ufficialmente dalla comunità scientifica internazionale solo nel 1948, quasi 260 anni dopo la pubblicazione dei Principia.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Pressione',
    simboloGrandezza: 'p',
    unita: 'pascal',
    simboloUnita: 'Pa',
    formulaDimensionale: '[M L⁻¹ T⁻²]',
    branca: 'Fluidodinamica',
    definizione: "Il pascal è la pressione esercitata da una forza di 1 newton distribuita su una superficie di 1 m².",
    storia:
      "Intitolato a Blaise Pascal per i suoi studi pionieristici sui fluidi e la pressione atmosferica (Seicento). Adottato come unità SI nel 1971; prima si usavano diffusamente l'atmosfera, il bar e il millimetro di mercurio, ancora oggi comuni in meteorologia e medicina.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Energia, lavoro, calore',
    simboloGrandezza: 'E',
    unita: 'joule',
    simboloUnita: 'J',
    formulaDimensionale: '[M L² T⁻²]',
    branca: 'Meccanica',
    definizione: "Il joule è il lavoro compiuto da una forza di 1 newton il cui punto di applicazione si sposta di 1 metro nella direzione della forza.",
    storia:
      "Intitolato a James Prescott Joule, che con celebri esperimenti (1840 circa) determinò l'equivalente meccanico del calore, dimostrando che calore e lavoro sono due forme della stessa grandezza: l'energia. Prima si usava largamente la caloria, ancora oggi comune in ambito alimentare.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Potenza',
    simboloGrandezza: 'P',
    unita: 'watt',
    simboloUnita: 'W',
    formulaDimensionale: '[M L² T⁻³]',
    branca: 'Meccanica',
    definizione: "Il watt è la potenza corrispondente a un'erogazione di energia pari a 1 joule al secondo.",
    storia:
      "Intitolato a James Watt, che perfezionò la macchina a vapore alla fine del Settecento e introdusse l'unità pratica del \"cavallo vapore\" per confrontare le sue macchine con la forza dei cavalli da tiro, ancora oggi usata informalmente per la potenza dei motori.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Carica elettrica',
    simboloGrandezza: 'Q',
    unita: 'coulomb',
    simboloUnita: 'C',
    formulaDimensionale: '[T I]',
    branca: 'Elettromagnetismo',
    definizione: "Il coulomb è la quantità di carica trasportata in 1 secondo da una corrente di 1 ampere.",
    storia:
      "Intitolato a Charles-Augustin de Coulomb, che nel 1785 misurò con una bilancia di torsione la forza tra cariche elettriche, stabilendo la legge che porta il suo nome, analoga per forma a quella della gravitazione di Newton.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Differenza di potenziale',
    simboloGrandezza: 'V',
    unita: 'volt',
    simboloUnita: 'V',
    formulaDimensionale: '[M L² T⁻³ I⁻¹]',
    branca: 'Elettromagnetismo',
    definizione: "Il volt è la differenza di potenziale tra due punti di un conduttore che, percorso da una corrente costante di 1 ampere, dissipa una potenza di 1 watt.",
    storia:
      "Intitolato ad Alessandro Volta, che nel 1800 costruì la pila voltaica, il primo generatore di corrente elettrica continua della storia, rendendo per la prima volta possibile studiare la corrente invece dei soli fenomeni elettrostatici.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Resistenza elettrica',
    simboloGrandezza: 'R',
    unita: 'ohm',
    simboloUnita: 'Ω',
    formulaDimensionale: '[M L² T⁻³ I⁻²]',
    branca: 'Elettromagnetismo',
    definizione: "L'ohm è la resistenza di un conduttore che, sottoposto a una differenza di potenziale di 1 volt, è percorso da una corrente di 1 ampere.",
    storia:
      "Intitolato a Georg Simon Ohm, che nel 1827 pubblicò la legge che lega tensione, corrente e resistenza (V = RI), inizialmente accolta con scetticismo dalla comunità scientifica tedesca e pienamente riconosciuta solo alcuni decenni più tardi.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Capacità elettrica',
    simboloGrandezza: 'C',
    unita: 'farad',
    simboloUnita: 'F',
    formulaDimensionale: '[M⁻¹ L⁻² T⁴ I²]',
    branca: 'Elettromagnetismo',
    definizione: "Il farad è la capacità di un condensatore che, caricato con 1 coulomb, presenta ai suoi capi una differenza di potenziale di 1 volt.",
    storia:
      "Intitolato a Michael Faraday, che nel 1831 scoprì l'induzione elettromagnetica. Essendo il farad un'unità enorme per i condensatori reali, nella pratica si usano quasi sempre i suoi sottomultipli, come il microfarad o il picofarad.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Induzione magnetica',
    simboloGrandezza: 'B',
    unita: 'tesla',
    simboloUnita: 'T',
    formulaDimensionale: '[M T⁻² I⁻¹]',
    branca: 'Elettromagnetismo',
    definizione: "Il tesla è l'induzione di un campo magnetico uniforme che, agendo su un conduttore rettilineo lungo 1 m percorso da 1 A, esercita su di esso una forza di 1 newton.",
    storia:
      "Intitolato a Nikola Tesla, pioniere dei sistemi a corrente alternata e dei motori a induzione. Un tesla è un'unità molto grande: il campo magnetico terrestre è dell'ordine di soli 0,00005 T, mentre le più potenti risonanze magnetiche mediche raggiungono pochi tesla.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Flusso luminoso',
    simboloGrandezza: 'Φᵥ',
    unita: 'lumen',
    simboloUnita: 'lm',
    formulaDimensionale: '[J]',
    branca: 'Ottica',
    definizione: "Il lumen è il flusso luminoso emesso in un angolo solido di 1 steradiante da una sorgente puntiforme di intensità 1 candela.",
    storia:
      "Con l'affermarsi delle lampadine a LED, il lumen ha progressivamente sostituito il watt come indicazione principale sulle confezioni delle lampadine, poiché il watt misura la potenza assorbita e non la luce effettivamente emessa.",
  },
  {
    categoria: 'Derivate SI',
    grandezza: 'Attività catalitica',
    simboloGrandezza: 'ζ',
    unita: 'katal',
    simboloUnita: 'kat',
    formulaDimensionale: '[N T⁻¹]',
    branca: 'Misura',
    definizione: "Il katal è l'attività catalitica che converte 1 mole di substrato al secondo in una reazione catalizzata.",
    storia:
      "È l'unità SI più recente tra quelle qui elencate, adottata solo nel 1999 su richiesta della comunità biochimica per standardizzare la misura dell'attività degli enzimi, prima espressa con unità non ufficiali e poco uniformi tra i laboratori.",
  },

  // ---------------- Sistema imperiale / anglosassone ----------------
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'pollice',
    simboloUnita: 'in (")',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Dal 1959 il pollice è definito esattamente come 2,54 cm.",
    storia:
      "Il nome inglese \"inch\" deriva dal latino \"uncia\" (dodicesima parte), poiché un pollice era storicamente 1/12 di piede. Una tradizione medievale lo faceva corrispondere alla lunghezza di tre chicchi d'orzo posti in fila; oggi resta in uso per gli schermi e nella filettatura dei tubi.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'piede',
    simboloUnita: 'ft',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il piede equivale esattamente a 0,3048 m (12 pollici).",
    storia:
      "Basato storicamente sulla lunghezza del piede umano, è un'unità antichissima presente, con valori leggermente diversi, in quasi tutte le civiltà (piede romano, greco, egizio...). Il piede inglese fu standardizzato nel XIV secolo e resta oggi l'unità ufficiale per l'altitudine in aviazione civile.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'iarda',
    simboloUnita: 'yd',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "La iarda equivale esattamente a 0,9144 m (3 piedi).",
    storia:
      "Secondo una tradizione popolare (probabilmente leggendaria) sarebbe stata fissata come la distanza tra il naso e il pollice del braccio teso del re Enrico I d'Inghilterra, agli inizi del XII secolo. Resta oggi l'unità di riferimento nel football americano e nel golf.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'miglio terrestre',
    simboloUnita: 'mi',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il miglio terrestre (statute mile) equivale a 1609,344 m (5280 piedi).",
    storia:
      "Il nome deriva dal latino \"mille passus\" (mille passi), l'unità di distanza usata dalle legioni romane. Il valore attuale, diverso da quello romano, fu fissato in Inghilterra nel 1593 sotto Elisabetta I. Resta l'unità stradale ufficiale in USA e Regno Unito.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'miglio nautico',
    simboloUnita: 'nmi (M)',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il miglio nautico equivale esattamente a 1852 m, definito come la lunghezza di un primo d'arco di meridiano terrestre.",
    storia:
      "A differenza delle altre unità imperiali, ha un'origine geodetica: essendo legato ai minuti d'arco di latitudine, permette ai naviganti di leggere direttamente le distanze sulle carte nautiche. È tuttora l'unità internazionale ufficiale per la navigazione aerea e marittima (da cui il nodo, un miglio nautico all'ora).",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Massa',
    simboloGrandezza: 'M',
    unita: 'libbra',
    simboloUnita: 'lb',
    formulaDimensionale: '[M]',
    branca: 'Misura',
    definizione: "La libbra avoirdupois, la più comune, equivale esattamente a 0,45359237 kg.",
    storia:
      "Deriva dal latino \"libra pondo\" (una libbra di peso), da cui anche il simbolo \"lb\". Diffusa in tutto l'impero romano e poi in Europa medievale con valori diversi da regione a regione, sopravvive oggi soprattutto negli Stati Uniti per il peso corporeo e degli alimenti.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Massa',
    simboloGrandezza: 'M',
    unita: 'oncia',
    simboloUnita: 'oz',
    formulaDimensionale: '[M]',
    branca: 'Misura',
    definizione: "L'oncia avoirdupois equivale a 1/16 di libbra, circa 28,35 g.",
    storia:
      "Dal latino \"uncia\", dodicesima parte dell'asse romano (da cui anche il pollice, dodicesima parte del piede). Il simbolo \"oz\" deriva invece dall'italiano \"onza\", passato in inglese attraverso i trattati commerciali medievali con le repubbliche marinare.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Volume',
    simboloGrandezza: 'V',
    unita: 'gallone (US)',
    simboloUnita: 'gal',
    formulaDimensionale: '[L³]',
    branca: 'Fluidodinamica',
    definizione: "Il gallone americano equivale a circa 3,785 litri; quello britannico (Imperial gallon), tuttora usato nel Regno Unito, equivale invece a circa 4,546 litri.",
    storia:
      "Il gallone americano deriva dal \"gallone del vino\" inglese medievale (usato per il commercio del vino di Bordeaux), mentre il Regno Unito nel 1824 adottò un gallone diverso basato sull'acqua: un'inconsueta divergenza che rende i due sistemi tra loro incompatibili ancora oggi.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Temperatura',
    simboloGrandezza: 'T',
    unita: 'grado Fahrenheit',
    simboloUnita: '°F',
    formulaDimensionale: '[Θ]',
    branca: 'Termologia',
    definizione: "Scala in cui l'acqua congela a 32 °F e bolle a 212 °F, legata al kelvin da T(°F) = T(°C) × 9/5 + 32.",
    storia:
      "Proposta nel 1724 da Daniel Gabriel Fahrenheit, che fissò lo zero della sua scala sulla temperatura più bassa ottenibile con un miscuglio di ghiaccio, acqua e sale ammoniacale, e i 96° sulla temperatura del corpo umano (valore poi corretto). Resta oggi in uso quotidiano principalmente negli Stati Uniti.",
  },
  {
    categoria: 'Sistema imperiale',
    grandezza: 'Superficie',
    simboloGrandezza: 'A',
    unita: 'acro',
    simboloUnita: 'ac',
    formulaDimensionale: '[L²]',
    branca: 'Misura',
    definizione: "L'acro equivale a 4046,86 m², storicamente l'area arabile da un uomo con un aratro e un paio di buoi in un giorno.",
    storia:
      "Il termine deriva dal latino \"ager\" (campo). Le sue insolite dimensioni (una striscia di un furlong per una catena) riflettono le unità di lavoro agricolo medievali inglesi. È tuttora l'unità standard per il mercato immobiliare e agricolo in USA e Regno Unito.",
  },

  // ---------------- Misure antiche e storiche ----------------
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'cubito egizio',
    simboloUnita: '—',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il cubito reale egizio misurava circa 52,4 cm, basato sulla distanza tra il gomito e la punta del dito medio.",
    storia:
      "Una delle più antiche unità di misura documentate, usata già nella costruzione delle piramidi (III millennio a.C.). Il cubito campione, in granito nero, era conservato nei templi e periodicamente confrontato con le aste di legno usate dagli architetti, a rischio di severe punizioni in caso di frode.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'piede romano',
    simboloUnita: 'pes',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il pes romano misurava circa 29,6 cm, suddiviso in 12 once (unciae) o 16 dita (digiti).",
    storia:
      "Unità base del sistema di misura romano, alla base anche del miglio (mille passus, mille passi doppi, pari a 5000 piedi). Diffuso in tutto l'impero attraverso le vie consolari, sopravvisse localmente, con lievi varianti regionali, ben oltre la caduta di Roma.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'miglio romano',
    simboloUnita: 'mille passus',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il miglio romano corrispondeva a mille passus (passi doppi) e misurava circa 1,48 km.",
    storia:
      "Le distanze lungo le strade consolari romane erano segnalate da colonne miliari (\"milliarium\"), il cui capostipite era il Milliarium Aureum eretto da Augusto nel Foro Romano, punto simbolico da cui si misuravano tutte le distanze dell'impero.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Massa',
    simboloGrandezza: 'M',
    unita: 'libbra romana',
    simboloUnita: 'libra',
    formulaDimensionale: '[M]',
    branca: 'Misura',
    definizione: "La libra romana equivaleva a circa 327 grammi, suddivisa in 12 once (unciae).",
    storia:
      "Il simbolo moderno della libbra, \"lb\", e l'abbreviazione della lira come moneta derivano entrambi da questa unità. Il sistema duodecimale libbra/oncia romano influenzò la maggior parte dei sistemi di peso europei fino all'adozione del sistema metrico decimale.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'stadio greco',
    simboloUnita: 'stadion',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Lo stadio greco misurava tra i 176 e i 192 metri circa, a seconda della città e dell'epoca (600 piedi greci).",
    storia:
      "Prendeva il nome dalla lunghezza delle piste di corsa negli antichi stadi olimpici, di cui costituiva anche l'unità di misura ufficiale. Eratostene lo usò nel III secolo a.C. per la sua celebre stima, sorprendentemente accurata, della circonferenza terrestre.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Massa',
    simboloGrandezza: 'M',
    unita: 'talento',
    simboloUnita: '—',
    formulaDimensionale: '[M]',
    branca: 'Misura',
    definizione: "Il talento attico, la più diffusa delle sue varianti, corrispondeva a circa 26 kg ed era anche un'unità monetaria (60 mine).",
    storia:
      "Originariamente un'unità di massa mesopotamica, il talento divenne nel mondo greco anche la più alta unità di conto monetario, tipicamente espressa in argento: da qui l'uso figurato della parola \"talento\" per indicare una grande dote o capacità, attraverso la parabola evangelica dei talenti.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'braccio fiorentino',
    simboloUnita: '—',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "Il braccio fiorentino da panno misurava circa 58,4 cm.",
    storia:
      "Diffuso nell'Italia medievale e rinascimentale per il commercio dei tessuti, variava sensibilmente da città a città (il braccio fiorentino non coincideva con quello milanese o veneziano), rendendo notoriamente complicati gli scambi commerciali tra stati italiani prima dell'unificazione metrica ottocentesca.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Volume',
    simboloGrandezza: 'V',
    unita: 'staio',
    simboloUnita: '—',
    formulaDimensionale: '[L³]',
    branca: 'Fluidodinamica',
    definizione: "Lo staio, unità di capacità per aridi (soprattutto cereali) diffusa in Italia, valeva a seconda della città tra i 24 e i 90 litri circa.",
    storia:
      "Il termine è ancora vivo nel modo di dire italiano \"nascondere la luce sotto lo staio\" (di origine evangelica). Come per il braccio, il suo valore effettivo variava enormemente da una città-stato italiana all'altra, uno dei tanti motivi che resero urgente l'adozione di un sistema di misura unico e condiviso.",
  },
  {
    categoria: 'Misure antiche',
    grandezza: 'Lunghezza',
    simboloGrandezza: 'L',
    unita: 'canna',
    simboloUnita: '—',
    formulaDimensionale: '[L]',
    branca: 'Misura',
    definizione: "La canna, unità italiana per misurare tessuti e terreni, valeva a seconda della regione tra circa 2 e 3 metri.",
    storia:
      "Il nome deriva dalle canne vegetali usate come aste di misura fin dall'antichità. Restò in uso in molte regioni italiane, specialmente per l'agrimensura, fino all'adozione ufficiale del sistema metrico decimale nel Regno d'Italia (1861 in poi, con la legge del 1845 già estesa dal Regno di Sardegna).",
  },
];
