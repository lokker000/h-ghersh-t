"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "yellow" | "cream" | "orange";
}

export default function RetroButton({
  children,
  href,
  variant = "yellow",
  className = "",
  ...props
}: RetroButtonProps) {
  const baseStyles =
    "border-2 border-black shadow-[2px_2px_0px_#000] px-4 py-2 font-semibold transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-sm";

  const variantStyles = {
    yellow: "bg-retro-yellow hover:bg-retro-orange",
    cream: "bg-retro-cream hover:bg-retro-yellow",
    orange: "bg-retro-orange hover:bg-retro-yellow",
  };

  const buttonContent = (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
