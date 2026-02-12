import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          {/* Placeholder para imagem de fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-90"></div>
          <img 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Mãos ajudando" 
            className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-35"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className=" text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
            Trabalhadores da Última Hora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto font-light">
            Acolhendo corações, distribuindo esperança e praticando a caridade à luz do Evangelho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doacoes" className="bg-secondary hover:bg-yellow-500 text-primary-900 px-8 py-3 rounded-full font-bold transition text-lg">
              Quero Ajudar
            </Link>
            <Link to="/nossas-acoes" className="border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-3 rounded-full font-bold transition text-lg">
              Conheça Nossas Ações
            </Link>
          </div>
        </div>
      </section>

      {/* Citação Espiritual (RF06, RC01) */}
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl text-primary-800 italic">
            "Fora da caridade não há salvação."
          </blockquote>
          <cite className="block mt-2 text-primary-600 font-medium">- Allan Kardec</cite>
        </div>
      </section>

      {/* Resumo de Atividades (RF04) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Nossas Frentes de Trabalho</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Atuamos em diversas frentes para levar auxílio material e espiritual a quem mais precisa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Distribuição de Alimentos</h3>
              <p className="text-slate-600 mb-4">Entrega de marmitas, cestas básicas e café da manhã para pessoas em situação de rua.</p>
              <Link to="/distribuicao-alimentos" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Apoio Hospitalar</h3>
              <p className="text-slate-600 mb-4">Visitas fraternas, doação de kits de higiene e enxovais para recém-nascidos carentes.</p>
              <Link to="/apoio-hospitalar" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary hover:-translate-y-1 transition duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary-700">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Bazar Beneficente</h3>
              <p className="text-slate-600 mb-4">Venda de roupas e utensílios a preços acessíveis para manter as obras da instituição.</p>
              <Link to="/bazar-beneficiente" className="text-primary-600 font-bold flex items-center hover:text-primary-800">
                Saiba mais <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;