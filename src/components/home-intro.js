import Image from 'next/image';
import { FaArrowCircleDown } from 'react-icons/fa';
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
        <div className="absolute mt-[30vh] flex w-full flex-col items-center p-4 text-center text-white sm:mt-[40vh]">
          <h1 className="text-4xl font-bold xs:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
            Marley Hoban
          </h1>
          <h3 className="my-5 text-xl font-light sm:my-10 md:text-2xl lg:text-3xl 2xl:text-4xl">
            Mechanical and Manufacturing Engineer
          </h3>
          <FaArrowCircleDown
            size={50}
            className="transition duration-500 hover:cursor-pointer hover:fill-teal-500"
          />
        </div>
      </div>
    </section>
  );
}
