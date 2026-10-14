import { Check } from 'lucide-react';
import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Accent, Eyebrow, Heading } from '../components/Typography';

const fronts = [
  {
    number: '01',
    title: 'Estratégia',
    items: [
      'Diagnóstico e roadmap de crescimento',
      'Estratégia de aquisição e conversão',
      'Integração entre canais e operação comercial',
    ],
  },
  {
    number: '02',
    title: 'Operação',
    items: [
      'Tráfego pago nas mídias escolhidas',
      'Conteúdo, vídeos e criativos UGC',
      'Landing pages e copy para ofertas',
      'Lojas virtuais quando contratadas',
    ],
  },
  {
    number: '03',
    title: 'Evolução',
    items: [
      'Acompanhamento dos indicadores',
      'Otimização e reuniões de evolução',
    ],
  },
];

export const investimento: SlideDefinition = {
  id: 'investimento',
  title: 'Soluções conectadas',
  tone: 'light',
  footer: true,
  notes: 'Mostre as frentes que podem compor uma operação integrada. As entregas efetivamente incluídas dependem do plano contratado, detalhado no próximo slide.',
  render: () => (
    <div className="proposal-slide">
      <img
        className="proposal-slide__image"
        src={assets.phoneShowcase}
        alt="Exemplos de lojas virtuais em celulares"
      />
      <div className="proposal-slide__hero">
        <Eyebrow>Soluções conectadas</Eyebrow>
        <Heading>Uma operação sob medida para o <Accent>seu momento.</Accent></Heading>
        <span className="proposal-slide__rule" aria-hidden="true" />
        <p className="proposal-slide__lead">Estratégia, execução e evolução trabalhando juntas para fazer o seu negócio crescer.</p>
      </div>
      <section className="proposal-slide__rail" aria-label="Frentes que podemos integrar">
        <div className="proposal-slide__rail-header">
          <p>FRENTES QUE PODEMOS INTEGRAR</p>
          <span>A composição final depende do plano contratado.</span>
        </div>
        <div className="proposal-slide__fronts">
          {fronts.map((front) => (
            <div className="proposal-slide__front" key={front.number}>
              <h3><span>{front.number}</span>{front.title}</h3>
              <ul>
                {front.items.map((item) => (
                  <li key={item}><Check size={19} strokeWidth={2.6} aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
