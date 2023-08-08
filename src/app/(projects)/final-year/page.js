import ProjectHeading from '@/components/project-heading';

export default function FinalYear() {
  return (
    <main className="relative h-screen">
      <ProjectHeading name="Final Year Project" />
      <section className="relative px-3 pb-6 text-white xs:px-6">
        <h2 className="mb-5 text-center text-3xl font-semibold md:hidden">
          Final Year Project
        </h2>
        <h3 className="text-center text-2xl text-sky-200 hover:text-sky-500 md:text-left">
          <a
            href="https://www.ul.ie/courses/bachelormaster-engineering-mechanical-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Limerick
          </a>
        </h3>
      </section>
    </main>
  );
}
