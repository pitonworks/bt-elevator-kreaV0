'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const products = [
    {
      title: 'Elevator Control Systems',
      description: 'Advanced control systems for all types of elevators',
      icon: '/icons/control-system.svg', // Will need to be added
      link: '/products/control-systems'
    },
    {
      title: 'Electronic Cards',
      description: 'Reliable electronic cards for elevator operations',
      icon: '/icons/electronic-card.svg', // Will need to be added
      link: '/products/electronic-cards'
    },
    {
      title: 'Software Solutions',
      description: 'Intelligent software for elevator management',
      icon: '/icons/software.svg', // Will need to be added
      link: '/products/software'
    },
    {
      title: 'Drivers & Components',
      description: 'High-quality drivers and components for elevators',
      icon: '/icons/components.svg', // Will need to be added
      link: '/products/components'
    }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 hyperspeed-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our range of high-quality elevator systems, components, and software solutions
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {/* Placeholder for icon - replace with actual icons when available */}
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  {/* Uncomment when icons are available */}
                  {/* <Image 
                    src={product.icon} 
                    alt={product.title} 
                    width={32} 
                    height={32} 
                  /> */}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{product.description}</p>
                <div className="text-center">
                  <Link 
                    href={product.link}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;