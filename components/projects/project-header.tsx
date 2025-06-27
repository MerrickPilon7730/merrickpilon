import { ProjectType } from "@/lib/projects"

type Props = {
    project: ProjectType | null;
}

export function ProjectHeader({ project }: Props) {
    const renderRow = (label: string, value?: string) => (
        <div className="w-full mt-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <p className="font-bold sm:w-[120px] text-left">{label}</p>
                <p className="font-mono flex-1 text-left">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
            <p className="text-2xl font-bold text-center">{project?.title}</p>
            <div className="mt-2">
                <a
                    href={`https://${project?.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline break-words text-center"
                >
                    {project?.url}
                </a>
            </div>

            {renderRow("Languages:", project?.technologies.languages)}
            {renderRow("Front-end:", project?.technologies.frontend)}
            {renderRow("Back-end:", project?.technologies.backend)}
            {renderRow("Tools:", project?.technologies.tools)}
        </div>
    );
}
