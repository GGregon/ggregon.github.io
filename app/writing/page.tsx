import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts & Articles",
  description: "Notes on data architecture, analytics, machine learning, and educational technology.",
  alternates: { canonical: "/writing/" },
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <section className="shell archivePage">
      <header className="archiveHeader">
        <p className="eyebrow">Posts &amp; articles</p>
        <h1>A public notebook,<br />slowly taking shape.</h1>
        <p>Short notes and longer articles about building data systems, working with analytical products, and learning from technical decisions.</p>
      </header>
      <div className="archiveList" aria-label="Published articles">
        {posts.map((post) => <ArticleCard post={post} key={post.slug} />)}
      </div>
    </section>
  );
}
