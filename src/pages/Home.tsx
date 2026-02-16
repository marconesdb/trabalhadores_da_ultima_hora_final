import { ArrowRight, Heart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Trabalhadores from '/assets/video/Trabalhadores.mp4'

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-90"></div>
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Mãos ajudando" 
            className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-35"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
            {t('home.hero.titulo')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto font-light">
            {t('home.hero.subtitulo')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doacoes" className="bg-secondary hover:bg-yellow-500 text-primary-900 px-8 py-3 rounded-full font-bold transition text-lg">
              {t('home.hero.btnAjudar')}
            </Link>
            <Link to="/nossas-acoes" className="border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded-full font-bold transition text-lg">
              {t('home.hero.btnAcoes')}
            </Link>
          </div>
        </div>
      </section>

      {/* Citação Espiritual */}
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl text-primary-800 italic">
            {t('home.citacao.texto')}
            <span className="block mt-4">{t('home.citacao.fonte')}</span>
          </blockquote>
          <cite className="block mt-2 text-primary-600 font-medium">
            {t('home.citacao.autor')}
          </cite>

          {/* Botão para abrir vídeo */}   
          <div className="mt-8 flex flex-col items-center gap-3">
            <button 
              onClick={() => setShowVideo(true)}
              className="group relative w-32 h-32 transition-all duration-300 transform hover:scale-110"
            >
              <div className="absolute inset-0 bg-blue-400 rounded-full border-4 border-blue-600 shadow-xl group-hover:shadow-2xl transition-shadow">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-600 rounded-full opacity-60"></div>
                <div className="absolute left-3 bottom-8 w-1 h-6 bg-blue-600 rounded-full opacity-40"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0 h-0 ml-2 border-t-[20px] border-t-transparent border-l-[35px] border-l-blue-900 border-b-[20px] border-b-transparent group-hover:border-l-blue-950 transition-colors"></div>
              </div>
            </button>
            <span className="text-primary-800 font-semibold text-lg">
              {t('home.citacao.assistaVideo')}
            </span>
          </div>
        </div>
      </section>

      {/* Modal do Vídeo */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-5xl">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <X size={40} />
            </button>
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              {/* Vídeo */}
              <video className="w-full h-full" controls preload="metadata">
                <source src={Trabalhadores} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Resumo de Atividades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">
              {t('home.atividades.titulo')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('home.atividades.subtitulo')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('home.atividades.distribuicao.titulo')}
              </h3>
              <p className="text-slate-600 mb-4">
                {t('home.atividades.distribuicao.descricao')}
              </p>
              <Link to="/distribuicao-alimentos" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                {t('home.atividades.distribuicao.saibaMais')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('home.atividades.apoio.titulo')}
              </h3>
              <p className="text-slate-600 mb-4">
                {t('home.atividades.apoio.descricao')}
              </p>
              <Link to="/apoio-hospitalar" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                {t('home.atividades.apoio.saibaMais')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {t('home.atividades.bazar.titulo')}
              </h3>
              <p className="text-slate-600 mb-4">
                {t('home.atividades.bazar.descricao')}
              </p>
              <Link to="/bazar-beneficiente" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                {t('home.atividades.bazar.saibaMais')} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;