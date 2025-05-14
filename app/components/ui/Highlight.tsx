// components/ui/Highlight.tsx
"use client";
import { motion } from "framer-motion";

export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <motion.span
        layoutId="highlight"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-1 bg-[#0B23FF]/30 rounded-full"
      />
      <span className="relative z-10 text-[#0B23FF] italic">{children}</span>
    </span>
  );
}