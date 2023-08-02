import Image from 'next/image';

export default function HomeTile({ photo }) {
  return (
    <div className="w-full p-2 hover:cursor-pointer sm:w-1/2 xl:w-1/3">
      <div className="relative aspect-[4/3] rounded-lg border-2 border-[#123233] hover:border-teal-700 hover:shadow-xl">
        <Image
          src={photo}
          alt="Cover photo for one of the projects."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
