import Image from "next/image";
import Link from "next/link";
import { formatPostDate, postAssetPath, type Post } from "@/lib/posts";

export function ArticleCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  return (
    <Link className={`articleCard${compact ? " articleCardCompact" : ""}`} href={`/writing/${post.slug}/`}>
      <span className="articleCardImage">
        <Image src={postAssetPath(post, post.cover)} alt={post.coverAlt} fill sizes={compact ? "(max-width: 760px) 100vw, 280px" : "(max-width: 760px) 100vw, 500px"} />
      </span>
      <span className="articleCardBody">
        <span className="mono">ESSAY · {formatPostDate(post.date)}</span>
        <strong>{post.title}</strong>
        <span>{post.description}</span>
        {!compact && <span className="articleCardLink">Read article →</span>}
      </span>
    </Link>
  );
}
