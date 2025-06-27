
import { ProjectType } from "@/lib/projects"

type Props = {
    project: ProjectType | null;
}

export function ProjectContent({project}: Props) {
    return(
        <div className="w-full max-w-4xl px-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
                <p className="font-bold sm:w-[120px] text-left">Description:</p>
                <p className="font-mono flex-1 text-left">{project?.content}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <p className="font-bold sm:w-[120px] text-left">Features:</p>
                <div className="font-mono flex-1 text-left space-y-1">
                    {project?.features.map((feature, index) => (
                        <p key={index}>{feature}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
