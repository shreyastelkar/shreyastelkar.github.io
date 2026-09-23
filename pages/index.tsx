import Head from "next/head";
import Image from "next/image";
import type { ReactNode } from "react";

const experience = [
  {
    company: "Altimate AI",
    url: "https://www.altimate.ai",
    role: "Software Engineer",
    dates: "Dec 2025 – Present",
    blurb:
      "Cost optimization for Snowflake and Databricks. Early-stage startup, Silicon Valley.",
    bullets: [
      "Built the end-to-end Databricks ingestion pipeline — jobs, clusters, SQL warehouses and queries — landing in Iceberg, modeled with dbt/Trino, served from ClickHouse.",
      "Shipped Auto-Tune: automatic right-sizing of Databricks clusters and SQL warehouses, with a crash-safe apply/rollback state machine and audit trail, validated against live workspaces.",
      "Migrated 100+ hand-written metrics to a dbt MetricFlow semantic layer; A/B-validated 100% data parity before cutover.",
      "Built multi-cloud billing ingestion for AWS, Azure and GCP (FOCUS spec) and Spark event-log analysis down to individual query plans.",
    ],
  },
  {
    company: "BawsHuman",
    url: "https://apps.apple.com/us/app/bawshuman/id6499568476",
    role: "Software Engineer",
    dates: "Dec 2023 – 2025",
    blurb: "Fitness app for athletes, shipped on the iOS App Store.",
    bullets: [
      "Built the app with React Native, Expo and Django; 1,000+ beta signups, 6 elite trainers onboarded.",
      "Live GPS route tracking, Apple Watch sync via HealthKit, forum and real-time chat.",
    ],
  },
];

const skills = [
  {
    label: "Data",
    value: "Databricks, Snowflake, Python, SQL, dbt, ClickHouse, Iceberg, Trino",
  },
  { label: "Web", value: "TypeScript, React, Next.js, FastAPI, Kubernetes" },
  { label: "AI", value: "Claude Code, Codex, MCP" },
];

const links = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shreyas-t-852ab9132/" },
  { name: "GitHub", url: "https://github.com/SHREYASTELKAR" },
];

const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-rule underline-offset-4 transition-colors hover:decoration-fg"
  >
    {children}
  </a>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-medium text-fg">{children}</h2>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Shreyas Telkar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="mx-auto max-w-[640px] px-6 py-16 text-[15px] leading-relaxed text-fg sm:py-24 sm:text-base">
        <header className="flex items-center gap-4">
          <Image
            src="/profile_pic.jpeg"
            alt="Shreyas Telkar"
            width={48}
            height={48}
            priority
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="font-medium">Shreyas Telkar</h1>
            <p className="text-muted">Full stack &amp; data engineer, Bay Area</p>
          </div>
        </header>

        <section className="mt-14">
          <H2>Experience</H2>
          <div className="mt-5 space-y-10">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p>
                    <Ext href={job.url}>{job.company}</Ext>
                    <span className="text-muted"> · {job.role}</span>
                  </p>
                  <span className="text-sm tabular-nums text-faint">
                    {job.dates}
                  </span>
                </div>
                <p className="text-muted">{job.blurb}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-faint">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <H2>Skills</H2>
          <dl className="mt-5 space-y-1.5">
            {skills.map((s) => (
              <div key={s.label} className="flex gap-4">
                <dt className="w-12 shrink-0 text-muted">{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14">
          <H2>Hobbies</H2>
          <p className="mt-5">Muay Thai, guitar, basketball</p>
        </section>

        <footer className="mt-16 flex gap-5 border-t border-rule pt-6 text-sm text-muted">
          {links.map((l) => (
            <Ext key={l.name} href={l.url}>
              {l.name}
            </Ext>
          ))}
        </footer>
      </main>
    </>
  );
}
