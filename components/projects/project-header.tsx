
import { ProjectType } from "@/lib/projects"

type Props = {
    project: ProjectType | null;
}

export function ProjectHeader({project}: Props) {
    return(
        <div className="flex flex-col items-center justify-center">
                <p>{project?.title}</p>
                <div>
                    <a
                    href={`https://${project?.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                    >
                    {project?.url}
                    </a>
                </div>
        </div>
    )
}