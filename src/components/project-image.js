import Image from 'next/image';

export default function ProjectImage({ image, caption }) {
  return (
    <div className="relative my-8 h-72 w-full sm:h-96 md:w-1/2 lg:w-1/3">
      <div className="p-2">
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
