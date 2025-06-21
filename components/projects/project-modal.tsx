

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";

import { ProjectType } from "@/lib/projects";

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
            <div className="w-[90%] max-w-4xl"  onClick={(e) => e.stopPropagation()}>
                <Card className="bg-white dark:bg-gray-800 dark:text-white">
                    <CardHeader>
                        <CardTitle>
                            {project?.title}
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