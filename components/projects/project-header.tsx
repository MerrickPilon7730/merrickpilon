
import { ProjectType } from "@/lib/projects"

type Props = {
    project: ProjectType | null;
}

export function ProjectHeader({project}: Props) {
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">{project?.title}</p>
            <div className="mt-2">
                <a
                href={`https://${project?.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
                >
                {project?.url}
                </a>
            </div>

            <div className="w-[80%] mt-4">
                <div className="flex gap-4">
                    <p className="font-bold w-[120px] text-left">Languages:</p>
                    <p className="font-mono flex-1 justify-left">{project?.technologies.languages}</p>
                </div>
            </div>

            <div className="w-[80%] mt-4">
                <div className="flex gap-4">
                    <p className="font-bold w-[120px] text-left">Front-end:</p>
                    <p className="font-mono flex-1 justify-left">{project?.technologies.frontend}</p>
                </div>
            </div>

            <div className="w-[80%] mt-4">
                <div className="flex gap-4">
                    <p className="font-bold w-[120px] text-left">Back-end:</p>
                    <p className="font-mono flex-1 justify-left">{project?.technologies.backend}</p>
                </div>
            </div>

            <div className="w-[80%] mt-4">
                <div className="flex gap-4">
                    <p className="font-bold w-[120px] text-left">Tools:</p>
                    <p className="font-mono flex-1 justify-left">{project?.technologies.tools}</p>
                </div>
            </div>
        </div>
    );
};