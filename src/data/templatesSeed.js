import classico from '../../templates/modello-classico.tex?raw';
import compatto from '../../templates/modello-compatto.tex?raw';
import artistico from '../../templates/modello-artistico.tex?raw';

export const TEMPLATES_PREDEFINITI = [
  { id: 'predefinito-classico', nome: 'Classico', contenuto: classico },
  { id: 'predefinito-compatto', nome: 'Compatto', contenuto: compatto },
  { id: 'predefinito-artistico', nome: 'Artistico', contenuto: artistico },
];
