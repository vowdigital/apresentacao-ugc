import type { ReactNode } from 'react';

/** Tom de fundo do slide — define cores do rodapé e dos controles. */
export type SlideTone = 'dark' | 'light' | 'navy';

export interface SlideDefinition {
  /** Identificador estável, usado no hash da URL (#/problema). */
  id: string;
  /** Título curto, usado no índice e no leitor de tela. */
  title: string;
  tone: SlideTone;
  /** Mostra o rodapé com logo e numeração. */
  footer?: boolean;
  /** Recuo direito do rodapé (px), quando há uma foto ocupando a lateral. */
  footerRight?: number;
  /** Notas do apresentador (tecla N). */
  notes: string;
  render: () => ReactNode;
}
