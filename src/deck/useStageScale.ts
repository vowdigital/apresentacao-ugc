import { useLayoutEffect, useState, type RefObject } from 'react';

export const STAGE_WIDTH = 1920;
export const STAGE_HEIGHT = 1080;

interface StageScale {
  scaleX: number;
  scaleY: number;
}

/** Ajusta o palco à largura e à altura da janela, sem faixas nem cortes. */
export function useStageScale(containerRef: RefObject<HTMLElement>): StageScale {
  const [stage, setStage] = useState<StageScale>({ scaleX: 1, scaleY: 1 });

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      const scaleX = width / STAGE_WIDTH;
      const scaleY = height / STAGE_HEIGHT;
      setStage((current) =>
        Math.abs(current.scaleX - scaleX) < 0.001 && Math.abs(current.scaleY - scaleY) < 0.001
          ? current
          : { scaleX, scaleY },
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [containerRef]);

  return stage;
}
