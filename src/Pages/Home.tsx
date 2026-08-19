import { Featured } from "../Components/Featured";
import { Intro } from "../Components/Intro";

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Intro />
      <Featured />
    </div>
  );
}
