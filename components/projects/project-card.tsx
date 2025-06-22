
import Image from 'next/image';
import { ProjectType } from '@/lib/projects';

type props = {
  onClick: () => void;
  project: ProjectType;
}

export function ProjectCard({ onClick, project }: props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:cursor-pointer" onClick={onClick}>
      <div className="relative w-full h-60">
        <Image
          src={project.displayImage}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 border-t border-black dark:border-white">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="font-mono">{project.description}</p>
      </div>
    </div>
  );
}
