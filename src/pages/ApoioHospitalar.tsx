import { Heart, Coffee, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";


const ApoioHospitalar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className=" bg-gradient-to-r from-gray-300 to-blue-300 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Apoio Hospitalar</h1>
          <p className="text-xl text-gray-700">Trabalhadores da Última Hora</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* O que fazemos */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">O que fazemos</h2>
          <p className="text-lg text-gray-700 mb-4">
            Servimos <strong>comida e lanches gratuitos</strong> em frente aos hospitais para pacientes, acompanhantes e familiares.
          </p>
          <p className="text-gray-700">
            Nossa missão é garantir que ninguém passe fome durante momentos difíceis de espera e atendimento hospitalar.
          </p>
        </section>

        {/* Grid de informações */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* O que oferecemos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Coffee className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">O que oferecemos</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Refeições</li>
              <li>• Café</li>
              <li>• Lanches</li>
              <li>• Sucos e água</li>
            </ul>
          </div>

          {/* Horários */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Clock className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Horários</h3>
            <p className="text-gray-700 mb-2"><strong>Quarta e Domingo</strong></p>
            <ul className="text-gray-700 space-y-1">
             <li>Noite: 18h às 23h</li>
            </ul>
          </div>

          {/* Localização */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <MapPin className="w-8 h-8 text-red-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Onde estamos</h3>
            <p className="text-gray-700">
              Em frente aos principais hospitais da região
            </p>
          </div>

          {/* Contato */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <Phone className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">Contato</h3>
            <p className="text-gray-700">Tel: (38) 99207-2259 </p>
            <p className="text-gray-700">Email: contato@trabalhadoresdaultimahora.com.br</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-gray-700 rounded-lg shadow-md p-8 text-center">
           
            <p className="mb-4  ">Ajude-nos a servir quem precisa</p>
             <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
            className="bg-white text-blue-600 px-8 py-3  font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Quero Ajudar !
          </button>
          </div>

          <div className="bg-gradient-to-r from-gray-300 to-blue-300  rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-600">Faça uma Doação</h3>
            <p className="mb-4 text-gray-600">Alimentos, mantimentos ou dinheiro</p>
          <Link to="/doacoes" className="bg-white text-yellow-400 font-bold py-2 px-6 rounded hover:bg-gray-100" > Doar Agora </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ApoioHospitalar;