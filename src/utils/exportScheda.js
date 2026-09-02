import { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType } from 'docx';
import { jsPDF } from 'jspdf';
import { renderTemplateLatex } from './renderTemplate';
import { determinaSkin } from './templateSkin';
import { convertiHtmlInDocx } from './htmlToDocx';
import { disegnaHtmlInPdf } from './htmlToPdf';

function haContenutoHtml(html) {
  return Boolean(html && html.replace(/<[^>]*>/g, '').trim());
}

function nomeFile(scheda, estensione) {
  const base = (scheda.titolo || 'scheda')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  return `${base || 'scheda'}.${estensione}`;
}

function scaricaBlob(blob, nome) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function metaTesto(scheda) {
  const { branca, esperienza, modello, durataMinuti, numeroEsperienze, difficolta } = scheda;
  return `${branca || ''} · ${esperienza || ''} · ${modello || ''} · ${durataMinuti || 0} min · ${numeroEsperienze || 0} esperienze · Difficoltà: ${difficolta || ''}`;
}

// ---------- DOCX ----------

function docxClassico(scheda) {
  const { titolo, scopo, strumenti = [], procedimento } = scheda;
  return [
    new Paragraph({ text: titolo || 'Scheda di laboratorio', heading: HeadingLevel.TITLE }),
    new Paragraph({ children: [new TextRun({ text: metaTesto(scheda), italics: true })] }),
    new Paragraph({ text: '' }),
    new Paragraph({ text: "Scopo dell'esperienza", heading: HeadingLevel.HEADING_2 }),
    new Paragraph({ text: scopo || '' }),
    new Paragraph({ text: '' }),
    new Paragraph({ text: 'Materiale utilizzato', heading: HeadingLevel.HEADING_2 }),
    ...strumenti.map((s) => new Paragraph({ text: s, bullet: { level: 0 } })),
    new Paragraph({ text: '' }),
    new Paragraph({ text: 'Procedimento', heading: HeadingLevel.HEADING_2 }),
    ...(haContenutoHtml(procedimento) ? convertiHtmlInDocx(procedimento) : [new Paragraph({ text: '—' })]),
  ];
}

function docxCompatto(scheda) {
  const { titolo, scopo, strumenti = [], procedimento, difficolta } = scheda;
  return [
    new Paragraph({
      children: [
        new TextRun({ text: titolo || 'Scheda di laboratorio', bold: true, size: 28 }),
        new TextRun({ text: `   Difficoltà: ${difficolta || ''}`, italics: true, size: 18 }),
      ],
    }),
    new Paragraph({ children: [new TextRun({ text: metaTesto(scheda), size: 16, color: '555555' })] }),
    new Paragraph({ text: '' }),
    new Paragraph({
      children: [new TextRun({ text: 'Scopo. ', bold: true }), new TextRun({ text: scopo || '' })],
    }),
    new Paragraph({
      children: [
        new TextRun({ text: 'Materiale. ', bold: true }),
        new TextRun({ text: strumenti.join(', ') }),
      ],
    }),
    new Paragraph({ children: [new TextRun({ text: 'Procedimento.', bold: true })] }),
    ...(haContenutoHtml(procedimento) ? convertiHtmlInDocx(procedimento) : [new Paragraph({ text: '—' })]),
  ];
}

function docxArtistico(scheda) {
  const { titolo, scopo, strumenti = [], procedimento } = scheda;
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: (titolo || 'Scheda di laboratorio').toUpperCase(), bold: true, size: 32 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: metaTesto(scheda), italics: true, size: 18 })],
    }),
    new Paragraph({ text: '' }),
    new Paragraph({
      children: [new TextRun({ text: "SCOPO DELL'ESPERIENZA", bold: true, color: '6B4423' })],
    }),
    new Paragraph({ children: [new TextRun({ text: scopo || '', italics: true })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, text: '✦' }),
    new Paragraph({ children: [new TextRun({ text: 'MATERIALE UTILIZZATO', bold: true, color: '6B4423' })] }),
    ...strumenti.map((s) => new Paragraph({ text: s, bullet: { level: 0 } })),
    new Paragraph({ alignment: AlignmentType.CENTER, text: '✦' }),
    new Paragraph({ children: [new TextRun({ text: 'PROCEDIMENTO', bold: true, color: '6B4423' })] }),
    ...(haContenutoHtml(procedimento) ? convertiHtmlInDocx(procedimento) : [new Paragraph({ text: '—' })]),
  ];
}

export async function scaricaDocx(scheda) {
  const skin = determinaSkin(scheda.modello);
  const costruttori = { classico: docxClassico, compatto: docxCompatto, artistico: docxArtistico };
  const children = costruttori[skin](scheda);

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  scaricaBlob(blob, nomeFile(scheda, 'docx'));
}

// ---------- PDF ----------

