import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectAccordion from "@/components/ProjectAccordion";
import { PROJECTS } from "@/lib/projects";

const STUFF = [
  "VIRAL MEDIA AGENCY",
  "BROADWAY MUSICAL",
  "TOY COMPANY",
  "SOFTWARE",
  "UX TEAMS",
  "MEMES AT SCALE",
  "A.I. FOR FUN",
];

const AWARDS = [
  "Emmy",
  "iOS App of the year",
  "TOTY Toy of the year",
  "YouTube Gold play button",
  "Free Superbowl ad",
];

const PUBLICATIONS = [
  "New York Times",
  "Good Morning America",
  "Hollywood Reporter",
  "TechCrunch",
  "Mashable",
  "The Atlantic",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="px-6 md:px-12 pt-32 md:pt-40 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h1 className="font-display-heavy uppercase leading-[0.88] tracking-[-0.045em] text-[clamp(72px,14vw,168px)]">
              Beau
              <br />
              Lewis
            </h1>
            <p className="mt-10 md:mt-14 max-w-[26ch] uppercase-label text-[13px] md:text-[15px] tracking-[0.04em] leading-[1.55] text-black">
              Entrepreneur,
              <br />
              Viral media champion,
              <br />
              builder of impossible creative visions that keep me up at night.
            </p>
            <p className="mt-24 md:mt-32 uppercase-label text-[11px] tracking-[0.12em] text-black/40">
              (Scroll)
            </p>
          </div>
          <div className="aspect-[3/4] md:aspect-[4/5] relative overflow-hidden">
            <Image
              src="/photos/IMG_7970 cropped.jpg"
              alt="Portrait of Beau Lewis"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="px-6 md:px-12 pt-6 md:pt-10 pb-24 md:pb-32">
        <div className="max-w-[900px] mx-auto md:mx-0 md:ml-[12vw]">
          <Reveal>
            <p className="font-display-bold text-[clamp(32px,5vw,72px)] leading-[1.1] tracking-[-0.025em]">
              I LOVE missions that demand people and technology invent the
              future together.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 space-y-10 md:space-y-14">
            <Reveal>
              <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em]">
                Realizing impossible dreams with smart people. Challenging old
                systems with new technology and imagination.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em]">
                My kids and my friends, music, the Seahawks, chess, skiing, and
                freestyle rapping. My wife and my sister, who are my heroes.
                Acai bowls that have too many ingredients to put a lid on.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-14 md:mt-20 font-display-bold text-[clamp(32px,5vw,72px)] leading-[1.1] tracking-[-0.025em]">
              <span style={{ color: "var(--color-brand-teal)" }}>
                3X Startup founder.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-blue)" }}>
                Emmy winner.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-orange)" }}>
                250+ million views.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* STUFF I'VE BUILT */}
      <section className="px-6 md:px-12 pt-4 md:pt-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display-heavy uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(60px,10vw,120px)]">
                Stuff
                <br />
                I&apos;ve Built
              </h2>
            </Reveal>
            <ul className="mt-12 md:mt-16 space-y-2">
              {STUFF.map((item, i) => (
                <Reveal key={item} delay={0.05 * i} as="li">
                  <span className="uppercase-label text-[15px] md:text-[17px] tracking-[0.04em]">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.2}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/photos/Beau Final.jpg"
                alt="Beau Lewis portrait"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WORK — accordion */}
      <section
        id="work"
        className="px-6 md:px-12 pt-8 md:pt-12 pb-8 md:pb-12 scroll-mt-24"
      >
        <ProjectAccordion projects={PROJECTS} />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 md:px-12 pt-12 md:pt-16 pb-24 md:pb-32 scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {[
            { title: "Awards", items: AWARDS },
            { title: "Publications", items: PUBLICATIONS },
          ].map((col, i) => (
            <Reveal key={col.title} delay={0.05 * i}>
              <h3 className="uppercase-label text-[12px] tracking-[0.12em] text-black mb-5">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-display-bold text-[15px] md:text-[17px] leading-[1.35]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 md:mt-32 relative aspect-[3/4] max-w-[560px] overflow-hidden">
            <Image
              src="/photos/Miles-TonyRobbins.jpg"
              alt="Miles and Tony Robbins"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="mt-16 md:mt-20 max-w-[1100px]">
            <p className="font-display-bold text-[clamp(28px,4.5vw,64px)] leading-[1.15] tracking-[-0.02em]">
              &ldquo;There&apos;s no shortcut to a dream, it&apos;s all blood
              and sweat and life is what you manage in between.&rdquo;
            </p>
            <cite className="block mt-8 uppercase-label text-[13px] tracking-[0.08em] text-black/55 not-italic">
              — James Mercer (Broken Bells)
            </cite>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
