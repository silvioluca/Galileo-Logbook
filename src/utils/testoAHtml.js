function escapeHtml(testo) {
  return testo.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Converte testo semplice (es. estratto da un file importato) in paragrafi
// HTML, per popolare l'editor ricco del Procedimento.
export function testoAHtml(testo) {
  if (!testo) return '';
  return testo
    .split(/\r?\n/)
    .map((riga) => riga.trim())
    .filter(Boolean)
    .map((riga) => `<p>${escapeHtml(riga)}</p>`)
    .join('');
}
