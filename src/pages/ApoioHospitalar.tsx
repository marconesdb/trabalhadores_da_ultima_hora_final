import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Apoio Hospitalar | Trabalhadores da Última Hora</title>
  <meta name="description" content="Espaço dedicado a mostrar a colaboração em frente aos Hospitais." />
</Helmet>

import { Heart, Coffee, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ApoioHospitalar = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-300 to-blue-300 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">{t('pageHeader.title')}</h1>
          <p className="text-xl text-gray-700">{t('pageHeader.subtitle')}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* O que fazemos */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('whatWeDo.title')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('whatWeDo.description1')} <strong>{t('whatWeDo.descriptionBold')}</strong> {t('whatWeDo.description2')}
          </p>
          <p className="text-gray-700">
            {t('whatWeDo.mission')}
          </p>
        </section>

        {/* Grid de informações */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* O que oferecemos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Coffee className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('whatWeOffer.title')}</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• {t('whatWeOffer.meals')}</li>
              <li>• {t('whatWeOffer.coffee')}</li>
              <li>• {t('whatWeOffer.snacks')}</li>
              <li>• {t('whatWeOffer.drinks')}</li>
            </ul>
          </div>

          {/* Horários */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Clock className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('schedule.title')}</h3>
            <p className="text-gray-700 mb-2"><strong>{t('schedule.days')}</strong></p>
            <ul className="text-gray-700 space-y-1">
              <li>{t('schedule.time')}</li>
            </ul>
          </div>

          {/* Localização */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <MapPin className="w-8 h-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('location.title')}</h3>
            <p className="text-gray-700">
              {t('location.description')}
            </p>
          </div>

          {/* Contato */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Phone className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('contact.title')}</h3>
            <p className="text-gray-700">{t('contact.phone')}: (38) 99207-2259</p>
            <p className="text-gray-700">{t('contact.email')}: contato@trabalhadoresdaultimahora.com.br</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-gray-700 rounded-lg shadow-md p-8 text-center">
            <p className="mb-4">{t('cta.volunteer.description')}</p>
            <button 
              onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
              className="bg-white text-blue-600 px-8 py-3 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('cta.volunteer.button')}
            </button>
          </div>

          <div className="bg-gradient-to-r from-gray-300 to-blue-300 rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-600">{t('cta.donate.title')}</h3>
            <p className="mb-4 text-gray-600">{t('cta.donate.description')}</p>
            <Link to="/doacoes" className="bg-white text-yellow-400 font-bold py-2 px-6 rounded hover:bg-gray-100">
              {t('cta.donate.button')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApoioHospitalar;