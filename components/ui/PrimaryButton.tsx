import Link from "next/link";
import { type ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
};

export function PrimaryButton({
  children,
  href,
  type = "button",
  className = "",
  style = {},
  disabled = false,
  onClick,
}: PrimaryButtonProps) {
  const base =
    "rounded-[18px] bg-darkBrown hover:bg-darkerBrown text-white font-semibold px-8 py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={`${base} ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
