import Image from 'next/image';
import { FaHome, FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ProjectHeading({ name }) {
  let nextProject = 'pressure-sinter';
  if (name === 'Pressure Sintering Machine') nextProject = 'final-year';
  if (name === 'Final Year Project') nextProject = 'audio-visual';

  return (
    <section className="relative h-fit w-full bg-home">
  
      <div className="relative flex flex-row items-center justify-between p-3 xs:p-6">
        <Link href="/">
          <FaHome
            size={50}
            className="fill-sky-200 transition duration-300 hover:cursor-pointer hover:fill-sky-500"
          />
        </Link>
        <h2 className="hidden text-3xl font-semibold text-white md:block lg:text-4xl">
          {name}
        </h2>
        <Link
          href={nextProject}
          className="group flex flex-row items-center hover:cursor-pointer"
        >
          <FaArrowCircleRight
            size={50}
            className="fill-sky-200 transition duration-300 group-hover:fill-sky-500"
          />
        </Link>
      </div>
    </section>
  );
}
