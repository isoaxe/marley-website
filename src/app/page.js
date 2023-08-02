import { FaLinkedin } from 'react-icons/fa';
import HomeIntro from '@/components/home-intro';
import HomeProjects from '@/components/home-projects';

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <HomeProjects />
      <div className="flex w-full justify-center bg-home pb-10">
        <FaLinkedin
          size={60}
          className="fill-sky-400 transition duration-300 hover:cursor-pointer hover:fill-teal-600"
        />
      </div>
    </main>
  );
}
