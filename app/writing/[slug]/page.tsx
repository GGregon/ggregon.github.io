import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getAllPosts, getPost, postAssetPath } from "@/lib/posts";

type PageProps = { params: Promise<{ slug: string }> };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggregon.github.io";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const imageUrl = `${siteUrl.replace(/\/$/, "")}/post-assets/${post.slug}/${post.cover}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}/` },
    openGraph: {
      type: "article",
      locale: post.language.replace("-", "_"),
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: imageUrl, alt: post.coverAlt }],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="articlePage" lang={post.language}>
      <header className="articleHeader">
        <p className="eyebrow">Ensaio / {post.category}</p>
        <h1>{post.title}</h1>
        <p className="articleDek">{post.description}</p>
        <p className="articleMeta mono"><time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.author}</p>
      </header>

      <figure className="articleHero">
        <Image src={postAssetPath(post, post.cover)} alt={post.coverAlt} fill sizes="(max-width: 760px) 100vw, 700px" priority />
      </figure>

      <div className="articleBody">
        <ReactMarkdown components={{
          img: ({ src = "", alt = "", title }) => {
            const imageSource = typeof src === "string" && src.startsWith("http")
              ? src
              : postAssetPath(post, typeof src === "string" ? src : "");
            return (
              <span className="articleInlineImage">
                <Image src={imageSource} alt={alt} fill sizes="(max-width: 760px) 100vw, 700px" />
                {title && <span className="articleImageCaption">{title}</span>}
              </span>
            );
          },
        }}>{post.content}</ReactMarkdown>
      </div>

      <Link className="articleBack" href="/writing/">← Back to writing</Link>
    </article>
  );
}
