import Image from 'next/image';

export default function HomeTile({ photo }) {
  return (
    <div className="w-full p-2 hover:cursor-pointer sm:w-1/2 xl:w-1/3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-home hover:border-teal-700 hover:shadow-xl">
        <Image
          src={photo}
          alt="Cover photo for one of the projects."
          fill
          className="z-0 object-cover"
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, (max-width: 1599px) 33vw, 33rem"
        />
        <div className="absolute z-10 h-full w-full bg-slate-800 opacity-0 hover:opacity-60"></div>
      </div>
    </div>
  );
}
