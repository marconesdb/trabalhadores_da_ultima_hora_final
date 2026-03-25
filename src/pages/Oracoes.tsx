import { Helmet } from 'react-helmet-async';
import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Enfermo from "../assets/img/Enfermo.jpeg";
import Desafios from "../assets/img/Jesus.jpg";
import Paz from "../assets/img/Paz.jpg";
import Trabalho from "../assets/img/Trabalho.jpg";
import Aflitos from "../assets/img/Aflitos.jpg";
import Fome from "../assets/img/Fome.jpg";
import PaiNosso from "../assets/img/PaiNosso.jpg";
import Miseria from "../assets/img/Miseria.jpg";
import BoaVontade from "../assets/img/BoaVontade.jpg";
import Caridade from "../assets/img/Caridade.jpg";


// Mapa idioma i18n → índice do array de áudios
const LANG_INDEX: Record<string, number> = {
  pt: 0,
  es: 1,
  en: 2,
  fr: 3,
  it: 4,
};

// Cada array mantém a mesma ordem: pt, es, en, fr, it
const audiosEnfermos = [
  { label: "Português", src: "/audios/Oracao_Enfermos/Enfermos_Portugues.aac", duration: "2:00" },
  { label: "Español",   src: "/audios/Oracao_Enfermos/Enfermos_Spain.aac",     duration: "2:20" },
  { label: "English",   src: "/audios/Oracao_Enfermos/Enfermos_English.aac",   duration: "2:03" },
  { label: "Français",  src: "/audios/Oracao_Enfermos/Enfermos_French.aac",    duration: "1:51" },
  { label: "Italiano",  src: "/audios/Oracao_Enfermos/Enfermos_Italy.aac",     duration: "2:31" },
];

const audiosDesafios = [
  { label: "Português", src: "/audios/Oracao_Desafios_Dor_Evolucao/Desafios_Portugues.aac", duration: "2:36" },
  { label: "Español",   src: "/audios/Oracao_Desafios_Dor_Evolucao/Desafios_Spain.aac",     duration: "2:33" },
  { label: "English",   src: "/audios/Oracao_Desafios_Dor_Evolucao/Desafios_English.aac",   duration: "2:19" },
  { label: "Français",  src: "/audios/Oracao_Desafios_Dor_Evolucao/Desafios_Frances.aac",   duration: "2:30" },
  { label: "Italiano",  src: "/audios/Oracao_Desafios_Dor_Evolucao/Desafios_Italiano.aac",  duration: "2:47" },
];

const audiosPaz = [
  { label: "Português", src: "/audios/Oracao_Paz/Paz_Portugues.aac", duration: "2:26" },
  { label: "Español",   src: "/audios/Oracao_Paz/Paz_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Paz/Paz_English.aac",   duration: "2:09" },
  { label: "Français",  src: "/audios/Oracao_Paz/Paz_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Paz/Paz_Italiano.aac",  duration: "2:43" },
];

const audiosTrabalho = [
  { label: "Português", src: "/audios/Oracao_Trabalho/Trabalho_Portugues.aac", duration: "1:57" },
  { label: "Español",   src: "/audios/Oracao_Trabalho/Trabalho_Spain.aac",     duration: "2:02" },
  { label: "English",   src: "/audios/Oracao_Trabalho/Trabalho_English.aac",   duration: "1:35" },
  { label: "Français",  src: "/audios/Oracao_Trabalho/Trabalho_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Trabalho/Trabalho_Italiano.aac",  duration: "2:02" },
];

const audiosAflitos = [
  { label: "Português", src: "/audios/Oracao_Aflitos/Aflitos_Portugues.aac", duration: "2:17" },
  { label: "Español",   src: "/audios/Oracao_Aflitos/Aflitos_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Aflitos/Aflitos_English.aac",   duration: "1:38" },
  { label: "Français",  src: "/audios/Oracao_Aflitos/Aflitos_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Aflitos/Aflitos_Italiano.aac",  duration: "2:43" },
];

const audiosFome = [
  { label: "Português", src: "/audios/Oracao_Fome/Fome_Portugues.aac", duration: "1:42" },
  { label: "Español",   src: "/audios/Oracao_Fome/Fome_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Fome/Fome_English.aac",   duration: "2:09" },
  { label: "Français",  src: "/audios/Oracao_Fome/Fome_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Fome/Fome_Italiano.aac",  duration: "2:43" },
];


const audiosPaiNosso = [
  { label: "Português", src: "/audios/Oracao_PaiNosso/PaiNosso_Portugues.aac", duration: "1:59" },
  { label: "Español",   src: "/audios/Oracao_PaiNosso/PaiNosso_Spain.aac",     duration: "2:00" },
  { label: "English",   src: "/audios/Oracao_PaiNosso/PaiNosso_English.aac",   duration: "1:36" },
  { label: "Français",  src: "/audios/Oracao_PaiNosso/PaiNosso_French.aac",    duration: "2:04" },
  { label: "Italiano",  src: "/audios/Oracao_PaiNosso/PaiNosso_Italiano.aac",  duration: "2:43" },
];


