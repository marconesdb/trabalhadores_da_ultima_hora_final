import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img01 from '../assets/img/img-01.png';
import img02 from '../assets/img/img-02.png';
import img03 from '../assets/img/img-03.png';
import img04 from '../assets/img/img-04.png';
import img05 from '../assets/img/img-05.png';


const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: img01,
      title: 'Doação de Cobertores',
      description: 'Distribuição de cobertores para pessoas em situação de vulnerabilidade social.'
    },

    {
      url: img02,
      title: 'Momento de Oração',
      description: 'Oração e Reflexão antes de sair para os trabalhos.'
    },
    {
      url: img03,
      title: 'Saindo para o trabalho',
      description: 'Kombi preparando para sair com alimentos, roupas e trabalhadores.'
    },
    {
      url: img04,
      title: 'Distribuição de Alimentos',
      description: 'Distribuição de alimentos para pessoas em situação de vulnerabilidade social.'
    },
    {
      url: img05,
      title: 'Cuidado com os animais',
      description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }

    /*
    {
    url: img06,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img07,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img08,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

    /*
    {
    url: img09,
    title: 'Cuidado com os animais',
    description: 'Os Trabalhadores da Última Hora também alimenta os animais nas ruas.'
    }
    */

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900  to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/*<h1 className="text-5xl font-bold text-white mb-4 text-center">Galeria</h1>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Explore nossa coleção de imagens deslumbrantes
        </p>*/}

        {/* Carrossel Principal */}
        <div className="relative group">
          {/* Container da Imagem */}
          <div className="relative h-96 md:h-[330px] overflow-hidden rounded-2xl shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay com Informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {image.title}
                    </h2>
                    <p className="text-gray-200 text-lg">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 w-2 hover:bg-white/75'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Miniaturas */}
        <div className="mt-8 grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-purple-500 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-lg">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Galeria;