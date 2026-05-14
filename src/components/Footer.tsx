import Reveal from "./Reveal";

const SUBSTACK_URL = "https://beaumountainlewis.substack.com/";

const LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "Substack", href: SUBSTACK_URL, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/beaul/", external: true },
  { label: "Instagram", href: "https://www.instagram.com/peeplittlebeau/", external: true },
  { label: "Co-Founders the Musical", href: "https://cofoundersthemusical.com", external: true },
  { label: "All People Powered", href: "https://allpeoplepower.com", external: true },
  { label: "beau.lewis@gmail.com", href: "mailto:beau.lewis@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-x-12 uppercase-label text-[13px] tracking-[0.08em]">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 flex flex-wrap gap-y-2 justify-between items-end text-[11px] tracking-[0.06em] text-black/45 uppercase">
          <span>© {new Date().getFullYear()} Beau Lewis</span>
          <span>Made in Seattle. Lives in California.</span>
        </div>
      </div>
    </footer>
  );
}
