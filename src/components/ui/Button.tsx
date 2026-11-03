import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-mono-ny uppercase tracking-wider text-xs transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-4 py-2.5 text-xs",
    lg: "px-6 py-3.5 text-sm",
  };

  const variants = {
    primary:
      "bg-emerald-400 text-black font-semibold hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.25)]",
    secondary:
      "bg-zinc-900 text-zinc-100 border border-zinc-700/80 hover:bg-zinc-800 hover:border-zinc-500",
    outline:
      "bg-transparent text-zinc-300 border border-white/20 hover:border-white hover:text-white",
  };

  return (
    <button
      className={`${base} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

