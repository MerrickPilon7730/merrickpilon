
import { ProjectType } from "@/lib/projects"

type Props = {
    project: ProjectType | null;
}

export function ProjectContent({project}: Props) {
    return(
        <div className="w-[80%]">
            <div className="flex gap-4">
                <p className="font-bold w-[120px] text-left">Description:</p>
                <p className="font-mono flex-1 text-left">{project?.content}</p>
            </div>

            <div className="flex gap-4 mt-4">
                <p className="font-bold w-[120px] text-left">Features:</p>
                <p className="font-mono flex-1 text-left mb-2">
                    {project?.features.map((feature, index) => (
                        <span key={index}>
                        {feature}
                        <br />
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};