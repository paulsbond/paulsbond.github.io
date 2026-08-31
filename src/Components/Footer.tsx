function Link(props: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-dark-sage underline underline-offset-2"
    >
      {props.children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-border text-secondary mt-12 flex flex-col items-center justify-between gap-3 border-t p-6 text-center text-xs sm:flex-row">
      <p>© {new Date().getFullYear()} Paul Bond.</p>
      <div className="flex gap-4">
        <Link href="https://github.com/paulsbond">GitHub</Link>
        <Link href="https://scholar.google.com/citations?user=38FsWSAAAAAJ">
          Google Scholar
        </Link>
        <Link href="mailto:paul.bond@york.ac.uk">Contact</Link>
      </div>
    </footer>
  );
}
