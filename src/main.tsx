import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Deck } from './deck/Deck';
import { slides } from './slides';
import './presentation-v2.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
);
