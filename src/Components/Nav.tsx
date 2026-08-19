import { NavLink } from "react-router";

export function Link({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "hidden rounded-lg px-4 py-2 md:block" + (isActive ? " bg-border" : "")
      }
    >
      {text}
    </NavLink>
  );
}

export function Nav() {
  return (
    <nav className="border-border m-auto flex items-center justify-between border-b p-3">
      <NavLink to="" className="flex items-center gap-4">
        <img src="favicon.svg" className="h-10 w-10" />
        <p className="text-xl">Paul Bond</p>
      </NavLink>
      <div className="flex items-center gap-6">
        <Link to="" text="Home" />
        <Link to="publications" text="Publications" />
        <a
          className="bg-dark-sage flex items-center gap-2 rounded-lg px-4 py-2 text-white"
          href="mailto:paul.bond@york.ac.uk"
        >
          <span className="material-symbols-rounded">mail</span>
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
}
