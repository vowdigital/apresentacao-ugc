import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import type { SlideDefinition } from '../deck/types';
import { assets } from '../deck/assets';

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

function Brand({ inverse = false }: { inverse?: boolean }) {
  return <img className="presentation-brand" src={inverse ? assets.vowWhite : assets.vowBlack} alt="Vow Digital" />;
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="presentation-kicker">{children}</p>;
}

function PlanLink({ children = 'Conhecer os planos' }: { children?: ReactNode }) {
  return <a className="presentation-link" href="#/valores">{children}<ArrowUpRight size={27} aria-hidden="true" /></a>;
}

const examples = [
  { name: 'Gi', label: 'Produto em uso', video: assets.ugcGi, poster: asset('ugc-gi-poster.jpg') },
  { name: 'Sofi', label: 'Experiência real', video: assets.ugcSofi, poster: asset('ugc-sofi-poster.jpg') },
  { name: 'Bruno', label: 'Conversa direta', video: assets.ugcBruno, poster: asset('ugc-bruno-poster.jpg') },
] as const;

function VideoExamples() {
  const [active, setActive] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    examples.forEach(({ name }) => {
      const video = videoRefs.current[name];
      if (!video) return;
      if (active === name) void video.play().catch(() => setActive(null));
      else video.pause();
    });
  }, [active]);

  return <div className="presentation-video-grid">
    {examples.map(({ name, label, video, poster }) => <article className="presentation-video-card" key={name}>
      <div className="presentation-video-frame">
        <img className="presentation-video-print-poster" src={poster} alt="" aria-hidden="true" />
        <video
          ref={(node) => { videoRefs.current[name] = node; }}
          src={video}
          poster={poster}
          preload="none"
          playsInline
          onEnded={() => setActive(null)}
          aria-label={`Exemplo de vídeo UGC com ${name}`}
        />
        <button
          className="presentation-video-play"
          type="button"
          onClick={() => setActive((current) => current === name ? null : name)}
          aria-label={active === name ? `Pausar vídeo de ${name}` : `Reproduzir vídeo de ${name}`}
        >
          {active === name ? <Pause size={25} fill="currentColor" aria-hidden="true" /> : <Play size={25} fill="currentColor" aria-hidden="true" />}
        </button>
      </div>
      <div className="presentation-video-caption"><strong>{name}</strong><span>{label}</span></div>
    </article>)}
  </div>;
}

const plans = [
  {
    name: 'Start', price: 'R$ 2.797', description: 'Uma base para começar.',
    points: ['Tráfego pago em 1 mídia', 'Landing page + copy', 'Edição de criativos do cliente'],
    ugc: 'UGC não incluído', terms: '6× R$ 2.700  ·  R$ 15.000 à vista',
  },
  {
    name: 'Grow', price: 'R$ 3.497', description: 'UGC para ganhar tração.',
    points: ['18 criativos UGC', '3 creators + 10 fotos', 'Tráfego pago em 2 mídias'],
    ugc: 'UGC incluído', terms: '6× R$ 3.500  ·  R$ 19.000 à vista',
  },
  {
    name: 'Pro', price: 'R$ 5.497', description: 'Mais creators, mais variações.',
    points: ['30 criativos UGC', '5 creators', 'Tráfego pago em 3 mídias'],
    ugc: 'UGC incluído', terms: '6× R$ 5.500  ·  R$ 28.900 à vista',
  },
] as const;

