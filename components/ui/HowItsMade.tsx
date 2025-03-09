'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Navigation buttons removed as requested
import TiltedCard from './TiltedCard';
import './TiltedCard.css';

const HowItsMade = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Network-like background graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[url('/images/network-bg.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nasıl Yapılıyor?</h2>
            <p className="text-lg text-gray-300 mb-6">
              BT Elevator'un HD Driver teknolojisi, asansör kontrolünde devrim yaratıyor. Yüksek hassasiyetli sensörler ve gelişmiş algoritmalar sayesinde, asansörlerimiz milimetrik hassasiyetle çalışır ve enerji tüketimini minimize eder.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Her bir elektronik kart, özel test süreçlerinden geçirilir ve endüstri standartlarının üzerinde kalite kontrol prosedürleri uygulanır. Bu sayede, BT Elevator sistemleri uzun ömürlü ve güvenilir performans sunar.
            </p>
            
            <div className="flex space-x-4">
              <Link 
                href="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Ürünleri Keşfet
              </Link>
              <Link 
                href="/technical-docs"
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Teknik Detaylar
              </Link>
            </div>
          </motion.div>
          
          {/* Image with TiltedCard effect */}
          <motion.div
            className="relative h-80 lg:h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TiltedCard
              imageSrc="/images/bt-driver.jpeg"
              altText="BT Driver Technology"
              captionText="BT Elevator BT Driver Technology"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItsMade;