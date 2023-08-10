import ProjectHeading from '@/components/project-heading';

export default function AudioVisual() {
  return (
    <main className="relative h-screen">
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
      </section>
    </main>
  );
}
