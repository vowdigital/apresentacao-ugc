import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Accent, Eyebrow, Heading } from '../components/Typography';

const steps = [
  {
    number: '01',
    title: 'Estratégia',
    label: 'Diagnóstico e planejamento',
    video: assets.strategyVideo,
    videoAlt: 'Vídeo representando a etapa de estratégia',
    text: 'Começamos com um onboarding estratégico para entender profundamente o seu negócio, seus objetivos comerciais, seu público ideal, seus indicadores atuais e as principais oportunidades de crescimento. Com base nesse diagnóstico, desenvolvemos um roadmap estratégico personalizado, com prioridades, ações e direcionamentos claros, apresentado visualmente para alinhar o planejamento antes de iniciar a execução.',
  },
  {
    number: '02',
    title: 'Estrutura',
    label: 'Implementação e execução',
    video: assets.structureVideo,
    videoAlt: 'Vídeo representando a etapa de estrutura',
    text: 'Com o planejamento definido, nossa equipe entra em ação para construir a estrutura necessária para atrair, converter e conquistar clientes. Conectamos sua marca a creators e coordenamos toda a produção de conteúdos UGC, da roteirização à edição. Estruturamos campanhas de tráfego pago (Ads) nas principais plataformas (Meta, TikTok, Google e Mercado Ads), de acordo com as necessidades do seu negócio. Também implementamos lojas virtuais, páginas de vendas e grupos de vendas, conectando os diferentes canais de aquisição em uma operação integrada.',
  },
  {
    number: '03',
    title: 'Escala',
    label: 'Gestão e otimização contínua',
    video: assets.scaleVideo,
    videoAlt: 'Vídeo representando a etapa de escala',
    text: 'Acompanhamos os indicadores, analisamos os resultados e identificamos oportunidades para aprimorar continuamente a operação. Otimizamos campanhas, potencializamos as estratégias que demonstram melhor desempenho e direcionamos os investimentos com base nos dados. Tudo isso com reuniões periódicas de acompanhamento, alinhamento de prioridades e definição dos próximos passos para evoluir os resultados.',
  },
];

function ProcessoSlide() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    visualRef.current?.querySelectorAll('video').forEach((video) => {
      if (playing) void video.play().catch(() => {});
      else video.pause();
    });
  }, [playing]);

  return (
    <div className="process-slide">
      <div className="process-slide__visual" ref={visualRef} aria-label="Vídeos das etapas do método">
        {steps.map((step) => (
          <figure className="process-slide__frame" key={step.number}>
            <video src={step.video} autoPlay={playing} loop muted playsInline preload="metadata" aria-label={step.videoAlt} />
            <figcaption><span>{step.number}</span>{step.title}</figcaption>
          </figure>
        ))}
      </div>

      <button className="process-slide__playback" type="button" onClick={() => setPlaying((current) => !current)} aria-label={playing ? 'Pausar vídeos das etapas' : 'Reproduzir vídeos das etapas'}>
        {playing ? <Pause size={16} fill="currentColor" aria-hidden="true" /> : <Play size={16} fill="currentColor" aria-hidden="true" />}
        <span>{playing ? 'Pausar vídeos' : 'Reproduzir vídeos'}</span>
      </button>

      <div className="process-slide__hero">
        <Eyebrow>Como faremos?</Eyebrow>
        <Heading>Da estratégia <Accent>ao crescimento.</Accent></Heading>
        <span className="process-slide__rule" aria-hidden="true" />
        <p className="process-slide__lead">Um método em três etapas: planejamos, estruturamos e escalamos a sua operação com base em dados.</p>
      </div>

      <section className="process-slide__rail" aria-label="Etapas do método">
        <div className="process-slide__steps">
          {steps.map((step) => (
            <div className="process-slide__step" key={step.number}>
              <h3><span>{step.number}</span>{step.title}</h3>
              <p className="process-slide__step-label">{step.label}</p>
              <p className="process-slide__step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const processo: SlideDefinition = {
  id: 'processo',
  title: 'Como faremos?',
  tone: 'light',
  footer: true,
  notes: 'Apresente o caminho completo da parceria: primeiro entendemos o negócio e planejamos, depois implementamos a estrutura e, por fim, otimizamos continuamente com base nos dados.',
  render: () => <ProcessoSlide />,
};
