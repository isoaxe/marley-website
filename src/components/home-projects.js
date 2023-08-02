import HomeTile from './home-tile';
import photo from 'public/home/geo-pattern-bg.jpg';

export default function HomeProjects() {
  return (
    <section className="relative h-fit w-full bg-home">
      <h2
        id="projects"
        className="pt-5 text-center text-2xl font-semibold text-white underline xs:text-3xl md:pt-10 md:text-4xl lg:text-5xl 2xl:text-6xl"
      >
        Projects
      </h2>
      <div className="m-auto mt-10 flex w-full max-w-[100rem] flex-row flex-wrap px-2 pb-20 md:mt-16 lg:px-6">
        <HomeTile photo={photo} title="Pressure Sintering Machine" />
        <HomeTile photo={photo} title="Final Year Project" />
        <HomeTile photo={photo} title="Audio Visual Installation" />
      </div>
    </section>
  );
}
