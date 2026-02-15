import { useState, useEffect, type SetStateAction } from 'react';
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


const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    { url: img01, title: 'Doação de Cobertores', description: 'Distribuição de cobertores para pessoas em situação de vulnerabilidade social.' },
    { url: img02, title: 'Momento de Oração', description: 'Oração e Reflexão antes de sair para os trabalhos.' },
    { url: img03, title: 'Saindo para o trabalho', description: 'Kombi preparando para sair com alimentos, roupas e trabalhadores.' },
    { url: img04, title: 'Distribuição de Alimentos', description: 'Distribuição de alimentos para pessoas em situação de vulnerabilidade social.' },
    { url: img05, title: 'Cuidado com os animais', description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.' },
    { url: img06, title: 'Distribuição de Alimentos', description: 'Distribuição de alimentos para pessoas em situação de vulnerabilidade social.' },
    { url: img07, title: 'Carro de Apoio', description: 'Kombi dos Trabalhadores da Última Hora.'},
    { url: img08, title: 'Momento de Oração', description: 'Oração antes da distribuição de alimentos.'},
    { url: img09, title: 'Distribuição de Alimentos', description: 'Preparando a Kombi para distribuição de alimentos.'},
    { url: img010, title: 'Distribuição de Alimentos', description: 'Doação de cachorro-quente.'},
    { url: img011, title: 'Distribuição de Alimentos', description: 'Cozinha que prepara os alimentos.'},
    { url: img012, title: 'Assistido recebendo alimentos', description: 'No dia do Trabalhado.'},
    { url: img013, title: 'Preparando os alimentos', description: 'No dia do Trabalhado.'},
    { url: img014, title: 'Momentos Fraternos', description: 'No dia do Trabalhado.'}
    /*
    {
    url: img10,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img11,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img12,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img13,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img14,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img15,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Muda a cada 4 segundos

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-20 px-4">
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
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay com Informações */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Botão Play/Pause */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
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
                aria-label={`Ir para imagem ${index + 1}`}
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
                alt={images[imageIndex].title}
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