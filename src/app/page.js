import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import HomeIntro from '@/components/home-intro';
import HomeProjects from '@/components/home-projects';

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <HomeProjects />
      <Link
        href="https://www.linkedin.com/in/marley-hoban-55447a1b0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full justify-center bg-home pb-10"
      >
        <FaLinkedin
          size={60}
          className="fill-sky-400 transition duration-300 hover:cursor-pointer hover:fill-teal-600"
        />
      </Link>
    </main>
  );
}
