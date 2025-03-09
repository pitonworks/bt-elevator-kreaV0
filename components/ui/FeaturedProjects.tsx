'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Istanbul Tower',
      description: 'High-speed elevator system for a 50-story luxury residential tower',
      image: '/images/projects/istanbul-tower.jpg', // Will need to be added
      category: 'Residential',
      location: 'Istanbul, Turkey',
      link: '/projects/istanbul-tower'
    },
    {
      title: 'Dubai Business Center',
      description: 'Smart elevator network with traffic optimization for a busy commercial complex',
      image: '/images/projects/dubai-business.jpg', // Will need to be added
      category: 'Commercial',
      location: 'Dubai, UAE',
      link: '/projects/dubai-business-center'
    },
    {
      title: 'Berlin Hospital',
      description: 'Medical-grade elevator system with emergency protocols and backup systems',
      image: '/images/projects/berlin-hospital.jpg', // Will need to be added
      category: 'Healthcare',
      location: 'Berlin, Germany',
      link: '/projects/berlin-hospital'
    },
    {
      title: 'Paris Metro Station',
      description: 'Heavy-duty public transport elevators with high traffic capacity',
      image: '/images/projects/paris-metro.jpg', // Will need to be added
      category: 'Public Infrastructure',
      location: 'Paris, France',
      link: '/projects/paris-metro'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our successful implementations around the world
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slider */}
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full bg-blue-600">
                      {/* Placeholder for project image */}
                      {/* Uncomment when images are available */}
                      {/* <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover" 
                      /> */}
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-2">
                          {project.category}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full ml-2">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                      <div>
                        <Link 
                          href={project.link}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                          View Project Details
                          <ChevronRight className="ml-1 h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;