import { SubHeading } from "./SubHeading";

function Project(props: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={props.href}
      className="border-border flex flex-col rounded-lg border"
    >
      <img
        src={props.image}
        className="aspect-3/1 w-full rounded-t-lg object-cover"
        alt=""
      />
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <p>{props.description}</p>
        <p className="text-dark-sage flex items-center gap-2 text-sm">
          <span>View project</span>
          <span className="material-symbols-rounded">arrow_right_alt</span>
        </p>
      </div>
    </a>
  );
}

export function Featured() {
  return (
    <section>
      <SubHeading>Featured Projects</SubHeading>
      <div className="grid gap-4 sm:grid-cols-3">
        <Project
          title="ModelCraft"
          description="Automated model-building pipeline for X-ray crystallography and cryo-EM."
          image="images/modelcraft.png"
          href="https://github.com/paulsbond/modelcraft"
        />
        <Project
          title="NucleoFind"
          description="Deep-learning network for locating nucleic acid features in a map."
          image="images/nucleofind.png"
          href="https://github.com/dialpuri/nucleofind"
        />
        <Project
          title="CCP4"
          description="Comprehensive software suite for macromolecular crystallography."
          image="images/ccp4banner.webp"
          href="https://www.ccp4.ac.uk/"
        />
      </div>
    </section>
  );
}
