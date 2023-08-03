import HomeTile from './home-tile';
import psmCover from 'public/projects/psm/completed-machine.png';
import finalCover from 'public/projects/final/system-schematic.png';
import aviCover from 'public/projects/avi/underneath-view-2.jpg';

export default function HomeProjects() {
  return (
    <section className="relative h-fit w-full bg-home">
      <h2
        id="projects"
        className="bg-gradient-to-b from-sky-200 to-sky-600 bg-clip-text pb-1.5 pt-5 text-center text-2xl font-semibold text-transparent underline xs:text-3xl md:pt-10 md:text-4xl lg:text-5xl 2xl:text-6xl"
      >
        Projects
      </h2>
      <div className="m-auto mt-10 flex w-full max-w-[100rem] flex-row flex-wrap justify-center px-2 pb-20 md:mt-16 lg:px-6">
        <HomeTile photo={psmCover} title="Pressure Sintering Machine" />
        <HomeTile photo={finalCover} title="Final Year Project" />
        <HomeTile photo={aviCover} title="Audio Visual Installation" />
      </div>
    </section>
  );
}
