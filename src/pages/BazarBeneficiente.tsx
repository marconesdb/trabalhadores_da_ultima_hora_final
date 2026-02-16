import  { useState } from 'react';
import { Heart, Users, HandHeart, Calendar, Clock, MapPin, Phone, Mail, Award, Target, TrendingUp } from 'lucide-react';

const BazarBeneficiente = () => {
  const [formularioAberto, setFormularioAberto] = useState(false);

  const areasVoluntariado = [
    {
      icone: '📦',
      titulo: 'Organização e Triagem',
      descricao: 'Ajude a organizar, separar e catalogar as doações recebidas',
      horario: 'Segundas e Quartas, 14h-17h'
    },
    {
      icone: '🎨',
      titulo: 'Divulgação e Marketing',
      descricao: 'Crie conteúdo para redes sociais e ajude na comunicação',
      horario: 'Flexível - trabalho remoto'
    },
    {
      icone: '🤝',
      titulo: 'Atendimento ao Público',
      descricao: 'Receba visitantes e auxilie na escolha de produtos durante os bazares',
      horario: 'Dias de bazar - 9h às 17h'
    },
    {
      icone: '🚛',
      titulo: 'Logística e Transporte',
      descricao: 'Auxilie na coleta de doações e transporte de materiais',
      horario: 'Sábados, 8h-12h'
    },
    {
      icone: '💰',
      titulo: 'Apoio Financeiro',
      descricao: 'Ajude no controle de vendas e caixa durante os eventos',
      horario: 'Dias de bazar - turnos variados'
    },
    {
      icone: '🔧',
      titulo: 'Manutenção e Reparos',
      descricao: 'Conserte e restaure itens doados para serem vendidos',
      horario: 'Flexível'
    }
  ];

  const impactos = [
    { numero: '500+', texto: 'Famílias Atendidas', icone: <Users size={32} /> },
    { numero: '2000+', texto: 'Itens Doados/Mês', icone: <HandHeart size={32} /> },
    { numero: '150+', texto: 'Voluntários Ativos', icone: <Heart size={32} /> },
    { numero: 'R$ 1mil', texto: 'Arrecadado/Mês', icone: <TrendingUp size={32} /> }
  ];

  const depoimentos = [
    {
      nome: 'Maria Silva',
      papel: 'Voluntária há 2 anos',
      texto: 'Participar do bazar beneficente mudou minha vida. Ver o sorriso das famílias atendidas não tem preço!'
    },
    {
      nome: 'João Santos',
      papel: 'Coordenador de Logística',
      texto: 'Encontrei aqui uma família de pessoas que querem fazer o bem. O trabalho é gratificante e transformador.'
    },
    {
      nome: 'Ana Costa',
      papel: 'Voluntária de Triagem',
      texto: 'Cada item organizado representa esperança para alguém. Saber que faço parte disso me enche de alegria!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-300">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-300 to-blue-300 to-blue-300 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="fill-white" size={48} />
            <h1 className="text-5xl font-bold">Bazar Beneficente</h1>
          </div>
          <p className="text-2xl text-gray-700 mb-2">Trabalhadores da Última Hora</p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transformando vidas através da solidariedade e do trabalho voluntário
          </p>
        </div>
      </header>

      {/* Banner de Chamada */}
      <div className="bg-gradient-to-r from-gray-300 to-blue-300 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Seja um Voluntário!</h2>
          <p className="text-xl mb-4">Doe seu tempo, multiplique amor e faça a diferença na comunidade</p>
          <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Olá!Quero%20ser%20voluntário.", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Quero Ser Voluntário
          </button>

        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Nossa Missão */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="text-blue-600" size={36} />
            <h2 className="text-3xl font-bold text-gray-800">Nossa Missão</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-6">
            O <strong>Bazar Beneficente</strong> da instituição <strong>Trabalhadores da Última Hora</strong> é mais do que 
            um ponto de venda de itens doados. Somos uma rede de solidariedade onde voluntários dedicam seu tempo e talento 
            para arrecadar fundos e atender famílias em situação de vulnerabilidade social.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Através do trabalho voluntário, promovemos dignidade, acolhimento e esperança, criando um ciclo virtuoso 
            onde cada gesto de amor se multiplica em transformação social.
          </p>
        </div>

        {/* Números de Impacto */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nosso Impacto</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Como Você Pode Ajudar</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Temos diversas oportunidades de voluntariado. Escolha a que mais combina com você!
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vozes dos Voluntários</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Local</h3>
              <p className="text-gray-600">Rua: João Figueiredo, Nº. 318 - Bairro: Vila Exposição;
              Cidade: Montes Claros - MG, CEP: 39400-286</p>
              <p className="text-gray-600">Ponto de Refência: Acesso ao Portão 9 do Parque de Exposições João Alencar Athaide</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Horário</h3>
              <p className="text-gray-600">Segunda a Sexta</p>
              <p className="text-gray-600">9h às 17h</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600">(38) 99207-2259</p>
              
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="text-blue-600 mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">E-mail</h3>
              <p className="text-gray-600">contato@trabalhadoresdaultimahora.com.br</p>      
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-r from-bg-gray-800 to-teal-500 rounded-2xl shadow-xl p-10 text-white text-center">
          <Award className="mx-auto mb-4 fill-white" size={48} />
          <h2 className="text-4xl font-bold mb-4">Faça Parte Desta Família!</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-500">
            Não importa quanto tempo você tem disponível. Toda ajuda é valiosa e faz a diferença. 
            Junte-se a nós e descubra o poder transformador do voluntariado!
          </p>
          
          <button 
            onClick={() => window.open("https://wa.me/5538992072259?text=Quero%20ser%20voluntário", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Entre em contato e seja um Voluntário
          </button>

        </div>
      </div>

      {/* Modal de Formulário */}
      {formularioAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Cadastro de Voluntário</h3>
            <p className="text-gray-600 mb-6 text-center">
              Preencha seus dados e entraremos em contato em breve!
            </p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input 
                type="email" 
                placeholder="E-mail"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input 
                type="tel" 
                placeholder="Telefone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">Área de interesse</option>
                <option>Organização e Triagem</option>
                <option>Divulgação e Marketing</option>
                <option>Atendimento ao Público</option>
                <option>Logística e Transporte</option>
                <option>Apoio Financeiro</option>
                <option>Manutenção e Reparos</option>
              </select>
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setFormularioAberto(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  Enviar
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