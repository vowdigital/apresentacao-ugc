import { useCallback, useEffect, useRef, useState } from 'react';
import type { SlideDefinition } from './types';

function indexFromHash(slides: SlideDefinition[]): number {
  const key = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
  if (!key) return 0;
  const byId = slides.findIndex((s) => s.id === key);
  if (byId >= 0) return byId;
  const byNumber = Number.parseInt(key, 10);
  return Number.isFinite(byNumber) ? Math.min(Math.max(byNumber - 1, 0), slides.length - 1) : 0;
}

interface Options {
  onToggleNotes: () => void;
  onToggleFullscreen: () => void;
}

/** Navegação por teclado, hash da URL e gesto de swipe. */
export function useDeckNavigation(slides: SlideDefinition[], { onToggleNotes, onToggleFullscreen }: Options) {
  const initialIndex = indexFromHash(slides);
  const indexRef = useRef(initialIndex);
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const last = slides.length - 1;

  const goTo = useCallback((nextIndex: number) => {
    const current = indexRef.current;
    const target = Math.min(Math.max(nextIndex, 0), last);
    if (target === current) return;
    indexRef.current = target;
    setDirection(target > current ? 'forward' : 'backward');
    setIndex(target);
  }, [last]);
  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  // Mantém a URL sincronizada para poder compartilhar um slide específico.
  useEffect(() => {
    const hash = `#/${slides[index].id}`;
    if (window.location.hash !== hash) window.history.replaceState(null, '', hash);
  }, [index, slides]);

  useEffect(() => {
    const onHashChange = () => goTo(indexFromHash(slides));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [goTo, slides]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const isControl = event.target instanceof HTMLElement && event.target.closest('a, button, video, input, textarea, select');
      if (isControl && (event.key === ' ' || event.key === 'Enter')) return;
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'Enter':
          event.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          event.preventDefault();
          prev();
          break;
        case 'Home':
          goTo(0);
          break;
        case 'End':
          goTo(last);
          break;
        case 'n':
        case 'N':
          onToggleNotes();
          break;
        case 'f':
        case 'F':
          onToggleFullscreen();
          break;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goTo, next, prev, last, onToggleNotes, onToggleFullscreen]);

  // Swipe horizontal em telas de toque.
  useEffect(() => {
    let startX: number | null = null;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') startX = e.clientX;
    };
    const onUp = (e: PointerEvent) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) < 60) return;
      if (dx < 0) next();
      else prev();
    };
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [next, prev]);

  return { index, goTo, next, prev, direction, isFirst: index === 0, isLast: index === last };
}
