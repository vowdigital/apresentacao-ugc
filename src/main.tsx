import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Deck } from './deck/Deck';
import { slides } from './slides';
import './finale.css';
import './presentation-v2.css';
import './presentation-overrides.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
);
