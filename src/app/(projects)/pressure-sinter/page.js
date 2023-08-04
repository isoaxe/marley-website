import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import mainImg from 'public/projects/psm/completed-machine.png';

export default function PressureSinter() {
  return (
    <main className="relative h-fit">
      <ProjectHeading name="Pressure Sintering Machine" />
      <section className="relative px-3 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Pressure Sintering Machine
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.citc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chip Integration Technology Center
          </a>
        </h3>
        <div className="relative mt-8 h-72 w-full sm:h-96">
          <Image
            src={mainImg}
            alt="Photo of the pressure sintering machine."
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
