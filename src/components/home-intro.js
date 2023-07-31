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
      </div>
    </section>
  );
}
