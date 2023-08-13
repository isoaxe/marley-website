import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import ProjectText from '@/components/project-text';
import { finalText } from '@/util/text-data';
import mainImg from 'public/projects/final/system-schematic.png';
import facility from 'public/projects/final/facility-photo.png';

export default function FinalYear() {
  return (
    <main className="relative h-fit">
      <ProjectHeading name="Final Year Project" />
      <section className="relative px-3 pb-6 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Final Year Project
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.ul.ie/courses/bachelormaster-engineering-mechanical-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Limerick
          </a>
        </h3>
        <div className="relative mx-auto my-8 aspect-[2.2] h-72 sm:h-96">
          <Image
            src={mainImg}
            alt="System schematic"
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-between md:flex-row md:items-start">
          <ProjectText text={finalText.overview} />
          <ProjectText text={finalText.method} />
          <ProjectText text={finalText.result} />
        </div>
        <div className="relative mx-auto my-8 flex aspect-video overflow-hidden rounded border border-sky-500 sm:h-96">
          <Image
            src={facility}
            alt="Facility photo"
            fill
            className="z-10 object-cover"
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
