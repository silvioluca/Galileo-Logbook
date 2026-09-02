import { Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, WidthType } from 'docx';

function allineamento(el) {
  const style = el.getAttribute('style') || '';
  if (/text-align:\s*center/.test(style)) return AlignmentType.CENTER;
  if (/text-align:\s*right/.test(style)) return AlignmentType.RIGHT;
  if (/text-align:\s*justify/.test(style)) return AlignmentType.JUSTIFIED;
  return AlignmentType.LEFT;
}

function testRunsDaNodo(nodo, formati = {}) {
  const risultati = [];
  nodo.childNodes.forEach((figlio) => {
    if (figlio.nodeType === Node.TEXT_NODE) {
      if (figlio.textContent) {
        risultati.push(new TextRun({ text: figlio.textContent, bold: formati.bold, italics: formati.italic }));
      }
    } else if (figlio.nodeType === Node.ELEMENT_NODE) {
      const tag = figlio.tagName.toLowerCase();
      const nuoviFormati = { ...formati };
      if (tag === 'strong' || tag === 'b') nuoviFormati.bold = true;
      if (tag === 'em' || tag === 'i') nuoviFormati.italic = true;
      risultati.push(...testRunsDaNodo(figlio, nuoviFormati));
    }
  });
  return risultati;
}

function celleDaRiga(tr) {
  const celle = Array.from(tr.children);
  return celle.map(
    (cella) =>
      new TableCell({
        children: [new Paragraph({ children: testRunsDaNodo(cella) })],
        width: { size: Math.round(100 / celle.length), type: WidthType.PERCENTAGE },
      }),
  );
}

// Converte l'HTML dell'editor ricco del Procedimento in elementi docx
// (Paragraph/Table), preservando grassetto, corsivo, elenchi, allineamento e
// tabelle.
export function convertiHtmlInDocx(html) {
  if (!html) return [new Paragraph({ text: '' })];

  const doc = new DOMParser().parseFromString(html, 'text/html');
  const elementi = [];

  doc.body.childNodes.forEach((nodo) => {
    if (nodo.nodeType !== Node.ELEMENT_NODE) return;
    const tag = nodo.tagName.toLowerCase();

    if (tag === 'p') {
      elementi.push(new Paragraph({ children: testRunsDaNodo(nodo), alignment: allineamento(nodo) }));
    } else if (tag === 'ul') {
      Array.from(nodo.children).forEach((li) => {
        elementi.push(new Paragraph({ children: testRunsDaNodo(li), bullet: { level: 0 } }));
      });
    } else if (tag === 'ol') {
      Array.from(nodo.children).forEach((li, indice) => {
        elementi.push(
          new Paragraph({ children: [new TextRun({ text: `${indice + 1}. ` }), ...testRunsDaNodo(li)] }),
        );
      });
    } else if (tag === 'table') {
      const righe = Array.from(nodo.querySelectorAll('tr')).map((tr) => new TableRow({ children: celleDaRiga(tr) }));
      if (righe.length > 0) {
        elementi.push(new Table({ rows: righe, width: { size: 100, type: WidthType.PERCENTAGE } }));
      }
    } else {
      const testo = nodo.textContent.trim();
      if (testo) elementi.push(new Paragraph({ text: testo }));
    }
  });

  return elementi.length > 0 ? elementi : [new Paragraph({ text: '' })];
}
