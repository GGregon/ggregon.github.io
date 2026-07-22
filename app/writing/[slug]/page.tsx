import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getAllPosts, getPost, postAssetPath } from "@/lib/posts";

type PageProps = { params: Promise<{ slug: string }> };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggregon.github.io";

type MarkdownNode = {
  type?: string;
  tagName?: string;
  value?: string;
  children?: MarkdownNode[];
};

function markdownNodeText(node?: MarkdownNode): string {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  return node.children?.map(markdownNodeText).join("") ?? "";
}

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
        <h1>{post.title}</h1>
        <p className="articleDek">{post.description}</p>
        <p className="articleMeta mono"><time dateTime={post.date}>{formatPostDate(post.date)}</time> · {post.author}</p>
      </header>

      <div className="articleBody">
        <ReactMarkdown components={{
          p: ({ node, children }) => {
            const markdownNode = node as MarkdownNode;
            const containsImage = markdownNode.children?.some((child) => child.tagName === "img");
            if (containsImage) return <>{children}</>;

            const text = markdownNodeText(markdownNode).trim();
            const pauseTexts = new Set([
              "Burro que fui, continuei questionando.",
              "Foi nesse momento que comecei a refletir.",
              "Aquele momento não era apenas sobre preparar o almoço.",
              "Eu demorei um pouco para entender isso.",
              "No trabalho, não necessariamente temos esse luxo.",
            ]);
            const endingTexts = new Set([
              "Uma posição que, para mim, não fazia sentido algum.",
              "A diferença é que minha sogra não tinha nada a perder...",
              "Pelo contrário: ela estava ganhando um momento de descontração. Estava conversando, convivendo e vivendo a vida.",
              "Eu não.",
              "Eu estava apenas sendo teimoso.",
            ]);
            const className = [pauseTexts.has(text) && "articlePause", endingTexts.has(text) && "articleEndingLine"]
              .filter(Boolean)
              .join(" ") || undefined;

            return <p className={className}>{children}</p>;
          },
          blockquote: ({ children }) => <blockquote className="articleDialogue">{children}</blockquote>,
          img: ({ src = "", alt = "" }) => {
            const imageSource = typeof src === "string" && src.startsWith("http")
              ? src
              : postAssetPath(post, typeof src === "string" ? src : "");
            const [altText, caption] = alt.split("|").map((part) => part.trim());
            return (
              <figure className="articleInlineImage">
                <Image src={imageSource} alt={altText} width={1600} height={1200} sizes="(max-width: 760px) 100vw, 780px" />
                {caption && <figcaption>{caption}</figcaption>}
              </figure>
            );
          },
        }}>{post.content}</ReactMarkdown>
      </div>

      <Link className="articleBack" href="/writing/">← Back to the Brain Dump</Link>
    </article>
  );
}
