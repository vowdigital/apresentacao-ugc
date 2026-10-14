import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Display, Eyebrow, Statement } from '../components/Typography';

export const abertura: SlideDefinition = {
  id: 'abertura',
  title: 'Apresentação Vow Digital',
  tone: 'light',
  notes: 'Apresente a Vow Digital e introduza o posicionamento: conteúdo que atrai e marketing que vende.',
  render: () => (
    <div className="hero-cover">
      <img className="hero-cover__image" src={assets.shoppingPhone} alt="Pessoa realizando uma compra pelo celular" />
      <div className="hero-cover__content">
        <Eyebrow>Apresentação</Eyebrow>
        <Display>VOW DIGITAL</Display>
        <span className="hero-cover__rule" aria-hidden="true" />
        <Statement>Conteúdo que Atrai.<br />Marketing que Vende.</Statement>
      </div>
      <span className="hero-cover__index">ESTRATÉGIA · CONTEÚDO · CRESCIMENTO</span>
    </div>
  ),
};
