import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import Subscript from '@tiptap/extension-subscript';
import { Table, TableRow, TableHeader, TableCell } from '@tiptap/extension-table';
import { useEffect, useRef, useState } from 'react';
import {
  IconBold,
  IconItalic,
  IconList,
  IconListNumbers,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconTable,
  IconTableOff,
  IconRowInsertTop,
  IconRowInsertBottom,
  IconRowRemove,
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconSuperscript,
  IconSubscript,
  IconSeparatorHorizontal,
  IconMathSymbols,
} from '@tabler/icons-react';

const SIMBOLI = [
  'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'ν', 'ξ', 'π', 'ρ', 'σ', 'τ', 'φ', 'χ', 'ψ', 'ω',
  'Δ', 'Σ', 'Ω', 'Φ', 'Θ', 'Λ', 'Π',
  '±', '×', '÷', '·', '≈', '≠', '≤', '≥', '∝', '√', '∞',
  '∫', '∑', '∂', '∇', '°', 'Å',
  '→', '⇌', '↑', '↓',
];

function SelettoreSimboli({ editor }) {
  const [aperto, setAperto] = useState(false);
  const riferimento = useRef(null);

  useEffect(() => {
    if (!aperto) return undefined;
    const onClickFuori = (e) => {
      if (riferimento.current && !riferimento.current.contains(e.target)) setAperto(false);
    };
    document.addEventListener('mousedown', onClickFuori);
    return () => document.removeEventListener('mousedown', onClickFuori);
  }, [aperto]);

  return (
    <div className="editor-simboli" ref={riferimento}>
      <button
        type="button"
        className="editor-btn"
        title="Inserisci simbolo o operatore matematico"
        onClick={() => setAperto((o) => !o)}
      >
        <IconMathSymbols size={16} stroke={2} />
      </button>
      {aperto && (
        <div className="editor-simboli-pannello">
          {SIMBOLI.map((s) => (
            <button
              type="button"
              key={s}
              className="editor-simbolo-btn"
              onClick={() => {
                editor.chain().focus().insertContent(s).run();
                setAperto(false);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function BarraStrumenti({ editor }) {
  if (!editor) return null;

  const attivo = (nome, opzioni) => (editor.isActive(nome, opzioni) ? ' attivo' : '');

  return (
    <div className="editor-toolbar">
      <button type="button" className={`editor-btn${attivo('bold')}`} onClick={() => editor.chain().focus().toggleBold().run()} title="Grassetto">
        <IconBold size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('italic')}`} onClick={() => editor.chain().focus().toggleItalic().run()} title="Corsivo">
        <IconItalic size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('superscript')}`} onClick={() => editor.chain().focus().toggleSuperscript().run()} title="Apice (esponenti)">
        <IconSuperscript size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('subscript')}`} onClick={() => editor.chain().focus().toggleSubscript().run()} title="Pedice (indici)">
        <IconSubscript size={16} stroke={2} />
      </button>
      <span className="editor-separatore" />
      <button type="button" className={`editor-btn${attivo('bulletList')}`} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Elenco puntato">
        <IconList size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('orderedList')}`} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Elenco numerato">
        <IconListNumbers size={16} stroke={2} />
      </button>
      <span className="editor-separatore" />
      <button type="button" className={`editor-btn${attivo('paragraph', { textAlign: 'left' })}`} onClick={() => editor.chain().focus().setTextAlign('left').run()} title="Allinea a sinistra">
        <IconAlignLeft size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('paragraph', { textAlign: 'center' })}`} onClick={() => editor.chain().focus().setTextAlign('center').run()} title="Centra">
        <IconAlignCenter size={16} stroke={2} />
      </button>
      <button type="button" className={`editor-btn${attivo('paragraph', { textAlign: 'right' })}`} onClick={() => editor.chain().focus().setTextAlign('right').run()} title="Allinea a destra">
        <IconAlignRight size={16} stroke={2} />
      </button>
      <span className="editor-separatore" />
      <SelettoreSimboli editor={editor} />
      <button
        type="button"
        className="editor-btn"
        title="Inserisci una linea orizzontale (es. per far scrivere una risposta)"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <IconSeparatorHorizontal size={16} stroke={2} />
      </button>
      <span className="editor-separatore" />
      <button
        type="button"
        className="editor-btn"
        title="Inserisci tabella"
        onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
      >
        <IconTable size={16} stroke={2} />
      </button>
      {editor.isActive('table') && (
        <>
          <button type="button" className="editor-btn" title="Aggiungi riga sopra" onClick={() => editor.chain().focus().addRowBefore().run()}>
            <IconRowInsertTop size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Aggiungi riga sotto" onClick={() => editor.chain().focus().addRowAfter().run()}>
            <IconRowInsertBottom size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Elimina riga" onClick={() => editor.chain().focus().deleteRow().run()}>
            <IconRowRemove size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Aggiungi colonna a sinistra" onClick={() => editor.chain().focus().addColumnBefore().run()}>
            <IconColumnInsertLeft size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Aggiungi colonna a destra" onClick={() => editor.chain().focus().addColumnAfter().run()}>
            <IconColumnInsertRight size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Elimina colonna" onClick={() => editor.chain().focus().deleteColumn().run()}>
            <IconColumnRemove size={16} stroke={2} />
          </button>
          <button type="button" className="editor-btn" title="Elimina tabella" onClick={() => editor.chain().focus().deleteTable().run()}>
            <IconTableOff size={16} stroke={2} />
          </button>
        </>
      )}
    </div>
  );
}

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['paragraph'] }),
      Superscript,
      Subscript,
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || '',
    onUpdate: ({ editor: e }) => onChange(e.getHTML()),
  });

  useEffect(() => {
    if (!editor) return;
    const html = editor.getHTML();
    if (value !== html && value !== undefined) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  return (
    <div className="rich-text-editor">
      <BarraStrumenti editor={editor} />
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
}
