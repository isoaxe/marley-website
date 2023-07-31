import Image from 'next/image';
import cover from 'public/home/green-waves-cover.jpg';

export default function HomeIntro() {
  return (
    <section>
      <div className="relative h-screen w-full">
        <Image
          src={cover}
          alt="Abstract image showing wavy lines on a dark green background."
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
        <div className="absolute m-4 mt-[30vh] flex w-full flex-col items-center text-center text-white sm:mt-[40vh]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
            Marley Hoban
          </h1>
          <h2 className="mt-10 text-xl font-light md:text-2xl lg:text-3xl 2xl:text-4xl">
            Mechanical and Manufacturing Engineer
          </h2>
        </div>
      </div>
    </section>
  );
}
