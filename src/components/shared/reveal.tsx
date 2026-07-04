"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Render as a different HTML element (defaults to div). */
  as?: "div" | "section" | "span" | "li" | "header";
  once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/** Fade + slide reveal when the element scrolls into view. */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  as = "div",
  once = true,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const offset = reducedMotion ? { x: 0, y: 0 } : offsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
