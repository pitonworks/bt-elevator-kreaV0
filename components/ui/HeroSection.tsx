'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Advanced Elevator Control Systems',
      description: 'Cutting-edge technology for modern buildings',
      cta: 'Explore Products',
      ctaLink: '/products',
      image: '/images/hero-elevator-control.jpg' // This will need to be added to public/images
    },
    {
      title: 'Innovative Electronic Cards',
      description: 'Reliable components for elevator systems',
      cta: 'View Solutions',
      ctaLink: '/products',
      image: '/images/hero-electronic-cards.jpg' // This will need to be added to public/images
    },
    {
      title: 'Smart Software Solutions',
      description: 'Intelligent management for elevator networks',
      cta: 'Discover Services',
      ctaLink: '/services',
      image: '/images/hero-software.jpg' // This will need to be added to public/images
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* We'll use a placeholder color until images are added */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50 z-10" />
          <div className="absolute inset-0 bg-blue-600" />
          {/* Uncomment when images are available */}
          {/* <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            className="object-cover" 
            priority={index === 0}
          /> */}
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'}`}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link 
                  href={slide.ctaLink} 
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;