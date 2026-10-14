import { type ReactNode } from 'react';
import type { SlideDefinition } from '../deck/types';
import { assets } from '../deck/assets';
import { planoStart, planoGrow, planoPro } from './Valores';

const image = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

function Brand({ light = false }: { light?: boolean }) {
  return <img className="brand" src={light ? assets.vowWhite : assets.vowBlack} alt="Vow Digital" />;
}

function Top({ label, light = false }: { label: string; light?: boolean }) {
  return <header className="slide-top"><Brand light={light} /><span>{label}</span></header>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

const planSlides: SlideDefinition[] = [planoStart, planoGrow, planoPro].map((slide) => ({
  ...slide,
  footer: false,
}));

const methodSlides: SlideDefinition[] = [
  {
    id: 'metodo-e3s', title: 'Método E3’s', tone: 'light',
    notes: 'Abra o bloco do Método E3’s apresentando a lógica proprietária da Vow: Estratégia, Estrutura e Escala.',
    render: () => <div className="presentation method-cover">
      <div className="method-cover__texture"><img src={assets.xadrez} alt="" aria-hidden="true" /></div>
      <Top label="ESTRATÉGIA DE VENDA" />
      <div className="method-cover__copy"><Eyebrow>MÉTODO EXCLUSIVO VOW DIGITAL</Eyebrow><h2>Método <em>E3’s</em></h2><p>Três movimentos para transformar estratégia em venda.</p></div>
      <div className="method-cover__footer"><strong>Estratégia · Estrutura · Escala</strong><span>01 / 04</span></div>
    </div>,
  },
  {
    id: 'metodo-estrategia', title: 'Estratégia', tone: 'light',
    notes: 'Explique que a estratégia reduz o achismo: antes de investir, a Vow entende mercado, concorrentes e cliente ideal para escolher onde jogar.',
    render: () => <div className="presentation method-detail method-detail--strategy">
      <div className="method-detail__background"><img src={assets.xadrez} alt="Textura xadrez em roxo e lilás" /></div>
      <Top label="MÉTODO E3’S / 01" />
      <div className="method-detail__content"><Eyebrow>01 / ESTRATÉGIA</Eyebrow><h2>Antes de investir,<br /><em>é preciso saber onde jogar.</em></h2><p>Antes de investir, é preciso saber onde jogar e como vencer. Analisamos o mercado, os concorrentes e o perfil de cliente ideal para identificar oportunidades, definir prioridades e construir uma estratégia direcionada ao crescimento do seu negócio.</p><div className="method-detail__closing"><span>Estratégia</span><strong>Menos achismo. Mais direção para crescer.</strong></div></div>
      <div className="method-detail__index">01 <span>/ 03</span></div>
    </div>,
  },
  {
    id: 'metodo-estrutura', title: 'Estrutura', tone: 'light',
    notes: 'Mostre que a estratégia só ganha força quando conteúdo, UGC, tráfego pago, loja e ferramentas comerciais trabalham na mesma operação.',
    render: () => <div className="presentation method-detail method-detail--structure">
      <div className="method-detail__background"><img src={assets.jordan} alt="Loja virtual apresentada em um notebook" /></div>
      <Top label="MÉTODO E3’S / 02" />
      <div className="method-detail__content"><Eyebrow>02 / ESTRUTURA</Eyebrow><h2>Uma estratégia só gera resultados quando existe uma <em>estrutura preparada.</em></h2><p>Uma estratégia só gera resultados quando existe uma estrutura preparada para executá-la. Conectamos conteúdo, UGC com creators reais, tráfego pago, lojas virtuais e ferramentas comerciais em uma operação integrada, onde cada ação contribui para atrair clientes e gerar vendas.</p><div className="method-detail__closing"><span>Estrutura</span><strong>Não basta ter as ferramentas. É preciso fazê-las trabalhar em conjunto.</strong></div></div>
      <div className="method-detail__index">02 <span>/ 03</span></div>
    </div>,
  },
  {
    id: 'metodo-escala', title: 'Escala', tone: 'light',
    notes: 'Feche o método mostrando que escala é potencializar o que funciona: analisar métricas, otimizar investimentos e direcionar recursos aos caminhos com maior potencial.',
    render: () => <div className="presentation method-detail method-detail--scale">
      <div className="method-detail__background"><img src={assets.nuvemshopPanelPurple} alt="Painel de vendas com indicadores em roxo" /></div>
      <Top label="MÉTODO E3’S / 03" />
      <div className="method-detail__content"><Eyebrow>03 / ESCALA</Eyebrow><h2>Crescer é <em>potencializar o que funciona.</em></h2><p>Crescer não é apenas investir mais, mas potencializar o que funciona. Analisamos métricas e retornos para identificar oportunidades, otimizar investimentos e direcionar recursos às estratégias com maior potencial de gerar resultados.</p><div className="method-detail__closing"><span>Escala</span><strong>Menos desperdício. Mais inteligência para crescer.</strong></div></div>
      <div className="method-detail__index">03 <span>/ 03</span></div>
    </div>,
  },
];

export const presentationSlides: SlideDefinition[] = [
  {
    id: 'abertura', title: 'Apresentação Vow Digital', tone: 'light',
    notes: 'Apresente a Vow Digital e introduza o posicionamento: conteúdo que atrai e marketing que vende.',
    render: () => <div className="presentation slide-cover">
      <div className="slide-cover__photo"><img src={assets.woman} alt="Profissional da Vow Digital segurando um celular" /></div>
      <Top label="APRESENTAÇÃO" />
      <div className="slide-cover__copy"><Eyebrow>Apresentação</Eyebrow><h1>VOW DIGITAL</h1><p>Conteúdo que Atrai.<br />Marketing que Vende.</p></div>
      <div className="slide-cover__footer">ESTRATÉGIA · CONTEÚDO · CRESCIMENTO</div>
    </div>,
  },
  {
    id: 'problema', title: 'Sobre nós', tone: 'light',
    notes: 'Apresente a Vow Digital como parceira de crescimento, conectando marketing, tecnologia e estratégia comercial para gerar impacto consistente.',
    render: () => <div className="presentation slide-about slide-about--hero">
      <div className="slide-about__background"><img src={assets.mockupStores} alt="Vitrines digitais em diferentes lojas e celulares" /></div>
      <Top label="VOW DIGITAL / SOBRE NÓS" />
      <div className="slide-about__hero-copy"><Eyebrow>Sobre nós</Eyebrow><h2>Conectamos as peças<br />que fazem uma empresa <em>crescer.</em></h2><p>A Vow Digital une marketing, tecnologia e estratégia comercial para ajudar empresas a vender mais e crescer com consistência.</p><div className="slide-about__hero-stats"><div><strong>+500</strong><span>Negócios acelerados</span></div><div><strong>+7 anos</strong><span>De atuação</span></div></div><div className="slide-about__hero-partners-highlight"><strong>Estamos entre os 3% de empresas reconhecidas por Google e Meta.</strong><div><img src={assets.googlePartners} alt="Google Partners" /><img src={assets.metaBusiness} alt="Meta Business Partner" /></div></div></div>
      <div className="slide-about__hero-footer"><span>ESTRATÉGIA · CONTEÚDO · CRESCIMENTO</span></div>
    </div>,
  },
  ...methodSlides,
  {
    id: 'oportunidade', title: 'Anúncios UGC', tone: 'light',
    notes: 'Apresente os anúncios UGC como conteúdos produzidos por creators reais, com diferentes estilos e abordagens, pensados para chamar atenção e melhorar a performance das campanhas.',
    render: () => <div className="presentation slide-opportunity slide-opportunity--ugc">
      <div className="slide-opportunity__video-wall" aria-hidden="true"><video src={assets.ugcGi} poster={image('ugc-gi-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /><video src={assets.ugcSofi} poster={image('ugc-sofi-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /><video src={assets.ugcLui} poster={image('ugc-lui-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /></div>
      <Top label="ANÚNCIOS UGC" />
      <div className="slide-opportunity__copy"><Eyebrow>CONTEÚDO QUE PERFORMA</Eyebrow><h2>Anúncios <em>UGC</em></h2><p>Conteúdos produzidos por uma comunidade de creators, com diferentes estilos e abordagens, pensados para gerar atenção e performance nos seus anúncios.</p></div>
      <div className="slide-opportunity__footer"><strong>Conteúdo real. Mais atenção. Melhor performance.</strong><span>CREATORS · ESTILOS · ABORDAGENS</span></div>
    </div>,
  },
  {
    id: 'trafego-pago', title: 'Tráfego pago', tone: 'light',
    notes: 'Apresente o tráfego pago como uma operação contínua de estratégia, gestão e otimização para colocar a marca diante das pessoas certas e transformar tráfego em oportunidades de venda.',
    render: () => <div className="presentation slide-traffic">
      <div className="slide-traffic__video" aria-hidden="true"><video src={assets.scaleVideo} poster={image('ugc-leo-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /></div>
      <Top label="SERVIÇOS / 02 DE 04" />
      <div className="slide-traffic__copy"><Eyebrow>02 / 04</Eyebrow><h2>Tráfego <em>Pago</em></h2><p>Estratégia, gestão e otimização contínua das campanhas para colocar sua marca na frente das pessoas certas, controlar o investimento e transformar tráfego em oportunidades de venda.</p></div>
      <div className="slide-traffic__footer"><strong>Mais precisão para investir. Mais oportunidades para vender.</strong><span>ESTRATÉGIA · GESTÃO · OTIMIZAÇÃO</span></div>
    </div>,
  },
  {
    id: 'ecommerce', title: 'E-commerce, sites e páginas de vendas', tone: 'light',
    notes: 'Apresente os projetos digitais como estruturas pensadas para atrair, envolver e converter, aproveitando melhor cada oportunidade gerada pelo tráfego.',
    render: () => <div className="presentation slide-ecommerce">
      <div className="slide-traffic__video" aria-hidden="true"><video src={assets.ugcBruno} poster={image('ugc-bruno-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /></div>
      <Top label="SERVIÇOS / 03 DE 04" />
      <div className="slide-ecommerce__copy"><Eyebrow>03 / 04</Eyebrow><h2>E-commerce, sites<br />e páginas de <em>vendas.</em></h2><p>Projetos desenvolvidos para atrair, envolver e converter, com estrutura otimizada para aproveitar ao máximo cada oportunidade gerada pelo tráfego.</p></div>
      <div className="slide-ecommerce__footer"><strong>Estrutura que transforma tráfego em oportunidade.</strong><span>ATRAIR · ENVOLVER · CONVERTER</span></div>
    </div>,
  },
  {
    id: 'cro', title: 'CRO — Otimização para conversão', tone: 'light',
    notes: 'Apresente o CRO como a etapa que melhora o aproveitamento do tráfego existente: analisamos o comportamento, ajustamos páginas, ofertas e jornadas para gerar mais leads, vendas e oportunidades.',
    render: () => <div className="presentation slide-cro">
      <div className="slide-traffic__video" aria-hidden="true"><video src={assets.strategyVideo} poster={image('ugc-mu-poster.jpg')} autoPlay muted loop playsInline preload="metadata" /></div>
      <Top label="SERVIÇOS / 04 DE 04" />
      <div className="slide-cro__copy"><Eyebrow>04 / 04</Eyebrow><h2>CRO — Otimização<br />para <em>conversão.</em></h2><p>Analisamos o comportamento dos seus visitantes e otimizamos páginas, ofertas e jornadas para transformar mais acessos em leads, vendas e oportunidades, aproveitando melhor o tráfego que você já gera.</p></div>
      <div className="slide-cro__footer"><strong>Mais conversão com o tráfego que você já gera.</strong><span>ANÁLISE · OTIMIZAÇÃO · CONVERSÃO</span></div>
    </div>,
  },
  {
    id: 'fechamento', title: 'Próximo passo', tone: 'dark',
    notes: 'Pergunte qual objetivo é prioritário e qual plano faz sentido agora. Proponha alinhar produto, público e canal principal para iniciar o planejamento de UGC.',
    render: () => <div className="presentation slide-closing"><Top label="VAMOS CRIAR JUNTOS?" light />
      <div className="slide-closing__copy"><Eyebrow>PRÓXIMO PASSO</Eyebrow><h2>O próximo conteúdo pode começar <em>com a sua marca.</em></h2><p>Escolhemos o plano. Definimos a direção. Colocamos a produção em movimento.</p></div>
    </div>,
  },
  ...planSlides,
  {
    id: 'encerramento', title: 'Encerramento', tone: 'dark',
    notes: 'Feche a apresentação reforçando que o próximo passo é transformar a estratégia em movimento e alinhar o melhor plano para a marca.',
    render: () => <div className="presentation slide-final"><Top label="ENCERRAMENTO" light />
      <div className="slide-final__copy"><Eyebrow>VAMOS COMEÇAR?</Eyebrow><h2>Agora é hora de colocar sua marca em <em>movimento.</em></h2><p>Estratégia, conteúdo e performance para transformar atenção em crescimento.</p></div>
      <div className="slide-final__footer">VOW DIGITAL · CONTEÚDO · ESTRATÉGIA · CRESCIMENTO</div>
    </div>,
  },
];
