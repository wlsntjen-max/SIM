import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  pill?: string;
  pillColor?: "sage" | "terracotta" | "crimson" | "recycled" | "gold";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  pill,
  pillColor = "sage",
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const pillColorClasses = {
    sage: "bg-sage-100 text-sage-800 border-sage-300",
    terracotta: "bg-terracotta-50 text-terracotta-dark border-terracotta/30",
    crimson: "bg-crimson-50 text-crimson-dark border-crimson/30",
    recycled: "bg-recycled-50 text-recycled-dark border-recycled/30",
    gold: "bg-gold/15 text-gold-dark border-gold/30",
  };

  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col mb-10 max-w-3xl", alignClasses[align], className)}>
      {pill && (
        <span
          className={cn(
            "inline-block px-3.5 py-1 mb-3 text-xs uppercase tracking-wider font-semibold rounded-full border",
            pillColorClasses[pillColor]
          )}
        >
          {pill}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
