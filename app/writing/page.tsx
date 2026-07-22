import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import farofaImage from "../../blog/posts/farofa_img.png";

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
      <div className="archiveList" aria-label="Published articles">
        <Link className="articleCard" href="/writing/a-farofa-de-alho/">
          <span className="articleCardImage"><Image src={farofaImage} alt="Ilustração em lápis de cor de um prato de farofa de alho" /></span>
          <span className="articleCardBody">
            <span className="mono">ESSAY · 22 JUL 2026</span>
            <strong>A farofa de alho</strong>
            <span>Sobre tempo, processo e o que realmente faz diferença no resultado.</span>
            <span className="articleCardLink">Read article →</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
