import Image from 'next/image';
import Link from 'next/link';

export default function HomeTile({ photo, title, link }) {
  return (
    <Link
      href={link}
      className="w-full p-2 hover:cursor-pointer sm:w-1/2 xl:w-1/3"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-home hover:border-sky-700 hover:shadow-xl">
        <Image
          src={photo}
          alt="Cover photo for one of the projects."
          fill
          className="z-0 bg-sky-300 object-cover"
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, (max-width: 1599px) 33vw, 33rem"
        />
        <div className="group absolute z-10 h-full w-full bg-slate-800 bg-opacity-0 transition duration-300 hover:bg-opacity-60">
          <h3 className="mt-[30%] hidden text-center text-xl text-white group-hover:block">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
