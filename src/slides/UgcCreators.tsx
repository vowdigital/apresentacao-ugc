import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { assets } from '../deck/assets';
import type { SlideDefinition } from '../deck/types';
import { Accent, Eyebrow, Heading } from '../components/Typography';

const creators = [
  { name: 'Bruno', video: assets.ugcBruno },
  { name: 'Gi', video: assets.ugcGi },
  { name: 'Sofi', video: assets.ugcSofi },
  { name: 'Naeli', video: assets.ugcNaeli },
  { name: 'Sofia', video: assets.ugcSofia },
  { name: 'Lui', video: assets.ugcLui },
];

const points = [
  { title: 'Mostram o produto em uso', text: 'Demonstração real de como funciona no dia a dia.' },
  { title: 'Compartilham experiências', text: 'Relatos que geram confiança e identificação.' },
  { title: 'Respondem dúvidas', text: 'Objeções tratadas de forma natural, antes da compra.' },
];

function UgcCreatorsSlide() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    galleryRef.current?.querySelectorAll('video').forEach((video) => {
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

  const columns = [creators.slice(0, 2), creators.slice(2, 4), creators.slice(4, 6)];

  return (
    <div className="ugc-slide">
      <div className="ugc-slide__gallery" aria-label="Exemplos de vídeos produzidos com creators" ref={galleryRef}>
        {columns.map((column, i) => (
          <div className={`ugc-slide__column ugc-slide__column--${i + 1}`} key={i}>
            {column.map(({ name, video }) => (
              <figure className="ugc-slide__creator" key={name}>
                <video
                  src={video}
                  autoPlay={playing}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`Vídeo UGC do creator ${name}`}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>

      <button className="ugc-slide__playback" type="button" onClick={() => setPlaying((current) => !current)} aria-label={playing ? 'Pausar todos os vídeos UGC' : 'Reproduzir todos os vídeos UGC'}>
        {playing ? <Pause size={16} fill="currentColor" aria-hidden="true" /> : <Play size={16} fill="currentColor" aria-hidden="true" />}
        <span>{playing ? 'Pausar vídeos' : 'Reproduzir vídeos'}</span>
      </button>

      <div className="ugc-slide__content">
        <header className="ugc-slide__hero">
          <Eyebrow>UGC + Creators</Eyebrow>
          <Heading>Seu produto visto por <Accent>pessoas reais.</Accent></Heading>
          <span className="ugc-slide__rule" aria-hidden="true" />
          <p className="ugc-slide__lead">
            UGC é conteúdo gerado por usuários: vídeos na perspectiva de quem usa o produto de verdade.
          </p>
        </header>

        <ol className="ugc-slide__points" aria-label="O que os creators fazem pela marca">
          {points.map((point, i) => (
            <li key={point.title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="ugc-slide__index">A VOW PLANEJA · PRODUZ · EDITA — PARA REDES E ANÚNCIOS</p>
      </div>
    </div>
  );
}

export const ugcCreators: SlideDefinition = {
  id: 'ugc-creators',
  title: 'UGC e creators',
  tone: 'light',
  footer: true,
  notes: 'Explique que UGC é conteúdo criado na linguagem das pessoas: demonstração, experiência e respostas a dúvidas. Apresente os seis exemplos de creators e conecte essa produção à estratégia de conteúdo e anúncios da Vow Digital.',
  render: () => <UgcCreatorsSlide />,
};
