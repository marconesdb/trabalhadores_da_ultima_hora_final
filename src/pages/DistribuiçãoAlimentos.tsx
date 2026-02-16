import { Heart, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const DistribuicaoDeAlimentos = () => {
  const photos = [
    { id: 1, src: '/assets/img/Kombi.jpg', alt: 'Foto 1 - Foto da Kombi na Distribuição' },
    { id: 2, src: '/assets/img/alimentos.jpg', alt: 'Foto 2 - Fazendo a Comida' },
    { id: 3, src: '/assets/img/maria.jpg', alt: 'Foto 3 - Maria Luiza' },
    { id: 4, src: '/assets/img/noticia.jpg', alt: 'Foto 4 - Noticia do Trabalho' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-300 to-blue-300  py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">
            Trabalhadores da Última Hora
          </h1>
          <p className="text-center text-gray-800 text-lg">
            Servindo com amor e dignidade
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
            Distribuição de Alimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nosso projeto de distribuição de alimentos alcança pessoas em situação de vulnerabilidade social, 
            oferecendo refeições nutritivas e acolhimento para quem mais precisa.
          </p>
        </section>

        {/* Info Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Atendimento Humanizado
            </h3>
            <p className="text-gray-600">
              Tratamos cada pessoa com respeito e dignidade, oferecendo não apenas alimento, mas acolhimento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Calendar className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Regularidade
            </h3>
            <p className="text-gray-600">
              Distribuição semanal de alimentos e refeições, garantindo suporte constante às famílias.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Presença na Comunidade
            </h3>
            <p className="text-gray-600">
              Atuamos diretamente nas comunidades, levando esperança onde é mais necessário.
            </p>
          </div>
        </section>

        {/* Photos Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Nosso Trabalho em Ação
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-blue-300 text-gray-500 rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Faça Parte Dessa Missão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sua doação ou voluntariado pode transformar vidas. Juntos, podemos fazer a diferença 
            na vida de quem mais precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doacoes" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Quero Doar
            </Link>
             <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >Seja Voluntário</button>
          </div>
        </section>

      </main>
    </div>
  );
};

export default DistribuicaoDeAlimentos;
