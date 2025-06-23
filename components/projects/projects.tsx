'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';
import { projects } from '@/lib/projects';

export function ProjectCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);
 
  const project = projects[current];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if(isModalOpen) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, isModalOpen]);


  return (
    <div className="w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto text-center py-6">
      <h1 className="font-bold flex items-center justify-center text-3xl">PROJECTS</h1>
      <div className="relative mt-4 border-2 dark:border-white border-slate-800 rounded-2xl">
        <button
          aria-label='Previous Project'
          onClick={prev}
          className="absolute left-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
        >
          <ChevronLeft />
        </button>

        <ProjectCard 
          project={project}
          onClick={() => setIsModalOpen(true)} 
        />
        {isModalOpen && (
          <ProjectModal
            isOpen={true}
            onClose={() => setIsModalOpen(false)}
            project={project}
          />
        )}

        <button
          aria-label='Next Project'
          onClick={next}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 hover:cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 z-10"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full hover:cursor-pointer ${i === current ? 'bg-blue-600' : 'bg-gray-400'}`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
