import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Galeria | Trabalhadores da Última Hora</title>
  <meta name="description" content="Página de fotos." />
</Helmet>


import React, { useState, useEffect, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import img01 from '../assets/img/img-01.png';
import img02 from '../assets/img/img-02.png';
import img03 from '../assets/img/img-03.png';
import img04 from '../assets/img/img-04.png';
import img05 from '../assets/img/img-05.png';
import img06 from '../assets/img/img-06.png';
import img07 from '../assets/img/img-07.png';
import img08 from '../assets/img/img-08.png';
import img09 from '../assets/img/img-09.png';
import img010 from '../assets/img/img-010.png';
import img011 from '../assets/img/img-011.png';
import img012 from '../assets/img/img-012.png';
import img013 from '../assets/img/img-013.png';
import img014 from '../assets/img/img-014.png';

const Galeria: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    { url: img01, titleKey: 'galeriaFotos.images.blankets.title', descriptionKey: 'galeriaFotos.images.blankets.description' },
    { url: img02, titleKey: 'galeriaFotos.images.prayer1.title', descriptionKey: 'galeriaFotos.images.prayer1.description' },
    { url: img03, titleKey: 'galeriaFotos.images.departure.title', descriptionKey: 'galeriaFotos.images.departure.description' },
    { url: img04, titleKey: 'galeriaFotos.images.foodDistribution1.title', descriptionKey: 'galeriaFotos.images.foodDistribution1.description' },
    { url: img05, titleKey: 'galeriaFotos.images.animalCare.title', descriptionKey: 'galeriaFotos.images.animalCare.description' },
    { url: img06, titleKey: 'galeriaFotos.images.foodDistribution2.title', descriptionKey: 'galeriaFotos.images.foodDistribution2.description' },
    { url: img07, titleKey: 'galeriaFotos.images.supportVan.title', descriptionKey: 'galeriaFotos.images.supportVan.description' },
    { url: img08, titleKey: 'galeriaFotos.images.prayer2.title', descriptionKey: 'galeriaFotos.images.prayer2.description' },
    { url: img09, titleKey: 'galeriaFotos.images.preparation1.title', descriptionKey: 'galeriaFotos.images.preparation1.description' },
    { url: img010, titleKey: 'galeriaFotos.images.hotdogDonation.title', descriptionKey: 'galeriaFotos.images.hotdogDonation.description' },
    { url: img011, titleKey: 'galeriaFotos.images.kitchen.title', descriptionKey: 'galeriaFotos.images.kitchen.description' },
    { url: img012, titleKey: 'galeriaFotos.images.receiving.title', descriptionKey: 'galeriaFotos.images.receiving.description' },
    { url: img013, titleKey: 'galeriaFotos.images.preparation2.title', descriptionKey: 'galeriaFotos.images.preparation2.description' },
    { url: img014, titleKey: 'galeriaFotos.images.fraternalMoments.title', descriptionKey: 'galeriaFotos.images.fraternalMoments.description' }
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const getVisibleThumbnails = () => {
    const maxThumbnails = 5;
    const totalImages = images.length;
    
    if (totalImages <= maxThumbnails) {
      return images.map((_, i) => i);
    }

    let start = currentIndex - Math.floor(maxThumbnails / 2);
    
    if (start < 0) {
      start = 0;
    }
    
    if (start + maxThumbnails > totalImages) {
      start = totalImages - maxThumbnails;
    }

    return Array.from({ length: maxThumbnails }, (_, i) => start + i);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-blue-300 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Carrossel Principal */}
        <div className="relative mb-8">
          {/* Container da Imagem */}
          <div className="relative h-[330px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={t(image.titleKey)}
                  className="w-full h-full object-cover"
                />
                {/* Overlay com Informações */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t(image.titleKey)}</h3>
                  <p className="text-gray-200">{t(image.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label={t('galeriaFotos.controls.previous')}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label={t('galeriaFotos.controls.next')}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Botão Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label={isPlaying ? t('galeriaFotos.controls.pause') : t('galeriaFotos.controls.play')}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
                }`}
                aria-label={t('galeriaFotos.controls.goToImage', { number: index + 1 })}
              />
            ))}
          </div>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          {visibleThumbnails.map((imageIndex) => (
            <button
              key={imageIndex}
              onClick={() => goToSlide(imageIndex)}
              className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                imageIndex === currentIndex ? 'ring-4 ring-purple-500 scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={images[imageIndex].url}
                alt={t(images[imageIndex].titleKey)}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;