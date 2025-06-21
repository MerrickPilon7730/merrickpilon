

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";

import { ProjectType } from "@/lib/projects";
import { ProjectHeader } from "./project-header";
import { ProjectImages } from "./project-images";

type Props ={
    isOpen: boolean;
    onClose: () => void;
    project: ProjectType | null;
}

export function ProjectModal({isOpen, onClose, project}: Props) {
    if (!isOpen) return null;

    return(
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center overflow-auto"
            onClick={onClose}
        >
            <div className="w-[90%] max-w-[70%]"  onClick={(e) => e.stopPropagation()}>
                <Card className="bg-white dark:bg-gray-800 dark:text-white">
                    <CardHeader>
                        <CardTitle className="flex grid-cols-1 lg:grid-cols-2 gap-x-2">
                            <div className="order-1 lg:order-2 max-w-[50%] w-[45%]">
                                <ProjectHeader project={project}/>
                            </div>
                            <div className="order-2 lg:order-1 max-w-50% w-[45%]">
                                <ProjectImages project={project}/>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent >
                        Content
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};