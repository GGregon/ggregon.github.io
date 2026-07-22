import Link from "next/link";

type IconName = "email" | "github" | "linkedin" | "resume";

const iconPaths: Record<IconName, React.ReactNode> = {
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.2.5S18.1.1 15 1.8a13.4 13.4 0 0 0-7 0C4.9.1 3.8.5 3.8.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4-2" />,
  linkedin: <><rect x="3" y="9" width="4" height="12" /><path d="M5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M11 21V9h4v2c1-1.5 2.5-2.3 4-1.8 2 .6 2 2.5 2 5.3V21h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6" /></>,
  resume: <><path d="M6 2h9l4 4v16H6z" /><path d="M14 2v5h5M9 12h7M9 16h7" /></>,
};

function Icon({ name }: { name: IconName }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>;
}

export function ProfileLinks() {
  return (
    <nav className="iconNav introProfileLinks" aria-label="Contact and profile links">
      <a href="mailto:ggregon@gmail.com" aria-label="Email" title="Email"><Icon name="email" /></a>
      <a href="https://github.com/GGregon" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer"><Icon name="github" /></a>
      <a href="https://www.linkedin.com/in/gabriel-gregon" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /></a>
      <Link href="/resume/" aria-label="Résumé" title="Résumé"><Icon name="resume" /></Link>
    </nav>
  );
}
