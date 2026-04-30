"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
};

export default function Typewriter({
  text,
  speed = 32,
  className,
  cursor = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    let raf: number;
    let last = performance.now();
    const step = (now: number) => {
      if (now - last >= speed) {
        i++;
        last = now;
        setShown(i);
      }
      if (i < text.length) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, speed, text.length]);

  const done = shown >= text.length;

  return (
    <span ref={ref} className={className}>
      {text.slice(0, shown)}
      {cursor && !done && <span className="cursor-blink">|</span>}
      <style jsx>{`
        .cursor-blink {
          display: inline-block;
          animation: blink 0.65s step-end infinite;
          opacity: 1;
          margin-left: 2px;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
