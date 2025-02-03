import type React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientBackground({
  children,
  className = "",
}: GradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-indigo-200/20"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
