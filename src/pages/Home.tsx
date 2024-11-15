import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRoute } from '../contexts/RouteContext';
import { Book, Users, FileText, Mail, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/SSSS_20240318_202938_0000.png', alt: 'SSS.Sディスプレイ' },
  { src: '/images/image.png', alt: 'お部屋' },
  { src: '/images/rEpl∀λ1.png', alt: 'rEpl∀λ' },
  { src: '/images/ffxiv_20241011_011054_951.png', alt: 'FF14' },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="前の画像"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-label="次の画像"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`画像 ${index + 1} に移動`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { navigate } = useRoute();

  const sections = [
    { title: 'シナリオ一覧', path: '/scenarios', icon: <Book className="w-6 h-6" />, description: 'シナリオを置いてます。こんなシナリオを描いてます' },
    { title: '探索者', path: '/seekers', icon: <Users className="w-6 h-6" />, description: '今までの自探索者。KP専なので数は少ない' },
    { title: 'プロフィール', path: '/profile', icon: <FileText className="w-6 h-6" />, description: 'そふぃのプロフィール。こういう人間です' },
    { title: 'お問い合わせ', path: '/contact', icon: <Mail className="w-6 h-6" />, description: '質問や連絡はこちらから！' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">そふぃのTRPGポートフォリオ</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            CoC中心でKPやらせてもらってる人のポートフォリオ。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <ImageSlider />
          </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {section.icon}
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        {section.title}
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {section.description}
                      </dd>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button
                      onClick={() => navigate(section.path)}
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out flex items-center"
                    >
                      詳細を見る
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Home;