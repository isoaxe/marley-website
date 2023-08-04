import ProjectHeading from '@/components/project-heading';

export default function PressureSinter() {
  return (
    <main className="relative h-screen">
      <ProjectHeading name="Pressure Sintering Machine" />
      <section className="relative px-3 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Pressure Sintering Machine
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.citc.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chip Integration Technology Center
          </a>
        </h3>
      </section>
    </main>
  );
}
