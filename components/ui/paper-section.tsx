import { type ReactNode } from "react";

type PaperSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tornTop?: boolean;
  tornBottom?: boolean;
};

export const PaperSection = ({
  children,
  id,
  className = "",
}: PaperSectionProps) => (
  <section
    id={id}
    className={`relative bg-paper py-10 sm:py-[100px] ${className}`}
  >
    <div className="relative">{children}</div>
  </section>
);
