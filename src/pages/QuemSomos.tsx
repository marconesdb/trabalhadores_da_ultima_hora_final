import React from 'react';
import imgFundadora from "../assets/img/img-ml.png";

const QuemSomos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-300 text-white py-16 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl italic">Trabalhadores da Última Hora</p>
        </div>
      </div>

      {/* Missão */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Nossa Missão</h2>
          <p className="text-lg text-gray-700 italic text-center mb-6">
            "Na Jornada Final, Trabalhadores da Luz: Semeando Amor e Esperança, Seguindo os Passos de Jesus."
          </p>
        </div>

        {/* História */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Nossa História</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Em Montes Claros, MG, onde as luzes da esperança brilhavam em cada esquina, um grupo extraordinário chamado "Trabalhadores da Última Hora" dedicava suas horas à nobre missão de servir amor e alimento aos mais necessitados.
            </p>
            <p>
              Em noites frias de inverno ou calorosas no verão, eles decidiram levar conforto não apenas aos estômagos vazios, mas também aos corações aflitos. Equipados com cestas repletas de lanches nutritivos e refeições caseiras, os voluntários partiram pelas ruas da cidade em uma humilde Combi.
            </p>
            <p>
              Ao longo do caminho, encontraram moradores de rua que, apesar das adversidades, mantinham sorrisos de gratidão. Os Trabalhadores da Última Hora ofereceram-lhes alimentos quentes, cobertores e, o mais importante, uma conexão humana que transcendeu as barreiras da indiferença.
            </p>
            <p>
              O grupo estendeu sua generosidade até os hospitais, onde pessoas aguardavam ansiosas por atendimento médico. Em salas de espera movimentadas, os voluntários distribuíram refeições reconfortantes, proporcionando um alívio momentâneo para aqueles que enfrentavam tempos difíceis.
            </p>
            <p>
              Entre os voluntários, havia colaboradores com formação profissional das mais diversas áreas, unidos por um propósito comum: ser a luz na escuridão da necessidade. Suas histórias tocantes, orações e palavras encorajadoras acalentavam os corações dos que aguardavam por um alimento.
            </p>
            <p>
              Nessas noites memoráveis, sempre encontraram senhoras e homens sozinhos e desamparados. Além de alimentá-los, os Trabalhadores da Última Hora ofereceram-lhes companhia e escutaram suas histórias. A troca de experiências trouxe conforto tanto para os voluntários quanto para os assistidos, provando que o ato de servir vai além da simples alimentação.
            </p>
            <p className="font-semibold text-blue-900">
              Ao final da noite, os Trabalhadores da Última Hora não apenas alimentaram corpos famintos, mas também alimentaram almas sedentas de compaixão. Seu comprometimento era um testemunho vivo de que, mesmo nas últimas horas do dia, é possível iluminar vidas e espalhar esperança, um lanche de amor servido com um toque de humanidade.
            </p>
          </div>
        </div>

        {/* Biografia da Fundadora */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Fundadora</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <div className="flex-shrink-0">
              <img 
                src={imgFundadora}
                alt="Maria Luísa Lourenço" 
                className="w-100 h-48 object-cover shadow-lg border-4 border-blue-200"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Maria Luísa Lourenço</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Maria Luísa Lourenço é uma dedicada trabalhadora espírita, atuando como médium há muitos anos. Seu comprometimento com a mediunidade a conduziu à criação do inspirador projeto "Trabalhadores da Última Hora".
                </p>
                <p>
                  Seu objetivo é servir a Jesus ao acolher aqueles irmãos que se encontram em situações de extrema necessidade, como moradores de rua, pacientes hospitalizados e famílias em condições precárias. Não se limitando a oferecer apenas auxílio material, Maria Luísa proporciona esclarecimento e consolo moral, lançando uma luz de esperança sobre aqueles que se encontram vulneráveis e em desespero.
                </p>
                <p>
                  No âmbito do Centro Espírita Solar de Jesus, ela desempenha um papel fundamental ao amparar e coordenar diversas tarefas espirituais, tais como passes, palestras e atendimento fraterno. Seu compromisso não se restringe apenas à provisão de recursos materiais, mas estende-se ao cuidado espiritual e emocional, proporcionando uma abordagem holística e compassiva.
                </p>
                <p className="font-semibold text-blue-900">
                  Maria Luísa Lourenço destaca-se como uma verdadeira guia espiritual, oferecendo luz e conforto àqueles que mais necessitam, construindo um legado de compaixão e serviço à comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-primary-900 text-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h3 className="text-xl font-bold mb-2 text-white">Amor</h3>
              <p>Servir com amor incondicional</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-xl font-bold mb-2 text-white">Compaixão</h3>
              <p>Acolher sem julgamentos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold mb-2 text-white">Esperança</h3>
              <p>Iluminar vidas com esperança</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;