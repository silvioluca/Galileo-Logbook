const MESI = [
  'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
  'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
];

// Le date arrivano come stringa ISO "AAAA-MM-GG"; per una manciata di
// laureati più recenti mese/giorno non sono noti e arrivano a "00".
export function formattaData(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  if (!m) return `${y}`;
  if (!d) return `${MESI[m - 1]} ${y}`;
  return `${d} ${MESI[m - 1]} ${y}`;
}

const TRADUZIONI_LUOGO = {
  'United Kingdom': 'Regno Unito',
  'Northern Ireland': 'Irlanda del Nord',
  Ireland: 'Irlanda',
  Scotland: 'Scozia',
  Germany: 'Germania',
  'West Germany': 'Germania Ovest',
  'East Germany': 'Germania Est',
  France: 'Francia',
  Italy: 'Italia',
  Spain: 'Spagna',
  Austria: 'Austria',
  'Austria-Hungary': 'Austria-Ungheria',
  Hungary: 'Ungheria',
  Switzerland: 'Svizzera',
  Belgium: 'Belgio',
  'the Netherlands': 'Paesi Bassi',
  Netherlands: 'Paesi Bassi',
  Luxembourg: 'Lussemburgo',
  Denmark: 'Danimarca',
  Norway: 'Norvegia',
  Sweden: 'Svezia',
  Poland: 'Polonia',
  Czechoslovakia: 'Cecoslovacchia',
  'Czech Republic': 'Repubblica Ceca',
  Slovakia: 'Slovacchia',
  Russia: 'Russia',
  'Russian Empire': 'Impero russo',
  USSR: 'URSS',
  Belarus: 'Bielorussia',
  Azerbaijan: 'Azerbaigian',
  Ukraine: 'Ucraina',
  Prussia: 'Prussia',
  'Hesse-Kassel': 'Assia-Kassel',
  Schleswig: 'Schleswig',
  USA: 'Stati Uniti',
  'United States': 'Stati Uniti',
  Canada: 'Canada',
  Australia: 'Australia',
  India: 'India',
  Pakistan: 'Pakistan',
  China: 'Cina',
  Japan: 'Giappone',
  Morocco: 'Marocco',
  Algeria: 'Algeria',
  'French Algeria': 'Algeria francese',
  Tunisia: 'Tunisia',
  'French protectorate of Tunisia': 'Protettorato francese di Tunisia',
  'German-occupied Poland': 'Polonia occupata dalla Germania',
};

// Traduce solo i nomi di paese/regione riconosciuti all'interno della
// stringa (che spesso include città e annotazioni storiche tipo "ora
// Germania"), lasciando il resto invariato.
export function traduciLuogo(luogo) {
  if (!luogo || luogo === 'N/A') return null;
  let testo = luogo.replace(/^the /, '').replace(/\(now /g, '(ora ');
  const chiavi = Object.keys(TRADUZIONI_LUOGO).sort((a, b) => b.length - a.length);
  for (const chiave of chiavi) {
    testo = testo.replace(new RegExp(`\\b${chiave}\\b`, 'g'), TRADUZIONI_LUOGO[chiave]);
  }
  return testo;
}

// Isola solo il nome del paese di nascita, per il filtro "Nazionalità":
// preferisce il paese "attuale" tra parentesi quando presente (i confini
// storici cambiano, es. "Russian Empire (now Poland)" -> Polonia).
export function estraiPaeseNascita(luogo) {
  if (!luogo || luogo === 'N/A') return null;
  // "X (now Y)" può sostituire solo la città o solo il paese storico a
  // seconda dei casi: si sostituisce ovunque compaia, poi si riprende
  // l'ultimo segmento della stringa risultante come paese.
  const senzaOra = luogo.replace(/[^,()]+\s*\(now ([^)]+)\)/g, '$1');
  const parti = senzaOra.split(',').map((p) => p.trim());
  const paese = (parti[parti.length - 1] || '').replace(/^the /, '');
  if (!paese) return null;
  return traduciLuogo(paese) || paese;
}
