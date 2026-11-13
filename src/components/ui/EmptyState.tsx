import React from "react";
import { FolderSearch, LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  actionHref?: string;
  onActionClick?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon = FolderSearch,
  title,
  description,
  actionText,
  actionHref,
  onActionClick,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-sage-300 bg-white/40",
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-serif text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-charcoal-muted max-w-md leading-relaxed">
        {description}
      </p>
      {actionText && (
        <div className="mt-6">
          {actionHref ? (
            <Link
              href={actionHref}
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-sage hover:bg-sage-600 text-white transition-colors shadow-soft"
            >
              {actionText}
            </Link>
          ) : (
            <button
              onClick={onActionClick}
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-sage hover:bg-sage-600 text-white transition-colors shadow-soft"
            >
              {actionText}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
