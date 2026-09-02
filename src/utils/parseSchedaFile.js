// Estrazione best-effort dei campi da un file di testo/LaTeX esistente.
// Riconosce sia sezioni LaTeX (\section*{Scopo}) sia etichette semplici ("Scopo:").
// Va rifinito quando sarà fornito il modello LaTeX reale della scuola.
const SEZIONI = {
  scopo: ['scopo', 'obiettivo', 'obiettivi'],
  materiale: ['materiale', 'materiali', 'strumenti'],
  procedimento: ['procedimento', 'svolgimento', 'esecuzione'],
};

const TUTTE_LE_CHIAVI = [...Object.values(SEZIONI).flat(), 'titolo'];

function trovaBlocco(testo, chiavi) {
  const pattern = chiavi.join('|');
  const inizioRe = new RegExp(
    `(?:\\\\section\\*?\\{\\s*(?:${pattern})\\s*\\}|^[ \\t]*(?:${pattern})[ \\t]*[:\\-][ \\t]*)`,
    'im',
  );
  const inizioMatch = testo.match(inizioRe);
  if (!inizioMatch) return '';

  const start = inizioMatch.index + inizioMatch[0].length;
  const restante = testo.slice(start);

  const altroPattern = TUTTE_LE_CHIAVI.join('|');
  const fineRe = new RegExp(`\\\\section\\*?\\{|^[ \\t]*(?:${altroPattern})[ \\t]*[:\\-]`, 'im');
  const fineMatch = restante.match(fineRe);
  const fine = fineMatch ? fineMatch.index : restante.length;

  return restante.slice(0, fine).trim();
}

export function parseSchedaTesto(testo) {
  let titolo = '';
  const titleMatch =
    testo.match(/\\title\{([^}]*)\}/) || testo.match(/^[ \t]*titolo[ \t]*[:-][ \t]*(.+)$/im);
  if (titleMatch) {
    titolo = titleMatch[1].trim();
  } else {
    const primaRiga = testo
      .split(/\r?\n/)
      .map((r) => r.trim())
      .find(Boolean);
    if (primaRiga) titolo = primaRiga.replace(/\\section\*?\{|\}$/g, '').trim();
  }

  const scopo = trovaBlocco(testo, SEZIONI.scopo);
  const materialeTesto = trovaBlocco(testo, SEZIONI.materiale);
  const procedimento = trovaBlocco(testo, SEZIONI.procedimento);

  const materiale = materialeTesto
    ? materialeTesto
        .split(/\r?\n|\\item|,/)
        .map((v) => v.replace(/^[-•*]\s*/, '').trim())
        .filter(Boolean)
    : [];

  return { titolo, scopo, materiale, procedimento };
}
