import Link from "next/link";
import Image from "next/image";
import farofaImage from "../blog/posts/farofa_img.png";

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
          <p>Essays, technical notes, and practical observations about work, learning, data, and the processes behind what we make.</p>
          <Link className="articleCard articleCardCompact" href="/writing/a-farofa-de-alho/">
            <span className="articleCardImage"><Image src={farofaImage} alt="Ilustração em lápis de cor de um prato de farofa de alho" /></span>
            <span className="articleCardBody">
              <span className="mono">ESSAY · 22 JUL 2026</span>
              <strong>A farofa de alho</strong>
              <span>Sobre tempo, processo e o que realmente faz diferença no resultado.</span>
            </span>
          </Link>
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
