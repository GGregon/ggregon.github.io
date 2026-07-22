import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ProfileLinks } from "@/components/profile-links";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];

  return (
    <div className="shell homeLayout">
      <section className="intro" aria-labelledby="intro-title">
        <h1 id="intro-title">Hello, I’m Gabriel.</h1>
        <ProfileLinks />
        <div className="introText">
          <p>I’m passionate about data, math, products, building things, thinking deeply, writing, and explaining complex ideas in simple terms (even though I struggle with most of them, haha).</p>
        </div>
        <div className="introMeta"><span>Rio de Janeiro, Brazil</span><span>Head of Data at EdukDados</span></div>
      </section>

      <section className="homeSection postsSection" aria-labelledby="writing-title">
        <div className="sectionContent">
          <h2 id="writing-title"><Link className="sectionTitleLink" href="/writing/">Brain Dump</Link></h2>
          <p>Essays, technical notes, and practical observations about work, learning, data, and the processes behind what we make.</p>
          {featuredPost && <ArticleCard post={featuredPost} compact />}
          <Link className="textLink" href="/writing/">Visit the Brain Dump →</Link>
        </div>
      </section>

      <section className="homeSection projectsSection" id="projects" aria-labelledby="projects-title">
        <div className="sectionContent">
          <h2 id="projects-title">Projects</h2>
          <p>Project notes and case studies will appear here when they are ready to be shared properly.</p>
          <span className="statusLine"><span aria-hidden="true" /> Coming soon</span>
        </div>
      </section>
    </div>
  );
}
