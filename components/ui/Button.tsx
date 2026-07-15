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
}

export default function Button({
  children,
  icon,
  variant = "primary",
  href = "#",
  className = "",
}: ButtonProps) {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    text-sm
    font-semibold
    transition-all
    duration-300
  `;

  const variants = {
    primary: `
      rounded-2xl
      bg-gradient-to-r
      from-blue-600
      to-purple-600
      px-8
      py-4
      text-white
      shadow-lg
      shadow-blue-500/20
      hover:from-blue-500
      hover:to-purple-500
      hover:-translate-y-0.5
    `,

    secondary: `
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      px-8
      py-4
      text-zinc-300
      hover:border-zinc-700
      hover:text-white
      hover:-translate-y-0.5
    `,

    ghost: `
      rounded-xl
      px-4
      py-2
      text-zinc-400
      hover:text-white
    `,
  };

  return (
    <a
      href={href}
      className={` ${baseStyles} ${variants[variant]} ${className} `}
    >
      {children}

      {icon && (
        <FontAwesomeIcon icon={icon} className="text-xs text-blue-400" />
      )}
    </a>
  );
}
