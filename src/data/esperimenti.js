// Catalogo dei più celebri esperimenti della storia della fisica. Il campo
// `immagine` non è ancora popolato (segue lo stesso schema già usato per
// strumenti e Nobel, per poterle aggiungere in seguito senza altre modifiche).
export const ESPERIMENTI = [
  // ---------------- Meccanica classica ----------------
  {
    categoria: 'Meccanica classica',
    nome: 'La misura della Terra di Eratostene',
    anno: 'circa 240 a.C.',
    scienziato: 'Eratostene di Cirene',
    cosaDimostra: 'La circonferenza della Terra, misurata con un semplice bastone e la geometria',
    descrizione:
      "Confrontando l'ombra di uno gnomone a mezzogiorno in due città egiziane a distanza nota, Eratostene stimò la circonferenza terrestre con un errore di appena il 2-16% (le fonti storiche non concordano sull'esatta unità di misura usata).",
    dettagli:
      "Eratostene, direttore della Biblioteca di Alessandria, sapeva che a Siene (l'odierna Assuan), nel giorno del solstizio d'estate, il Sole a mezzogiorno si specchiava sul fondo di un pozzo verticale, segno che si trovava esattamente allo zenit. Lo stesso giorno, alla stessa ora, ad Alessandria un bastone verticale (gnomone) proiettava un'ombra che formava un angolo di circa 7,2° con la verticale — un cinquantesimo di angolo giro. Poiché i raggi del Sole, essendo la sua distanza enorme, possono essere considerati paralleli, quell'angolo doveva coincidere con l'angolo al centro della Terra sotteso dall'arco tra le due città. Conoscendo la distanza approssimativa tra Alessandria e Siene (stimata in giorni di cammino di carovana), Eratostene moltiplicò quella distanza per 50, ottenendo la circonferenza dell'intero pianeta. È il primo esempio noto di misura scientifica di una grandezza planetaria ottenuta con la sola geometria, senza mai lasciare l'Egitto.",
    immagine: null,
  },
  {
    categoria: 'Meccanica classica',
    nome: 'Il piano inclinato di Galileo',
    anno: '1602-1609 circa',
    scienziato: 'Galileo Galilei',
    cosaDimostra: 'La legge di caduta dei gravi: lo spazio percorso cresce col quadrato del tempo',
    descrizione:
      "Facendo rotolare sfere lungo una scanalatura di legno inclinata, Galileo \"diluì\" nel tempo la caduta libera — troppo rapida per essere cronometrata con i mezzi dell'epoca — e dimostrò che lo spazio percorso è proporzionale al quadrato del tempo trascorso.",
    dettagli:
      "Il problema con lo studio diretto della caduta libera è che, sulle brevi altezze disponibili in un laboratorio, il fenomeno dura pochissimi decimi di secondo: impossibile da cronometrare con precisione senza orologi accurati. Galileo ebbe l'intuizione di rallentare il fenomeno riducendo l'inclinazione di un piano lungo il quale far rotolare una sfera di bronzo, mantenendo però inalterata la natura del moto uniformemente accelerato. Come unità di tempo usò il proprio polso, o secondo alcune ricostruzioni un piccolo orologio ad acqua che misurava il tempo pesando l'acqua fuoriuscita. Segnando le posizioni raggiunte dalla sfera a intervalli di tempo uguali, trovò che gli spazi percorsi stavano tra loro come i numeri dispari consecutivi (1, 3, 5, 7...) — una progressione che implica esattamente che lo spazio totale cresce col quadrato del tempo. Questo risultato, pubblicato nei Discorsi e dimostrazioni matematiche intorno a due nuove scienze (1638), demolì la fisica aristotelica del moto e pose le basi del metodo sperimentale moderno.",
    immagine: null,
  },
  {
    categoria: 'Meccanica classica',
    nome: 'La bilancia di torsione di Cavendish',
    anno: '1797-1798',
    scienziato: 'Henry Cavendish',
    cosaDimostra: 'Il valore della costante di gravitazione universale G, e quindi la massa e la densità media della Terra',
    descrizione:
      "Misurando l'attrazione gravitazionale, incredibilmente debole, tra sfere di piombo in laboratorio, Cavendish determinò per la prima volta il valore della costante G nella legge di Newton, permettendo di calcolare la massa dell'intero pianeta.",
    dettagli:
      "Newton aveva formulato la legge di gravitazione universale un secolo prima, ma senza modo di misurarne la costante G: la forza gravitazionale tra due oggetti di massa ordinaria è talmente debole da essere impercettibile. Cavendish riprese uno strumento ideato dal reverendo John Michell (morto prima di poterlo usare): un manubrio orizzontale con due piccole sfere di piombo alle estremità, sospeso al centro con un sottilissimo filo di torsione. Avvicinando due sfere di piombo molto più grandi ai lati del manubrio, l'attrazione gravitazionale, per quanto minuscola, faceva ruotare impercettibilmente il manubrio, torcendo il filo fino a un nuovo equilibrio. Cavendish osservava la rotazione con un telescopio da una stanza separata, per evitare che correnti d'aria o il calore del proprio corpo disturbassero l'esperimento. Dalla torsione misurata, nota la rigidità del filo, calcolò G con una precisione che rimase la migliore disponibile per un secolo. Da G, unita all'accelerazione di gravità g già nota, dedusse la massa della Terra e la sua densità media — motivo per cui l'esperimento è spesso ricordato come \"la pesatura del mondo\".",
    immagine: null,
  },
  {
    categoria: 'Meccanica classica',
    nome: 'Il pendolo di Foucault',
    anno: '1851',
    scienziato: 'Léon Foucault',
    cosaDimostra: 'La rotazione della Terra sul proprio asse, resa visibile senza osservare il cielo',
    descrizione:
      "Un pendolo lungo e pesante, lasciato libero di oscillare a lungo sotto la cupola del Panthéon di Parigi, mantenne il proprio piano di oscillazione nello spazio mentre il pavimento sottostante ruotava lentamente, offrendo la prima prova diretta e visibile della rotazione terrestre.",
    dettagli:
      "Che la Terra ruotasse sul proprio asse era accettato dagli astronomi fin da Copernico, ma nessun esperimento condotto interamente in laboratorio, senza osservare le stelle, lo aveva mai dimostrato in modo diretto. Foucault intuì che un pendolo libero di oscillare in ogni direzione (sospeso con un giunto cardanico che non trasmette torsione) conserva il proprio piano di oscillazione nello spazio assoluto, per inerzia — indipendentemente dalla rotazione della superficie terrestre sottostante. Un osservatore sulla Terra, ruotando insieme al pavimento, vede quindi il piano del pendolo ruotare lentamente rispetto a sé, anche se in realtà è lui a muoversi. Nel gennaio 1851 Foucault presentò un primo pendolo nella sua cantina; il 31 marzo dello stesso anno ne installò uno spettacolare, lungo 67 metri con una sfera di 28 kg, sotto la cupola del Panthéon di Parigi, davanti a una folla di curiosi che osservavano la lenta ma inesorabile rotazione del piano di oscillazione, che alle nostre latitudini compie un giro completo in circa un giorno e mezzo. Repliche del pendolo di Foucault sono oggi installate in musei scientifici di tutto il mondo.",
    immagine: null,
  },

  // ---------------- Elettromagnetismo ----------------
  {
    categoria: 'Elettromagnetismo',
    nome: "L'ago di Ørsted",
    anno: '1820',
    scienziato: 'Hans Christian Ørsted',
    cosaDimostra: 'Il collegamento tra elettricità e magnetismo: una corrente elettrica genera un campo magnetico',
    descrizione:
      "Durante una lezione universitaria, Ørsted notò per caso che l'ago di una bussola posta vicino a un filo percorso da corrente deviava dalla direzione nord-sud, rivelando per la prima volta un legame diretto tra elettricità e magnetismo.",
    dettagli:
      "Fino al 1820, elettricità e magnetismo erano considerati due fenomeni completamente distinti e senza relazione. Durante una dimostrazione a lezione nell'aprile del 1820, il fisico danese Hans Christian Ørsted stava mostrando agli studenti il riscaldamento di un filo percorso da corrente, quando notò che l'ago di una bussola posta accidentalmente nelle vicinanze si spostava ogni volta che il circuito veniva chiuso, per tornare in posizione quando veniva aperto. Colpito dall'osservazione, passò mesi a ripetere e affinare l'esperimento prima di pubblicare i risultati nel luglio del 1820, dimostrando che una corrente elettrica genera attorno a sé un campo magnetico, capace di deviare un ago magnetico posto anche a una certa distanza e non allineato col filo. La scoperta, resa nota in latino in un breve trattato inviato alle principali accademie scientifiche europee, scatenò una vera e propria corsa alla ricerca: nel giro di poche settimane André-Marie Ampère formulò la legge matematica che descrive la forza tra fili percorsi da corrente, ponendo le basi dell'elettrodinamica.",
    immagine: null,
  },
  {
    categoria: 'Elettromagnetismo',
    nome: "L'induzione elettromagnetica di Faraday",
    anno: '1831',
    scienziato: 'Michael Faraday',
    cosaDimostra: 'Un campo magnetico variabile genera (induce) una corrente elettrica',
    descrizione:
      "Muovendo un magnete dentro e fuori da una bobina di filo, Faraday osservò la comparsa di una corrente elettrica indotta, scoprendo il principio fisico alla base di ogni generatore e trasformatore elettrico moderno.",
    dettagli:
      "Se una corrente elettrica genera un campo magnetico, come mostrato da Ørsted, Faraday si chiese se fosse possibile il fenomeno inverso: ottenere elettricità dal magnetismo. Dopo diversi tentativi falliti con campi magnetici statici, il 29 agosto 1831 Faraday scoprì che era il cambiamento del campo magnetico, non la sua semplice presenza, a produrre l'effetto: collegando un galvanometro a una bobina di filo e infilando o sfilando rapidamente una calamita al suo interno, l'ago del galvanometro si muoveva soltanto durante il movimento del magnete, tornando a zero non appena questo si fermava. Faraday formulò così la legge dell'induzione elettromagnetica: la forza elettromotrice indotta in un circuito è proporzionale alla rapidità di variazione del flusso magnetico che lo attraversa. Con lo stesso principio costruì anche il primo rudimentale generatore elettrico e il primo motore elettrico della storia. Il lavoro di Faraday, che non aveva una formazione matematica avanzata e descriveva i fenomeni per immagini e \"linee di forza\", fu tradotto in equazioni rigorose una generazione più tardi da James Clerk Maxwell.",
    immagine: null,
  },
  {
    categoria: 'Elettromagnetismo',
    nome: 'Le onde elettromagnetiche di Hertz',
    anno: '1886-1889',
    scienziato: 'Heinrich Hertz',
    cosaDimostra: "L'esistenza delle onde elettromagnetiche previste teoricamente da Maxwell",
    descrizione:
      "Costruendo un trasmettitore a scintilla e un semplice anello di filo come ricevitore, Hertz produsse e rivelò in laboratorio le onde elettromagnetiche previste vent'anni prima dalla teoria di Maxwell, confermandone la validità e aprendo la strada alla radio.",
    dettagli:
      "Nel 1865 James Clerk Maxwell aveva unificato elettricità, magnetismo e ottica in un'unica teoria matematica, prevedendo l'esistenza di onde elettromagnetiche capaci di propagarsi anche nel vuoto alla velocità della luce — ma la sua teoria era accolta con scetticismo da molti fisici, mancando una prova sperimentale diretta. Heinrich Hertz costruì un oscillatore formato da due sfere metalliche separate da un piccolo spazio (spinterometro), in cui un'alta tensione produceva una scarica a scintilla oscillante; come rivelatore usò un semplice anello di filo con un'analoga interruzione, posto a distanza. Quando l'oscillatore scaricava, anche nell'anello ricevitore scoccava una minuscola scintilla, sincronizzata a distanza senza alcun collegamento via filo: la prova diretta che l'energia si propagava nello spazio sotto forma di onda. Hertz misurò anche la lunghezza d'onda di queste \"onde hertziane\" facendole riflettere e formare onde stazionarie, calcolandone la velocità di propagazione, che risultò coincidere con quella della luce, come previsto da Maxwell. Ironicamente, lo stesso Hertz riteneva che la sua scoperta non avesse alcuna applicazione pratica; pochi anni dopo Guglielmo Marconi la userà come base della telegrafia senza fili.",
    immagine: null,
  },
  {
    categoria: 'Elettromagnetismo',
    nome: "La scoperta dell'elettrone di Thomson",
    anno: '1897',
    scienziato: 'Joseph John Thomson',
    cosaDimostra: "L'esistenza di una particella subatomica carica negativamente, l'elettrone",
    descrizione:
      "Studiando la deflessione dei raggi catodici sotto campi elettrici e magnetici in un tubo a vuoto, Thomson dimostrò che erano composti da particelle molto più leggere di qualsiasi atomo, dotate di carica negativa: la prima particella subatomica mai identificata.",
    dettagli:
      "I \"raggi catodici\", prodotti in tubi di vetro a bassa pressione da una scarica elettrica ad alta tensione, erano oggetto di dibattito: alcuni fisici li ritenevano onde nell'etere, altri un flusso di particelle cariche. J.J. Thomson costruì un tubo a raggi catodici migliorato, capace di deviare il fascio sia con un campo elettrico sia con un campo magnetico applicati contemporaneamente. Bilanciando i due effetti, riuscì per la prima volta a misurare separatamente la velocità delle particelle e il loro rapporto carica/massa (e/m), trovando un valore circa 1800 volte più grande di quello noto per lo ione idrogeno: la prova che i raggi catodici erano fatti di particelle molto più leggere di qualunque atomo conosciuto, che chiamò \"corpuscoli\" (oggi elettroni). Fu la prima dimostrazione sperimentale che l'atomo, ritenuto fino ad allora indivisibile fin dall'antichità greca, aveva in realtà una struttura interna. Thomson propose quindi un primo modello atomico (il \"panettone\", con gli elettroni immersi in una carica positiva diffusa), poi superato pochi anni dopo dal modello nucleare di Rutherford.",
    immagine: null,
  },
  {
    categoria: 'Elettromagnetismo',
    nome: "L'esperimento della goccia d'olio di Millikan",
    anno: '1909-1913',
    scienziato: 'Robert Millikan',
    cosaDimostra: 'La carica elettrica è quantizzata: esiste una carica elementare minima, quella dell\'elettrone',
    descrizione:
      "Osservando minuscole goccioline d'olio elettricamente cariche sospese tra due elettrodi, e misurando la forza elettrica necessaria a bilanciarne il peso, Millikan dimostrò che la carica elettrica esiste sempre in multipli interi di una carica minima e fondamentale.",
    dettagli:
      "Millikan spruzzava un fine aerosol di goccioline d'olio in una camera dotata di due piastre metalliche orizzontali, tra le quali poteva applicare una differenza di potenziale. Le goccioline, cariche elettricamente per attrito durante la nebulizzazione (o ionizzate con raggi X), cadevano per gravità ma potevano essere rallentate, fermate o fatte risalire regolando il campo elettrico tra le piastre. Osservando al microscopio una singola goccia e misurandone la velocità di caduta libera (da cui, nota la viscosità dell'aria, si ricava il raggio e quindi il peso della goccia) e la tensione necessaria a tenerla in equilibrio, Millikan poteva calcolare la carica elettrica netta di quella specifica goccia. Ripetendo la misura su centinaia di gocce diverse, trovò che tutte le cariche misurate erano multipli interi esatti di uno stesso valore minimo: 1,592×10⁻¹⁹ coulomb (il valore moderno è 1,602×10⁻¹⁹ C, la piccola discrepanza era dovuta a un valore leggermente impreciso usato per la viscosità dell'aria). L'esperimento dimostrò per la prima volta in modo diretto che la carica elettrica non è continua ma \"quantizzata\", cioè esiste sempre in pacchetti discreti multipli di una carica elementare, quella dell'elettrone. Millikan ricevette il premio Nobel per la fisica nel 1923.",
    immagine: null,
  },

  // ---------------- Ottica e relatività ----------------
  {
    categoria: 'Ottica e relatività',
    nome: 'La doppia fenditura di Young',
    anno: '1801',
    scienziato: 'Thomas Young',
    cosaDimostra: 'La natura ondulatoria della luce, attraverso il fenomeno dell\'interferenza',
    descrizione:
      "Facendo passare la luce attraverso due sottili fenditure parallele, Young osservò sullo schermo una serie di frange chiare e scure alternate, spiegabili solo ammettendo che la luce si comporti come un'onda capace di interferire con se stessa.",
    dettagli:
      "Nel Settecento la teoria corpuscolare della luce di Newton, secondo cui la luce è un flusso di minuscole particelle, dominava incontrastata sulla rivale teoria ondulatoria di Christiaan Huygens. Thomas Young fece passare la luce di una sorgente attraverso due fenditure sottili e molto vicine tra loro, praticate in uno schermo opaco, osservando su un secondo schermo, posto più lontano, un motivo di bande chiare e scure alternate anziché due semplici strisce di luce corrispondenti alle fenditure. Questo motivo, detto figura di interferenza, si spiega solo ammettendo che la luce proveniente dalle due fenditure si comporti come un'onda: nei punti dove le due onde arrivano in fase le loro creste si sommano producendo luce intensa (interferenza costruttiva), mentre dove arrivano in controfase si annullano a vicenda producendo oscurità (interferenza distruttiva) — un fenomeno impossibile da spiegare con semplici particelle che viaggiano in linea retta. L'esperimento, presentato alla Royal Society nel 1803, incontrò inizialmente forte resistenza per il prestigio scientifico di Newton, ma pose le basi per l'accettazione definitiva della teoria ondulatoria della luce, confermata poi matematicamente da Augustin-Jean Fresnel. Un secolo più tardi, la stessa doppia fenditura, ripetuta con singoli elettroni o fotoni, sarebbe diventata uno degli esperimenti più profondi e discussi di tutta la meccanica quantistica.",
    immagine: null,
  },
  {
    categoria: 'Ottica e relatività',
    nome: 'La misura della velocità della luce di Fizeau',
    anno: '1849',
    scienziato: 'Hippolyte Fizeau',
    cosaDimostra: 'La prima misura terrestre (non astronomica) della velocità della luce',
    descrizione:
      "Facendo passare un raggio di luce attraverso i denti di una ruota dentata rotante fino a un lontano specchio e ritorno, Fizeau misurò per la prima volta la velocità della luce interamente con un apparato da laboratorio sulla Terra.",
    dettagli:
      "Le prime stime della velocità della luce, dovute a Ole Rømer (1676) e James Bradley (1728), si basavano su osservazioni astronomiche (i tempi di eclisse dei satelliti di Giove, l'aberrazione stellare). Fizeau ideò un metodo puramente terrestre: un raggio di luce, fatto passare tra i denti di una ruota dentata che ruotava a velocità elevata e regolabile, percorreva circa 8 km fino a uno specchio lontano (a Suresnes, vicino Parigi) e tornava indietro, passando di nuovo per la ruota. Se nel frattempo la ruota era avanzata esattamente di mezzo dente, il raggio di ritorno veniva bloccato dal dente successivo anziché passare attraverso lo stesso spazio vuoto da cui era uscito, facendo scomparire la luce vista dall'osservatore. Regolando con precisione la velocità di rotazione fino a trovare la prima scomparsa della luce, e conoscendo con precisione la distanza percorsa e il numero di denti della ruota, Fizeau calcolò un valore di circa 313 000 km/s, entro il 5% del valore oggi noto (299 792 km/s). Il metodo fu perfezionato l'anno successivo dal suo ex collaboratore Léon Foucault, che sostituì la ruota dentata con uno specchio rotante, ottenendo risultati ancora più precisi.",
    immagine: null,
  },
  {
    categoria: 'Ottica e relatività',
    nome: "L'esperimento di Michelson-Morley",
    anno: '1887',
    scienziato: 'Albert Michelson e Edward Morley',
    cosaDimostra: "L'inesistenza dell'etere luminifero, aprendo la strada alla relatività ristretta",
    descrizione:
      "Cercando di misurare il \"vento d'etere\" prodotto dal moto della Terra attraverso il mezzo in cui si riteneva si propagasse la luce, Michelson e Morley non trovarono alcuna differenza di velocità nelle due direzioni testate: un risultato negativo che si rivelò tra i più fecondi della storia della fisica.",
    dettagli:
      "Nell'Ottocento si riteneva che la luce, come le onde sonore nell'aria, avesse bisogno di un mezzo materiale per propagarsi: l'\"etere luminifero\", che avrebbe dovuto pervadere tutto lo spazio. Se la Terra si muove attraverso questo etere immobile durante la sua orbita, un raggio di luce dovrebbe viaggiare a velocità leggermente diversa a seconda che si propaghi nella direzione del moto terrestre o perpendicolarmente ad essa, proprio come un nuotatore impiega tempi diversi a nuotare a favore o contro corrente. Michelson costruì un interferometro estremamente sensibile che divide un raggio di luce in due percorsi perpendicolari, li fa riflettere su specchi e li ricombina: anche una minima differenza di velocità lungo i due bracci avrebbe prodotto uno spostamento misurabile delle frange di interferenza ruotando l'apparato di 90°. Insieme a Edward Morley, nel 1887 Michelson eseguì la misura con una precisione senza precedenti, montando l'intero apparato su un blocco di marmo galleggiante su mercurio per eliminare le vibrazioni — ma non trovò alcuno spostamento significativo delle frange, ben al di sotto di quanto previsto se l'etere fosse esistito. Questo celebre \"esperimento fallito\" (Michelson lo considerò per anni un insuccesso) dimostrò che la velocità della luce è la stessa in tutte le direzioni indipendentemente dal moto della Terra, un risultato inspiegabile nella fisica classica che Einstein pose, nel 1905, alla base della teoria della relatività ristretta, eliminando la necessità stessa dell'etere.",
    immagine: null,
  },
  {
    categoria: 'Ottica e relatività',
    nome: "L'effetto fotoelettrico",
    anno: '1887 (osservazione) / 1905 (spiegazione) / 1916 (verifica)',
    scienziato: 'Heinrich Hertz, Albert Einstein, Robert Millikan',
    cosaDimostra: 'La natura quantizzata della luce: è composta da fotoni, pacchetti discreti di energia',
    descrizione:
      "L'osservazione che la luce può strappare elettroni da una superficie metallica, ma solo se la sua frequenza supera una soglia (indipendentemente dall'intensità), portò Einstein a proporre che la luce sia composta da quanti di energia discreti, i fotoni.",
    dettagli:
      "Hertz notò per primo, nel 1887, quasi per caso durante i suoi esperimenti sulle onde elettromagnetiche, che una scintilla scoccava più facilmente se una delle due sfere era illuminata da luce ultravioletta. Studi successivi mostrarono un fatto sconcertante per la fisica classica: la luce può espellere elettroni da una lastra metallica (effetto fotoelettrico), ma questo avviene solo se la sua frequenza supera un certo valore di soglia, specifico per ogni metallo — al di sotto di quella soglia, nessun elettrone viene emesso, non importa quanto la luce sia intensa; al di sopra della soglia, invece, basta pochissima luce perché l'emissione avvenga istantaneamente. La teoria ondulatoria classica della luce, in cui l'energia di un'onda dipende dalla sua intensità e non dalla sua frequenza, non riusciva a spiegare questo comportamento. Nel 1905, nello stesso \"anno mirabile\" della relatività ristretta, Einstein propose che la luce sia composta da pacchetti discreti di energia (poi chiamati fotoni), ciascuno con energia proporzionale alla frequenza secondo la relazione E = hf, dove h è la costante di Planck: solo un fotone con energia sufficiente può liberare un elettrone, spiegando perfettamente la soglia di frequenza osservata. Fu Robert Millikan, inizialmente scettico verso l'ipotesi di Einstein, a verificarla sperimentalmente con grande precisione tra il 1914 e il 1916, misurando anche un valore della costante di Planck in ottimo accordo con quello ricavato dallo studio del corpo nero. Einstein ricevette il premio Nobel per la fisica nel 1921 proprio per questa spiegazione, non per la più celebre teoria della relatività.",
    immagine: null,
  },
  {
    categoria: 'Ottica e relatività',
    nome: "La conferma della relatività generale durante l'eclissi del 1919",
    anno: '1919',
    scienziato: 'Arthur Eddington',
    cosaDimostra: 'La curvatura dello spazio-tempo prevista dalla relatività generale di Einstein',
    descrizione:
      "Fotografando le stelle vicine al bordo del Sole durante un'eclissi totale in Africa e in Brasile, la spedizione guidata da Eddington misurò una deviazione della luce stellare in accordo con la relatività generale e non con la fisica newtoniana, rendendo Einstein una celebrità mondiale.",
    dettagli:
      "Nel 1915 Einstein aveva pubblicato la teoria della relatività generale, secondo cui la gravità non è una forza a distanza come in Newton, ma una curvatura dello spazio-tempo prodotta dalla massa: un corpo molto massiccio come il Sole dovrebbe quindi deviare leggermente la traiettoria della luce che gli passa vicino, con un valore doppio rispetto a quello previsto (per ragioni diverse) dalla fisica newtoniana classica. L'unico modo per verificarlo era fotografare le stelle apparentemente vicine al bordo del disco solare, cosa impossibile in condizioni normali per l'abbagliante luminosità del Sole — a meno di farlo durante un'eclissi solare totale, quando la Luna oscura completamente il disco solare. L'astronomo britannico Arthur Eddington organizzò due spedizioni per l'eclissi del 29 maggio 1919, una sull'isola di Príncipe, al largo dell'Africa occidentale, e una a Sobral, in Brasile. Confrontando le posizioni fotografate delle stelle vicine al Sole eclissato con le loro posizioni note in assenza del Sole (fotografate mesi prima), Eddington misurò uno spostamento apparente in ottimo accordo con la previsione della relatività generale (1,75 secondi d'arco) e incompatibile con quella newtoniana (0,87 secondi d'arco). L'annuncio dei risultati, il 6 novembre 1919 a Londra, fece il giro del mondo e trasformò Einstein, praticamente da un giorno all'altro, in una celebrità globale.",
    immagine: null,
  },

  // ---------------- Fisica atomica e nucleare ----------------
  {
    categoria: 'Fisica atomica e nucleare',
    nome: 'Lo scattering di Rutherford',
    anno: '1909-1911',
    scienziato: 'Hans Geiger, Ernest Marsden, Ernest Rutherford',
    cosaDimostra: "L'esistenza di un nucleo atomico piccolo, denso e carico positivamente al centro dell'atomo",
    descrizione:
      "Bombardando una sottilissima lamina d'oro con particelle alfa, Geiger e Marsden osservarono che alcune di esse rimbalzavano indietro quasi come se avessero colpito un muro, portando Rutherford a proporre che l'atomo abbia un nucleo centrale piccolo, denso e carico positivamente.",
    dettagli:
      "Secondo il modello atomico allora dominante, proposto da J.J. Thomson (il \"modello a panettone\"), la carica positiva dell'atomo era distribuita uniformemente in tutto il suo volume, con gli elettroni immersi al suo interno come uvetta in un panettone: un simile atomo avrebbe dovuto essere praticamente trasparente a particelle pesanti e veloci. Su suggerimento di Ernest Rutherford, i suoi assistenti Hans Geiger ed Ernest Marsden bombardarono una lamina d'oro sottilissima (pochi atomi di spessore) con un fascio di particelle alfa (nuclei di elio, emesse da una sorgente radioattiva), osservando dove esse venivano deviate tramite un schermo di solfuro di zinco che emetteva un piccolo lampo di luce a ogni impatto. La stragrande maggioranza delle particelle attraversava la lamina quasi senza deviazione, come atteso — ma circa 1 particella su 8000 rimbalzava con angoli superiori a 90°, alcune quasi tornando indietro verso la sorgente. Rutherford descrisse questo risultato come \"quasi incredibile, come se sparando un proiettile da 15 pollici contro un foglio di carta velina, questo rimbalzasse indietro e colpisse voi stessi\". L'unica spiegazione possibile era che la carica positiva dell'atomo, invece di essere diffusa, fosse concentrata in un nucleo centrale estremamente piccolo (circa centomila volte più piccolo dell'intero atomo) ma con quasi tutta la sua massa: solo un nucleo così denso poteva respingere elettrostaticamente le rare particelle alfa che gli passavano vicinissime. Rutherford pubblicò il nuovo modello atomico \"planetario\" nel 1911, ponendo le basi della fisica nucleare moderna.",
    immagine: null,
  },
  {
    categoria: 'Fisica atomica e nucleare',
    nome: "L'effetto Compton",
    anno: '1923',
    scienziato: 'Arthur Compton',
    cosaDimostra: "I fotoni si comportano come particelle dotate di quantità di moto, non solo come onde",
    descrizione:
      "Facendo diffondere raggi X da elettroni di un bersaglio di grafite, Compton osservò che la luce diffusa aveva una lunghezza d'onda maggiore di quella incidente, spiegabile solo trattando il fotone come una vera particella dotata di quantità di moto che urta elasticamente con l'elettrone.",
    dettagli:
      "Compton diresse un fascio di raggi X di lunghezza d'onda nota contro un blocco di grafite, misurando con uno spettrometro a cristallo la lunghezza d'onda dei raggi X diffusi in varie direzioni. Trovò che la radiazione diffusa aveva sistematicamente una lunghezza d'onda maggiore (quindi minore energia) di quella incidente, e che l'aumento dipendeva dall'angolo di diffusione ma non dal materiale del bersaglio — un risultato del tutto incompatibile con la teoria ondulatoria classica della luce, secondo cui la diffusione non dovrebbe alterare la frequenza. Compton spiegò l'effetto trattando il fotone non come un'onda ma come una vera particella con energia E = hf e quantità di moto p = h/λ, che urta elasticamente contro un elettrone quasi libero come farebbero due palle da biliardo: nell'urto il fotone cede parte della sua energia e quantità di moto all'elettrone, uscendo con energia minore e quindi lunghezza d'onda maggiore, esattamente secondo le leggi di conservazione della quantità di moto e dell'energia applicate a un urto relativistico. L'accordo perfetto tra teoria e misure sperimentali convinse anche gli ultimi scettici che la luce, oltre a comportarsi come onda in fenomeni come l'interferenza, si comporta a tutti gli effetti come una particella nelle interazioni con la materia: la prova più diretta del dualismo onda-particella. Compton ricevette il premio Nobel per la fisica nel 1927.",
    immagine: null,
  },
  {
    categoria: 'Fisica atomica e nucleare',
    nome: "L'esperimento di Franck-Hertz",
    anno: '1914',
    scienziato: 'James Franck e Gustav Hertz',
    cosaDimostra: "L'energia interna degli atomi è quantizzata, assumendo solo valori discreti",
    descrizione:
      "Accelerando elettroni attraverso vapore di mercurio, Franck e Hertz osservarono che l'energia veniva assorbita dagli atomi solo in pacchetti discreti di valore fisso, confermando sperimentalmente che i livelli energetici atomici sono quantizzati come previsto dal modello di Bohr.",
    dettagli:
      "Franck e Hertz costruirono un tubo a vuoto contenente vapore di mercurio a bassa pressione, in cui elettroni emessi da un filamento riscaldato venivano accelerati da una tensione variabile verso una griglia, per poi raggiungere un elettrodo collettore attraverso una piccola tensione frenante. Misurando la corrente raccolta al variare della tensione di accelerazione, si aspettavano un aumento continuo — trovarono invece che la corrente cresceva regolarmente fino a un valore di tensione ben preciso (4,9 volt), poi crollava bruscamente, per poi ricominciare a salire e ripetere lo stesso crollo a multipli quasi esatti di quella stessa tensione (9,8 V, 14,7 V...). La spiegazione: quando l'energia cinetica di un elettrone, accelerato da quella specifica tensione, eguaglia esattamente l'energia necessaria a far compiere a un atomo di mercurio un salto verso un livello energetico superiore, l'elettrone cede tutta la sua energia in un unico urto anelastico con l'atomo, e non ha più abbastanza energia per raggiungere il collettore contro la tensione frenante; a tensioni leggermente diverse, invece, l'urto è elastico e l'elettrone mantiene la sua energia. Il fatto che il crollo di corrente avvenisse solo a valori di tensione discreti e ben definiti, e non con continuità, fu la prima conferma sperimentale diretta che l'energia interna degli atomi può assumere solo valori discreti (quantizzati), esattamente come previsto pochi mesi prima dal modello atomico di Niels Bohr. Franck e Hertz ricevettero il premio Nobel per la fisica nel 1925.",
    immagine: null,
  },
  {
    categoria: 'Fisica atomica e nucleare',
    nome: 'Lo Stern-Gerlach',
    anno: '1922',
    scienziato: 'Otto Stern e Walther Gerlach',
    cosaDimostra: 'Il momento magnetico degli atomi (e quindi lo spin) è quantizzato, non continuo',
    descrizione:
      "Facendo passare un fascio di atomi d'argento attraverso un campo magnetico non uniforme, Stern e Gerlach osservarono che il fascio si separava in due macchie distinte su uno schermo, anziché formare una striscia continua, rivelando che il momento magnetico atomico può assumere solo due valori discreti.",
    dettagli:
      "Se gli atomi si comportassero come piccoli magneti orientati in modo casuale, come previsto dalla fisica classica, un fascio di atomi che attraversa un campo magnetico fortemente disomogeneo dovrebbe deviare con un'ampia gamma continua di angoli, a seconda dell'orientazione casuale di ciascun atomo, formando sullo schermo di raccolta un'unica striscia allargata e continua. Stern e Gerlach fecero passare un sottile fascio di atomi d'argento, prodotto vaporizzando il metallo in un forno, attraverso i poli sagomati di un elettromagnete che produceva un campo magnetico molto disomogeneo, per poi raccoglierli su una lastra di vetro. Con grande sorpresa, il fascio si separò nettamente in due macchie distinte e separate, simmetriche rispetto alla direzione del fascio non deviato, senza alcuna traccia intermedia continua. Questo dimostrava che il momento magnetico degli atomi d'argento, invece di poter puntare in una direzione qualsiasi, può assumere in quella direzione solo due valori discreti e opposti — un fenomeno di quantizzazione spaziale che all'epoca non era ancora del tutto compreso, e che solo alcuni anni dopo sarebbe stato correttamente interpretato come manifestazione dello spin, un momento angolare intrinseco degli elettroni privo di analogo classico, che può assumere appunto solo due orientazioni (\"su\" o \"giù\") rispetto a un campo magnetico esterno. L'esperimento è oggi anche alla base concettuale del funzionamento dei maser e degli orologi atomici.",
    immagine: null,
  },
  {
    categoria: 'Fisica atomica e nucleare',
    nome: 'La diffrazione degli elettroni di Davisson e Germer',
    anno: '1927',
    scienziato: 'Clinton Davisson e Lester Germer',
    cosaDimostra: "La natura ondulatoria della materia: anche gli elettroni si comportano come onde",
    descrizione:
      "Osservando che un fascio di elettroni riflesso da un cristallo di nichel produceva un motivo di diffrazione tipico delle onde, Davisson e Germer confermarono sperimentalmente l'ipotesi di de Broglie secondo cui ogni particella materiale ha anche una natura ondulatoria.",
    dettagli:
      "Nel 1924 Louis de Broglie aveva proposto, nella sua tesi di dottorato, un'idea audace: se la luce, tradizionalmente considerata un'onda, si comporta anche come una particella (il fotone), forse anche le particelle materiali come gli elettroni possiedono una natura ondulatoria, con una lunghezza d'onda inversamente proporzionale alla loro quantità di moto. Davisson e Germer, che stavano studiando la superficie di un campione di nichel bombardandolo con elettroni a bassa energia (in origine per tutt'altri scopi), osservarono per caso, dopo che un incidente in laboratorio aveva accidentalmente ricristallizzato il campione in pochi grandi cristalli, che l'intensità degli elettroni riflessi variava fortemente e in modo regolare con l'angolo di osservazione, esattamente come un motivo di diffrazione dei raggi X da un reticolo cristallino. Analizzando questi dati alla luce della teoria di de Broglie, Davisson si rese conto che gli angoli di massima intensità corrispondevano esattamente a quelli previsti per la diffrazione di un'onda con la lunghezza d'onda calcolata dalla formula di de Broglie per la velocità di quegli elettroni. La conferma sperimentale, pubblicata nel 1927, dimostrò che gli elettroni — e per estensione ogni particella materiale — possiedono davvero una natura ondulatoria, completando il quadro del dualismo onda-particella che è oggi uno dei pilastri della meccanica quantistica. De Broglie ricevette il premio Nobel nel 1929, Davisson (insieme a George Paget Thomson, che ottenne indipendentemente lo stesso risultato) nel 1937.",
    immagine: null,
  },
  {
    categoria: 'Fisica atomica e nucleare',
    nome: 'La scoperta del neutrone di Chadwick',
    anno: '1932',
    scienziato: 'James Chadwick',
    cosaDimostra: "L'esistenza del neutrone, la particella neutra che completa la struttura del nucleo atomico",
    descrizione:
      "Bombardando il berillio con particelle alfa, Chadwick osservò l'emissione di una radiazione neutra molto penetrante, capace di espellere protoni dalla paraffina: la prova dell'esistenza del neutrone, la particella mancante per completare il modello del nucleo atomico.",
    dettagli:
      "Dopo la scoperta del protone, si sapeva che il nucleo atomico non poteva essere composto di soli protoni, perché la loro carica positiva totale non avrebbe corrisposto alla massa nucleare osservata. Nel 1930 i fisici tedeschi Walther Bothe e Herbert Becker avevano notato che bombardando il berillio con particelle alfa si produceva una radiazione misteriosa, molto penetrante e non deviata da campi elettrici o magnetici, che interpretarono erroneamente come raggi gamma ad alta energia. Chadwick, allievo di Rutherford, ripeté l'esperimento facendo incidere questa radiazione misteriosa su un blocco di paraffina (ricca di idrogeno) e osservò che ne venivano espulsi protoni ad alta velocità. Calcolando l'energia necessaria a spiegare tali protoni espulsi, Chadwick dimostrò che la radiazione non poteva essere composta da fotoni gamma (che avrebbero richiesto un'energia implausibilmente alta), ma doveva essere formata da particelle neutre di massa paragonabile a quella del protone: il neutrone, ipotizzato già da Rutherford dieci anni prima ma mai osservato. La scoperta, annunciata nel 1932, completò il moderno modello del nucleo atomico come composto di protoni e neutroni, e aprì quasi immediatamente la strada alla comprensione della fissione nucleare, scoperta solo sei anni più tardi. Chadwick ricevette il premio Nobel per la fisica nel 1935.",
    immagine: null,
  },

  // ---------------- Meccanica quantistica e fisica moderna ----------------
  {
    categoria: 'Meccanica quantistica',
    nome: 'La doppia fenditura con singoli elettroni',
    anno: '1974 (prima realizzazione) / 1989 (versione definitiva di Tonomura)',
    scienziato: 'Pier Giorgio Merli, Giulio Pozzi, Akira Tonomura',
    cosaDimostra: "Ogni singola particella interferisce con se stessa: il dualismo onda-particella nella sua forma più pura",
    descrizione:
      "Ripetendo l'esperimento di Young sparando un elettrone alla volta, così isolato da non poter mai interferire con altri elettroni, il motivo di interferenza riappare comunque dopo molti impatti, come se ogni singola particella \"passasse per entrambe le fenditure\" e interferisse con se stessa.",
    dettagli:
      "L'esperimento della doppia fenditura di Young dimostrava l'interferenza tra due fasci di luce provenienti dalle due fenditure — ma cosa succede se le particelle vengono sparate una alla volta, così isolate nel tempo che non possano mai interagire tra loro? Il fisico italiano Pier Giorgio Merli, con Giulio Pozzi, realizzò per primo questo esperimento con elettroni singoli nel 1974 a Bologna; la versione più celebre e definitiva fu però realizzata nel 1989 dal giapponese Akira Tonomura ai laboratori Hitachi, con un microscopio elettronico modificato capace di rivelare l'arrivo di un singolo elettrone alla volta su uno schermo sensibile. Ogni elettrone, isolato, colpisce lo schermo in un punto singolo e ben definito, esattamente come ci si aspetterebbe da una particella — non un'onda diffusa. Ma accumulando migliaia di questi impatti individuali, uno dopo l'altro, sullo schermo emerge gradualmente lo stesso identico motivo di frange di interferenza previsto per un'onda continua, con zone dove nessun elettrone arriva mai e zone dove ne arrivano molti. Questo risultato, definito da una giuria di lettori della rivista Physics World nel 2002 \"l'esperimento più bello della storia della fisica\", mostra nella sua forma più pulita e spiazzante il cuore del mistero quantistico: ogni singolo elettrone, in qualche senso, si comporta come se passasse contemporaneamente attraverso entrambe le fenditure e interferisse con se stesso, un comportamento privo di ogni analogia nel mondo macroscopico quotidiano, e che cambia radicalmente se si tenta di osservare da quale fenditura sia effettivamente passato ciascun elettrone (facendo scomparire l'interferenza).",
    immagine: null,
  },
  {
    categoria: 'Meccanica quantistica',
    nome: "L'esperimento di Aspect sulle disuguaglianze di Bell",
    anno: '1981-1982',
    scienziato: 'Alain Aspect',
    cosaDimostra: "L'entanglement quantistico è reale: nessuna teoria a variabili nascoste locali può spiegare i risultati",
    descrizione:
      "Misurando la polarizzazione di coppie di fotoni entangled emessi in direzioni opposte, Aspect trovò correlazioni più forti di quanto qualsiasi teoria classica \"locale\" potesse permettere, violando le disuguaglianze di Bell e confermando la realtà fisica dell'entanglement quantistico.",
    dettagli:
      "Nel celebre articolo del 1935 con Podolsky e Rosen, Einstein aveva sostenuto che la meccanica quantistica dovesse essere incompleta, proponendo che particelle correlate (\"entangled\") possedessero in realtà proprietà definite fin dall'origine, semplicemente non ancora note (\"variabili nascoste\"), piuttosto che restare in una sovrapposizione indeterminata fino alla misura, come sosteneva l'interpretazione ortodossa della meccanica quantistica. Nel 1964 il fisico John Bell dimostrò che questa disputa, apparentemente solo filosofica, aveva una conseguenza sperimentale verificabile: qualunque teoria a variabili nascoste \"locali\" (in cui nessun segnale può viaggiare più veloce della luce tra le due particelle) deve soddisfare precise disuguaglianze matematiche sulle correlazioni misurabili tra le due particelle, mentre la meccanica quantistica standard prevede correlazioni più forti, capaci di violare quelle stesse disuguaglianze. Alain Aspect e i suoi collaboratori, all'Università di Parigi-Sud, realizzarono tra il 1981 e il 1982 una serie di esperimenti sempre più raffinati, generando coppie di fotoni entangled da una sorgente di calcio e misurandone la polarizzazione con rivelatori posti a diversi metri di distanza, orientati con dispositivi capaci di cambiare direzione di misura mentre i fotoni erano già in volo, per escludere ogni possibile comunicazione tra i due rivelatori. I risultati violarono chiaramente le disuguaglianze di Bell, in ottimo accordo con le previsioni della meccanica quantistica: la natura, in qualche modo profondo, non è descrivibile da variabili nascoste locali. Aspect condivise il premio Nobel per la fisica 2022 con John Clauser e Anton Zeilinger proprio per questi esperimenti sui fotoni entangled, oggi alla base delle tecnologie di crittografia e calcolo quantistico.",
    immagine: null,
  },

  // ---------------- Astrofisica e cosmologia ----------------
  {
    categoria: 'Astrofisica e cosmologia',
    nome: 'La scoperta della radiazione cosmica di fondo',
    anno: '1964-1965',
    scienziato: 'Arno Penzias e Robert Wilson',
    cosaDimostra: "L'eco residuo del Big Bang, la prova osservativa più diretta dell'origine calda e densa dell'universo",
    descrizione:
      "Cercando di eliminare un fastidioso rumore di fondo captato da un'antenna per telecomunicazioni, Penzias e Wilson scoprirono per caso una debole radiazione a microonde proveniente uniformemente da ogni direzione del cielo: la radiazione cosmica di fondo, il \"bagliore\" residuo del Big Bang.",
    dettagli:
      "Penzias e Wilson, ricercatori dei Bell Labs, stavano usando una grande antenna a tromba originariamente costruita per le comunicazioni via satellite per misurare con precisione le onde radio emesse dalla nostra galassia. Nel farlo, si accorsero di un fastidioso rumore di fondo, uniforme e costante, che non riuscivano in alcun modo a eliminare: controllarono ogni possibile fonte di disturbo, incluso persino il guano di una coppia di piccioni che nidificavano nell'antenna, che pulirono accuratamente, senza però risolvere il problema. Il segnale era identico di giorno e di notte, in ogni stagione, e proveniente in egual misura da ogni direzione del cielo — caratteristiche incompatibili con qualunque sorgente nota, terrestre o galattica. Senza saperlo, i due stavano osservando esattamente ciò che un gruppo di fisici della vicina Princeton University, guidato da Robert Dicke, stava proprio in quel periodo cercando di predire teoricamente e progettando un'antenna per rivelare: la radiazione residua lasciata dall'universo primordiale, caldo e densissimo, circa 380 000 anni dopo il Big Bang, quando la luce poté per la prima volta viaggiare liberamente nello spazio, poi raffreddata dall'espansione dell'universo fino a soli 2,7 kelvin sopra lo zero assoluto. Un contatto tra i due gruppi chiarì l'arcano: Penzias e Wilson avevano scoperto per caso, senza cercarla, la prova osservativa più diretta e convincente della teoria del Big Bang, guadagnandosi il premio Nobel per la fisica nel 1978.",
    immagine: null,
  },
  {
    categoria: 'Astrofisica e cosmologia',
    nome: 'La rilevazione delle onde gravitazionali di LIGO',
    anno: '2015',
    scienziato: 'Collaborazione LIGO/Virgo',
    cosaDimostra: "L'esistenza delle onde gravitazionali previste da Einstein un secolo prima",
    descrizione:
      "Il 14 settembre 2015 i due interferometri LIGO rilevarono per la prima volta il minuscolo increspamento dello spazio-tempo prodotto dalla fusione di due buchi neri lontani oltre un miliardo di anni luce, confermando l'ultima grande previsione della relatività generale ancora priva di verifica diretta.",
    dettagli:
      "Nel 1916 Einstein aveva previsto che masse accelerate, come due stelle o buchi neri in rapida orbita reciproca, dovessero produrre increspature nello spazio-tempo che si propagano come onde alla velocità della luce — ma le calcolò talmente deboli da ritenerle, lui stesso, probabilmente impossibili da rivelare per sempre. LIGO (Laser Interferometer Gravitational-Wave Observatory) è composto da due enormi interferometri identici, situati a circa 3000 km di distanza l'uno dall'altro negli Stati Uniti (in Louisiana e nello stato di Washington), ciascuno con bracci lunghi 4 km in cui un raggio laser viene diviso e fatto rimbalzare avanti e indietro migliaia di volte prima di essere ricombinato: un'onda gravitazionale in transito allungherebbe impercettibilmente un braccio e accorcerebbe l'altro, di una frazione infinitesima del diametro di un protone, rivelabile come uno spostamento delle frange di interferenza. Il 14 settembre 2015, pochi giorni dopo l'accensione della versione aggiornata dello strumento (Advanced LIGO), entrambi i rivelatori registrarono simultaneamente, a distanza di soli 7 millisecondi l'uno dall'altro (il tempo di percorrenza della luce tra i due siti), un segnale caratteristico dalla forma d'onda inconfondibile: il \"chirp\" prodotto dalla fusione finale di due buchi neri, di circa 29 e 36 masse solari, avvenuta 1,3 miliardi di anni fa. L'analisi del segnale confermava con straordinaria precisione le previsioni della relatività generale per un evento estremo mai osservato prima direttamente. L'annuncio, dato l'11 febbraio 2016 dopo mesi di verifiche, valse il premio Nobel per la fisica 2017 a Rainer Weiss, Barry Barish e Kip Thorne, e ha aperto un intero nuovo campo di osservazione dell'universo: l'astronomia gravitazionale.",
    immagine: null,
  },
  {
    categoria: 'Astrofisica e cosmologia',
    nome: 'La scoperta del bosone di Higgs',
    anno: '2012',
    scienziato: 'Collaborazioni ATLAS e CMS al CERN',
    cosaDimostra: "L'esistenza del bosone di Higgs, la particella che spiega perché le altre particelle hanno massa",
    descrizione:
      "Analizzando miliardi di collisioni protone-protone prodotte dall'acceleratore LHC del CERN, i due esperimenti ATLAS e CMS individuarono indipendentemente una nuova particella con le proprietà attese per il bosone di Higgs, l'ultimo tassello mancante del Modello Standard, previsto teoricamente quasi cinquant'anni prima.",
    dettagli:
      "Negli anni '60 Peter Higgs, insieme ad altri fisici, propose che lo spazio sia pervaso da un campo (oggi detto campo di Higgs) con cui le particelle elementari interagiscono in misura diversa, acquisendo così la propria massa: le particelle che interagiscono fortemente col campo sono \"pesanti\", quelle che non interagiscono affatto (come il fotone) restano prive di massa. La teoria prevedeva anche l'esistenza di una particella associata alle vibrazioni di questo campo, il bosone di Higgs, ma con una massa non prevedibile teoricamente e quindi da cercare sperimentalmente in un ampio intervallo di energie. Il Large Hadron Collider (LHC) del CERN, presso Ginevra, l'acceleratore di particelle più potente mai costruito, fa collidere protoni quasi alla velocità della luce lungo un anello di 27 km, producendo miliardi di collisioni al secondo che due enormi rivelatori indipendenti, ATLAS e CMS, registrano e analizzano cercando tracce di particelle rare e di vita brevissima. Il 4 luglio 2012 i portavoce di entrambi gli esperimenti annunciarono, in una storica conferenza al CERN alla presenza di un commosso Peter Higgs (allora 83enne), di aver osservato indipendentemente una nuova particella con massa di circa 125 GeV, con proprietà del tutto compatibili con quelle previste per il bosone di Higgs, individuata attraverso i prodotti tipici del suo rapidissimo decadimento (in particolare in coppie di fotoni o di elettroni e muoni). La scoperta completò il quadro del Modello Standard della fisica delle particelle, la teoria che descrive tutte le particelle elementari conosciute e le loro interazioni, e valse a Peter Higgs e François Englert il premio Nobel per la fisica già l'anno successivo, il 2013.",
    immagine: null,
  },
];
