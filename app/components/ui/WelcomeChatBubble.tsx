"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeChatBubble({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const hasSeen = localStorage.getItem("welcomeChatBubbleSeen");
//     if (!hasSeen) {
//       setOpen(true);
//       localStorage.setItem("welcomeChatBubbleSeen", "true");
//     }
//   }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: -40, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="fixed top-8 left-8 z-50"
        >
          <div className="relative bg-[#0B23FF] text-white rounded-2xl px-4 py-2 max-w-xs text-sm shadow-lg pl-7">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-2 -right-2 bg-white text-[#0B23FF] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-gray-100 transition-colors"
            >
              ×
            </button>
            {/* Pic fine et élégante façon iMessage */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2"
              width="14"
              height="22"
              viewBox="0 0 14 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <path
                d="M14 0C5 7 5 15 14 22L0 18V4L14 0Z"
                fill="#0B23FF"
              />
            </svg>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
