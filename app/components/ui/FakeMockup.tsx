'use client';

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type FloatingMockCursorProps = {
  targetRef: React.RefObject<HTMLElement>;
  size?: number; // diamètre du curseur en px
  color?: string; // couleur du fond
  blur?: number; // intensité du flou
};

export default function FloatingMockCursor({
  targetRef,
  size = 36,
  color = "rgba(255,255,255,0.5)",
  blur = 8,
}: FloatingMockCursorProps) {
  const [visible, setVisible] = useState(false);

  // Valeurs animées pour la position
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Animation spring pour un effet smooth
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  // Déplacement du curseur vers la cible
  useEffect(() => {
    function moveToTarget() {
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2 - size / 2;
        const targetY = rect.top + rect.height / 2 - size / 2;
        x.set(targetX);
        y.set(targetY);
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    // Déplacement initial
    moveToTarget();

    // Déplacement lors du hover
    const el = targetRef.current;
    if (el) {
      el.addEventListener("mouseenter", moveToTarget);
      el.addEventListener("mousemove", moveToTarget);
      el.addEventListener("mouseleave", () => setVisible(false));
    }

    // Nettoyage
    return () => {
      if (el) {
        el.removeEventListener("mouseenter", moveToTarget);
        el.removeEventListener("mousemove", moveToTarget);
        el.removeEventListener("mouseleave", () => setVisible(false));
      }
    };
    // eslint-disable-next-line
  }, [targetRef, size]);

  if (!visible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: springX,
        y: springY,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        boxShadow: "0 4px 24px 0 rgba(44, 122, 120, 0.10)",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: "1.5px solid rgba(44, 122, 120, 0.18)",
        zIndex: 1000,
        pointerEvents: "none",
        transition: "background 0.2s",
      }}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
    />
  );
}