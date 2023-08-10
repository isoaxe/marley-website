import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import mainImg from 'public/projects/avi/external-photo.png';

export default function AudioVisual() {
  return (
    <main className="relative h-fit">
      <ProjectHeading name="Audio-Visual Installation" />
      <section className="relative px-3 pb-6 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Audio-Visual Installation
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.alltogethernow.ie/elg"
            target="_blank"
            rel="noopener noreferrer"
          >
            E.L.G. Arts Festival
          </a>
        </h3>
        <div className="relative h-96 w-full xs:h-[32rem]">
          <Image
            src={mainImg}
            alt="External structure with fabric sleeve"
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
