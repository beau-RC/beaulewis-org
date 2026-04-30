"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
