import Image from 'next/image';
import ProjectHeading from '@/components/project-heading';
import ProjectText from '@/components/project-text';
import ProjectImage from '@/components/project-image';
import { aviText } from '@/util/text-data';
import mainImg from 'public/projects/avi/external-photo.png';
import internal from 'public/projects/avi/internal-structure.png';
import external from 'public/projects/avi/external-structure.png';
import sleeve from 'public/projects/avi/fabric-sleeve.png';
import electrical from 'public/projects/avi/electrical-schematic.png';
import under1 from 'public/projects/avi/underneath-view-1.png';
import under2 from 'public/projects/avi/underneath-view-2.jpg';

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
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-around md:flex-row md:items-start">
          <ProjectText text={aviText.overview} />
          <ProjectText text={aviText.method} />
        </div>
        <div className="flex max-w-[90rem] flex-col flex-wrap items-center justify-between md:flex-row md:items-start">
          <ProjectImage image={internal} caption="Internal structure" />
          <ProjectImage
            image={external}
            caption="External waterproof structure with speakers"
          />
          <ProjectImage image={sleeve} caption="Fabric sleeve" />
          <ProjectImage image={electrical} caption="Electrical schematic" />
          <ProjectImage
            image={under1}
            caption="View from underneath the sculpture"
          />
          <ProjectImage
            image={under2}
            caption="View from underneath the sculpture"
          />
        </div>
      </section>
    </main>
  );
}
