import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "blog", "posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  language: string;
  cover: string;
  coverAlt: string;
  featured: boolean;
  content: string;
};

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^("|')|("|')$/g, "");
    data[key] = value;
  }

  return { data, content: source.slice(match[0].length).trim() };
}

function readPost(slug: string): Post | null {
  const filePath = path.join(postsDirectory, slug, "index.md");
  if (!fs.existsSync(filePath)) return null;

  const parsed = parseFrontmatter(fs.readFileSync(filePath, "utf8"));
  if (!parsed || parsed.data.published !== "true") return null;

  const required = ["title", "date", "description", "author", "language", "cover", "coverAlt"];
  for (const field of required) {
    if (!parsed.data[field]) throw new Error(`Post "${slug}" is missing frontmatter field "${field}".`);
  }

  const coverPath = path.join(postsDirectory, slug, parsed.data.cover);
  if (!fs.existsSync(coverPath)) throw new Error(`Post "${slug}" cover was not found: ${parsed.data.cover}`);

  return {
    slug,
    title: parsed.data.title,
    date: parsed.data.date,
    description: parsed.data.description,
    author: parsed.data.author,
    language: parsed.data.language,
    cover: parsed.data.cover,
    coverAlt: parsed.data.coverAlt,
    featured: parsed.data.featured === "true",
    content: parsed.content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => readPost(entry.name))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return readPost(slug);
}

export function postAssetPath(post: Pick<Post, "slug">, asset: string): string {
  const normalized = asset.replace(/^\.\//, "").replaceAll("\\", "/");
  const basePath = process.env.PAGES_BASE_PATH ?? "";
  return `${basePath}/post-assets/${post.slug}/${normalized}`;
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`))
    .toUpperCase();
}