function creaScrittore(doc, margine, larghezza, altezzaPagina) {
  let y = margine;
  return {
    scrivi(testo, { dimensione = 11, stile = 'normal', interlinea = 14, spazioSopra = 0, centrato = false } = {}) {
      y += spazioSopra;
      doc.setFont('times', stile);
      doc.setFontSize(dimensione);
      const righe = doc.splitTextToSize(testo || '', larghezza);
      righe.forEach((riga) => {
        if (y > altezzaPagina - margine) {
          doc.addPage();
          y = margine;
        }
        if (centrato) {
          doc.text(riga, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
        } else {
          doc.text(riga, margine, y);
        }
        y += interlinea;
      });
    },
    get y() {
      return y;
    },
    set y(valore) {
      y = valore;
    },
  };
}

function pdfClassico(doc, margine, larghezza, altezzaPagina, scheda) {
  const { titolo, scopo, strumenti = [], procedimento } = scheda;
  const w = creaScrittore(doc, margine, larghezza, altezzaPagina);

  w.scrivi(titolo || 'Scheda di laboratorio', { dimensione: 18, stile: 'bold', interlinea: 22 });
  w.scrivi(metaTesto(scheda), { dimensione: 10, stile: 'italic', interlinea: 14 });

  w.scrivi("Scopo dell'esperienza", { dimensione: 13, stile: 'bold', interlinea: 16, spazioSopra: 12 });
  w.scrivi(scopo || '—');

  w.scrivi('Materiale utilizzato', { dimensione: 13, stile: 'bold', interlinea: 16, spazioSopra: 10 });
  if (strumenti.length === 0) w.scrivi('—');
  else strumenti.forEach((s) => w.scrivi(`•  ${s}`));

  w.scrivi('Procedimento', { dimensione: 13, stile: 'bold', interlinea: 16, spazioSopra: 10 });
  if (haContenutoHtml(procedimento)) {
    disegnaHtmlInPdf({ doc, scrittore: w, margine, html: procedimento, opzioniTesto: { dimensione: 11, interlinea: 14 } });
  } else {
    w.scrivi('—');
  }
}

function pdfCompatto(doc, margine, larghezza, altezzaPagina, scheda) {
  const { titolo, scopo, strumenti = [], procedimento, difficolta } = scheda;
  const w = creaScrittore(doc, margine, larghezza, altezzaPagina);

  w.scrivi(`${titolo || 'Scheda di laboratorio'}   —   Difficoltà: ${difficolta || ''}`, {
    dimensione: 14,
    stile: 'bold',
    interlinea: 17,
  });
  w.scrivi(metaTesto(scheda), { dimensione: 8, stile: 'italic', interlinea: 11 });
  w.scrivi(`Scopo. ${scopo || ''}`, { dimensione: 9.5, interlinea: 12, spazioSopra: 6 });
  w.scrivi(`Materiale. ${strumenti.join(', ')}`, { dimensione: 9.5, interlinea: 12, spazioSopra: 4 });
  w.scrivi('Procedimento.', { dimensione: 9.5, interlinea: 12, spazioSopra: 4 });
  if (haContenutoHtml(procedimento)) {
    disegnaHtmlInPdf({ doc, scrittore: w, margine, html: procedimento, opzioniTesto: { dimensione: 9.5, interlinea: 12 } });
  } else {
    w.scrivi('—', { dimensione: 9.5, interlinea: 12 });
  }
}

function pdfArtistico(doc, margine, larghezza, altezzaPagina, scheda) {
  const { titolo, scopo, strumenti = [], procedimento } = scheda;
  const w = creaScrittore(doc, margine, larghezza, altezzaPagina);

  w.scrivi((titolo || 'Scheda di laboratorio').toUpperCase(), {
    dimensione: 20,
    stile: 'bold',
    interlinea: 24,
    centrato: true,
  });
  w.scrivi(metaTesto(scheda), { dimensione: 9, stile: 'italic', interlinea: 13, centrato: true });

  w.scrivi("SCOPO DELL'ESPERIENZA", { dimensione: 12, stile: 'bold', interlinea: 15, spazioSopra: 14 });
  w.scrivi(scopo || '—', { stile: 'italic' });

  w.scrivi('✦', { interlinea: 16, spazioSopra: 6, centrato: true });

  w.scrivi('MATERIALE UTILIZZATO', { dimensione: 12, stile: 'bold', interlinea: 15, spazioSopra: 6 });
  if (strumenti.length === 0) w.scrivi('—');
  else strumenti.forEach((s) => w.scrivi(`•  ${s}`));

  w.scrivi('✦', { interlinea: 16, spazioSopra: 6, centrato: true });

  w.scrivi('PROCEDIMENTO', { dimensione: 12, stile: 'bold', interlinea: 15, spazioSopra: 6 });
  if (haContenutoHtml(procedimento)) {
    disegnaHtmlInPdf({ doc, scrittore: w, margine, html: procedimento, opzioniTesto: { dimensione: 11, interlinea: 14 } });
  } else {
    w.scrivi('—');
  }
}

export function scaricaPdf(scheda) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margine = 56;
  const larghezza = doc.internal.pageSize.getWidth() - margine * 2;
  const altezzaPagina = doc.internal.pageSize.getHeight();

  const skin = determinaSkin(scheda.modello);
  const costruttori = { classico: pdfClassico, compatto: pdfCompatto, artistico: pdfArtistico };
  costruttori[skin](doc, margine, larghezza, altezzaPagina, scheda);

  doc.save(nomeFile(scheda, 'pdf'));
}

// ---------- LaTeX / Overleaf ----------

// Apre Overleaf con il sorgente LaTeX pre-caricato (POST "snip", il meccanismo
// ufficiale di Overleaf per aprire contenuto generato al volo senza doverlo
// ospitare su un URL pubblico).
export function apriInOverleaf(scheda, contenutoTemplate) {
  const testoLatex = renderTemplateLatex(contenutoTemplate, scheda);

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://www.overleaf.com/docs';
  form.target = '_blank';
  form.style.display = 'none';

  const campo = document.createElement('input');
  campo.type = 'hidden';
  campo.name = 'snip';
  campo.value = testoLatex;
  form.appendChild(campo);

  document.body.appendChild(form);
  form.submit();
  form.remove();
}
