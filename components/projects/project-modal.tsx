

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ProjectType } from "@/lib/projects";
import { ProjectHeader } from "./project-header";
import { ProjectImages } from "./project-images";
import { ProjectContent } from "./project-content";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectType[]; 
  initialProjectIndex: number;
};

export function ProjectModal({isOpen, onClose, projects, initialProjectIndex}: Props) {
    const [currentIndex, setCurrentIndex] = useState(initialProjectIndex);

    useEffect(() => {
        if (isOpen) setCurrentIndex(initialProjectIndex);
    }, [isOpen, initialProjectIndex]);

    if (!isOpen || projects.length === 0) return null;

    const project = projects[currentIndex];

    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return(
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center overflow-auto"
            onClick={onClose}
        >
            <div className="relative w-[90%] max-w-[70%]"  onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={goPrev}
                    className="absolute left-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
                    >
                    <ChevronLeft />
                </button>
                
                <Card className="bg-white flex-col dark:bg-gray-800 dark:text-white">
                    <CardHeader>
                        <CardTitle className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 w-[95%] mx-auto mt-2">
                            <div className="order-1 lg:order-2">
                                <ProjectHeader project={project}/>
                            </div>
                            <div className="order-2 lg:order-1">
                                <ProjectImages project={project} isActive={isOpen}/>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex felx-cols justify-center">
                        <ProjectContent project={project}/>
                    </CardContent>
                </Card>

                <button
                    onClick={goNext}
                    className="absolute right-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
                    >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};