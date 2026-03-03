import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Orações | Trabalhadores da Última Hora</title>
  <meta name="description" content="Espaço dedicado a orações." />
</Helmet>

import React from "react";
import { useTranslation } from "react-i18next";
import Enfermo from "../assets/img/Enfermo.jpeg";
import Desafios from "../assets/img/Jesus.jpg";
import Paz from "../assets/img/Paz.jpg";
import Trabalho from "../assets/img/Trabalho.jpg";
import Aflitos from "../assets/img/Aflitos.jpg";
import Fome from "../assets/img/Fome.jpg";



// Dados fixos dos áudios — não dependem de tradução
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

// Novo array para Paz
const audiosPaz = [
  { label: "Português", src: "/audios/Oracao_Paz/Paz_Portugues.aac", duration: "2:26" },
  { label: "Español",   src: "/audios/Oracao_Paz/Paz_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Paz/Paz_English.aac",   duration: "2:09" },
  { label: "Français",  src: "/audios/Oracao_Paz/Paz_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Paz/Paz_Italiano.aac",  duration: "2:43" },
];

// Novo array para Trabalho
const audiosTrabalho = [
  { label: "Português", src: "/audios/Oracao_Trabalho/Trabalho_Portugues.aac", duration: "1:57" },
  { label: "Español",   src: "/audios/Oracao_Trabalho/Trabalho_Spain.aac",     duration: "2:02" },
  { label: "English",   src: "/audios/Oracao_Trabalho/Trabalho_English.aac",   duration: "1:35" },
  { label: "Français",  src: "/audios/Oracao_Trabalho/Trabalho_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Trabalho/Trabalho_Italiano.aac",  duration: "2:02" },
];

const audiosAflitos = [
  { label: "Português", src: "/audios/Oracao_Aflitos/Aflitos_Portugues.aac", duration: "2:26" },
  { label: "Español",   src: "/audios/Oracao_Aflitos/Aflitos_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Aflitos/Aflitos_English.aac",   duration: "2:09" },
  { label: "Français",  src: "/audios/Oracao_Aflitos/Aflitos_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Aflitos/Aflitos_Italiano.aac",  duration: "2:43" },
];


const audiosFome = [
  { label: "Português", src: "/audios/Oracao_Fome/Fome_Portugues.aac", duration: "2:26" },
  { label: "Español",   src: "/audios/Oracao_Fome/Fome_Spain.aac",     duration: "2:27" },
  { label: "English",   src: "/audios/Oracao_Fome/Fome_English.aac",   duration: "2:09" },
  { label: "Français",  src: "/audios/Oracao_Fome/Fome_French.aac",    duration: "2:27" },
  { label: "Italiano",  src: "/audios/Oracao_Fome/Fome_Italiano.aac",  duration: "2:43" },
];
const Oracoes: React.FC = () => {
  const { t } = useTranslation();

  const prayers = [
    {
      title: t("oracoes.enfermo.title"),
      text:  t("oracoes.enfermo.text"),
      image: Enfermo,
      audios: audiosEnfermos,
    },
    {
      title: t("oracoes.desafios.title"),
      text:  t("oracoes.desafios.text"),
      image: Desafios,
      audios: audiosDesafios,
    },
    {
      title: t("oracoes.paz.title"),
      text:  t("oracoes.paz.text"),
      image: Paz,
      audios: audiosPaz,
    },

     {
      title: t("oracoes.trabalho.title"),
      text:  t("oracoes.trabalho.text"),
      image: Trabalho,
      audios: audiosTrabalho,
    },

     {
      title: t("oracoes.aflitos.title"),
      text:  t("oracoes.aflitos.text"),
      image: Aflitos,
      audios: audiosAflitos,
    },


     {
      title: t("oracoes.fome.title"),
      text:  t("oracoes.fome.text"),
      image: Fome,
      audios: audiosFome,
    },
  ];

  return (
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prayer.audios.map((audio, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-sm font-medium mb-1">
                      {audio.label} ({audio.duration})
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
