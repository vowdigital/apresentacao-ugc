import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
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

function PlanLink({ children = 'Conhecer os planos' }: { children?: ReactNode }) {
  return <a className="plan-link" href="#/valores">{children}<ArrowUpRight size={27} aria-hidden="true" /></a>;
}

const examples = [
  { name: 'Gi', label: 'Produto em uso', video: assets.ugcGi, poster: image('ugc-gi-poster.jpg') },
  { name: 'Sofi', label: 'Experiência real', video: assets.ugcSofi, poster: image('ugc-sofi-poster.jpg') },
  { name: 'Naeli', label: 'Demonstração', video: assets.ugcNaeli, poster: image('ugc-naeli-poster.jpg') },
  { name: 'Lui', label: 'Conversa direta', video: assets.ugcLui, poster: image('ugc-lui-poster.jpg') },
] as const;

function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});
  useEffect(() => {
    examples.forEach(({ name }) => {
      const video = refs.current[name];
      if (!video) return;
      if (active === name) void video.play().catch(() => setActive(null));
      else video.pause();
    });
  }, [active]);

  return <div className="video-gallery">{examples.map(({ name, label, video, poster }) =>
    <article className="video-tile" key={name}>
      <div className="video-tile__media">
        <img className="video-tile__print" src={poster} alt="" aria-hidden="true" />
        <video ref={(node) => { refs.current[name] = node; }} src={video} poster={poster} preload="none" playsInline onEnded={() => setActive(null)} aria-label={`Vídeo UGC com ${name}`} />
        <button type="button" onClick={() => setActive((current) => current === name ? null : name)} aria-label={active === name ? `Pausar vídeo de ${name}` : `Reproduzir vídeo de ${name}`}>
          {active === name ? <Pause size={27} fill="currentColor" aria-hidden="true" /> : <Play size={27} fill="currentColor" aria-hidden="true" />}
        </button>
      </div>
      <div className="video-tile__caption"><strong>{name}</strong><span>{label}</span></div>
    </article>
  )}</div>;
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
      <div className="method-cover__figure"><img src={assets.woman} alt="Profissional apresentando uma solução digital" /></div>
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
    render: () => <div className="presentation slide-about">
      <Top label="VOW DIGITAL / SOBRE NÓS" />
      <div className="slide-about__heading"><Eyebrow>Sobre nós</Eyebrow><h2>Conectamos as peças que fazem uma empresa <em>crescer.</em></h2></div>
      <div className="slide-about__copy">
        <p className="slide-about__lead">A Vow Digital conecta marketing, tecnologia e estratégia comercial para ajudar empresas a vender mais e crescer com consistência.</p>
        <p>Atuamos em diferentes frentes do crescimento digital, integrando tráfego pago, produção de conteúdo e UGC, desenvolvimento de lojas virtuais e planejamento estratégico de vendas online.</p>
        <p>Mais do que executar ações isoladas, buscamos entender o que cada negócio precisa para avançar, identificar oportunidades e transformar estratégia em iniciativas que gerem impacto comercial.</p>
        <p className="slide-about__statement">Nosso trabalho é conectar as peças que fazem uma empresa crescer.</p>
      </div>
      <div className="slide-about__visual"><img className="slide-about__stores" src={assets.mockupStores} alt="Vitrines digitais em diferentes lojas e celulares" /><p>Somos certificados por gigantes da tecnologia e publicidade, como Google e Meta, representando apenas 3% das empresas reconhecidas no Brasil.</p><div className="slide-about__logos"><img src={assets.googlePartners} alt="Google Partners" /><img src={assets.metaBusiness} alt="Meta Business Partner" /></div></div>
      <div className="slide-about__stats"><div><strong>+500</strong><span>Negócios acelerados</span></div><div><strong>+7 anos</strong><span>De atuação</span></div></div>
    </div>,
  },
  ...methodSlides,
  {
    id: 'oportunidade', title: 'O que o UGC faz', tone: 'light',
    notes: 'Explique com um produto do cliente: o creator mostra o uso, compartilha a experiência e responde dúvidas em linguagem natural. Cada formato pode virar conteúdo orgânico ou anúncio.',
    render: () => <div className="presentation slide-opportunity"><Top label="O QUE O UGC ENTREGA" />
      <div className="slide-opportunity__copy"><Eyebrow>UMA IDEIA SIMPLES</Eyebrow><h2>O produto sai da vitrine.<br /><em>Entra na vida real.</em></h2><p>Creators mostram o produto em uso, com a linguagem de quem compra.</p></div>
      <div className="slide-opportunity__media"><img src={image('ugc-gi-poster.jpg')} alt="Creator mostrando um produto" /><img src={image('ugc-sofi-poster.jpg')} alt="Creator relatando experiência com produto" /><img src={image('ugc-bruno-poster.jpg')} alt="Creator falando com a câmera" /></div>
      <div className="slide-opportunity__words"><span>Mostra</span><span>Conecta</span><span>Responde</span></div>
    </div>,
  },
  {
    id: 'ugc-creators', title: 'Exemplos de UGC', tone: 'dark',
    notes: 'Reproduza um ou dois exemplos conforme o segmento do cliente. Os vídeos começam pausados. Explore a linguagem natural e como diferentes creators podem abordar o mesmo produto.',
    render: () => <div className="presentation slide-examples"><Top label="UGC NA PRÁTICA" light />
      <div className="slide-examples__heading"><div><Eyebrow>EXEMPLOS REAIS</Eyebrow><h2>Veja a linguagem <em>de perto.</em></h2></div><p>Clique para assistir aos vídeos.</p></div>
      <VideoGallery />
    </div>,
  },
  {
    id: 'processo', title: 'Como produzimos', tone: 'light',
    notes: 'A Vow conduz o processo: entende público e objetivo, define briefing e creators, coordena a produção, edita variações e aprende com os resultados. A composição exata depende do plano contratado.',
    render: () => <div className="presentation slide-process"><Top label="NOSSO PROCESSO" />
      <div className="slide-process__heading"><Eyebrow>DO BRIEFING AO CRIATIVO</Eyebrow><h2>Conteúdo com <em>direção.</em></h2></div>
      <div className="process-grid"><article><img src={image('ugc-mu-poster.jpg')} alt="Equipe da Vow planejando em torno de um notebook" /><div><span>01 / ESTRATÉGIA</span><h3>Planejamos</h3><p>Objetivo, produto e mensagem.</p></div></article><article><img src={image('ugc-bruno-poster.jpg')} alt="Creator em gravação de vídeo" /><div><span>02 / PRODUÇÃO</span><h3>Produzimos</h3><p>Creators, roteiro e gravação.</p></div></article><article><img src={image('ugc-leo-poster.jpg')} alt="Equipe da Vow analisando uma campanha" /><div><span>03 / EVOLUÇÃO</span><h3>Evoluímos</h3><p>Edição, variações e otimização.</p></div></article></div>
    </div>,
  },
  {
    id: 'vow', title: 'Por que a Vow', tone: 'light',
    notes: 'Posicione a Vow como uma operação que conecta criação de UGC com distribuição e acompanhamento. Não prometa resultados específicos: conteúdo, mídia e ajustes trabalham juntos dentro do escopo contratado.',
    render: () => <div className="presentation slide-vow"><Top label="VOW DIGITAL" />
      <div className="slide-vow__copy"><Eyebrow>MAIS QUE UM VÍDEO BONITO</Eyebrow><h2>UGC, mídia e estratégia <em>na mesma direção.</em></h2><p>Da ideia ao criativo. Do criativo à campanha.</p><PlanLink /></div>
      <div className="slide-vow__media"><img className="slide-vow__team" src={image('ugc-mu-poster.jpg')} alt="Equipe da Vow trabalhando em um projeto" /><img className="slide-vow__creator" src={image('ugc-sofia-poster.jpg')} alt="Creator apresentando um produto" /></div>
    </div>,
  },
  ...planSlides,
  {
    id: 'fechamento', title: 'Próximo passo', tone: 'dark',
    notes: 'Pergunte qual objetivo é prioritário e qual plano faz sentido agora. Proponha alinhar produto, público e canal principal para iniciar o planejamento de UGC.',
    render: () => <div className="presentation slide-closing"><Top label="VAMOS CRIAR JUNTOS?" light />
      <div className="slide-closing__copy"><Eyebrow>PRÓXIMO PASSO</Eyebrow><h2>O próximo conteúdo pode começar <em>com a sua marca.</em></h2><p>Escolhemos o plano. Definimos a direção. Colocamos a produção em movimento.</p><PlanLink>Rever os planos</PlanLink></div>
      <div className="slide-closing__media"><img src={image('ugc-sofia-poster.jpg')} alt="Creator apresentando um produto" /><img src={image('ugc-lui-poster.jpg')} alt="Creator falando sobre um produto" /></div>
    </div>,
  },
];
