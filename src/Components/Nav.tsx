import { useState } from "react";
import { NavLink } from "react-router";

const links = [
  { to: "", text: "Home" },
  { to: "publications", text: "Publications" },
];

function Contact({ className }: { className: string }) {
  return (
    <a
      className={`bg-dark-sage flex items-center gap-2 rounded-md px-4 text-white ${className}`}
      href="mailto:paul.bond@york.ac.uk"
    >
      <span className="material-symbols-rounded">mail</span>
      Contact
    </a>
  );
}

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-border bg-bg sticky top-0 z-50 m-auto flex items-center justify-between border-b p-3">
      <NavLink to="" className="flex items-center gap-4">
        <img src="favicon.svg" className="h-10 w-10" />
        <p className="text-xl">Paul Bond</p>
      </NavLink>
      <div className="hidden items-center gap-6 md:flex">
        {links.map(({ to, text }) => (
          <NavLink key={to} to={to} className="rounded-md px-1 py-2">
            {text}
          </NavLink>
        ))}
        <Contact className="py-2" />
      </div>
      <button
        className="border-border flex size-10 items-center justify-center rounded-md border md:hidden"
        type="button"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="material-symbols-rounded">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
      {isMenuOpen && (
        <div className="border-border bg-bg absolute inset-x-3 top-full z-10 mt-2 grid rounded-md border p-1 shadow-sm md:hidden">
          {links.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className="rounded-md px-4 py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {text}
            </NavLink>
          ))}
          <Contact className="mt-1 py-3" />
        </div>
      )}
    </nav>
  );
}
