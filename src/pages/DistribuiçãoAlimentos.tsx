import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Users, Calendar, MapPin, X } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const DistribuicaoDeAlimentos: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, src: '/assets/img/Kombi.jpg', alt: t('distribuicaoAlimentos.photos.photo1') },
    { id: 2, src: '/assets/img/alimentos.jpg', alt: t('distribuicaoAlimentos.photos.photo2') },
    { id: 3, src: '/assets/img/maria.jpg', alt: t('distribuicaoAlimentos.photos.photo3') },
    { id: 4, src: '/assets/img/noticia.jpg', alt: t('distribuicaoAlimentos.photos.photo4') }
  ];

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-300 to-blue-300 py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            {t('distribuicaoAlimentos.header.title')}
          </h1>
          <p className="text-center text-gray-800 text-lg">
            {t('distribuicaoAlimentos.header.subtitle')}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block bg-blue-300 text-white p-4 rounded-full mb-6">
            <Heart className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('distribuicaoAlimentos.hero.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('distribuicaoAlimentos.hero.description')}
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('distribuicaoAlimentos.cards.humanized.title')}
            </h3>
            <p className="text-gray-600">
              {t('distribuicaoAlimentos.cards.humanized.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Calendar className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('distribuicaoAlimentos.cards.regularity.title')}
            </h3>
            <p className="text-gray-600">
              {t('distribuicaoAlimentos.cards.regularity.description')}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('distribuicaoAlimentos.cards.community.title')}
            </h3>
            <p className="text-gray-600">
              {t('distribuicaoAlimentos.cards.community.description')}
            </p>
          </div>
        </section>

        {/* Photos Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {t('distribuicaoAlimentos.gallery.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-gradient-to-r from-gray-300 to-blue-300 text-gray-500 rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">{t('distribuicaoAlimentos.impact.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('distribuicaoAlimentos.impact.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/doacoes" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              {t('distribuicaoAlimentos.impact.donateButton')}
            </a>
            <button 
              onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              {t('distribuicaoAlimentos.impact.volunteerButton')}
            </button>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="fixed top-4 right-4 z-[100] w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all shadow-2xl border-4 border-white"
            onClick={closeModal}
          >
            <X className="w-8 h-8 text-white" strokeWidth={3} />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative">
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedPhoto.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistribuicaoDeAlimentos;