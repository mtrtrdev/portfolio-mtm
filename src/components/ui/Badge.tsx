import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const base =
    "inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-widest font-mono-ny font-medium transition-colors";

  const variants = {
    default: "bg-zinc-800/80 text-zinc-300 border border-zinc-700/60",
    accent: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/30",
    outline: "bg-transparent text-zinc-400 border border-white/10 hover:border-white/30",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}

