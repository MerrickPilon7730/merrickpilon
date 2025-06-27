
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { ProjectType } from "@/lib/projects"
import { ImageModal } from "./image-modal";

type Props = {
    project: ProjectType | null;
    isActive?: boolean;
}

export function ProjectImages({project, isActive}: Props) {
    const [current, setCurrent] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const total = project?.images.length ?? 0;

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + total) % total);
    }, [total]);    

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
        if (!isActive) return;
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [next, prev, isActive]);

    useEffect(() => {
        setCurrent(0); 
    }, [project?.id]);

    if (!project || total === 0) return null;
    
    const image = project.images?.[current] || null;
    const imageDescription = project.imageDescription[current] || null;

    return(
        <div className="flex flex-col mx-auto w-[90%]">
            <div className="relative mt-2 ml-2 rounded-2xl">
                <button
                aria-label='Previous Project'
                onClick={prev}
                className="absolute left-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
                >
                <ChevronLeft />
                </button>

                <div 
                    className="relative w-full h-60 flex items-center justify-center overflow-hidden"
                    onClick={() => setIsModalOpen(true)}
                    >
                    {image && (
                        <Image
                            src={image}
                            alt={project.title}
                            fill
                            className="object-cover rounded-2xl border-2 border-black dark:border-white"
                        />
                    )}
                </div>

                <button
                    aria-label='Next Project'
                    onClick={next}
                    className="absolute right-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
                    >
                    <ChevronRight />
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {project.images.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full hover:cursor-pointer ${i === current ? 'bg-blue-600' : 'bg-gray-400'}`}
                    aria-label={`Go to project ${i + 1}`}
                />
                ))}
            </div>

            <div className="flex mx-auto mt-4 font-mono h-10 max-w-[80%]">
                <p>{imageDescription}</p>
            </div>

            {isModalOpen && (
                <ImageModal 
                    project={project}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    initialImageIndex={current}
                />
            )}
        </div>
    );
};