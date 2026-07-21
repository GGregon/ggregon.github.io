import type { Metadata } from "next";

export const metadata: Metadata = { title: "Résumé", description: "A concise professional record for Gabriel Gregon.", alternates: { canonical: "/resume/" } };

const roles = [
  ["2026—Now", "Head of Data", "EdukDados", "Data architecture, analytical products, and educational market intelligence."],
  ["2025—2026", "Data Scientist", "Wildlife Studios", "Product analytics and experimentation for live mobile games."],
  ["2022—2024", "Data Analyst / Analytics Engineer", "Leggio Group", "Data products and engineering for energy-market and geospatial analysis."],
];

export default function ResumePage() {
  return (
    <section className="shell resumePage">
      <header><p className="eyebrow">Résumé / Selected record</p><h1>Experience</h1><p>A concise overview. A downloadable PDF will be added once the canonical résumé version is confirmed.</p></header>
      <div className="resumeList">{roles.map(([period, role, company, summary]) => <article key={company}><span className="mono">{period}</span><div><h2>{role}</h2><h3>{company}</h3><p>{summary}</p></div></article>)}</div>
      <aside className="resumeNote"><span className="mono">EDUCATION</span><p>B.Sc. in Electronics and Computer Engineering<br />Federal University of Rio de Janeiro</p></aside>
    </section>
  );
}
