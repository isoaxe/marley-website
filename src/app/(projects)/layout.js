import Image from 'next/image';
import cover from 'public/projects/abstract-green.jpg';

export default function ProjectLayout({ children }) {
  return (
    <section>
      <Image
        src={cover}
        alt="Abstract image showing angled parallel lines on a dark green background."
        fill
        className="absolute z-0 object-cover"
        sizes="100vw"
      />
      {children}
    </section>
  );
}
