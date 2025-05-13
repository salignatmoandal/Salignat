// mawen/app/components/ui/HoverBubble.tsx

"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverBubbleProps {
  triggerElement: ReactNode;
  bubbleContent: ReactNode;
  bubblePosition?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export default function HoverBubble({
  triggerElement,
  bubbleContent,
  bubblePosition = "top",
  delay = 0.2
}: HoverBubbleProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Détermine les classes de positionnement en fonction de bubblePosition
  const getPositionClasses = () => {
    switch (bubblePosition) {
      case "top":
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 -translate-x-1/2 mb-2";
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* L'élément déclencheur (ex: votre prénom) */}
      <span className="inline-block cursor-pointer">{triggerElement}</span>
      
      {/* La bulle qui apparaît au survol */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className={`absolute z-10 ${getPositionClasses()}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.2,
              delay: delay
            }}
          >
            <div className="bg-white border border-[#0B23FF] rounded-2xl p-4 shadow-lg min-w-64 max-w-md">
              {bubbleContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}