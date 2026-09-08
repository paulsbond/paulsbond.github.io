function Picture() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[url(/images/model.webp)] bg-cover p-4">
      <img src="images/me.jpg" className="w-30 rounded-full md:w-2xs" />
    </div>
  );
}

function Title() {
  return (
    <div>
      <h1 className="mb-1 text-4xl font-bold md:text-6xl">Paul Bond</h1>
      <p className="text-lg md:text-2xl">Computational Structural Biologist</p>
    </div>
  );
}

function Location(props: { text: string; icon: string }) {
  return (
    <p className="text-secondary flex items-center gap-1">
      <span className="material-symbols-rounded">{props.icon}</span>
      <span>{props.text}</span>
    </p>
  );
}

function Locations() {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start">
      <Location text="University of York" icon="account_balance" />
      <Location text="Darlington, UK" icon="location_on" />
    </div>
  );
}

function Bio() {
  return (
    <p>
      I develop computational methods and software for macromolecular structure
      determination, with a focus on crystallography, automated model building
      and machine learning.
    </p>
  );
}

function Skill(props: { text: string; icon: string }) {
  return (
    <li className="bg-light-sage flex items-center gap-2 rounded-lg px-4 py-2 text-sm">
      <span className="material-symbols-rounded">{props.icon}</span>
      <span>{props.text}</span>
    </li>
  );
}

function Skills() {
  return (
    <ul className="flex flex-wrap justify-center gap-3 md:justify-start">
      <Skill text="Structural Biology Software" icon="code" />
      <Skill text="Automated Model Building" icon="automation" />
      <Skill text="Machine Learning" icon="network_intel_node" />
    </ul>
  );
}

export function Intro() {
  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      <Picture />
      <div className="flex flex-1 flex-col gap-4 text-center md:pt-4 md:text-left">
        <Title />
        <Locations />
        <Bio />
        <Skills />
      </div>
    </div>
  );
}