const audiosMiseria = [
  { label: "Português", src: "/audios/Oracao_Miseria/Miseria_Portugues.aac", duration: "1:59" },
  { label: "Español",   src: "/audios/Oracao_Miseria/Miseria_Spain.aac",     duration: "2:00" },
  { label: "English",   src: "/audios/Oracao_Miseria/Miseria_English.aac",   duration: "1:36" },
  { label: "Français",  src: "/audios/Oracao_Miseria/Miseria_French.aac",    duration: "2:04" },
  { label: "Italiano",  src: "/audios/Oracao_Miseria/Miseria_Italiano.aac",  duration: "2:43" },
];


const audiosBoaVontade = [
  { label: "Português", src: "/audios/Oracao_BoaVontade/BoaVontade_Portugues.aac", duration: "2:58" },
  { label: "Español",   src: "/audios/Oracao_BoaVontade/BoaVontade_Spain.aac",     duration: "2:42" },
  { label: "English",   src: "/audios/Oracao_BoaVontade/BoaVontade_English.aac",   duration: "2:21" },
  { label: "Français",  src: "/audios/Oracao_BoaVontade/BoaVontade_French.aac",    duration: "2:59" },
  { label: "Italiano",  src: "/audios/Oracao_BoaVontade/BoaVontade_Italiano.aac",  duration: "3:21" },
];



const audiosCaridade = [
  { label: "Português", src: "/audios/Oracao_Caridade/Caridade_Portugues.aac", duration: "1:59" },
  { label: "Español",   src: "/audios/Oracao_Caridade/Caridade_Spain.aac",     duration: "2:00" },
  { label: "English",   src: "/audios/Oracao_Caridade/Caridade_English.aac",   duration: "1:36" },
  { label: "Français",  src: "/audios/Oracao_Caridade/Caridade_French.aac",    duration: "2:04" },
  { label: "Italiano",  src: "/audios/Oracao_Caridade/Caridade_Italiano.aac",  duration: "2:43" },
];
// ─── Componente de player único por oração ───────────────────────────────────
interface SingleAudioPlayerProps {
  audios: { label: string; src: string; duration: string }[];
  langIndex: number;
}

const SingleAudioPlayer: React.FC<SingleAudioPlayerProps> = ({ audios, langIndex }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = audios[langIndex];

  // Sempre que o idioma mudar, recarrega o player (sem dar play automático)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // força o browser a carregar o novo src
    }
  }, [audio.src]);

  return (
    <div className="flex flex-col items-center mt-4">
      <span className="text-sm font-medium mb-1">
        {audio.label} ({audio.duration})
      </span>
      <audio ref={audioRef} controls src={audio.src} className="w-full max-w-sm" />
    </div>
  );
};

// ─── Componente principal ─────────────────────────────────────────────────────
const Oracoes: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Pega os 2 primeiros caracteres do idioma ativo (ex.: "pt-BR" → "pt")
  const currentLang = i18n.language.slice(0, 2);
  const langIndex = LANG_INDEX[currentLang] ?? 0; // fallback: Português

  const prayers = [
    { title: t("oracoes.enfermo.title"),  text: t("oracoes.enfermo.text"),  image: Enfermo,  audios: audiosEnfermos    },
    { title: t("oracoes.desafios.title"), text: t("oracoes.desafios.text"), image: Desafios, audios: audiosDesafios    },
    { title: t("oracoes.paz.title"),      text: t("oracoes.paz.text"),      image: Paz,      audios: audiosPaz         },
    { title: t("oracoes.trabalho.title"), text: t("oracoes.trabalho.text"), image: Trabalho, audios: audiosTrabalho    },
    { title: t("oracoes.aflitos.title"),  text: t("oracoes.aflitos.text"),  image: Aflitos,  audios: audiosAflitos     },
    { title: t("oracoes.fome.title"),     text: t("oracoes.fome.text"),     image: Fome,     audios: audiosFome        },
    { title: t("oracoes.painosso.title"), text: t("oracoes.painosso.text"), image: PaiNosso, audios: audiosPaiNosso    },
    { title: t("oracoes.miseria.title"),  text: t("oracoes.miseria.text"),  image: Miseria,  audios: audiosMiseria     },
    { title: t("oracoes.boavontade.title"), text: t("oracoes.boavontade.text"), image: BoaVontade, audios: audiosBoaVontade },
    { title: t("oracoes.caridade.title"), text: t("oracoes.caridade.text"), image: Caridade, audios: audiosCaridade },
  ];

  return (
    <>z
      <Helmet>
        <title>Orações | Trabalhadores da Última Hora</title>
        <meta name="description" content="Espaço dedicado a orações." />
      </Helmet>

      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("oracoes.titulo")}
        </h1>

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
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold mb-2">{prayer.title}</h2>
                <p className="text-gray-700 mb-4 text-justify">{prayer.text}</p>

                {/* ← Um único player, troca de src conforme o idioma ativo */}
                <SingleAudioPlayer audios={prayer.audios} langIndex={langIndex} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Oracoes;