export const presentationSlides: SlideDefinition[] = [
  {
    id: 'abertura', title: 'UGC que aproxima', tone: 'light',
    notes: 'Abra perguntando como a marca mostra seus produtos hoje. A proposta é transformar demonstrações reais em conteúdo útil para atrair e ajudar a vender. O foco da conversa é UGC.',
    render: () => <div className="presentation presentation--cover">
      <header className="presentation-top"><Brand /><span>APRESENTAÇÃO COMERCIAL · UGC</span></header>
      <div className="presentation-cover-copy"><Kicker>CONTEÚDO DE PESSOAS PARA PESSOAS</Kicker><h1>Sua marca na voz de <em>quem usa.</em></h1><p>UGC para gerar conexão e dar mais força às suas vendas.</p><PlanLink /></div>
      <div className="presentation-cover-shape" aria-hidden="true"><span>UGC</span><i /></div>
      <div className="presentation-side-note">01 / APRESENTAÇÃO VOW DIGITAL</div>
    </div>,
  },
  {
    id: 'problema', title: 'Pessoas confiam em pessoas', tone: 'dark',
    notes: 'Traga a conversa para o comportamento do público. Demonstrações e experiências de pessoas reais ajudam a reduzir a distância entre produto e decisão. Peça um exemplo de dúvida frequente do cliente final.',
    render: () => <div className="presentation presentation--statement">
      <header className="presentation-top"><Brand inverse /><span>POR QUE UGC?</span></header>
      <Kicker>O PONTO DE PARTIDA</Kicker><h2>Antes de comprar, as pessoas querem <em>ver pessoas.</em></h2>
      <div className="presentation-statement-bottom"><span>01&nbsp; Identificação</span><span>02&nbsp; Confiança</span><span>03&nbsp; Decisão</span></div>
    </div>,
  },
  {
    id: 'oportunidade', title: 'O que o UGC faz', tone: 'light',
    notes: 'Explique com um produto do cliente: o creator mostra o uso, compartilha a experiência e responde dúvidas em linguagem natural. Cada formato pode virar conteúdo orgânico ou anúncio.',
    render: () => <div className="presentation presentation--benefits">
      <header className="presentation-top"><Brand /><span>O QUE O UGC ENTREGA</span></header>
      <div className="presentation-section-heading"><Kicker>UMA IDEIA SIMPLES</Kicker><h2>O produto sai da vitrine. <em>Entra na vida real.</em></h2></div>
      <div className="presentation-benefit-grid"><div><b>01</b><h3>Mostra</h3><p>O produto em uso.</p></div><div><b>02</b><h3>Conecta</h3><p>Experiências com quem se identifica.</p></div><div><b>03</b><h3>Responde</h3><p>Dúvidas antes da compra.</p></div></div>
    </div>,
  },
  {
    id: 'ugc-creators', title: 'Exemplos de UGC', tone: 'light',
    notes: 'Reproduza um ou dois exemplos conforme o segmento do cliente. Os vídeos começam pausados. Explore a linguagem natural e como diferentes creators podem abordar o mesmo produto de formas distintas.',
    render: () => <div className="presentation presentation--examples">
      <header className="presentation-top"><Brand /><span>UGC NA PRÁTICA</span></header>
      <div className="presentation-examples-heading"><div><Kicker>EXEMPLOS REAIS</Kicker><h2>Veja a linguagem <em>de perto.</em></h2></div><p>Três formatos. Uma conversa mais natural com o público.</p></div>
      <VideoExamples />
    </div>,
  },
  {
    id: 'processo', title: 'Como produzimos', tone: 'light',
    notes: 'A Vow conduz o processo: entende público e objetivo, define briefing e creators, coordena a produção, edita variações e aprende com os resultados. A composição exata depende do plano contratado.',
    render: () => <div className="presentation presentation--process">
      <header className="presentation-top"><Brand /><span>NOSSO PROCESSO</span></header>
      <div className="presentation-section-heading"><Kicker>DO BRIEFING AO CRIATIVO</Kicker><h2>Conteúdo com <em>direção.</em></h2></div>
      <div className="presentation-process-line"><div><span>01</span><h3>Planejamos</h3><p>Objetivo, produto e mensagem.</p></div><ArrowRight aria-hidden="true" /><div><span>02</span><h3>Produzimos</h3><p>Creators, roteiro e gravação.</p></div><ArrowRight aria-hidden="true" /><div><span>03</span><h3>Evoluímos</h3><p>Edição, variações e otimização.</p></div></div>
    </div>,
  },
  {
    id: 'vow', title: 'Por que a Vow', tone: 'dark',
    notes: 'Posicione a Vow como uma operação que conecta a criação de UGC com distribuição e acompanhamento. Não prometa resultados específicos: conteúdo, mídia e ajustes trabalham juntos, dentro do escopo do plano escolhido.',
    render: () => <div className="presentation presentation--vow">
      <header className="presentation-top"><Brand inverse /><span>VOW DIGITAL</span></header>
      <Kicker>MAIS QUE UM VÍDEO BONITO</Kicker><h2>UGC, mídia e estratégia <em>na mesma direção.</em></h2><p>Da ideia ao criativo. Do criativo à campanha.</p>
      <div className="presentation-vow-orbit" aria-hidden="true"><span>UGC</span></div>
    </div>,
  },
  {
    id: 'valores', title: 'Planos', tone: 'light',
    notes: 'Compare os planos a partir da necessidade do cliente. Start é base de tráfego e landing page, sem UGC incluído. Grow inclui 18 criativos com 3 creators e 10 fotos. Pro inclui 30 criativos com 5 creators. Todos incluem gestão de projeto e sucesso do cliente. Explique condições e benefícios adicionais da proposta antes de fechar.',
    render: () => <div className="presentation presentation--plans">
      <header className="presentation-top"><Brand /><span>PLANOS VOW DIGITAL</span></header>
      <div className="presentation-plans-heading"><div><Kicker>ESCOLHA SEU PRÓXIMO PASSO</Kicker><h2>Um plano para cada <em>momento.</em></h2></div><p>UGC incluso nos planos Grow e Pro.</p></div>
      <div className="presentation-plan-grid">{plans.map((plan) => <article className={`presentation-plan ${plan.name === 'Grow' ? 'presentation-plan--featured' : ''}`} key={plan.name}>
        <div className="presentation-plan-head"><span>PLANO {plan.name.toUpperCase()}</span><small>{plan.ugc}</small></div>
        <h3>{plan.name}</h3><p className="presentation-plan-description">{plan.description}</p>
        <div className="presentation-plan-price"><strong>{plan.price}</strong><span>/mês</span></div>
        <ul>{plan.points.map((point) => <li key={point}>{point}</li>)}</ul>
        <p className="presentation-plan-terms">{plan.terms}</p>
      </article>)}</div>
      <p className="presentation-plans-footnote">Escopo completo, gestão e condições especiais são alinhados na proposta.</p>
    </div>,
  },
  {
    id: 'fechamento', title: 'Próximo passo', tone: 'light',
    notes: 'Pergunte qual objetivo é prioritário e qual plano faz sentido agora. Proponha alinhar produto, público e canal principal para iniciar o planejamento de UGC.',
    render: () => <div className="presentation presentation--closing">
      <header className="presentation-top"><Brand /><span>VAMOS CRIAR JUNTOS?</span></header>
      <div className="presentation-closing-copy"><Kicker>PRÓXIMO PASSO</Kicker><h2>O próximo conteúdo pode começar <em>com a sua marca.</em></h2><p>Escolhemos o plano. Definimos a direção. Colocamos a produção em movimento.</p><PlanLink>Rever os planos</PlanLink></div>
      <img className="presentation-closing-person" src={assets.woman} alt="Profissional da Vow com um celular" />
    </div>,
  },
];
