import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectAccordion from "@/components/ProjectAccordion";
import { PROJECTS } from "@/lib/projects";

const SUBSTACK_URL = "https://beaumountainlewis.substack.com/";
const AI_RAP_URL = "#"; // TODO: replace with real AI Rap Debates URL
const COFOUNDERS_URL = "https://cofoundersthemusical.com";
const APP_URL = "https://allpeoplepower.com";

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Beau Lewis",
  jobTitle: "Entrepreneur, Writer, Producer",
  url: "https://beaulewis.org",
  image: "https://beaulewis.org/photos/ogImage.jpg",
  description:
    "Entrepreneur, writer, and producer working to connect humans and tech.",
  sameAs: [
    "https://www.linkedin.com/in/beaul/",
    "https://www.instagram.com/peeplittlebeau/",
  ],
};

const BUILT = [
  "GoldieBlox",
  "Rhyme Combinator",
  "Seedwell",
];

const FEATURED = [
  "The New York Times",
  "The Atlantic",
  "Fortune",
  "Good Morning America",
  "TechCrunch",
  "Stanford Magazine",
  "American Theatre",
];

const EDUCATION = [
  "Stanford, BS Engineering",
  "Oxford, International Relations",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />

      {/* HERO */}
      <section id="top" className="px-6 md:px-12 pt-32 md:pt-40 pb-8 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h1 className="font-display-heavy uppercase leading-[0.88] tracking-[-0.045em] text-[clamp(72px,14vw,168px)]">
              Beau
              <br />
              Lewis
            </h1>
            <p className="mt-10 md:mt-14 max-w-[34ch] uppercase-label text-[13px] md:text-[15px] tracking-[0.04em] leading-[1.55] text-black">
              Entrepreneur, writer, and producer — working to connect humans
              and tech.
            </p>
            <p className="mt-8 md:mt-10 max-w-[44ch] font-display-bold text-[clamp(17px,1.6vw,22px)] leading-[1.45] tracking-[-0.005em]">
              I&apos;ve spent twenty years figuring out why some ideas spread
              and others don&apos;t — at GoldieBlox, at Rhyme Combinator, on a
              Broadway-bound musical, and now in the room with the people
              building AI.
            </p>
            <p className="mt-16 md:mt-20 uppercase-label text-[11px] tracking-[0.12em] text-black/40">
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

      {/* THROUGHLINE */}
      <section className="px-6 md:px-12 pt-6 md:pt-10 pb-24 md:pb-32">
        <div className="max-w-[900px] mx-auto md:mx-0 md:ml-[12vw]">
          <div className="space-y-10 md:space-y-14">
            <Reveal>
              <p className="font-display-bold text-[clamp(32px,5vw,72px)] leading-[1.1] tracking-[-0.025em]">
                I started in viral media to discover what makes strangers
                care at scale.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em]">
                I co-founded a toy company because I wanted to change what a
                million girls believed about themselves. I co-wrote a hip-hop
                musical because I wanted to put Oakland on stage in a story
                Silicon Valley wasn&apos;t telling. Different surfaces. Same
                question:
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display-bold text-[clamp(32px,5vw,72px)] leading-[1.1] tracking-[-0.025em]">
                how does technology become a story that brings people together?
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em]">
                That question is now the most important one in AI. The
                capability is real. What&apos;s missing — what&apos;s almost
                always missing — is the human part. That&apos;s the work
                I&apos;m doing now.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT I'M WORKING ON */}
      <section className="px-6 md:px-12 pt-4 md:pt-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <Reveal>
              <h2 className="font-display-heavy uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(56px,9vw,112px)]">
                What I&apos;m
                <br />
                working
                <br />
                on
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12 md:mt-16 aspect-[4/5] relative overflow-hidden">
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
          <div className="space-y-12 md:space-y-14 md:mt-6">
            <Reveal>
              <a
                href={COFOUNDERS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="uppercase-label text-[12px] tracking-[0.12em] text-black/55 mb-3">
                  Co-Founders the Musical →
                </h3>
                <p className="font-display-bold text-[clamp(20px,2.4vw,30px)] leading-[1.3] tracking-[-0.01em] group-hover:opacity-55 transition-opacity">
                  Co-writer and producer of the hip-hop musical that sold out
                  its world premiere at A.C.T. in 2025. The story of an Oakland
                  coder who creates an AI avatar to reconnect with her dad.
                  Headed to Broadway.
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.05}>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="uppercase-label text-[12px] tracking-[0.12em] text-black/55 mb-3">
                  All People Powered →
                </h3>
                <p className="font-display-bold text-[clamp(20px,2.4vw,30px)] leading-[1.3] tracking-[-0.01em] group-hover:opacity-55 transition-opacity">
                  An accelerator like no other — a live concert and pitch
                  competition bringing funding to first-time founders on stage.
                  Backed by Hewlett, Kapor, Doris Duke, and Omidyar — funders
                  aligned on responsible AI.
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={AI_RAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="uppercase-label text-[12px] tracking-[0.12em] text-black/55 mb-3">
                  AI Rap Debates →
                </h3>
                <p className="font-display-bold text-[clamp(20px,2.4vw,30px)] leading-[1.3] tracking-[-0.01em] group-hover:opacity-55 transition-opacity">
                  A series of viral animated clips expanding the most pressing
                  conversations around AI and humanity. How will AI impact our
                  jobs? Does it belong in art? And will it ultimately save or
                  destroy us? Backed by Reid Hoffman.
                </p>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="uppercase-label text-[12px] tracking-[0.12em] text-black/55 mb-3">
                  Writing on AI →
                </h3>
                <p className="font-display-bold text-[clamp(20px,2.4vw,30px)] leading-[1.3] tracking-[-0.01em] group-hover:opacity-55 transition-opacity">
                  Dispatches from inside the AI moment, for people who care
                  more about the implications than the demos. New essays on
                  Substack.
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section
        id="about"
        className="px-6 md:px-12 pt-12 md:pt-16 pb-24 md:pb-32 scroll-mt-24"
      >
        <Reveal>
          <h2 className="font-display-heavy uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(60px,10vw,120px)] mb-12 md:mb-20">
            Background
          </h2>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          <Reveal>
            <p className="font-display-bold text-[clamp(28px,4.5vw,64px)] leading-[1.15] tracking-[-0.025em] max-w-[1100px]">
              <span style={{ color: "var(--color-brand-teal)" }}>
                Three companies.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-blue)" }}>
                One Emmy.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-purple)" }}>
                250M+ views online.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-orange)" }}>
                A Super Bowl ad I didn&apos;t pay for.
              </span>
              <br />
              <span style={{ color: "var(--color-brand-yellow)" }}>
                Apps and toys named &ldquo;of the year&rdquo;.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em] max-w-[1000px]">
              But what I care most about is the company I keep: I&apos;ve been
              lucky to work with Reid Hoffman, Mark Rober,
              Anthony Veneziale, and a small group of people who are trying to
              make sure the next decade of technology is built for humans, not
              at them.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display-bold text-[clamp(20px,2.6vw,32px)] leading-[1.3] tracking-[-0.005em] max-w-[1000px]">
              I love my kids and my friends, music, the Seahawks, chess,
              skiing, and freestyle rapping. My wife and my sister, who are my
              heroes. Acai bowls that have too many ingredients to put a lid
              on.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { title: "Built or co-founded", items: BUILT },
              { title: "Featured in", items: FEATURED },
              { title: "Education", items: EDUCATION },
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
        </div>
      </section>

      {/* EARLIER PROJECTS — accordion */}
      <section
        id="work"
        className="px-6 md:px-12 pt-8 md:pt-12 pb-8 md:pb-12 scroll-mt-24"
      >
        <ProjectAccordion projects={PROJECTS} />
      </section>

      {/* WHAT I'M LOOKING FOR */}
      <section className="px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-28">
        <Reveal>
          <h2 className="font-display-heavy uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(60px,10vw,120px)] mb-12 md:mb-20">
            What I&apos;m
            <br />
            looking for
          </h2>
        </Reveal>
        <div className="max-w-[1100px] space-y-10 md:space-y-12">
          <Reveal>
            <p className="font-display-bold text-[clamp(22px,3vw,40px)] leading-[1.25] tracking-[-0.015em]">
              I&apos;m in an open chapter. Co-Founders is on its path to
              Broadway. All People Powered is becoming a movement. And I&apos;m
              spending more and more of my time on the question that connects
              all of it: how do we make AI a thing that brings people together
              rather than pushes them apart?
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display-bold text-[clamp(22px,3vw,40px)] leading-[1.25] tracking-[-0.015em]">
              If you&apos;re working on that — at a company, on a project, in a
              room I should be in —{" "}
              <a
                href="mailto:beau.lewis@gmail.com"
                className="underline decoration-2 underline-offset-[6px] hover:opacity-55 transition-opacity"
              >
                I&apos;d like to hear from you.
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* CLOSING PHOTO */}
      <section className="px-6 md:px-12 pt-4 md:pt-8 pb-20 md:pb-28">
        <Reveal>
          <div className="relative aspect-[3/4] max-w-[560px] overflow-hidden">
            <Image
              src="/photos/Miles-TonyRobbins.jpg"
              alt="Miles and Tony Robbins"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
