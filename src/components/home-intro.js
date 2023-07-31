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
        <div className="absolute text-white flex flex-col items-center w-full mt-[40vh]">
          <h1 className="text-5xl font-bold">Marley Hoban</h1>
          <h2 className="text-3xl font-light mt-10">
            Mechanical and Manufacturing Engineer
          </h2>
        </div>
      </div>
    </section>
  );
}
