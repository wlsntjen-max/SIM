"use client";

import React from "react";
import { useData } from "@/context/DataContext";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ToastContainer() {
  const { toasts } = useData();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === "ok" || (toast.type as any) === "success";
          const isError = toast.type === "err" || (toast.type as any) === "error";

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`pointer-events-auto flex items-start p-4 rounded-xl shadow-lg border backdrop-blur-md ${
                isSuccess
                  ? "bg-white/95 border-emerald-300 text-ink"
                  : isError
                  ? "bg-white/95 border-rose-300 text-ink"
                  : "bg-white/95 border-line text-ink"
              }`}
            >
              <div className="flex-shrink-0 mr-3 mt-0.5">
                {isSuccess && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
                {isError && <AlertCircle className="w-5 h-5 text-rose-600" />}
                {!isSuccess && !isError && (
                  <Info className="w-5 h-5 text-forest" />
                )}
              </div>
              <div className="flex-1 text-sm font-medium leading-snug">
                {toast.message}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
