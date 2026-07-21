import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on data architecture, analytics, machine learning, and educational technology.",
  alternates: { canonical: "/writing/" },
};

export default function WritingPage() {
  return (
    <section className="shell archivePage">
      <header className="archiveHeader">
        <p className="eyebrow">Writing / Notes & articles</p>
        <h1>A public notebook,<br />slowly taking shape.</h1>
        <p>Short notes and longer articles about building data systems, working with analytical products, and learning from technical decisions.</p>
      </header>
      <div className="archiveEmpty">
        <span className="mono">NO PUBLISHED ENTRIES YET</span>
        <h2>The first article is coming soon.</h2>
        <p>I’d rather publish a small number of useful pieces than fill the archive with placeholder content.</p>
      </div>
    </section>
  );
}
