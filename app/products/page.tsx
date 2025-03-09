'use client';

import Link from 'next/link';
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    id: 'control-system-1',
    name: 'BT-5000 Control System',
    category: 'Control Systems',
    description: 'Advanced elevator control system with integrated safety features and energy efficiency.',
    image: '/images/products/control-system-1.jpg',
    features: ['Energy efficient', 'Advanced safety protocols', 'Remote monitoring', 'Compact design'],
    slug: 'bt-5000-control-system'
  },
  {
    id: 'control-system-2',
    name: 'BT-3000 Control Panel',
    category: 'Control Systems',
    description: 'Mid-range control panel suitable for residential and small commercial buildings.',
    image: '/images/products/control-system-2.jpg',
    features: ['User-friendly interface', 'Reliable performance', 'Easy installation', 'Cost-effective'],
    slug: 'bt-3000-control-panel'
  },
  {
    id: 'electronic-card-1',
    name: 'BT-EC100 Main Controller Card',
    category: 'Electronic Cards',
    description: 'Main controller card with advanced processing capabilities for smooth elevator operation.',
    image: '/images/products/electronic-card-1.jpg',
    features: ['High processing power', 'Multiple I/O ports', 'Expandable memory', 'Diagnostic LEDs'],
    slug: 'bt-ec100-main-controller-card'
  },
  {
    id: 'electronic-card-2',
    name: 'BT-EC200 Floor Indicator Card',
    category: 'Electronic Cards',
    description: 'Electronic card for floor indication with customizable display options.',
    image: '/images/products/electronic-card-2.jpg',
    features: ['Customizable display', 'Low power consumption', 'Multiple display modes', 'Easy configuration'],
    slug: 'bt-ec200-floor-indicator-card'
  },
  {
    id: 'software-1',
    name: 'BT-Elevator Monitor',
    category: 'Software Solutions',
    description: 'Comprehensive monitoring software for real-time elevator performance tracking.',
    image: '/images/products/software-1.jpg',
    features: ['Real-time monitoring', 'Performance analytics', 'Maintenance alerts', 'Mobile compatibility'],
    slug: 'bt-elevator-monitor'
  },
  {
    id: 'software-2',
    name: 'BT-Maintenance Scheduler',
    category: 'Software Solutions',
    description: 'Software solution for scheduling and tracking maintenance activities.',
    image: '/images/products/software-2.jpg',
    features: ['Automated scheduling', 'Maintenance history', 'Technician assignment', 'Report generation'],
    slug: 'bt-maintenance-scheduler'
  },
  {
    id: 'component-1',
    name: 'BT-D500 Motor Driver',
    category: 'Drivers & Components',
    description: 'High-performance motor driver for smooth and efficient elevator operation.',
    image: '/images/products/component-1.jpg',
    features: ['High efficiency', 'Overload protection', 'Low noise operation', 'Compact design'],
    slug: 'bt-d500-motor-driver'
  },
  {
    id: 'component-2',
    name: 'BT-S100 Safety Circuit',
    category: 'Drivers & Components',
    description: 'Advanced safety circuit with redundant systems for maximum passenger protection.',
    image: '/images/products/component-2.jpg',
    features: ['Redundant systems', 'Self-diagnostic', 'Fail-safe design', 'Regulatory compliant'],
    slug: 'bt-s100-safety-circuit'
  },
];

const categories = [
  'All Products',
  'Control Systems',
  'Electronic Cards',
  'Software Solutions',
  'Drivers & Components'
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    // Filter by category
    const categoryMatch = selectedCategory === 'All Products' || product.category === selectedCategory;
    
    // Filter by search query
    const searchMatch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 mb-8">
              Innovative elevator control systems, electronic cards, software solutions, and components 
              designed for reliability, efficiency, and safety.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Placeholder for product image */}
                  {/* Uncomment when images are available */}
                  {/* <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover" 
                  /> */}
                  <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-tr-md">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="mr-2 text-blue-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={`/products/${product.slug}`} 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">No products found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All Products');
                  setSearchQuery('');
                }}
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our engineering team can develop tailored elevator systems to meet your specific requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}