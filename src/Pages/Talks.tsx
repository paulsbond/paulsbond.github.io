import { useState } from "react";
import { talks, type Talk } from "../talks";

const ONLINE = "Online";

function countryOf({ location }: Talk) {
  return location === "online" ? ONLINE : location.country;
}

function groupByYear(list: Talk[]) {
  const groups = new Map<string, Talk[]>();
  for (const talk of list) {
    const year = talk.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), talk]);
  }
  return [...groups];
}

function CountryFilter({
  label,
  count,
  selected,
  onClick,
}: {
  label: string;
  count: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        aria-pressed={selected}
        onClick={onClick}
        className={`flex items-center gap-1.5 rounded-md border px-3 py-1 text-sm ${
          selected
            ? "border-dark-sage bg-dark-sage text-white"
            : "border-border hover:bg-light-sage"
        }`}
      >
        {label === ONLINE && (
          <span
            className="material-symbols-rounded text-base! leading-none!"
            aria-hidden="true"
          >
            videocam
          </span>
        )}
        {label}
        <span className={`font-bold ${selected ? "" : "text-dark-sage"}`}>
          {count}
        </span>
      </button>
    </li>
  );
}

function TalkItem({ talk }: { talk: Talk }) {
  const online = talk.location === "online";
  const date = new Date(talk.date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

  return (
    <li className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[4rem_1fr]">
      <p className="text-secondary text-sm sm:pt-0.5">
        <time dateTime={talk.date}>{date}</time>
      </p>
      <div className="min-w-0">
        <p className="font-bold">{talk.title}</p>
        <p className="text-secondary mt-1 text-sm">
          <i>{talk.event}</i>
        </p>
        <p className="text-secondary flex flex-wrap items-center gap-1 text-sm">
          <span
            className="material-symbols-rounded text-base!"
            aria-hidden="true"
          >
            {online ? "videocam" : "location_on"}
          </span>
          {talk.location === "online"
            ? ONLINE
            : `${talk.location.venue}, ${talk.location.country}`}
          {talk.recording && (
            <>
              <span aria-hidden="true">·</span>
              <a
                className="text-dark-sage inline-flex items-center gap-1"
                href={talk.recording}
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="material-symbols-rounded text-base!"
                  aria-hidden="true"
                >
                  play_circle
                </span>
                <span className="underline underline-offset-2">
                  Watch recording
                </span>
                <span
                  className="material-symbols-rounded text-xs!"
                  aria-hidden="true"
                >
                  open_in_new
                </span>
              </a>
            </>
          )}
        </p>
      </div>
    </li>
  );
}

export function Talks() {
  const [selected, setSelected] = useState<string | null>(null);

  const counts = new Map<string, number>();
  for (const talk of talks) {
    const country = countryOf(talk);
    counts.set(country, (counts.get(country) ?? 0) + 1);
  }
  // Most talks first, with "Online" last
  const filters = [...counts].sort(
    ([nameA, countA], [nameB, countB]) =>
      Number(nameA === ONLINE) - Number(nameB === ONLINE) ||
      countB - countA ||
      nameA.localeCompare(nameB),
  );
  const countryCount = filters.filter(([name]) => name !== ONLINE).length;

  const shownTalks = talks
    .filter((talk) => selected === null || countryOf(talk) === selected)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main>
      <h1 className="mt-1 py-6 text-3xl font-bold sm:text-4xl">Talks</h1>

      <section className="mb-6" aria-label="Filter by country">
        <p className="text-secondary text-sm">
          {talks.length} talks in {countryCount} countries
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {filters.map(([name, count]) => (
            <CountryFilter
              key={name}
              label={name}
              count={count}
              selected={selected === name}
              onClick={() =>
                setSelected((current) => (current === name ? null : name))
              }
            />
          ))}
        </ul>
      </section>

      {groupByYear(shownTalks).map(([year, yearTalks]) => (
        <section key={year} className="mb-6">
          <h2 className="border-border border-b pb-2 text-xl font-bold">
            {year}
          </h2>
          <ol className="divide-border divide-y">
            {yearTalks.map((talk, index) => (
              <TalkItem key={`${talk.date}-${index}`} talk={talk} />
            ))}
          </ol>
        </section>
      ))}
    </main>
  );
}
