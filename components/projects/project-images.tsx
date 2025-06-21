
import { ProjectType } from "@/lib/projects"
import Image from "next/image";

type Props = {
    project: ProjectType | null;
}

export function ProjectImages({project}: Props) {
     if (!project || project.images.length === 0) return null;

    return(
        <div className="flex mx-auto">
            <div className="relative w-full h-60">
                <Image
                src={project.images[0]}
                alt={project.title}
                width={400}
                height={240}
                className="object-cover rounded-2xl border-1 border-black dark:border-white"
                />
            </div>
        </div>
    );
};