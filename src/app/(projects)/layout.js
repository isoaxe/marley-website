import Image from 'next/image';
import { FaHome, FaArrowCircleRight } from 'react-icons/fa';
import cover from 'public/projects/abstract-green.jpg';
import Link from 'next/link';

export default function ProjectLayout({ children }) {
  return (
    <section className="text-white">
      <Image
        src={cover}
        alt="Abstract image showing angled parallel lines on a dark green background."
        fill
        className="absolute z-0 object-cover"
        sizes="100vw"
      />
      <div className="relative m-6 flex flex-row justify-between">
        <Link href="/">
          <FaHome
            size={50}
            className="fill-sky-200 transition duration-300 hover:cursor-pointer hover:fill-sky-500"
          />
        </Link>
        <div className="flex flex-row items-center">
          <h3 className="mr-5 text-3xl font-extralight text-sky-200">
            Next Project
          </h3>
          <FaArrowCircleRight
            size={50}
            className="fill-sky-200 transition duration-300 hover:cursor-pointer hover:fill-sky-500"
          />
        </div>
      </div>
      {children}
    </section>
  );
}
