import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteConfig = {
  name: "Gabriel Gregon",
  title: "Data professional and technical writer",
  description: "Personal site and writing archive of Gabriel Gregon, covering data systems, analytics, and educational technology.",
  github: "https://github.com/GGregon",
  linkedin: "https://www.linkedin.com/in/gabriel-gregon",
};
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ggregon.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteConfig.name} — Data and writing`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f7f3" };

function Header() {
  return <header className="siteHeader"><div className="shell headerInner"><div className="headerRight"><nav className="primaryNav" aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/writing/">Brain Dump</Link><Link href="/#projects">Projects</Link></nav></div></div></header>;
}

function Footer() {
  return <footer className="siteFooter"><div className="shell"><span>© {new Date().getFullYear()} Gabriel Gregon</span><span>Built as a small, static publication.</span></div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteUrl,
    jobTitle: "Data professional",
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };

  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
