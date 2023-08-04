import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import HomeIntro from '@/components/home-intro';
import HomeProjects from '@/components/home-projects';

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <HomeProjects />
      <div className="flex w-full justify-center bg-home pb-10">
        <Link
          href="https://www.linkedin.com/in/marley-hoban-55447a1b0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={50}
            className="fill-sky-200 transition duration-300 hover:cursor-pointer hover:fill-sky-500"
          />
        </Link>
      </div>
    </main>
  );
}
