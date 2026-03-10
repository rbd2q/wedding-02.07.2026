import { type ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
  asOverlay?: boolean;
  uppercase?: boolean;
};

export function SectionTitle({
  children,
  className = '',
  asOverlay = false,
  uppercase = false,
}: SectionTitleProps) {
  const base =
    'font-cormorant text-3xl md:text-section-title tracking-wide text-center md:leading-[60px]';
  const color = asOverlay ? 'text-white' : 'text-darkBrown';
  const caps = uppercase ? 'uppercase tracking-[0.12em]' : '';
  return (
    <h2 className={`${base} ${color} ${caps} ${className}`}>
      {children}
    </h2>
  );
}
