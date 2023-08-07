import Image from 'next/image';

export default function ProjectImage({ image, caption }) {
  return (
    <div className="w-full md:my-8 md:w-1/2 lg:w-1/3">
      <div className="relative m-2 h-72 overflow-hidden rounded sm:h-96">
        <Image
          src={image}
          alt={caption}
          fill
          className="z-10 object-cover"
          sizes="(max-width: 639px) 100vw, 25rem"
        />
      </div>
    </div>
  );
}
