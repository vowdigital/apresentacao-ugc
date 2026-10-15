import { useCallback, useEffect, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import type { SlideDefinition } from './types';
import { useDeckNavigation } from './useDeckNavigation';
import { STAGE_HEIGHT, STAGE_WIDTH, useStageScale } from './useStageScale';

interface DeckProps {
  slides: SlideDefinition[];
}

/** Renderiza um slide no palco 1920×1080, com rodapé numerado quando pedido. */
function SlideCanvas({ slide, number, total }: { slide: SlideDefinition; number: number; total: number }) {
  return (
    <div className={`slide slide--${slide.tone}`} aria-label={`Slide ${number} de ${total}: ${slide.title}`}>
      {slide.render()}
      {slide.footer && <Footer tone={slide.tone} number={number} total={total} right={slide.footerRight} />}
    </div>
  );
}

function SlideTransition({
  slide,
  number,
  total,
  direction,
}: {
  slide: SlideDefinition;
  number: number;
  total: number;
  direction: 'forward' | 'backward';
}) {
  const [leaving, setLeaving] = useState<{ slide: SlideDefinition; number: number } | null>(null);
  const currentRef = useRef({ slide, number });

  useEffect(() => {
    const previous = currentRef.current;
    if (previous.slide.id === slide.id) return;

    currentRef.current = { slide, number };
    setLeaving(previous);
    const isPlanWelcome = previous.slide.id === 'fechamento' && slide.id === 'valores';
    const timeout = window.setTimeout(() => setLeaving(null), isPlanWelcome ? 1200 : 1100);
    return () => window.clearTimeout(timeout);
  }, [slide, number]);

  const transitionVariant = leaving ? `deck__slide-transition--${leaving.slide.id}-to-${slide.id}` : '';
  return (
    <div className={`deck__slide-transition ${transitionVariant}`}>
      {leaving && (
        <div
          key={`leave-${leaving.slide.id}`}
          className={`deck__slide-layer deck__slide-layer--leave deck__slide-layer--${direction}`}
          aria-hidden="true"
        >
          <SlideCanvas slide={leaving.slide} number={leaving.number} total={total} />
        </div>
      )}
      <div
        key={`enter-${slide.id}`}
        className={`deck__slide-layer deck__slide-layer--enter deck__slide-layer--${direction}`}
      >
        <SlideCanvas slide={slide} number={number} total={total} />
      </div>
    </div>
  );
}

/** Modo impressão (?print): todos os slides empilhados, um por página, para exportar em PDF. */
function PrintDeck({ slides }: DeckProps) {
  return (
    <main className="print-deck">
      {slides.map((slide, i) => (
        <section key={slide.id} className="print-page">
          <SlideCanvas slide={slide} number={i + 1} total={slides.length} />
        </section>
      ))}
    </main>
  );
}

export function Deck({ slides }: DeckProps) {
  const isPrint = new URLSearchParams(window.location.search).has('print');
  const viewportRef = useRef<HTMLDivElement>(null);
  const { scaleX, scaleY } = useStageScale(viewportRef);
  const [showNotes, setShowNotes] = useState(false);
  const [isFinale, setIsFinale] = useState(false);
  const total = slides.length;

  const toggleNotes = useCallback(() => setShowNotes((v) => !v), []);
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) void document.documentElement.requestFullscreen();
  }, []);
  const triggerFinale = useCallback(() => setIsFinale(true), []);

  const { index, direction } = useDeckNavigation(slides, {
    onToggleNotes: toggleNotes,
    onToggleFullscreen: toggleFullscreen,
    onReachedEnd: triggerFinale,
  });

  useEffect(() => {
    if (index !== total - 1) setIsFinale(false);
  }, [index, total]);

  if (isPrint) return <PrintDeck slides={slides} />;

  const slide = slides[index];
  return (
    <main
      className={`deck deck--${slide.tone}${isFinale && index === total - 1 ? ' deck--finale' : ''}`}
      aria-label="Apresentação comercial Vow Digital"
    >
      <div className="deck__viewport" ref={viewportRef}>
        <div
          className="deck__stage"
          style={{
            width: STAGE_WIDTH,
            height: STAGE_HEIGHT,
            transform: `translate(-50%, -50%) scale(${scaleX}, ${scaleY})`,
          }}
        >
          <SlideTransition slide={slide} number={index + 1} total={total} direction={direction} />
        </div>
      </div>

      {showNotes && (
        <aside className="deck__notes" aria-label="Notas do apresentador">
          <p className="deck__notes-title">{slide.title}</p>
          <p>{slide.notes}</p>
        </aside>
      )}

      <aside className="deck__mobile-portrait" aria-label="Orientação do dispositivo">
        <div className="deck__mobile-portrait-icon" aria-hidden="true">
          ↻
        </div>
        <p className="deck__mobile-portrait-title">Gire o celular</p>
        <p>Esta apresentação foi preparada no formato widescreen.</p>
      </aside>
    </main>
  );
}
