import type { CSSProperties, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const cx = (...parts: Array<string | false | undefined>) => parts.filter(Boolean).join(' ');

/** Rótulo de seção acima do título. */
export const Eyebrow = ({ children, className, style }: TextProps) => (
  <p className={cx('eyebrow', className)} style={style}>
    {children}
  </p>
);

export const Display = ({ children, className, style }: TextProps) => (
  <h1 className={cx('display', className)} style={style}>
    {children}
  </h1>
);

export const Heading = ({ children, className, style }: TextProps) => (
  <h2 className={cx('heading', className)} style={style}>
    {children}
  </h2>
);

/** Frase de destaque (44px). */
export const Statement = ({ children, className, style }: TextProps) => (
  <p className={cx('statement', className)} style={style}>
    {children}
  </p>
);

export const Body = ({ children, className, style }: TextProps) => (
  <p className={cx('body', className)} style={style}>
    {children}
  </p>
);

/** Texto em destaque com a cor de acento do tema. */
export const Accent = ({ children }: { children: ReactNode }) => <span className="accent">{children}</span>;
