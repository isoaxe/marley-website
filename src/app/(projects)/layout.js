import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import cover from 'public/projects/abstract-green.jpg';

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
      <div className="relative flex flex-row">
        <FaHome
          size={50}
          className="fill-sky-200 transition duration-300 hover:cursor-pointer hover:fill-sky-500"
        />
      </div>
      {children}
    </section>
  );
}
