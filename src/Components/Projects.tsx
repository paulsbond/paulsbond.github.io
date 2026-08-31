import { SubHeading } from "./SubHeading";

function Project(props: { title: string; description: string; href: string }) {
  return (
    <a className="border-border border-l-2 py-1 pl-4" href={props.href}>
      <h3 className="text-dark-sage flex items-center gap-1 font-bold">
        {props.title}
        <span className="material-symbols-rounded">arrow_right_alt</span>
      </h3>
      <p className="text-secondary mt-1 text-sm">{props.description}</p>
    </a>
  );
}

export function Projects() {
  return (
    <>
      <section>
        <SubHeading>Software and Teaching Tools</SubHeading>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <Project
            title="JTSA"
            description="Analyse thermal shift (DSF) data by fitting sigmoid curves."
            href="https://paulsbond.co.uk/jtsa"
          />
          <Project
            title="V-Lab"
            description="Virtual simulations of undergraduate analytical laboratory experiments."
            href="https://paulsbond.co.uk/vlab"
          />
          <Project
            title="Fprime"
            description="Compare anomalous scattering factors for different elements."
            href="https://paulsbond.co.uk/fprime"
          />
          <Project
            title="Colour Evolution"
            description="An interactive introduction to evolutionary algorithms."
            href="https://paulsbond.co.uk/colourevolution"
          />
        </div>
      </section>
      <section>
        <SubHeading>Other Projects</SubHeading>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          <Project
            title="Cluedo Solver"
            description="A deduction assistant for the board game Cluedo."
            href="https://paulsbond.co.uk/cluedosolver"
          />
        </div>
      </section>
    </>
  );
}
