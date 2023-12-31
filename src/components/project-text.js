export default function ProjectText({ text }) {
  const { heading, bullets, subBullets } = text;

  return (
    <div className="w-full max-w-lg p-2 md:w-1/2 lg:w-1/3">
      <div className="rounded border border-sky-500 bg-slate-600 p-2 text-lg">
        <h3 className="mb-2 text-2xl font-semibold">{heading}</h3>
        <ul>
          {bullets?.map((txt, idx) => (
            <li key={idx} className="flex flex-row">
              <div className="mr-2 mt-2.5 h-2 w-2 rounded-sm bg-sky-400"></div>
              <p className="w-fit">{txt}</p>
            </li>
          ))}
        </ul>
        <ul>
          {subBullets?.map((txt, idx) => (
            <li key={idx} className="flex flex-row">
              <div className="ml-6 mr-2 mt-2.5 h-2 w-2 rounded border border-sky-400"></div>
              <p className="w-fit font-light">{txt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
