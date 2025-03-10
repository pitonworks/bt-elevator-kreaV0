'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, FileText, Download, Filter, ChevronDown } from 'lucide-react';

export default function TechnicalDocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Sample technical documents data
  const documents = [
    {
      id: 'doc-1',
      title: 'BT-5000 Control System Manual',
      category: 'Product Manuals',
      fileUrl: '/docs/bt-5000-manual.pdf',
      productId: 'bt-5000-control-system',
      productName: 'BT-5000 Control System',
      fileSize: '2.4 MB',
      lastUpdated: '2023-10-15',
      language: 'English'
    },
    {
      id: 'doc-2',
      title: 'BT-3000 Control Panel Specifications',
      category: 'Technical Specifications',
      fileUrl: '/docs/bt-3000-specs.pdf',
      productId: 'bt-3000-control-panel',
      productName: 'BT-3000 Control Panel',
      fileSize: '1.8 MB',
      lastUpdated: '2023-09-22',
      language: 'English'
    },
    {
      id: 'doc-3',
      title: 'BT-EC100 Installation Guide',
      category: 'Installation Guides',
      fileUrl: '/docs/bt-ec100-installation.pdf',
      productId: 'bt-ec100-main-controller-card',
      productName: 'BT-EC100 Main Controller Card',
      fileSize: '3.2 MB',
      lastUpdated: '2023-11-05',
      language: 'English'
    },
    {
      id: 'doc-4',
      title: 'BT-Elevator Monitor Software Documentation',
      category: 'Software Documentation',
      fileUrl: '/docs/bt-elevator-monitor-docs.pdf',
      productId: 'bt-elevator-monitor',
      productName: 'BT-Elevator Monitor',
      fileSize: '4.5 MB',
      lastUpdated: '2023-12-10',
      language: 'English'
    },
    {
      id: 'doc-5',
      title: 'BT-EC200 Technical Specifications',
      category: 'Technical Specifications',
      fileUrl: '/docs/bt-ec200-specs.pdf',
      productId: 'bt-ec200-floor-indicator-card',
      productName: 'BT-EC200 Floor Indicator Card',
      fileSize: '1.5 MB',
      lastUpdated: '2023-08-18',
      language: 'English'
    },
    {
      id: 'doc-6',
      title: 'BT-5000 Maintenance Guide',
      category: 'Installation Guides',
      fileUrl: '/docs/bt-5000-maintenance.pdf',
      productId: 'bt-5000-control-system',
      productName: 'BT-5000 Control System',
      fileSize: '2.8 MB',
      lastUpdated: '2023-10-30',
      language: 'English'
    },
    {
      id: 'doc-7',
      title: 'BT-Driver Software API Reference',
      category: 'Software Documentation',
      fileUrl: '/docs/bt-driver-api.pdf',
      productId: 'bt-driver-software',
      productName: 'BT-Driver Software',
      fileSize: '3.7 MB',
      lastUpdated: '2023-11-25',
      language: 'English'
    },
    {
      id: 'doc-8',
      title: 'BT-3000 Quick Start Guide',
      category: 'Installation Guides',
      fileUrl: '/docs/bt-3000-quickstart.pdf',
      productId: 'bt-3000-control-panel',
      productName: 'BT-3000 Control Panel',
      fileSize: '1.2 MB',
      lastUpdated: '2023-09-10',
      language: 'English'
    }
  ];

  // Available categories for filtering
  const categories = ['All', 'Product Manuals', 'Technical Specifications', 'Installation Guides', 'Software Documentation'];

  // Filter documents based on search query and selected category
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.productName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesProduct = !selectedProductId || doc.productId === selectedProductId;
    
    return matchesSearch && matchesCategory && matchesProduct;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16 px-4" style={{ marginTop: '6rem' }}>
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Documentation</h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Access product manuals, technical specifications, installation guides, and software documentation for BT Elevator products.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Category Filter */}
            <div className="relative inline-block w-full sm:w-auto">
              <div className="flex">
                <button
                  type="button"
                  className="inline-flex justify-between w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="category-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => document.getElementById('category-dropdown')?.classList.toggle('hidden')}
                >
                  <span className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    {selectedCategory}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div
                id="category-dropdown"
                className="hidden origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="category-menu">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block px-4 py-2 text-sm w-full text-left ${selectedCategory === category ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      role="menuitem"
                      onClick={() => {
                        setSelectedCategory(category);
                        document.getElementById('category-dropdown')?.classList.add('hidden');
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredDocuments.length} {filteredDocuments.length === 1 ? 'document' : 'documents'} found
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {doc.category}
                    </span>
                  </div>
                  
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{doc.productName}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span>{doc.fileSize}</span>
                    <span>•</span>
                    <span>Updated: {doc.lastUpdated}</span>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={doc.fileUrl}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <FileText className="h-12 w-12" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No documents found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedProductId(null);
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}