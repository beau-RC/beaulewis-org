"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

type Props = { projects: Project[] };

const PROJECT_COLORS = [
  "#000000",
  "var(--color-brand-yellow)",
  "var(--color-brand-orange)",
  "var(--color-brand-teal)",
  "var(--color-brand-blue)",
  "var(--color-brand-purple)",
];

export default function ProjectAccordion({ projects }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <ul className="divide-y divide-black/10 border-t border-b border-black/10">
      {projects.map((p, i) => {
        const isOpen = openSlug === p.slug;
        const color = PROJECT_COLORS[i % PROJECT_COLORS.length];
        return (
          <li key={p.slug}>
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : p.slug)}
              aria-expanded={isOpen}
              aria-controls={`panel-${p.slug}`}
              className="w-full group flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-10 py-6 md:py-10 text-left cursor-pointer"
            >
              <span
                className="font-display-heavy uppercase text-[clamp(40px,8vw,96px)] leading-[1] tracking-[-0.03em] group-hover:opacity-50 transition-opacity"
                style={{ color }}
              >
                {p.title}
              </span>
              <span className="flex items-center gap-6 uppercase-label text-[13px] md:text-[15px] tracking-[0.04em] text-black/55 shrink-0">
                <span>
                  {p.role}
                  {p.year ? ` · ${p.year}` : ""}
                </span>
                <span
                  aria-hidden
                  className="font-display-heavy text-black text-xl w-6 text-center leading-none transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`panel-${p.slug}`}
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-start">
                    {p.image && (
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                        <Image
                          src={p.image}
                          alt={`${p.title} cover`}
                          fill
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="object-cover"
                          style={
                            p.imagePosition
                              ? { objectPosition: p.imagePosition }
                              : undefined
                          }
                        />
                      </div>
                    )}
                    <div className="space-y-4 md:space-y-6">
                      {p.info.map((paragraph, i) => (
                        <p
                          key={i}
                          className="font-display-bold text-[clamp(16px,1.8vw,22px)] leading-[1.4] tracking-[-0.005em]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
