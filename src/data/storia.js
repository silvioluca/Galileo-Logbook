export const STORIA = [
  {
    id: 'antichita',
    periodo: 'Dalle origini al V secolo d.C.',
    titolo: "L'antichità classica",
    intro:
      "La fisica come tentativo di spiegare i fenomeni naturali attraverso cause naturali, non mitologiche, nasce nel mondo greco tra il VI e il III secolo a.C. In pochi secoli i filosofi della natura passano da speculazioni qualitative sull'origine del mondo a una vera e propria fisica matematica, capace di misurare e calcolare, con Archimede.",
    eventi: [
      { anno: '~600 a.C.', testo: 'Talete e i primi filosofi della natura a Mileto' },
      { anno: '~450 a.C.', testo: 'Atomismo di Leucippo e Democrito' },
      { anno: '~340 a.C.', testo: 'La Fisica di Aristotele' },
      { anno: '~250 a.C.', testo: 'Archimede: leva e principio di galleggiamento' },
    ],
    sezioni: [
      {
        titolo: 'I filosofi della natura ionici',
        paragrafi: [
          "Talete di Mileto è tradizionalmente considerato il primo filosofo occidentale ad aver cercato spiegazioni naturali, non mitologiche, dei fenomeni del mondo: propose che l'acqua fosse la sostanza primordiale (arché) da cui tutto deriva e in cui tutto ritorna. I suoi successori nella scuola di Mileto, Anassimandro e Anassimene, proposero altre sostanze primordiali (l'apeiron indefinito, l'aria), mentre Eraclito di Efeso vedeva nel mutamento perenne, simboleggiato dal fuoco, la vera natura del cosmo.",
          "Questo passaggio da spiegazioni mitologiche a spiegazioni naturali dei fenomeni, compiuto nel VI secolo a.C. sulle coste dell'Asia Minore, segna convenzionalmente la nascita della filosofia della natura, la matrice comune da cui si sarebbero poi separate la fisica, la biologia e le altre scienze naturali.",
        ],
      },
      {
        titolo: 'Pitagorici e atomisti',
        paragrafi: [
          "Pitagora e la sua scuola, attiva a Crotone nel VI secolo a.C., sostenevano che il numero e le proporzioni matematiche fossero l'essenza ultima della realtà: un'intuizione che anticipa di duemila anni l'idea, oggi centrale in fisica, che le leggi di natura debbano esprimersi in linguaggio matematico.",
          "In una direzione radicalmente diversa, Leucippo e il suo allievo Democrito proposero nel V secolo a.C. che l'intero universo fosse composto da particelle indivisibili ed eterne in movimento nel vuoto, gli atomi (dal greco àtomos, \"che non si può tagliare\"): un'intuizione sorprendentemente vicina, nella sua ispirazione di fondo, alla fisica delle particelle moderna, per quanto priva di qualunque verifica sperimentale e derivata dal solo ragionamento filosofico.",
        ],
      },
      {
        titolo: 'Aristotele e la fisica del cosmo',
        paragrafi: [
          "Aristotele, nel IV secolo a.C., sistematizzò per primo la conoscenza della natura in un'opera dedicata, la Fisica, proponendo una teoria del moto secondo cui ogni corpo tende verso il proprio \"luogo naturale\" (la terra e l'acqua verso il basso, l'aria e il fuoco verso l'alto) e distinguendo tra moto naturale, spontaneo, e moto violento, che richiede un motore in costante contatto con il corpo mosso.",
          "Sostenne inoltre, in un'idea poi rivelatasi errata ma dominante per quasi duemila anni, che i corpi più pesanti cadano più velocemente di quelli leggeri, e descrisse un cosmo geocentrico fatto di sfere concentriche perfette e incorruttibili al di sopra della sfera lunare. La sua autorità, trasmessa attraverso il mondo arabo e poi la Scolastica medievale, avrebbe dominato il pensiero occidentale sulla natura fino alla rivoluzione scientifica del Seicento.",
        ],
        immagine: { src: 'images/storia/aristotele.jpg', alt: 'Busto di Aristotele', didascalia: 'Copia romana di un originale greco raffigurante Aristotele.', lato: 'destra' },
      },
      {
        titolo: 'Archimede e la nascita della fisica matematica',
        paragrafi: [
          "Archimede di Siracusa, nel III secolo a.C., rappresenta il vertice della fisica matematica antica: formulò con rigore la legge della leva, fondò la statica dei fluidi con il celebre principio che porta il suo nome, secondo cui un corpo immerso in un fluido riceve una spinta verso l'alto pari al peso del fluido spostato, e calcolò aree e volumi di figure curve con un metodo di esaustione che anticipa il calcolo integrale di quasi duemila anni.",
          "A differenza della fisica qualitativa di Aristotele, quella di Archimede era genuinamente quantitativa e verificabile con la misura: un approccio che sarebbe stato pienamente recuperato solo con Galileo, quasi diciannove secoli più tardi.",
        ],
        equazione: { formula: 'F₁ · d₁ = F₂ · d₂', nome: 'Legge della leva di Archimede' },
        immagine: { src: 'images/storia/archimede.jpg', alt: 'Archimede pensieroso, dipinto di Domenico Fetti', didascalia: '"Archimede pensieroso", Domenico Fetti, 1620.', lato: 'sinistra' },
      },
    ],
  },
  {
    id: 'medioevo',
    periodo: 'V - XV secolo',
    titolo: 'Il Medioevo: eredità e innovazione',
    intro:
      "Mentre in Europa occidentale gran parte del sapere scientifico greco andava perduto dopo la caduta dell'Impero Romano, nel mondo islamico esso fu tradotto, custodito e ampliato; solo a partire dal XII secolo l'Europa lo avrebbe riscoperto, sottoponendolo a una critica che avrebbe preparato, senza ancora saperlo, la rivoluzione scientifica.",
    eventi: [
      { anno: '~1021', testo: 'Il Libro di ottica di Ibn al-Haytham' },
      { anno: '~1350', testo: "Teoria dell'impetus di Buridano" },
      { anno: '~1350', testo: 'Teorema della velocità media (Oxford e Parigi)' },
    ],
    sezioni: [
      {
        titolo: 'La scienza nel mondo islamico',
        paragrafi: [
          "Tra l'VIII e il XIII secolo, nella Casa della Saggezza di Baghdad e in altri centri del mondo islamico, i testi di Aristotele, Euclide e Tolomeo furono tradotti dal greco, studiati criticamente e considerevolmente ampliati, in un'epoca in cui in Europa occidentale questo patrimonio era in gran parte inaccessibile.",
          "Ibn al-Haytham (Alhazen), nel suo monumentale Libro di ottica (Kitab al-Manazir, inizio dell'XI secolo), rifiutò la teoria greca secondo cui è l'occhio a emettere raggi visivi verso gli oggetti, e dimostrò invece sperimentalmente, ricorrendo anche alla camera oscura, che è la luce a viaggiare in linea retta dagli oggetti fino all'occhio. Il suo insistere sulla verifica sperimentale sistematica delle ipotesi, applicata per la prima volta in modo così rigoroso allo studio della natura, gli è valso da molti storici della scienza il titolo di precursore diretto del metodo scientifico moderno.",
        ],
        equazione: { formula: 'θᵢ = θᵣ', nome: 'Legge della riflessione (Ibn al-Haytham)' },
        immagine: { src: 'images/storia/alhazen.jpg', alt: 'Ritratto di Ibn al-Haytham (Alhazen)', didascalia: 'Ibn al-Haytham in un\'incisione europea del Seicento.', lato: 'destra' },
      },
      {
        titolo: "La scolastica europea e la teoria dell'impetus",
        paragrafi: [
          "A partire dal XII secolo, grazie alla traduzione latina dei testi arabi e greci, le università europee di Parigi, Oxford e Bologna riscoprirono la fisica aristotelica, sottoponendola tuttavia a una critica sempre più serrata. Nel XIV secolo Giovanni Buridano propose la teoria dell'impetus, secondo cui un corpo lanciato riceve una sorta di \"spinta\" interna che lo mantiene in moto anche lontano dal motore che lo ha originato: un'anticipazione concettuale, per quanto ancora imprecisa, del futuro principio d'inerzia.",
          "Nello stesso periodo, i cosiddetti \"Calcolatori di Oxford\" (Mertonians) e Nicola Oresme a Parigi svilupparono la prima trattazione realmente quantitativa del moto uniformemente accelerato, dimostrando geometricamente il cosiddetto teorema della velocità media: lo spazio percorso da un corpo con accelerazione uniforme equivale a quello percorso alla sua velocità media costante nello stesso intervallo di tempo, un risultato che Galileo avrebbe poi confermato sperimentalmente quasi due secoli più tardi.",
        ],
        equazione: { formula: 's = ½ (v₀ + v) · t', nome: 'Teorema della velocità media (Oxford Calculators, XIV secolo)' },
      },
    ],
  },
  {
    id: 'rivoluzione-scientifica',
    periodo: 'XVI - XVII secolo',
    titolo: 'La rivoluzione scientifica',
    intro:
      "In poco più di un secolo, tra Copernico e Newton, la visione del mondo aristotelico-tolemaica, dominante da quasi duemila anni, viene completamente sostituita da un universo eliocentrico governato da leggi matematiche precise, verificabili con l'esperimento e valide tanto in cielo quanto in terra.",
    eventi: [
      { anno: '1543', testo: 'De revolutionibus di Copernico' },
      { anno: '1609-1619', testo: 'Le leggi di Keplero' },
      { anno: '1609', testo: 'Galileo punta il telescopio verso il cielo' },
      { anno: '1638', testo: 'Il piano inclinato e i Discorsi di Galileo' },
      { anno: '1687', testo: 'I Principia di Newton' },
    ],
    sezioni: [
      {
        titolo: 'Copernico e Keplero: il nuovo cielo',
        paragrafi: [
          "Nel 1543 Nicolò Copernico pubblicò il De revolutionibus orbium coelestium, proponendo un modello eliocentrico dell'universo in cui la Terra, come gli altri pianeti, ruota attorno al Sole: un'ipotesi che sfidava duemila anni di cosmologia geocentrica aristotelico-tolemaica, formulata inizialmente più per eleganza matematica che per prove osservative decisive.",
          "Johannes Keplero, analizzando con straordinaria pazienza le osservazioni planetarie estremamente precise raccolte da Tycho Brahe, scoprì all'inizio del Seicento che le orbite dei pianeti non sono cerchi perfetti ma ellissi, formulando le tre leggi che portano il suo nome: per la prima volta il moto celeste veniva descritto con una precisione matematica pienamente verificabile, ponendo le basi empiriche su cui Newton avrebbe poi costruito la teoria della gravitazione universale.",
        ],
        equazione: { formula: 'T² ∝ a³', nome: 'Terza legge di Keplero' },
      },
      {
        titolo: 'Galileo Galilei e il metodo sperimentale',
        paragrafi: [
          "Galileo Galilei, tra la fine del Cinquecento e i primi decenni del Seicento, è spesso considerato il padre del metodo scientifico moderno. Puntando per primo un telescopio da lui stesso perfezionato verso il cielo notturno, scoprì i quattro maggiori satelliti di Giove, le fasi di Venere e i crateri della Luna: prove decisive a favore del sistema copernicano, che gli costarono l'accusa di eresia da parte del Sant'Uffizio.",
          "Sul piano terrestre, i suoi esperimenti sul piano inclinato gli permisero di dimostrare, con misure quantitative riproducibili, che la caduta dei gravi è uniformemente accelerata e indipendente dal peso del corpo, confutando definitivamente la fisica aristotelica. Il suo insistere sulla verifica sperimentale quantitativa come unico arbitro delle teorie fisiche, più ancora delle singole scoperte compiute, resta il suo contributo più duraturo alla nascita della scienza moderna.",
        ],
        equazione: { formula: 's = ½ g t²', nome: 'Legge della caduta dei gravi (Galileo)' },
        immagine: { src: 'images/storia/galileo.jpg', alt: 'Ritratto di Galileo Galilei', didascalia: 'Galileo Galilei, ritratto di Justus Sustermans, 1635 circa.', lato: 'destra' },
      },
      {
        titolo: 'Isaac Newton e i Principia',
        paragrafi: [
          "Nel 1687 Isaac Newton pubblicò i Philosophiae Naturalis Principia Mathematica, l'opera che unificò per la prima volta la fisica terrestre e quella celeste in un unico sistema matematico coerente: le sue tre leggi del moto e la legge di gravitazione universale spiegavano contemporaneamente la caduta di un grave, le maree oceaniche e le orbite ellittiche dei pianeti scoperte da Keplero, con un'unica forza che agiva su scale di grandezza enormemente diverse.",
          "Newton sviluppò inoltre, in parallelo e indipendentemente da Gottfried Leibniz, il calcolo infinitesimale, lo strumento matematico indispensabile per trattare grandezze in continuo mutamento, e con i suoi studi di ottica dimostrò sperimentalmente che la luce bianca è in realtà composta dalla somma di tutti i colori dello spettro. La sintesi newtoniana avrebbe dominato incontrastata la fisica per oltre due secoli, fino alla rivoluzione relativistica e quantistica del Novecento.",
        ],
        equazione: { formula: 'F = m · a         F = G · (m₁m₂)/r²', nome: 'Seconda legge della dinamica e legge di gravitazione universale (Newton)' },
        immagine: { src: 'images/storia/newton.jpg', alt: 'Ritratto di Isaac Newton', didascalia: 'Isaac Newton, ritratto di Godfrey Kneller, 1689.', lato: 'sinistra' },
      },
    ],
  },
  {
    id: 'illuminismo',
    periodo: 'XVIII - metà XIX secolo',
    titolo: "L'età dei Lumi e la fisica classica",
    intro:
      "Consolidata la sintesi newtoniana, la fisica dei due secoli successivi esplora sistematicamente nuovi territori rimasti ai margini di quella sintesi: l'elettricità, il magnetismo, il calore e la natura della luce, ciascuno dei quali si rivela obbedire a leggi matematiche altrettanto precise di quelle della meccanica celeste.",
    eventi: [
      { anno: '1752', testo: "Franklin e l'elettricità dei fulmini" },
      { anno: '1785', testo: 'Legge di Coulomb' },
      { anno: '1800', testo: 'La pila di Volta' },
      { anno: '1801', testo: 'Doppia fenditura di Young' },
      { anno: '1820', testo: 'Ørsted e Ampère: elettromagnetismo' },
      { anno: '1824', testo: 'Carnot e le basi della termodinamica' },
      { anno: '1843-1850', testo: "Joule: l'equivalente meccanico del calore" },
    ],
    sezioni: [
      {
        titolo: 'Elettricità e magnetismo: i primi passi',
        paragrafi: [
          "Nel corso del Settecento l'elettricità, fino ad allora poco più che una curiosità da salotto prodotta con macchine a strofinio, divenne oggetto di indagine sistematica e quantitativa: Benjamin Franklin dimostrò con il suo celebre (e pericolosissimo) esperimento dell'aquilone la natura elettrica dei fulmini, mentre Charles-Augustin de Coulomb misurò con la sua bilancia di torsione che la forza tra due cariche elettriche obbedisce alla stessa legge dell'inverso del quadrato della distanza già scoperta da Newton per la gravitazione.",
          "Alessandro Volta inventò nel 1800 la pila elettrica, la prima sorgente di corrente continua e costante della storia, aprendo la strada a tutta l'elettrotecnica successiva; pochi anni dopo Hans Christian Ørsted e André-Marie Ampère scoprirono il legame profondo tra elettricità e magnetismo, due fenomeni fino ad allora considerati completamente distinti tra loro.",
        ],
        equazione: { formula: 'F = k · (q₁q₂)/r²', nome: 'Legge di Coulomb' },
        immagine: { src: 'images/storia/volta.jpg', alt: 'Ritratto di Alessandro Volta', didascalia: 'Alessandro Volta con una sua pila elettrica.', lato: 'destra' },
      },
      {
        titolo: 'Il calore come forma di energia: la termodinamica',
        paragrafi: [
          "All'inizio dell'Ottocento il calore era ancora spesso concepito come un fluido sottile e imponderabile, il \"calorico\", che passava semplicemente da un corpo caldo a uno freddo senza trasformarsi in nient'altro. Sadi Carnot, studiando l'efficienza teorica delle macchine a vapore, gettò nel 1824 le basi concettuali della termodinamica; James Prescott Joule dimostrò poi sperimentalmente, con grande precisione, che calore e lavoro meccanico sono interconvertibili in una proporzione fissa e riproducibile, provando che il calore è in realtà una forma di energia e non una sostanza a sé.",
          "Rudolf Clausius e William Thomson (Lord Kelvin) formularono negli anni successivi i due principi fondamentali della termodinamica, la conservazione dell'energia totale e l'inevitabile aumento dell'entropia in ogni processo naturale spontaneo: leggi universali, valide indistintamente per una macchina a vapore, un essere vivente o una stella.",
        ],
        equazione: { formula: 'ΔU = Q − L', nome: 'Primo principio della termodinamica' },
      },
      {
        titolo: 'La natura ondulatoria della luce',
        paragrafi: [
          "Contro l'autorità di Newton, che riteneva la luce composta da minuscoli corpuscoli, Thomas Young dimostrò nel 1801 con il celebre esperimento della doppia fenditura che la luce produce figure di interferenza, un comportamento tipico delle onde e del tutto incompatibile con un semplice flusso di particelle. Augustin-Jean Fresnel sviluppò negli anni immediatamente successivi una completa teoria matematica ondulatoria della luce, capace di spiegare anche il fenomeno della diffrazione.",
          "Questi risultati consolidarono per qualche decennio l'idea che la luce fosse un'onda meccanica che si propaga in un misterioso mezzo elastico ritenuto pervadere tutto lo spazio, l'etere luminifero: un'ipotesi che solo l'esperimento di Michelson e Morley, alla fine del secolo, avrebbe messo definitivamente in crisi.",
        ],
      },
    ],
  },
  {
    id: 'ottocento-elettromagnetismo',
    periodo: 'Metà - fine XIX secolo',
    titolo: "L'unificazione dell'elettromagnetismo e la crisi della fisica classica",
    intro:
      "La seconda metà dell'Ottocento vede la più grande unificazione teorica dai tempi di Newton, quella tra elettricità, magnetismo e luce compiuta da Maxwell, ma si chiude con una serie di anomalie sperimentali inspiegabili che, senza che nessuno lo sospettasse ancora, stavano per far crollare l'intero edificio della fisica classica.",
    eventi: [
      { anno: '1831', testo: 'Induzione elettromagnetica di Faraday' },
      { anno: '1865', testo: 'Le equazioni di Maxwell' },
      { anno: '1887', testo: 'Esperimento di Michelson e Morley' },
      { anno: '1895-1897', testo: "Raggi X, radioattività ed elettrone" },
    ],
    sezioni: [
      {
        titolo: 'Faraday e Maxwell: il campo elettromagnetico',
        paragrafi: [
          "Michael Faraday, sperimentatore geniale privo di formazione matematica formale, scoprì nel 1831 l'induzione elettromagnetica, il fenomeno per cui un campo magnetico variabile genera una corrente elettrica, e introdusse il concetto, allora rivoluzionario, di \"campo\" per descrivere l'interazione tra cariche e magneti: un'entità fisica che permea lo spazio circostante, in sostituzione dell'idea newtoniana di forze che agiscono istantaneamente a distanza.",
          "James Clerk Maxwell tradusse le intuizioni fisiche di Faraday in un rigoroso apparato matematico, le quattro equazioni che oggi portano il suo nome, dimostrando teoricamente che campi elettrici e magnetici variabili si propagano nello spazio sotto forma di onde, esattamente alla velocità della luce misurata sperimentalmente. Ne concluse che la luce stessa altro non è che un'onda elettromagnetica: la più grande unificazione della fisica ottocentesca.",
        ],
        equazione: { formula: 'c = 1 / √(ε₀μ₀)', nome: 'Velocità della luce dalle equazioni di Maxwell' },
        immagine: { src: 'images/storia/maxwell.jpg', alt: 'Ritratto di James Clerk Maxwell', didascalia: 'James Clerk Maxwell, fotografia degli anni 1870.', lato: 'destra' },
      },
      {
        titolo: "Le nubi all'orizzonte della fisica classica",
        paragrafi: [
          "Alla fine dell'Ottocento molti fisici ritenevano che i principi fondamentali della natura fossero ormai tutti scoperti, e che restasse solo da affinare le misure esistenti. Restavano tuttavia alcuni fenomeni inspiegati: l'esperimento di Michelson e Morley (1887) non riuscì a rilevare il moto della Terra rispetto all'etere luminifero, come se questo semplicemente non esistesse; la radiazione termica emessa da un corpo caldo (il cosiddetto \"corpo nero\") non poteva essere spiegata dalla fisica classica, che ne prevedeva assurdamente un'emissione infinita di energia alle alte frequenze, la cosiddetta \"catastrofe ultravioletta\".",
          "Nello stesso torno di anni, la scoperta dei raggi X da parte di Wilhelm Röntgen (1895), della radioattività da parte di Henri Becquerel (1896) e dell'elettrone da parte di Joseph John Thomson (1897) rivelarono che l'atomo, lungi dall'essere l'indivisibile mattone della materia immaginato dagli antichi atomisti greci, nascondeva una struttura interna complessa e fenomeni del tutto nuovi. Queste \"nubi\", come le definì lo stesso Lord Kelvin in un celebre discorso del 1900, si sarebbero presto rivelate l'inizio di non una ma due complete rivoluzioni scientifiche.",
        ],
      },
    ],
  },
  {
    id: 'rivoluzione-quantistica',
    periodo: '1900-1945',
    titolo: 'La rivoluzione quantistica e relativistica',
    intro:
      "Nel giro di poco più di quarant'anni, tra il 1900 e la Seconda guerra mondiale, due teorie completamente nuove, la relatività e la meccanica quantistica, ridefiniscono da cima a fondo i concetti stessi di spazio, tempo, materia e causalità su cui si fondava la fisica classica.",
    eventi: [
      { anno: '1900', testo: 'Il quanto di Planck' },
      { anno: '1905', testo: "Relatività ristretta ed effetto fotoelettrico di Einstein" },
      { anno: '1913', testo: 'Modello atomico di Bohr' },
      { anno: '1915', testo: 'Relatività generale' },
      { anno: '1925-1927', testo: 'Meccanica quantistica (Heisenberg, Schrödinger, Dirac)' },
      { anno: '1929', testo: "Espansione dell'universo di Hubble" },
      { anno: '1938-1945', testo: 'Fissione nucleare e Progetto Manhattan' },
    ],
    sezioni: [
      {
        titolo: 'Planck ed Einstein: i quanti di luce',
        paragrafi: [
          "Nel 1900 Max Planck risolse il problema della radiazione di corpo nero con un'ipotesi che egli stesso considerava un semplice artificio matematico provvisorio: l'energia scambiata tra materia e radiazione non è continua, ma avviene in pacchetti discreti, i \"quanti\", di energia proporzionale alla frequenza della radiazione.",
          "Albert Einstein, nel suo leggendario \"anno mirabile\" 1905, dimostrò che i quanti di luce (in seguito chiamati fotoni) sono entità fisiche reali, spiegando così l'effetto fotoelettrico, e nello stesso anno pubblicò anche la teoria della relatività ristretta, che ridefinì i concetti di spazio e tempo mostrandoli non assoluti ma relativi allo stato di moto dell'osservatore, e stabilì l'equivalenza tra massa ed energia: forse l'equazione più celebre nella storia della scienza.",
        ],
        equazione: { formula: 'E = h f          E = m c²', nome: 'Quanto di Planck-Einstein ed equivalenza massa-energia' },
        immagine: { src: 'images/storia/einstein.jpg', alt: 'Ritratto di Albert Einstein', didascalia: 'Albert Einstein, fotografia di Ferdinand Schmutzer, 1921.', lato: 'destra' },
      },
      {
        titolo: 'Bohr, de Broglie e la nuova meccanica quantistica',
        paragrafi: [
          "Niels Bohr applicò nel 1913 l'idea dei quanti alla struttura dell'atomo, proponendo che gli elettroni potessero occupare soltanto orbite discrete attorno al nucleo, spiegando così per la prima volta gli spettri di emissione degli elementi chimici. Louis de Broglie propose nel 1924 che anche la materia, non solo la luce, possedesse una natura duale onda-particella, un'intuizione audace confermata sperimentalmente pochi anni dopo dalla diffrazione degli elettroni.",
          "Tra il 1925 e il 1927 Werner Heisenberg, Erwin Schrödinger e Paul Dirac formularono, in forme matematicamente diverse ma equivalenti, la meccanica quantistica completa: una teoria che descrive il mondo subatomico non in termini di traiettorie definite ma di probabilità, e in cui, come dimostrò lo stesso Heisenberg con il suo celebre principio di indeterminazione, la posizione e la quantità di moto di una particella non possono mai essere conosciute entrambe con precisione arbitraria nello stesso istante.",
        ],
        equazione: { formula: 'Δx · Δp ≥ ħ/2', nome: 'Principio di indeterminazione di Heisenberg' },
        immagine: { src: 'images/storia/solvay.jpg', alt: 'Fotografia della Conferenza Solvay del 1927', didascalia: "La Conferenza Solvay del 1927 a Bruxelles, con quasi tutti i protagonisti della nuova fisica quantistica riuniti in un'unica fotografia.", lato: 'sinistra' },
      },
      {
        titolo: 'La relatività generale e il nuovo cosmo',
        paragrafi: [
          "Einstein completò nel 1915 la teoria della relatività generale, estendendo la relatività ai sistemi accelerati e alla gravità: la massa e l'energia curvano la geometria stessa dello spaziotempo, e ciò che percepiamo come forza di gravità non è altro che il moto di corpi liberi lungo le geodetiche di questo spaziotempo curvo. La spettacolare conferma, ottenuta durante l'eclissi solare del 1919, della deflessione della luce stellare prevista dalla teoria rese Einstein una celebrità mondiale nel giro di pochi giorni.",
          "Pochi anni dopo, le osservazioni di Edwin Hubble sullo spostamento verso il rosso della luce delle galassie lontane rivelarono che l'universo stesso è in espansione, ponendo le basi osservative su cui si sarebbe poi costruita la futura teoria del Big Bang.",
        ],
        equazione: { formula: 'Gμν + Λgμν = (8πG/c⁴) Tμν', nome: 'Equazioni di campo della relatività generale' },
      },
      {
        titolo: 'Fisica nucleare e la Seconda guerra mondiale',
        paragrafi: [
          "Negli anni Trenta Enrico Fermi e altri fisici esplorarono sistematicamente le reazioni nucleari indotte da neutroni, portando nel 1938 alla scoperta, da parte di Otto Hahn, Fritz Strassmann, Lise Meitner e Otto Frisch, della fissione nucleare: la scissione di un nucleo pesante come l'uranio in nuclei più leggeri, accompagnata da un enorme rilascio di energia.",
          "La comprensione di questo fenomeno, accelerata drammaticamente dallo scoppio della Seconda guerra mondiale, condusse al Progetto Manhattan e alla costruzione delle prime armi nucleari, ma anche, nel dopoguerra, allo sviluppo dei reattori nucleari civili: la fisica del Novecento, nata come pura ricerca teorica sulla struttura della materia, si ritrovò così proiettata al centro della storia politica e militare del mondo intero.",
        ],
      },
    ],
  },
  {
    id: 'fisica-contemporanea',
    periodo: 'Dal 1945 a oggi',
    titolo: 'La fisica contemporanea',
    intro:
      "Negli ultimi ottant'anni la fisica ha completato il Modello Standard delle particelle elementari, ricostruito la storia dell'intero universo a partire dal Big Bang, e confermato sperimentalmente due tra le sue previsioni più difficili, il bosone di Higgs e le onde gravitazionali, pur lasciando aperte domande fondamentali su cui la ricerca è tuttora impegnata.",
    eventi: [
      { anno: '1948', testo: 'Elettrodinamica quantistica' },
      { anno: '1964', testo: 'Radiazione cosmica di fondo' },
      { anno: '1960-1970', testo: 'Quark e Modello Standard' },
      { anno: '1998', testo: "Scoperta dell'espansione accelerata (energia oscura)" },
      { anno: '2012', testo: 'Bosone di Higgs' },
      { anno: '2015', testo: 'Onde gravitazionali di LIGO' },
    ],
    sezioni: [
      {
        titolo: 'Elettrodinamica quantistica e il Modello Standard',
        paragrafi: [
          "Nel secondo dopoguerra Richard Feynman, Julian Schwinger e Sin-Itiro Tomonaga svilupparono l'elettrodinamica quantistica, la teoria che descrive con una precisione straordinaria l'interazione tra luce e materia, unificando per la prima volta la relatività ristretta e la meccanica quantistica in un unico apparato coerente.",
          "Nei decenni successivi la scoperta di decine di nuove particelle subatomiche, prodotte negli acceleratori sempre più potenti, portò Murray Gell-Mann e altri a proporre, negli anni Sessanta, che protoni e neutroni fossero a loro volta composti da particelle ancora più fondamentali, i quark. Questo lavoro culminò nel Modello Standard della fisica delle particelle, completato concettualmente negli anni Settanta, che descrive con successo tre delle quattro forze fondamentali della natura, elettromagnetica, nucleare debole e nucleare forte, in termini di un numero ristretto di particelle elementari e delle loro reciproche interazioni.",
        ],
      },
      {
        titolo: "Cosmologia moderna: dal Big Bang all'energia oscura",
        paragrafi: [
          "La scoperta accidentale, nel 1964, da parte di Arno Penzias e Robert Wilson, della radiazione cosmica di fondo, il debole bagliore residuo del Big Bang che pervade in modo pressoché uniforme tutto il cielo, fornì la prova osservativa decisiva a favore di un universo nato da uno stato caldissimo e densissimo circa 13,8 miliardi di anni fa.",
          "Osservazioni più recenti, condotte alla fine degli anni Novanta sulle supernovae lontane, hanno rivelato con sorpresa che l'espansione dell'universo non sta rallentando per effetto della gravità, come ci si aspetterebbe, ma sta al contrario accelerando: un risultato che ha spinto i cosmologi a postulare l'esistenza di una misteriosa \"energia oscura\", che costituirebbe oggi da sola circa il 68% del contenuto totale dell'universo.",
        ],
        equazione: { formula: 'v = H₀ · d', nome: 'Legge di Hubble' },
        immagine: { src: 'images/storia/cms.jpg', alt: 'Interno del rivelatore CMS al CERN', didascalia: "L'interno del rivelatore CMS al CERN, uno dei quattro grandi esperimenti del Large Hadron Collider.", lato: 'destra' },
      },
      {
        titolo: 'Le grandi conferme sperimentali del XXI secolo',
        paragrafi: [
          "Il 4 luglio 2012 i due grandi esperimenti ATLAS e CMS del Large Hadron Collider del CERN annunciarono la scoperta del bosone di Higgs, la particella che conferisce massa a tutte le altre particelle elementari, prevista teoricamente quasi cinquant'anni prima da Peter Higgs e altri: un risultato che completava sperimentalmente, tassello dopo tassello, l'intero Modello Standard.",
          "Tre anni dopo, l'11 febbraio 2016, la collaborazione LIGO annunciò la prima rilevazione diretta delle onde gravitazionali, increspature dello spaziotempo previste esattamente un secolo prima da Einstein, prodotte dalla fusione di due buchi neri a oltre un miliardo di anni luce di distanza dalla Terra: l'inizio di una nuova \"astronomia gravitazionale\", capace di osservare l'universo in un modo del tutto indipendente dalla luce.",
        ],
      },
      {
        titolo: 'Le frontiere aperte',
        paragrafi: [
          "Nonostante i suoi straordinari successi, la fisica del XXI secolo affronta ancora enigmi fondamentali irrisolti: la materia oscura, che costituirebbe circa il 27% dell'universo e la cui natura resta sconosciuta nonostante decenni di ricerca; la ricerca di una teoria quantistica della gravità capace di unificare relatività generale e meccanica quantistica, per cui teoria delle stringhe e gravità quantistica a loop restano le proposte più studiate, ma nessuna ancora confermata sperimentalmente.",
          "A queste si aggiunge lo sviluppo della computazione quantistica, che sfrutta i fenomeni di sovrapposizione ed entanglement per costruire calcolatori radicalmente più potenti di quelli classici in specifiche classi di problemi. Come è accaduto a ogni generazione dai tempi di Talete, la fisica di oggi continua a porsi le stesse domande di fondo sulla natura ultima dello spazio, del tempo e della materia, ma con strumenti concettuali e sperimentali che i suoi fondatori antichi non avrebbero mai potuto immaginare.",
        ],
      },
    ],
  },
];
