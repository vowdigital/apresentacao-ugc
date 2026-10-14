import { useEffect, useRef, useState } from 'react';
import { Check, Pause, Play } from 'lucide-react';
import type { SlideDefinition } from '../deck/types';
import { assets } from '../deck/assets';

const plans = [
  {
    id: 'valores',
    name: 'Start',
    number: '01',
    price: 'R$ 2.797,00',
    installments: '6× R$ 2.700 no cartão sem juros',
    cash: 'R$ 15.000 à vista',
    features: [
      'Tráfego pago em 1 mídia: Google, Meta ou TikTok',
      'Landing Page + Copy',
      'Edição de criativos estáticos e vídeos do cliente',
      'Gestor de projeto',
      'Sucesso do cliente',
    ],
    bonus: 'No pagamento à vista: Loja Virtual completa por R$ 2.499',
    image: assets.muie,
  },
  {
    id: 'plano-grow',
    name: 'Grow',
    number: '02',
    price: 'R$ 3.497,00',
    installments: '6× R$ 3.500 no cartão sem juros',
    cash: 'R$ 19.000 à vista',
    features: [
      'Tráfego pago em 2 mídias: Google, Meta ou TikTok',
      'Landing Page + Copy',
      'Edição de vídeos e imagens',
      '18 criativos UGC: 3 creators × 3 vídeos × 2 hooks',
      '10 fotos com creators',
      'Gestor de projeto',
      'Sucesso do cliente (CS)',
    ],
    bonus: 'No pagamento à vista: Loja Virtual completa por R$ 2.499',
    image: assets.woman,
  },
  {
    id: 'plano-pro',
    name: 'Pro',
    number: '03',
    price: 'R$ 5.497,00',
    installments: '6× R$ 5.500 no cartão sem juros',
    cash: 'R$ 28.900 à vista',
    features: [
      'Tráfego pago em 3 mídias: Google, Meta, TikTok ou Mercado Ads',
      'Edição de vídeos e imagens',
      '30 criativos UGC: 5 creators × 3 vídeos × 2 hooks',
      '1 gestor de projeto',
      '1 sucesso do cliente (CS)',
    ],
    bonus: 'No pagamento com cartão: Loja Virtual completa por apenas R$ 2.499',
    image: assets.mockupStores,
  },
] as const;

const proVideoLanes = [
  [assets.ugcBruno, assets.ugcSofi, assets.ugcSofia],
  [assets.ugcGi, assets.ugcNaeli, assets.ugcLui],
] as const;

function ProVideoBackground() {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    backdropRef.current?.querySelectorAll('video').forEach((video) => {
      if (playing) void video.play().catch(() => {});
      else video.pause();
    });
  }, [playing]);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => {
      if (motionPreference.matches) setPlaying(false);
    };
    motionPreference.addEventListener('change', onChange);
    return () => motionPreference.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <div className={`plan-slide__ugc-backdrop${playing ? '' : ' is-paused'}`} ref={backdropRef} aria-hidden="true">
        {proVideoLanes.map((videos, laneIndex) => (
          <div className={`plan-slide__ugc-lane plan-slide__ugc-lane--${laneIndex === 0 ? 'up' : 'down'}`} key={laneIndex}>
            {videos.map((video) => (
              <div className="plan-slide__ugc-frame" key={video}>
                <video src={video} autoPlay={playing} muted loop playsInline preload="metadata" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        className="plan-slide__ugc-playback"
        type="button"
        onClick={() => setPlaying((current) => !current)}
        aria-label={playing ? 'Pausar vídeos e animação do Plano Pro' : 'Reproduzir vídeos e animação do Plano Pro'}
      >
        {playing ? <Pause size={17} fill="currentColor" aria-hidden="true" /> : <Play size={17} fill="currentColor" aria-hidden="true" />}
        <span>{playing ? 'Pausar vídeos' : 'Reproduzir vídeos'}</span>
      </button>
    </>
  );
}

function createPlanSlide(plan: (typeof plans)[number]): SlideDefinition {
  return {
    id: plan.id,
    title: `Plano ${plan.name}`,
    tone: 'light',
    footer: true,
    notes: `Apresente o Plano ${plan.name} como mensalidade. Explique as condições de pagamento em seis parcelas ou à vista e o benefício da loja virtual.`,
    render: () => (
      <div className={`plan-slide plan-slide--${plan.name.toLowerCase()}`}>
        {plan.name === 'Pro'
          ? <ProVideoBackground />
          : <img className="plan-slide__background" src={plan.image} alt="" aria-hidden="true" />}
        <div className="plan-slide__content">
          <div className="plan-slide__eyebrow">
            <span>PLANOS QUE SE ADEQUAM AO SEU NEGÓCIO</span>
            <span>{plan.number} / 03</span>
          </div>

          <header className="plan-slide__header">
            <div className="plan-slide__name">
              <span>PLANO</span>
              <h2>{plan.name}</h2>
            </div>
            <div className="plan-slide__price">
              <span>MENSALIDADE</span>
              <p>{plan.price}<small>/mês</small></p>
            </div>
          </header>

          <div className="plan-slide__terms">
            <p>{plan.installments}</p>
            <span aria-hidden="true" />
            <p>{plan.cash}</p>
          </div>

          <div className="plan-slide__included">
            <h3>O que está incluído</h3>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={23} strokeWidth={2.7} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="plan-slide__bonus">
            <span>CONDIÇÃO ESPECIAL</span>
            <p>{plan.bonus}</p>
          </div>
        </div>
      </div>
    ),
  };
}

export const planoStart = createPlanSlide(plans[0]);
export const planoGrow = createPlanSlide(plans[1]);
export const planoPro = createPlanSlide(plans[2]);
