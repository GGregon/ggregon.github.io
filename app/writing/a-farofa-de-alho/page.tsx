import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { readFile } from "node:fs/promises";
import path from "node:path";
import farofaImage from "../../../blog/posts/farofa_img.png";

export const metadata: Metadata = {
  title: "A farofa de alho",
  description: "Sobre tempo, processo e o que realmente faz diferença no resultado.",
  alternates: { canonical: "/writing/a-farofa-de-alho/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "A farofa de alho",
    description: "Sobre tempo, processo e o que realmente faz diferença no resultado.",
    publishedTime: "2026-07-22",
    images: [{ url: farofaImage.src, width: farofaImage.width, height: farofaImage.height, alt: "Ilustração de um prato de farofa de alho" }],
  },
};

export default async function GarlicFarofaPage() {
  const source = await readFile(path.join(process.cwd(), "blog", "posts", "minced_vs_sliced_garlic.md"), "utf8");
  const paragraphs = source.trim().split(/\r?\n\s*\r?\n/);

  return (
    <article className="articlePage" lang="pt-BR">
      <header className="articleHeader">
        <p className="eyebrow">Ensaio / Cozinha & trabalho</p>
        <h1>A farofa de alho</h1>
        <p className="articleDek">Sobre tempo, processo e o que realmente faz diferença no resultado.</p>
        <p className="articleMeta mono"><time dateTime="2026-07-22">22 JUL 2026</time> · GABRIEL GREGON</p>
      </header>

      <figure className="articleHero">
        <Image src={farofaImage} alt="Ilustração em lápis de cor de um prato de farofa de alho, com um sol e um coração" priority />
      </figure>

      <div className="articleBody">
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>

      <Link className="articleBack" href="/writing/">← Back to writing</Link>
    </article>
  );
}
