import { Mail, Phone, MapPin, Heart, HandHeart } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contato = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center mb-3">
            <Heart className="w-10 h-10 mr-3" />
            <h1 className="text-4xl font-bold">Trabalhadores da Última Hora</h1>
          </div>
          <p className="text-xl text-gray-500">
            Transformando vidas através do amor e do serviço ao próximo
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Atividades */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Nossas Atividades
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              A instituição <strong>Trabalhadores da Última Hora</strong> é uma organização dedicada ao serviço comunitário, 
              levando esperança, apoio e transformação social para quem mais precisa. Nosso trabalho é fundamentado na fé, 
              no amor ao próximo e no compromisso de fazer a diferença na vida das pessoas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 justify-center">
            {/* Assistência Social */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <HandHeart className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Assistência Social</h3>
              <p className="text-sm text-gray-600">
                Distribuição de alimentos, roupas e apoio às famílias vulneráveis
              </p>
            </div>

            {/* Apoio Espiritual */}
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Apoio Espiritual</h3>
              <p className="text-sm text-gray-600">
                Encontros, cultos e momentos de oração e fortalecimento
              </p>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-gray-700 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Endereço</p>
                <p className="text-gray-500">
                  Rua: João Figueiredo, Nº. 318 - Bairro: Vila Exposição<br />
                  Cidade - Montes Claros, MG<br />
                  CEP: 39400-286
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Telefones</p>
                <p className="text-gray-500">(38) 99207-2259</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">E-mail</p>
                <p className="text-gray-500">contato@trabalhadoresdaultimahora.com.br</p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Redes Sociais</p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/trabalhadores.daultimahora.33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/trabalhadores.daultimahora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 p-2 rounded-full hover:bg-pink-50 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5538992072259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 p-2 rounded-full hover:bg-green-50 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-600">
            <p className="font-semibold mb-1">Horário de Atendimento</p>
            <p className="text-gray-500">Segunda a Sexta: 8h às 18h | Sábados: 9h às 13h</p>
          </div>
        </div>

        {/* Localização */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Nossa Localização</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9065.892001490207!2d-43.852017!3d-16.706491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754ab41ec857779%3A0xa51e24e4fc960d32!2sR.%20Jo%C3%A3o%20Figueiredo%2C%20318%20-%20Vila%20Exposicao%2C%20Montes%20Claros%20-%20MG%2C%2039400-286!5e1!3m2!1spt-BR!2sbr!4v1771261688894!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Instituição"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Participe Conosco</h2>
          <p className="text-lg mb-6 text-gray-500">
            Seja um voluntário ou faça uma doação. Sua ajuda transforma vidas!
          </p>
           <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
            className="bg-white text-blue-600 px-8 py-3  font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Quero Ajudar !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contato;
