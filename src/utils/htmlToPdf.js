import autoTable from 'jspdf-autotable';

function estraiRigheTabella(tabellaEl) {
  return Array.from(tabellaEl.querySelectorAll('tr')).map((tr) =>
    Array.from(tr.children).map((cella) => cella.textContent.trim()),
  );
}

function segmentiInline(nodo, formati = {}) {
  const segmenti = [];
  nodo.childNodes.forEach((figlio) => {
    if (figlio.nodeType === Node.TEXT_NODE) {
      if (figlio.textContent) segmenti.push({ testo: figlio.textContent, ...formati });
    } else if (figlio.nodeType === Node.ELEMENT_NODE) {
      const tag = figlio.tagName.toLowerCase();
      const nuovi = { ...formati };
      if (tag === 'strong' || tag === 'b') nuovi.bold = true;
      if (tag === 'em' || tag === 'i') nuovi.italic = true;
      segmenti.push(...segmentiInline(figlio, nuovi));
    }
  });
  return segmenti;
}

function stileJsPdf({ bold, italic } = {}) {
  if (bold && italic) return 'bolditalic';
  if (bold) return 'bold';
  if (italic) return 'italic';
  return 'normal';
}

// Disegna un paragrafo con più stili inline (es. "testo normale e **grassetto**
// insieme") parola per parola, avanzando la x manualmente: jsPDF non supporta
// stili misti in una singola chiamata a text().
function disegnaParagrafoMisto({ doc, margine, larghezza, altezzaPagina, scrittore, segmenti, dimensione, interlinea }) {
  doc.setFontSize(dimensione);
  let x = margine;
  let y = scrittore.y;

  segmenti.forEach((segmento) => {
    const parole = segmento.testo.split(/(\s+)/).filter((p) => p !== '');
    parole.forEach((parola) => {
      doc.setFont('times', stileJsPdf(segmento));
      const larghezzaParola = doc.getTextWidth(parola);
      const finePagina = x + larghezzaParola > margine + larghezza;
      if (finePagina && parola.trim() !== '') {
        x = margine;
        y += interlinea;
        if (y > altezzaPagina - margine) {
          doc.addPage();
          y = margine;
        }
      }
      doc.text(parola, x, y);
      x += larghezzaParola;
    });
  });

  scrittore.y = y + interlinea;
}

// Disegna l'HTML dell'editor ricco del Procedimento dentro un PDF già in
// costruzione con jsPDF: paragrafi (con grassetto/corsivo/allineamento anche
// misti nella stessa riga) come testo vettoriale, tabelle con jspdf-autotable.
export function disegnaHtmlInPdf({ doc, scrittore, margine, larghezza, altezzaPagina, html, opzioniTesto = {} }) {
  if (!html) return;
  const parsed = new DOMParser().parseFromString(html, 'text/html');

  parsed.body.childNodes.forEach((nodo) => {
    if (nodo.nodeType !== Node.ELEMENT_NODE) return;
    const tag = nodo.tagName.toLowerCase();

    if (tag === 'p') {
      const segmenti = segmentiInline(nodo);
      if (segmenti.length === 0) return;
      const stiliDistinti = new Set(segmenti.map((s) => stileJsPdf(s)));

      if (stiliDistinti.size <= 1) {
        const style = nodo.getAttribute('style') || '';
        const centrato = /text-align:\s*center/.test(style);
        const testo = nodo.textContent.trim();
        if (testo) {
          scrittore.scrivi(testo, { ...opzioniTesto, stile: stileJsPdf(segmenti[0]), centrato });
        }
      } else {
        disegnaParagrafoMisto({
          doc,
          margine,
          larghezza,
          altezzaPagina,
          scrittore,
          segmenti,
          dimensione: opzioniTesto.dimensione || 11,
          interlinea: opzioniTesto.interlinea || 14,
        });
      }
    } else if (tag === 'ul') {
      Array.from(nodo.children).forEach((li) => {
        scrittore.scrivi(`•  ${li.textContent.trim()}`, opzioniTesto);
      });
    } else if (tag === 'ol') {
      Array.from(nodo.children).forEach((li, indice) => {
        scrittore.scrivi(`${indice + 1}.  ${li.textContent.trim()}`, opzioniTesto);
      });
    } else if (tag === 'table') {
      const righe = estraiRigheTabella(nodo);
      if (righe.length === 0) return;
      const haIntestazione = nodo.querySelector('th') !== null;

      autoTable(doc, {
        startY: scrittore.y,
        margin: { left: margine, right: margine },
        head: haIntestazione ? [righe[0]] : undefined,
        body: haIntestazione ? righe.slice(1) : righe,
        styles: { font: 'times', fontSize: opzioniTesto.dimensione ? opzioniTesto.dimensione - 1.5 : 9.5 },
        headStyles: { fillColor: [235, 222, 195], textColor: [43, 29, 15] },
        theme: 'grid',
      });
      scrittore.y = doc.lastAutoTable.finalY + 12;
    } else {
      const testo = nodo.textContent.trim();
      if (testo) scrittore.scrivi(testo, opzioniTesto);
    }
  });
}
