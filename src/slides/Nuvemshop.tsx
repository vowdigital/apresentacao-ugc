import type { SlideDefinition } from '../deck/types';
import { Accent, Eyebrow, Heading } from '../components/Typography';

export const nuvemshop: SlideDefinition = {
  id: 'nuvemshop',
  title: 'O preço da inércia',
  tone: 'light',
  footer: true,
  notes: 'Provoque uma reflexão sobre o custo de manter as mesmas ações e esperar resultados diferentes. Conduza a conversa para o custo da oportunidade.',
  render: () => (
    <div className="cost-slide">
      <div className="cost-slide__copy">
        <Eyebrow>Uma reflexão importante</Eyebrow>
        <Heading>O preço de continuar fazendo tudo <Accent>do mesmo jeito.</Accent></Heading>
        <p className="cost-slide__question">
          Se você continuar repetindo as mesmas ações, insistindo nos mesmos erros e seguindo as mesmas práticas, como espera alcançar resultados diferentes?
        </p>
      </div>
      <div className="cost-slide__bottom">
        <span className="cost-slide__label">O custo mais caro</span>
        <p className="cost-slide__title">Custo da <Accent>oportunidade.</Accent></p>
        <p className="cost-slide__description">Aquilo que sua empresa deixa de ganhar por não estar fazendo o que realmente precisa ser feito para crescer.</p>
      </div>
    </div>
  ),
};
