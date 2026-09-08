import { SubHeading } from "./SubHeading";

function Project(props: {
  title: string;
  description: string;
  href: string;
  image?: string;
}) {
  return (
    <a
      className="border-border hover:border-sage relative flex items-center gap-3 rounded-lg border p-3 transition-all hover:shadow-sm"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.image && (
        <div className="bg-light-sage/50 flex size-12 shrink-0 items-center justify-center rounded-full">
          <img src={props.image} alt="" className="size-full object-contain" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-bold">{props.title}</h3>
        <p className="text-secondary mt-1 text-sm">{props.description}</p>
      </div>
      <span className="material-symbols-rounded text-secondary absolute top-3 right-3 text-base! leading-none">
        open_in_new
      </span>
    </a>
  );
}

export function Projects() {
  return (
    <>
      <section>
        <SubHeading>Software and Teaching Tools</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          <Project
            title="JTSA"
            description="Analyse thermal shift (DSF) data by fitting sigmoid curves."
            href="https://paulsbond.co.uk/jtsa"
            image="images/jtsa.png"
          />
          <Project
            title="V-Lab"
            description="Virtual simulations of undergraduate analytical laboratory experiments."
            href="https://paulsbond.co.uk/vlab"
            image="images/vlab.svg"
          />
          <Project
            title="Fprime"
            description="Compare anomalous scattering factors for different elements."
            href="https://paulsbond.co.uk/fprime"
            image="images/fprime.png"
          />
          <Project
            title="Colour Evolution"
            description="An interactive introduction to evolutionary algorithms."
            href="https://paulsbond.co.uk/colourevolution"
            image="images/cube.png"
          />
        </div>
      </section>
      <section>
        <SubHeading>Tutorials</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          <Project
            title="Coot Workshop"
            description="A two-part workshop to introduce interactive model building in Coot."
            href="https://paulsbond.co.uk/coot-workshop"
            image="images/coot.png"
          />
          <Project
            title="RNA Model Building Workshop"
            description="An introduction to the model building tools available in CCP4 for nucleic acid structures."
            href="https://paulsbond.co.uk/rna-workshop"
            image="images/dna.png"
          />
          <Project
            title="CCP4 Molecular Graphics Tutorial"
            description="A tutorial covering most of the basic features of CCP4mg."
            href="https://paulsbond.co.uk/ccp4mg-tutorial"
            image="images/ccp4mg.png"
          />
        </div>
      </section>
      <section>
        <SubHeading>Other Projects</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2">
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
