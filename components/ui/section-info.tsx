import { type ReactNode } from "react";

interface SectionInfoProps {
  children: ReactNode;
  className?: string;
  asOverlay?: boolean;
  uppercase?: boolean;
};

export const SectionInfo = ({ children, className = "" }: SectionInfoProps) => {
  return (
    <p
      className={`font-comme font-light text-lg md:text-section-info text-center leading-none ${className}`}
    >
      {children}
    </p>
  );
};
