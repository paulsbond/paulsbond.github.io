import { useState } from "react";
import { lastUpdated, papers, type Paper } from "../papers";

function calculateMetrics(publications: Paper[]) {
  const citations = publications
    .map((paper) => paper.citations)
    .sort((first, second) => second - first);
  return {
    citations: citations.reduce((total, count) => total + count, 0),
    hIndex: citations.filter((count, index) => count >= index + 1).length,
    i10Index: citations.filter((count) => count >= 10).length,
  };
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-border bg-bg rounded-lg border px-4 py-3 text-center">
      <dt className="text-secondary text-xs">{label}</dt>
      <dd className="text-dark-sage mt-1 text-2xl font-bold">
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
    <main>
      <h1 className="mt-1 py-6 text-3xl font-bold sm:text-4xl">Publications</h1>

      <section className="mb-6" aria-label="Publication metrics">
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Metric label="Total publications" value={papers.length} />
          <Metric label="Citations" value={metrics.citations} />
          <Metric label="h-index" value={metrics.hIndex} />
          <Metric label="i10-index" value={metrics.i10Index} />
        </dl>
        <div className="text-secondary mt-3 flex flex-wrap justify-between gap-x-5 gap-y-1 text-xs">
          <p>
            Metrics from{" "}
            <a
              className="text-dark-sage inline-flex items-center gap-0.5"
              href="https://scholar.google.com/citations?user=38FsWSAAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              <span className="underline underline-offset-2">
                Google Scholar
              </span>
              <span
                className="material-symbols-rounded text-xs!"
                aria-hidden="true"
              >
                open_in_new
              </span>
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
              className="border-border bg-bg text-text rounded-md border px-3 py-2"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="citations">Citations</option>
              <option value="year">Publication date</option>
            </select>
          </label>
        </div>

        <ol className="divide-border divide-y">
          {sortedPapers.map((paper) => (
            <li
              className="grid gap-x-6 gap-y-2 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              key={paper.doi}
            >
              <p className="text-secondary text-sm">{paper.date.slice(0, 4)}</p>
              <div className="min-w-0">
                <a
                  className="text-dark-sage font-bold hover:underline"
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
                <span className="text-text mr-2 text-lg font-bold sm:mr-0 sm:block">
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
