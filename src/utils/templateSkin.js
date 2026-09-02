// Determina lo "stile" strutturale da usare (anteprima, DOCX, PDF) in base al
// nome del template associato alla scheda. Riconosce i tre predefiniti per
// nome; qualsiasi altro template (es. caricato dall'utente) usa lo stile
// Classico come base neutra.
export function determinaSkin(modello) {
  const nome = (modello || '').toLowerCase();
  if (nome.includes('compatto')) return 'compatto';
  if (nome.includes('artistico')) return 'artistico';
  return 'classico';
}
