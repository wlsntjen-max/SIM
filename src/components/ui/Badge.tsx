import React from "react";
import { getCategoryBadge, getStatusBadge, cn } from "@/lib/utils";
import { EventCategory, EventStatus } from "@/types";

interface CategoryBadgeProps {
  category: EventCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const badge = getCategoryBadge(category);
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border tracking-wide",
        badge.bg,
        badge.border,
        className
      )}
    >
      {badge.label}
    </span>
  );
}

interface StatusBadgeProps {
  status: EventStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const badge = getStatusBadge(status);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
        badge.bg,
        badge.border,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", badge.dot)} />
      {badge.label}
    </span>
  );
}
