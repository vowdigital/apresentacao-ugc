import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Eyebrow, Heading } from '../components/Typography';

const method = [
  {
    number: '01',
    title: 'Estratégia',
    image: assets.nuvemshopDashboard,
    alt: 'Painel de vendas com indicadores de performance',
    text: 'Antes de investir, é preciso saber onde jogar e como vencer. Analisamos o mercado, os concorrentes e o perfil de cliente ideal para identificar oportunidades, definir prioridades e construir uma estratégia direcionada ao crescimento do seu negócio.',
    closing: 'Menos achismo. Mais direção para crescer.',
  },
  {
    number: '02',
    title: 'Estrutura',
    image: assets.mockupStores,
    alt: 'Conjunto de lojas digitais em diferentes segmentos',
    text: 'Uma estratégia só gera resultados quando existe uma estrutura preparada para executá-la. Conectamos conteúdo, UGC com creators reais, tráfego pago, lojas virtuais e ferramentas comerciais em uma operação integrada, onde cada ação contribui para atrair clientes e gerar vendas.',
    closing: 'Não basta ter as ferramentas. É preciso fazê-las trabalhar em conjunto.',
  },
  {
    number: '03',
    title: 'Escala',
    image: assets.coverPerson,
    alt: 'Indicadores digitais de vendas e conversão',
    text: 'Crescer não é apenas investir mais, mas potencializar o que funciona. Analisamos métricas e retornos para identificar oportunidades, otimizar investimentos e direcionar recursos às estratégias com maior potencial de gerar resultados.',
    closing: 'Menos desperdício. Mais inteligência para crescer.',
  },
];

export const vow: SlideDefinition = {
  id: 'vow',
  title: 'Método exclusivo Vow Digital',
  tone: 'light',
  footer: true,
  notes: 'Apresente o Método 3E’s como a forma proprietária da Vow Digital de conectar estratégia, estrutura e escala. Na etapa de Estrutura, destaque o papel do conteúdo e dos creators reais como parte da operação de vendas.',
  render: () => (
    <div className="method-slide">
      <div className="method-slide__heading">
        <Eyebrow>Método exclusivo Vow Digital</Eyebrow>
        <Heading>Método <span className="accent">3E’s</span></Heading>
      </div>
      <div className="method-slide__grid">
        {method.map((item) => (
          <article key={item.number} className="method-slide__card">
            <div className="method-slide__image">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="method-slide__name">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="method-slide__text">{item.text}</p>
            <p className="method-slide__closing">{item.closing}</p>
          </article>
        ))}
      </div>
    </div>
  ),
};
