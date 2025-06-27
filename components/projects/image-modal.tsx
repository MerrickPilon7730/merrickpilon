import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ProjectType } from "@/lib/projects";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
  initialImageIndex: number;
};

export function ImageModal({ isOpen, onClose, project, initialImageIndex }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex);
  const totalImages = project.images.length;

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialImageIndex);
  }, [isOpen, initialImageIndex]);

  if (!isOpen || totalImages === 0) return null;

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const currentImage = project.images[currentIndex];
  const currentDesc = project.imageDescription?.[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center overflow-auto"
      onClick={onClose}
    >
        <div className="relative w-[90%] max-w-[70%]"
        onClick={(e) => e.stopPropagation()}
        >
            <button
            onClick={goPrev}
            className="absolute left-2 sm:left-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
            >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <Card className="bg-white dark:bg-gray-800 dark:text-white w-full min-h-[600px] max-h-[54vh] overflow-y-auto p-8">
            <CardContent className="relative h-[65vh] sm:h-[70vh] w-full flex items-center justify-center">
                <Image
                src={currentImage}
                alt={project.title}
                height={1900}
                width={1000}
                className="object-cover rounded-2xl border-2 border-black dark:border-white"/>
            </CardContent>

            {currentDesc && (
                <div className="text-center px-4 pb-4 font-mono text-sm break-words">
                {currentDesc}
                </div>
            )}
            </Card>

            <button
            onClick={goNext}
            className="absolute right-2 sm:right-[-2rem] top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 sm:p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
            >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
        </div>
    </div>
  );
}
