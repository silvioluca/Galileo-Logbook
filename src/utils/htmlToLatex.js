function escapeLatexTesto(testo) {
  return String(testo)
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([{}#$%&_])/g, '\\$1')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');
}

function inlineLatex(nodo) {
  let risultato = '';
  nodo.childNodes.forEach((figlio) => {
    if (figlio.nodeType === Node.TEXT_NODE) {
      risultato += escapeLatexTesto(figlio.textContent);
    } else if (figlio.nodeType === Node.ELEMENT_NODE) {
      const tag = figlio.tagName.toLowerCase();
      const interno = inlineLatex(figlio);
      if (tag === 'strong' || tag === 'b') risultato += `\\textbf{${interno}}`;
      else if (tag === 'em' || tag === 'i') risultato += `\\textit{${interno}}`;
      else risultato += interno;
    }
  });
  return risultato;
}

function ambienteAllineamento(el) {
  const style = el.getAttribute('style') || '';
  if (/text-align:\s*center/.test(style)) return 'center';
  if (/text-align:\s*right/.test(style)) return 'flushright';
  return null;
}

function tabellaLatex(tabellaEl) {
  const righe = Array.from(tabellaEl.querySelectorAll('tr')).map((tr) =>
    Array.from(tr.children).map((cella) => inlineLatex(cella)),
  );
  if (righe.length === 0) return '';
  const nColonne = righe[0].length;
  const specifica = `|${'l|'.repeat(nColonne)}`;

  const corpo = righe.map((riga) => `  ${riga.join(' & ')} \\\\ \\hline`).join('\n');

  return `\\begin{center}\n\\begin{tabular}{${specifica}}\n\\hline\n${corpo}\n\\end{tabular}\n\\end{center}`;
}

// Converte l'HTML dell'editor ricco del Procedimento in sorgente LaTeX
// (grassetto/corsivo/elenchi/tabelle/allineamento). Il risultato è già
// LaTeX valido: non va ri-passato per l'escape generico dei placeholder.
export function convertiHtmlInLatex(html) {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const blocchi = [];

  doc.body.childNodes.forEach((nodo) => {
    if (nodo.nodeType !== Node.ELEMENT_NODE) return;
    const tag = nodo.tagName.toLowerCase();

    if (tag === 'p') {
      const testo = inlineLatex(nodo);
      if (!testo.trim()) return;
      const ambiente = ambienteAllineamento(nodo);
      blocchi.push(ambiente ? `\\begin{${ambiente}}\n${testo}\n\\end{${ambiente}}` : testo);
    } else if (tag === 'ul') {
      const items = Array.from(nodo.children)
        .map((li) => `  \\item ${inlineLatex(li)}`)
        .join('\n');
      blocchi.push(`\\begin{itemize}\n${items}\n\\end{itemize}`);
    } else if (tag === 'ol') {
      const items = Array.from(nodo.children)
        .map((li) => `  \\item ${inlineLatex(li)}`)
        .join('\n');
      blocchi.push(`\\begin{enumerate}\n${items}\n\\end{enumerate}`);
    } else if (tag === 'table') {
      blocchi.push(tabellaLatex(nodo));
    } else {
      const testo = escapeLatexTesto(nodo.textContent.trim());
      if (testo) blocchi.push(testo);
    }
  });

  return blocchi.join('\n\n');
}
