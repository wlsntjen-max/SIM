import React from "react";
import { Info, Sparkles } from "lucide-react";

interface DemoDisclaimerProps {
  customText?: string;
  className?: string;
}

export function DemoDisclaimer({ customText, className = "" }: DemoDisclaimerProps) {
  return (
    <div
      className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-ivory-dark/60 border border-sage/25 text-xs sm:text-sm text-charcoal-muted leading-relaxed ${className}`}
    >
      <Info className="w-4 h-4 text-sage-700 flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold text-charcoal">Catatan Demonstrasi: </span>
        {customText ||
          "Data pada halaman ini merupakan data demonstrasi untuk keperluan simulasi interaktif Social Is Me (SIM) HIMSI UMN dan akan diperbarui menggunakan data resmi berkala."}
      </div>
    </div>
  );
}
