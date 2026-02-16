import React from 'react';
import { useTranslation } from 'react-i18next';
import imgFundadora from "../assets/img/img-ml.png";

const QuemSomos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-300 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('quemSomos.titulo')}
          </h1>
          <p className="text-xl italic">
            {t('quemSomos.subtitulo')}
          </p>
        </div>
      </div>

      {/* Missão */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            {t('quemSomos.missao.titulo')}
          </h2>
          <p className="text-lg text-gray-700 italic text-center mb-6">
            "{t('quemSomos.missao.texto')}"
          </p>
        </div>

        {/* História */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {t('quemSomos.historia.titulo')}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo1')}
            </p>
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo2')}
            </p>
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo3')}
            </p>
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo4')}
            </p>
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo5')}
            </p>
            <p className="text-justify">
              {t('quemSomos.historia.paragrafo6')}
            </p>
            <p className="text-justify font-semibold text-blue-900">
              {t('quemSomos.historia.paragrafo7')}
            </p>
          </div>
        </div>

        {/* Biografia da Fundadora */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            {t('quemSomos.fundadora.titulo')}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <div className="flex-shrink-0">
              <img 
                src={imgFundadora}
                alt={t('quemSomos.fundadora.nome')}
                className="w-100 h-48 object-cover shadow-lg border-4 border-blue-200"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {t('quemSomos.fundadora.nome')}
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-justify">
                  {t('quemSomos.fundadora.paragrafo1')}
                </p>
                <p className="text-justify">
                  {t('quemSomos.fundadora.paragrafo2')}
                </p>
                <p className="text-justify">
                  {t('quemSomos.fundadora.paragrafo3')}
                </p>
                <p className="text-justify font-semibold text-blue-900">
                  {t('quemSomos.fundadora.paragrafo4')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-primary-900 text-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {t('quemSomos.valores.titulo')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {t('quemSomos.valores.amor.titulo')}
              </h3>
              <p>{t('quemSomos.valores.amor.descricao')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {t('quemSomos.valores.compaixao.titulo')}
              </h3>
              <p>{t('quemSomos.valores.compaixao.descricao')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {t('quemSomos.valores.esperanca.titulo')}
              </h3>
              <p>{t('quemSomos.valores.esperanca.descricao')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;