import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/** Linha com ícone + texto (listas de benefícios e checklists). */
export function IconRow({ icon: Icon, children, muted }: { icon: LucideIcon; children: ReactNode; muted?: boolean }) {
  return (
    <div className={`icon-row${muted ? ' icon-row--muted' : ''}`}>
      <Icon className="icon-row__icon" size={32} strokeWidth={2.25} aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export function Pill({ children, variant = 'soft' }: { children: ReactNode; variant?: 'soft' | 'ghost' | 'solid' }) {
  return <span className={`pill pill--${variant}`}>{children}</span>;
}

/** Bloco de número grande com legenda. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <p className="stat__value">{value}</p>
      <p className="stat__label">{label}</p>
    </div>
  );
}
