import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, NotebookPen } from 'lucide-react';
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
    const timeout = window.setTimeout(() => setLeaving(null), 480);
    return () => window.clearTimeout(timeout);
  }, [slide, number]);

  return (
    <div className="deck__slide-transition">
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
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const syncFullscreenState = () => setIsFullscreen(Boolean(document.fullscreenElement));
    syncFullscreenState();
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, []);

  const toggleNotes = useCallback(() => setShowNotes((v) => !v), []);
  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) void document.documentElement.requestFullscreen();
  }, []);

  const { index, goTo, next, prev, direction, isFirst, isLast } = useDeckNavigation(slides, {
    onToggleNotes: toggleNotes,
    onToggleFullscreen: toggleFullscreen,
  });

  if (isPrint) return <PrintDeck slides={slides} />;

  const slide = slides[index];
  const total = slides.length;

  return (
    <main className={`deck deck--${slide.tone}`} aria-label="Apresentação comercial Vow Digital">
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

      <nav className="deck__controls" aria-label="Navegação da apresentação">
        <button type="button" onClick={prev} disabled={isFirst} aria-label="Slide anterior">
          <ChevronLeft size={20} />
        </button>
        <span className="deck__counter" aria-live="polite">
          {index + 1} / {total}
        </span>
        <button type="button" onClick={next} disabled={isLast} aria-label="Próximo slide">
          <ChevronRight size={20} />
        </button>
        <span className="deck__divider" />
        <button type="button" onClick={toggleNotes} aria-pressed={showNotes} aria-label="Notas do apresentador (N)">
          <NotebookPen size={18} />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-pressed={isFullscreen}
          aria-label={isFullscreen ? 'Sair da tela cheia (F)' : 'Entrar em tela cheia (F)'}
          title={isFullscreen ? 'Sair da tela cheia (F)' : 'Entrar em tela cheia (F)'}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </nav>

      <nav className="deck__progress" aria-label="Progresso da apresentação">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            tabIndex={0}
            className={i === index ? 'is-active' : i < index ? 'is-done' : undefined}
            onClick={() => goTo(i)}
            aria-label={`Ir para o slide ${i + 1}: ${s.title}`}
            aria-current={i === index ? 'step' : undefined}
            title={s.title}
          />
        ))}
      </nav>

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
