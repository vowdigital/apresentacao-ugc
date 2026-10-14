import { assets } from '../deck/assets';
import type { SlideTone } from '../deck/types';

interface FooterProps {
  tone: SlideTone;
  number: number;
  total: number;
  right?: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

export function Footer({ tone, number, total, right }: FooterProps) {
  const logo = tone === 'light' ? assets.vowBlack : assets.vowWhite;
  return (
    <div className="slide-footer" style={right !== undefined ? { right } : undefined}>
      <img src={logo} alt="Vow Digital" className="slide-footer__logo" />
      <span className="slide-footer__number">
        {pad(number)} / {pad(total)}
      </span>
    </div>
  );
}
