import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, Download } from 'lucide-react';
import Image from 'next/image';
// This would normally come from a database or API
const products = [
  {
    id: 'control-system-1',
    name: 'BT-5000 Control System',
    category: 'Control Systems',
    description: 'Advanced elevator control system with integrated safety features and energy efficiency.',
    longDescription: 'The BT-5000 Control System represents the pinnacle of elevator control technology, offering unparalleled safety features, energy efficiency, and smart building integration capabilities. Designed for high-rise buildings and premium installations, this system provides smooth operation, precise floor leveling, and comprehensive monitoring capabilities.',
    image: '/images/products/control-system-1.jpeg',
    features: ['Energy efficient', 'Advanced safety protocols', 'Remote monitoring', 'Compact design'],
    specifications: [
      { name: 'Dimensions', value: '400 x 300 x 120 mm' },
      { name: 'Power Supply', value: '220-240V AC, 50/60Hz' },
      { name: 'Max Floors', value: '64' },
      { name: 'Communication', value: 'CAN, RS-485, Ethernet' },
      { name: 'Safety Certification', value: 'EN 81-20/50, GB/T 7588-2003' },
      { name: 'Operating Temperature', value: '-10°C to +60°C' },
    ],
    documents: [
      { name: 'Technical Datasheet', path: '/docs/bt-5000-datasheet.pdf' },
      { name: 'Installation Manual', path: '/docs/bt-5000-installation.pdf' },
      { name: 'User Guide', path: '/docs/bt-5000-user-guide.pdf' },
    ],
    slug: 'bt-5000-control-system'
  },
  {
    id: 'control-system-2',
    name: 'BT-3000 Control Panel',
    category: 'Control Systems',
    description: 'Mid-range control panel suitable for residential and small commercial buildings.',
    longDescription: 'The BT-3000 Control Panel is our mid-range solution perfect for residential buildings and small commercial installations. It combines reliability with cost-effectiveness, providing all essential control functions while maintaining high safety standards and ease of installation.',
    image: '/images/products/control-system-2.jpeg',
    features: ['User-friendly interface', 'Reliable performance', 'Easy installation', 'Cost-effective'],
    specifications: [
      { name: 'Dimensions', value: '350 x 280 x 100 mm' },
      { name: 'Power Supply', value: '220-240V AC, 50/60Hz' },
      { name: 'Max Floors', value: '24' },
      { name: 'Communication', value: 'RS-485, Optional Ethernet' },
      { name: 'Safety Certification', value: 'EN 81-20/50, GB/T 7588-2003' },
      { name: 'Operating Temperature', value: '-5°C to +50°C' },
    ],
    documents: [
      { name: 'Technical Datasheet', path: '/docs/bt-3000-datasheet.pdf' },
      { name: 'Installation Manual', path: '/docs/bt-3000-installation.pdf' },
      { name: 'User Guide', path: '/docs/bt-3000-user-guide.pdf' },
    ],
    slug: 'bt-3000-control-panel'
  },
  // Other products would be defined here
];

type Props = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Properly await the params object
  const slug = await params.slug;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return {
      title: 'Product Not Found - BT Elevator',
    };
  }
  
  return {
    title: `${product.name} - BT Elevator`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  // Properly await the params object
  const slug = await params.slug;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center"style={{ marginTop: '6rem' }}>
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/products" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500 dark:text-gray-300">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ marginTop: '6rem' }}>
          {/* Product Image */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-96 relative">
            {/* Placeholder for product image */}
            {/* Uncomment when images are available */}
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-8" 
              />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">
              {product.category}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{product.longDescription}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Request Quote
              </Link>
              <Link 
                href="/technical-docs" 
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Technical Support
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Specification</th>
                  <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{spec.name}</td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documentation */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.documents.map((doc, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{doc.name}</h3>
                <Link 
                  href={doc.path} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {/* Placeholder for product image */}
                    {/* Uncomment when images are available */}
                    {/* <Image 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      fill 
                      className="object-cover" 
                    /> */}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{relatedProduct.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{relatedProduct.description}</p>
                    <Link 
                      href={`/products/${relatedProduct.slug}`} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}