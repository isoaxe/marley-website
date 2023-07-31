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
        <div className="absolute text-center text-white flex flex-col items-center w-full mt-[30vh] sm:mt-[40vh] m-4">
          <h1 className="2xl:text-6xl text-3xl lg:text-5xl md:text-4xl font-bold">
            Marley Hoban
          </h1>
          <h2 className="2xl:text-4xl text-xl lg:text-3xl md:text-2xl font-light mt-10">
            Mechanical and Manufacturing Engineer
          </h2>
        </div>
      </div>
    </section>
  );
}
