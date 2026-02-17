import { useState } from 'react';
import { Heart, Users, HandHeart, Calendar, Clock, MapPin, Phone, Mail, Award, Target, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BazarBeneficiente = () => {
  const { t } = useTranslation();
  const [formularioAberto, setFormularioAberto] = useState(false);

  const areasVoluntariado = [
    {
      icone: '📦',
      titulo: t('volunteerAreas.organization.title'),
      descricao: t('volunteerAreas.organization.description'),
      horario: t('volunteerAreas.organization.schedule')
    },
    {
      icone: '🎨',
      titulo: t('volunteerAreas.marketing.title'),
      descricao: t('volunteerAreas.marketing.description'),
      horario: t('volunteerAreas.marketing.schedule')
    },
    {
      icone: '🤝',
      titulo: t('volunteerAreas.customerService.title'),
      descricao: t('volunteerAreas.customerService.description'),
      horario: t('volunteerAreas.customerService.schedule')
    },
    {
      icone: '🚛',
      titulo: t('volunteerAreas.logistics.title'),
      descricao: t('volunteerAreas.logistics.description'),
      horario: t('volunteerAreas.logistics.schedule')
    },
    {
      icone: '💰',
      titulo: t('volunteerAreas.financial.title'),
      descricao: t('volunteerAreas.financial.description'),
      horario: t('volunteerAreas.financial.schedule')
    },
    {
      icone: '🔧',
      titulo: t('volunteerAreas.maintenance.title'),
      descricao: t('volunteerAreas.maintenance.description'),
      horario: t('volunteerAreas.maintenance.schedule')
    }
  ];

  const impactos = [
    { numero: '500+', texto: t('impact.families'), icone: <Users size={32} /> },
    { numero: '2000+', texto: t('impact.items'), icone: <HandHeart size={32} /> },
    { numero: '150+', texto: t('impact.volunteers'), icone: <Heart size={32} /> },
    { numero: 'R$ 1mil', texto: t('impact.raised'), icone: <TrendingUp size={32} /> }
  ];

  const depoimentos = [
    {
      nome: 'Maria Silva',
      papel: t('testimonials.maria.role'),
      texto: t('testimonials.maria.text')
    },
    {
      nome: 'João Santos',
      papel: t('testimonials.joao.role'),
      texto: t('testimonials.joao.text')
    },
    {
      nome: 'Ana Costa',
      papel: t('testimonials.ana.role'),
      texto: t('testimonials.ana.text')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-300 to-blue-300 to-blue-300 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="fill-white" size={48} />
            <h1 className="text-5xl font-bold">{t('bazarHeader.title')}</h1>
          </div>
          <p className="text-2xl text-gray-700 mb-2">{t('bazarHeader.subtitle')}</p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('bazarHeader.tagline')}
          </p>
        </div>
      </header>

      {/* Banner de Chamada */}
      <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">{t('callBanner.title')}</h2>
          <p className="text-xl mb-4">{t('callBanner.description')}</p>
          <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('callBanner.button')}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Nossa Missão */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="text-blue-600" size={36} />
            <h2 className="text-3xl font-bold text-gray-800">{t('mission.title')}</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6">
            {t('mission.paragraph1.part1')} <strong>{t('mission.paragraph1.bold1')}</strong> {t('mission.paragraph1.part2')} <strong>{t('mission.paragraph1.bold2')}</strong> {t('mission.paragraph1.part3')}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {t('mission.paragraph2')}
          </p>
        </div>

        {/* Números de Impacto */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('impactSection.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactos.map((impacto, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all hover:scale-105">
                <div className="text-purple-600 mb-3 flex justify-center">
                  {impacto.icone}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{impacto.numero}</h3>
                <p className="text-gray-600 font-semibold">{impacto.texto}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de Voluntariado */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">{t('volunteerSection.title')}</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            {t('volunteerSection.description')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasVoluntariado.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4 text-center">{area.icone}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{area.titulo}</h3>
                <p className="text-gray-600 mb-4 text-center">{area.descricao}</p>
                <div className="flex items-center justify-center gap-2 text-purple-600">
                  <Clock size={18} />
                  <p className="text-sm font-semibold">{area.horario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('testimonialsSection.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((depoimento, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6">
                <div className="text-purple-600 mb-4 flex justify-center">
                  <Heart className="fill-purple-600" size={32} />
                </div>
                <p className="text-gray-700 italic mb-4 text-center">"{depoimento.texto}"</p>
                <p className="font-bold text-gray-800 text-center">{depoimento.nome}</p>
                <p className="text-gray-600 text-sm text-center">{depoimento.papel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{t('contactSection.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">{t('contactSection.location.title')}</h3>
              <p className="text-gray-600">{t('contactSection.location.address')}</p>
              <p className="text-gray-600">{t('contactSection.location.reference')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">{t('contactSection.hours.title')}</h3>
              <p className="text-gray-600">{t('contactSection.hours.days')}</p>
              <p className="text-gray-600">{t('contactSection.hours.time')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">{t('contactSection.phone.title')}</h3>
              <p className="text-gray-600">(38) 99207-2259</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">{t('contactSection.email.title')}</h3>
              <p className="text-gray-600">contato@trabalhadoresdaultimahora.com.br</p>      
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-bg-gray-800 to-teal-500 rounded-2xl shadow-xl p-10 text-white text-center">
          <Award className="mx-auto mb-4 fill-white" size={48} />
          <h2 className="text-4xl font-bold mb-4">{t('finalCta.title')}</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-500">
            {t('finalCta.description')}
          </p>
          
          <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Quero%20ser%20voluntário", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('finalCta.button')}
          </button>
        </div>
      </div>

      {/* Modal de Formulário */}
      {formularioAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{t('form.title')}</h3>
            <p className="text-gray-600 mb-6 text-center">
              {t('form.description')}
            </p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder={t('form.fields.name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input 
                type="email" 
                placeholder={t('form.fields.email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input 
                type="tel" 
                placeholder={t('form.fields.phone')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">{t('form.fields.area.placeholder')}</option>
                <option>{t('form.fields.area.options.organization')}</option>
                <option>{t('form.fields.area.options.marketing')}</option>
                <option>{t('form.fields.area.options.customerService')}</option>
                <option>{t('form.fields.area.options.logistics')}</option>
                <option>{t('form.fields.area.options.financial')}</option>
                <option>{t('form.fields.area.options.maintenance')}</option>
              </select>
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setFormularioAberto(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all"
                >
                  {t('form.buttons.cancel')}
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  {t('form.buttons.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BazarBeneficiente;