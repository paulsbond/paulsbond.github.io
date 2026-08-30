import { useState } from "react";
import { lastUpdated, papers, type Paper } from "../papers";

function formatdate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  if (!month) {
    return String(year);
  }

  const monthName = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    new Date(Date.UTC(year, month - 1)),
  );

  return day ? `${day} ${monthName} ${year}` : `${monthName} ${year}`;
}

function calculateMetrics(publications: Paper[]) {
  const citations = publications.map((p) => p.citations).sort((a, b) => b - a);

  return {
    totalCitations: citations.reduce((total, count) => total + count, 0),
    hIndex: citations.filter((count, index) => count >= index + 1).length,
    i10Index: citations.filter((count) => count >= 10).length,
  };
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-border bg-bg rounded-lg border px-4 py-3 text-center">
      <dt className="text-secondary text-xs font-medium">{label}</dt>
      <dd className="text-dark-sage mt-1 text-2xl font-semibold">
        {value.toLocaleString()}
      </dd>
    </div>
  );
}

export function Publications() {
  const [sortBy, setSortBy] = useState<string>("citations");
  const metrics = calculateMetrics(papers);
  const sortedPapers = [...papers].sort((a, b) => {
    if (sortBy === "citations") return b.citations - a.citations;
    return b.date.localeCompare(a.date);
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">Publications</h1>

      <section className="py-7" aria-label="Publication metrics">
        <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Metric label="Total publications" value={papers.length} />
          <Metric label="Citations" value={metrics.totalCitations} />
          <Metric label="h-index" value={metrics.hIndex} />
          <Metric label="i10-index" value={metrics.i10Index} />
        </dl>
        <div className="text-secondary mt-3 flex flex-wrap justify-between gap-x-5 gap-y-1 text-xs">
          <p>
            Metrics from{" "}
            <a
              className="text-dark-sage font-medium underline underline-offset-2"
              href="https://scholar.google.com/citations?user=38FsWSAAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </p>
          <p>Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section>
        <div className="border-border flex justify-end gap-4 border-b pb-3">
          <label
            className="text-secondary flex items-center gap-2 text-sm"
            htmlFor="sort-publications"
          >
            Sort by
            <select
              id="sort-publications"
              className="border-border bg-bg text-text rounded-md border px-3 py-2 font-medium"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as "citations" | "year")
              }
            >
              <option value="citations">Citations</option>
              <option value="year">Publication date</option>
            </select>
          </label>
        </div>

        <ol className="divide-border divide-y">
          {sortedPapers.map((paper) => (
            <li
              className="grid gap-3 py-5 sm:grid-cols-[5.5rem_1fr_auto] sm:items-start"
              key={paper.doi}
            >
              <time
                className="text-secondary text-sm font-medium"
                dateTime={paper.date}
              >
                {formatdate(paper.date)}
              </time>
              <div>
                <a
                  className="text-dark-sage font-semibold hover:underline"
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {paper.title}
                </a>
                <p className="text-secondary mt-1 text-sm">
                  {paper.authors}
                  {paper.etAl && (
                    <>
                      , <i>et al.</i>
                    </>
                  )}
                </p>
                <p className="text-secondary text-sm">
                  <i>{paper.journal}</i>, <strong>{paper.volume}</strong>,{" "}
                  {paper.pages}
                </p>
              </div>
              <p className="text-secondary text-sm sm:text-right">
                <span className="text-text block text-lg font-semibold">
                  {paper.citations}
                </span>
                citations
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
