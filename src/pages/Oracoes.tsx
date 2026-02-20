import React from "react";
import enfermo from "../assets/img/Enfermo.jpeg";

interface Prayer {
  title: string;
  text: string;
  audios: {
    lang: string;
    src: string;
    duration: string;
  }[];
  image: string;
}

const prayers: Prayer[] = [
  {
    title: "Oração pelos Enfermos",
    text: `Senhor da Vida,
            Fonte inesgotável de amor e sabedoria,
            em Teu infinito amparo colocamos, neste instante,
            todos aqueles que experimentam as dores do corpo e as aflições da alma.

            Tu, que conheces os mecanismos sutis da existência,
            ensina-nos a compreender que a enfermidade não é castigo,
            mas convite à renovação,
            chamado silencioso à introspecção,
            oportunidade bendita de reavaliar rotas, sentimentos e atitudes.

            Ampara, Pai de misericórdia, os que jazem nos leitos de dor,
            oferecendo-lhes serenidade para atravessar as horas difíceis,
            confiança para sustentar a esperança
            e resignação ativa para transformar o sofrimento em aprendizado.

            Que a Tua luz envolva os enfermos,
            recompondo as forças do corpo,
            harmonizando os campos mentais,
            e pacificando os corações atribulados,
            a fim de que encontrem, mesmo na prova,
            razões para agradecer e prosseguir.

            Inspira os profissionais da saúde,
            para que sejam instrumentos conscientes do Teu amor,
            agindo com competência, ternura e respeito,
            reconhecendo, além da matéria,
            a sacralidade do espírito que sofre e luta.

            Fortalece os familiares e amigos,
            concedendo-lhes equilíbrio emocional, paciência e fé,
            para que possam servir sem desânimo,
            amar sem exigir,
            e sustentar sem se deixar abater.

            Que cada lágrima vertida seja recolhida como prece silenciosa,
            cada dor, convertida em degrau para a elevação moral,
            e cada instante de prova,
            seja transformado em semente de renovação interior.

            Ajuda-nos, Senhor, a compreender
            que a verdadeira cura começa na alma,
            quando aprendemos a perdoar, a confiar, a amar e a esperar,
            substituindo a revolta pela aceitação consciente,
            o medo pela fé,
            e o desalento pela certeza da imortalidade.

            Recebe, pois, esta súplica humilde,
            e derrama sobre todos os enfermos
            o bálsamo da Tua paz,
            a esperança da Tua presença
            e a força renovadora do Teu amor infinito.

            Assim seja!`,
    audios: [
      { lang: "Português", src: "/audios/Oracao_Enfermos/Enfermos_Portugues.aac", duration: "2:00" },
      { lang: "Español", src: "/audios/Oracao_Enfermos/Enfermos_Spain.aac", duration: "2:20" },
      { lang: "English", src: "/audios/Oracao_Enfermos/Enfermos_English.aac", duration: "2:03" },
      { lang: "Français", src: "/audios/Oracao_Enfermos/Enfermos_French.aac", duration: "1:51" },
      { lang: "Italiano", src: "/audios/Oracao_Enfermos/Enfermos_Italy.aac", duration: "2:31" }, // Novo áudio
    ],
    image: enfermo,
  },
  {
    title: "Oração da Unidade",
    text: `Deus Criador, Nós nos reunimos hoje para te louvar e te agradecer. Somos um povo diverso, de diferentes origens e culturas, Mas estamos unidos em nossa fé em ti. Pedimos-te que nos ajudes a viver em paz e harmonia, A respeitar uns aos outros, E a trabalhar juntos para um mundo melhor. Abençoa nossas famílias e amigos, E guia-nos em nossos caminhos. Faz-nos instrumentos da tua paz, E ajuda-nos a construir um mundo onde todos sejam respeitados e amados.`,
    audios: [
      { lang: "Português", src: "../assets/audios/unidade-pt.mp3", duration: "1:28" },
      { lang: "Español", src: "../assets/audios/unidade-es.mp3", duration: "1:27" },
      { lang: "English", src: "../assets/audios/unidade-en.mp3", duration: "1:07" },
      { lang: "Français", src: "../assets/audios/unidade-fr.mp3", duration: "0:59" },
      { lang: "Italiano", src: "../assets/audios/unidade-it.mp3", duration: "1:10" }, // Novo áudio
    ],
    image: enfermo,
  },
];

const Oracoes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Orações</h1>
      <div className="space-y-10">
        {prayers.map((prayer, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center"
          >
            <img
              src={prayer.image}
              alt={prayer.title}
              className="w-80 h-100 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{prayer.title}</h2>
              <p className="text-gray-700 mb-4 text-justify">{prayer.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prayer.audios.map((audio, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">
                      {audio.lang} ({audio.duration})
                    </span>
                    <audio controls src={audio.src} className="w-[60%]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oracoes;
