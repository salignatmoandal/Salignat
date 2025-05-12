// mawen/app/components/ui/ProfileBubble.tsx

"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProfileBubbleProps {
  title: string;
  children: ReactNode;
}

export default function ProfileBubble({ title, children }: ProfileBubbleProps) {
  return (
    <motion.div 
      className="bg-white rounded-3xl p-8 shadow-sm max-w-3xl w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h1>
      
      <motion.div
        className="text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}