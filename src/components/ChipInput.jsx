import { useState } from 'react';

export default function ChipInput({ id, label, values, onChange, placeholder }) {
  const [testo, setTesto] = useState('');

  const aggiungiChip = () => {
    const valore = testo.trim();
    if (valore && !values.includes(valore)) {
      onChange([...values, valore]);
    }
    setTesto('');
  };

  const rimuoviChip = (valore) => onChange(values.filter((v) => v !== valore));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      aggiungiChip();
    }
  };

  return (
    <div className="chip-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        value={testo}
        placeholder={placeholder}
        onChange={(e) => setTesto(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {values.length > 0 && (
        <div className="chip-list">
          {values.map((v) => (
            <span className="tag chip" key={v}>
              {v}
              <button type="button" onClick={() => rimuoviChip(v)} aria-label={`Rimuovi ${v}`}>
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
