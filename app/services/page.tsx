'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Settings, PenToolIcon, RefreshCw, Lightbulb, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'installation',
    title: 'Installation',
    description: 'Professional installation of elevator systems with precision and care.',
    icon: <Settings className="h-10 w-10 text-blue-600" />,
    features: [
      'Complete system installation',
      'Quality assurance testing',
      'Safety certification',
      'User training'
    ],
    process: [
      'Initial site assessment',
      'Custom installation planning',
      'Professional installation by certified technicians',
      'Thorough testing and quality assurance',
      'Final certification and handover'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Regular maintenance services to ensure optimal performance and longevity.',
    icon: <PenToolIcon className="h-10 w-10 text-blue-600" />,
    features: [
      'Preventive maintenance programs',
      '24/7 emergency service',
      'Genuine replacement parts',
      'Detailed maintenance reports'
    ],
    process: [
      'Scheduled inspection visits',
      'Comprehensive system checks',
      'Preventive part replacement',
      'Performance optimization',
      'Detailed reporting and recommendations'
    ]
  },
  {
    id: 'modernization',
    title: 'Modernization',
    description: 'Upgrade your existing elevator systems with the latest technology and features.',
    icon: <RefreshCw className="h-10 w-10 text-blue-600" />,
    features: [
      'Energy efficiency upgrades',
      'Control system modernization',
      'Cabin interior renovation',
      'Accessibility improvements'
    ],
    process: [
      'Current system evaluation',
      'Modernization proposal and planning',
      'Phased implementation to minimize downtime',
      'System upgrade installation',
      'Performance verification and user training'
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Expert advice on elevator systems design, selection, and optimization.',
    icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
    features: [
      'System design consultation',
      'Energy efficiency analysis',
      'Safety and compliance review',
      'Long-term planning assistance'
    ],
    process: [
      'Initial consultation and needs assessment',
      'Data collection and analysis',
      'Solution development and recommendations',
      'Implementation planning',
      'Ongoing support and guidance'
    ]
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Dedicated technical support for all your elevator system needs.',
    icon: <HeadphonesIcon className="h-10 w-10 text-blue-600" />,
    features: [
      'Remote diagnostics',
      'Technical troubleshooting',
      'Software updates and support',
      'Operator training'
    ],
    process: [
      'Issue identification',
      'Remote diagnostics when possible',
      'On-site technical visit if required',
      'Problem resolution',
      'Follow-up and preventive recommendations'
    ]
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id);

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive elevator services from installation and maintenance to modernization and technical support.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Elevator Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From installation to maintenance, modernization to technical support, we provide end-to-end services for all your elevator needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="p-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors ${activeService === service.id ? 'font-bold' : ''}`}
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Process Section */}
      {activeServiceData && (
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{activeServiceData.title} Process</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our structured approach ensures quality and reliability in every {activeServiceData.title.toLowerCase()} project.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Process Timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
                
                {/* Process Steps */}
                {activeServiceData.process.map((step, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                        {index % 2 === 0 && (
                          <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                          >
                            <h3 className="text-xl font-bold mb-2">Step {index + 1}</h3>
                            <p>{step}</p>
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1 md:order-2 mb-4 md:mb-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1 md:pl-8 order-3">
                        {index % 2 === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                          >
                            <h3 className="text-xl font-bold mb-2">Step {index + 1}</h3>
                            <p>{step}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your elevator service needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Contact Us
            </Link>
            <Link href="/technical-docs" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}