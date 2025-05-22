"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeBubble({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Vérifie si la bulle a déjà été vue
    const hasSeen = localStorage.getItem("welcomeBubbleSeen");
    if (!hasSeen) {
      setOpen(true);
      localStorage.setItem("welcomeBubbleSeen", "true");
    }
  }, []);

  useEffect(() => {
    const timer = open ? setTimeout(() => setOpen(false), 4000) : undefined;
    return () => timer && clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const handleClick = () => setOpen(false);
    if (open) window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-white border border-[#0B23FF] rounded-2xl p-4 shadow-lg min-w-64 max-w-md">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
