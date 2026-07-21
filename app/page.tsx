import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="shell intro" aria-labelledby="intro-title">
        <p className="eyebrow">Data systems · Analytics · Educational technology</p>
        <h1 id="intro-title">Hello, I’m Gabriel.</h1>
        <div className="introText">
          <p>I’m a data professional who enjoys building thoughtful systems and making complex technical work easier to understand.</p>
          <p className="placeholderCopy"><span className="mono">ABOUT TEXT / PLACEHOLDER</span> I work across data engineering, analytics, architecture, and educational technology. This is a temporary introduction—a more personal version can replace it once we shape the story together.</p>
        </div>
        <div className="introMeta"><span>Rio de Janeiro, Brazil</span><span>Head of Data at EdukDados</span></div>
      </section>

      <section className="shell homeSection" aria-labelledby="writing-title">
        <div className="sectionLabel"><span className="mono">01 / WRITING</span></div>
        <div className="sectionContent">
          <h2 id="writing-title">Notes and articles</h2>
          <p>This will be the main part of the site: a place for essays, technical notes, and practical observations about data architecture, analytical products, machine learning, and education.</p>
          <div className="emptyState"><span className="mono">ARCHIVE / COMING SOON</span><p>The first notes are still being prepared.</p></div>
          <Link className="textLink" href="/writing/">Visit the writing archive →</Link>
        </div>
      </section>

      <section className="shell homeSection quietSection" aria-labelledby="projects-title">
        <div className="sectionLabel"><span className="mono">02 / PROJECTS</span></div>
        <div className="sectionContent">
          <h2 id="projects-title">Selected work, eventually.</h2>
          <p>Project notes and case studies will appear here when they are ready to be shared properly.</p>
          <span className="statusLine"><span aria-hidden="true" /> Coming soon</span>
        </div>
      </section>
    </>
  );
}
