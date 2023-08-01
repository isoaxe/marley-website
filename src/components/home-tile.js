import Image from 'next/image';

export default function HomeTile({ photo }) {
  return (
    <div className="relative aspect-video w-1/3">
      <Image
        src={photo}
        alt="Cover photo for one of the projects."
        fill
        className="z-0 object-cover"
        sizes="100vw"
      />
    </div>
  );
}
