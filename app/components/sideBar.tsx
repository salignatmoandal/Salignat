"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  // Animation variants
  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const separatorVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "100%", 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.aside 
      className="h-screen w-64 m-2 bg-[var(--background)] text-black p-6 flex flex-col gap-2 rounded-lg"
      style={{ 
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
        borderRight: "1px solid rgba(0, 0, 0, 0.05)"
      }}
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      {/* Title with animation */}
      <motion.div 
        className="text-2xl font-bold mb-6 relative"
        variants={itemVariants}
      >
        <span>I'm Mawen</span>
        <motion.div 
          className="absolute -bottom-2 left-0 h-1 bg-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
      </motion.div>

      {/* Nav */}
      <nav className="flex flex-col gap-4">
        {/* Group 1 */}
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <SidebarItem label="Home" icon="🏠" />
          <SidebarItem label="About" icon="👋" />
        </motion.div>

        {/* Separator */}
        <motion.div variants={itemVariants} className="mt-4 mb-2">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Me
          </div>
          <motion.div 
            className="h-[1px] bg-gray-200"
            variants={separatorVariants}
          />
        </motion.div>

        {/* Group 2 */}
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <SidebarItem label="Bookmarks" icon="🔖" />
          <SidebarItem label="AMA" icon="💬" />
          <SidebarItem label="Stack" icon="⚙️" />
        </motion.div>

        {/* Separator */}
        <motion.div variants={itemVariants} className="mt-4 mb-2">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
            Projects
          </div>
          <motion.div 
            className="h-[1px] bg-gray-200"
            variants={separatorVariants}
          />
        </motion.div>

        {/* Group 3 */}
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <SidebarItem label="Projects" icon="📁" />
          <SidebarItem label="Contact" icon="📧" />
        </motion.div>
      </nav>
    </motion.aside>
  );
}

function SidebarItem({ label, icon, external }: { label: string; icon?: string; external?: boolean }) {
  return (
    <motion.div
      className="flex items-center gap-3 text-sm font-medium cursor-pointer px-3 py-2 rounded-md"
      whileHover={{ 
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        x: 5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className="text-lg w-5">{icon}</span>}
      <span>{label}</span>
      {external && (
        <motion.span 
          className="ml-auto text-gray-400"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
        >
          ↗
        </motion.span>
      )}
    </motion.div>
  );
}
