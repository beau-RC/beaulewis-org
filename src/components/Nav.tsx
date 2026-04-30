"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 mix-blend-difference text-white">
      <Link
        href="#top"
        className="uppercase-label text-[13px] tracking-[0.08em]"
      >
        Beau Lewis
      </Link>
    </header>
  );
}
