import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-wrap gap-8 md:gap-12 uppercase-label text-[13px] tracking-[0.08em]">
            <a
              href="https://www.instagram.com/cofoundersthemusical"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
            >
              Instagram
            </a>
            <a
              href="mailto:beau.lewis@gmail.com"
              className="hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
            >
              beau.lewis@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/beaul/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 flex justify-between items-end text-[11px] tracking-[0.06em] text-black/45 uppercase">
          <span>© {new Date().getFullYear()} Beau Lewis</span>
          <span>Made in Seattle / Lives in California</span>
        </div>
      </div>
    </footer>
  );
}
