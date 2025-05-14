"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0.98 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.98 }}
        transition={{
          duration: 0.15,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}