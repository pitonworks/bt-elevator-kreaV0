'use client';

import { motion } from 'framer-motion';
import { Users, Building2, Globe2, Award } from 'lucide-react';

const CompanyStats = () => {
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      icon: Building2,
      description: 'Successful elevator installations worldwide'
    },
    {
      value: '20+',
      label: 'Years Experience',
      icon: Award,
      description: 'Industry expertise and innovation'
    },
    {
      value: '50+',
      label: 'Countries Served',
      icon: Globe2,
      description: 'Global presence and support'
    },
    {
      value: '100+',
      label: 'Team Members',
      icon: Users,
      description: 'Dedicated professionals and engineers'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">BT Elevator in Numbers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our track record of excellence and global impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  {stat.icon && <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-xl font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;