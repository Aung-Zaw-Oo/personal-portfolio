import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  icon?: IconDefinition;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  icon,
  variant = "primary",
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    group
    inline-flex
    items-center
    justify-center
    gap-2.5
    whitespace-nowrap
    rounded-2xl
    border-transparent
    px-6
    py-4
    text-sm
    font-semibold
    transition-all
    duration-200
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-400/60
    focus-visible:ring-offset-2
    focus-visible:ring-offset-slate-950
    active:scale-[0.98]
    active:brightness-110
  `;

  const variants: Record<ButtonVariant, string> = {
    primary: `
      bg-gradient-to-r
      from-blue-600
      via-sky-600
      to-purple-600
      text-white
      shadow-lg
      shadow-sky-500/20
      hover:-translate-y-0.5
      hover:shadow-xl
      hover:shadow-sky-500/25
    `,

    secondary: `
      bg-slate-900/90
      text-slate-100
      border
      border-slate-800
      shadow-md
      shadow-slate-950/20
      hover:border-slate-700
      hover:bg-slate-800/95
      hover:-translate-y-0.5
    `,

    ghost: `
      bg-transparent
      text-slate-300
      hover:text-white
      hover:bg-white/5
      hover:-translate-y-0.5
      focus-visible:ring-blue-400/50
    `,
  };

  const sharedIconClasses =
    "text-base text-sky-100 transition-transform duration-200 ease-out group-hover:translate-x-1";
  const buttonContent = (
    <>
      {children}
      {icon && <FontAwesomeIcon icon={icon} className={sharedIconClasses} />}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
}
