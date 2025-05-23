"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0.98 }}
      transition={{
        duration: 0.15,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}