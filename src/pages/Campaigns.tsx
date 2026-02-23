import { Helmet } from 'react-helmet-async';

// dentro do componente:
<Helmet>
  <title>Campanhas | Trabalhadores da Última Hora</title>
  <meta name="description" content="Espaço dedicado a mostrar as campanhas" />
</Helmet>

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, X, Heart, MessageCircle, Share2, ExternalLink, Pause, Volume2, VolumeX } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  type: 'instagram' | 'mp4' | 'image';
  likes: string;
  comments: string;
  videoUrl?: string;
  imageUrl?: string;
  instagramUrl?: string;
  embedUrl?: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "UPA Chiquinho Guimarães",
    thumbnail: "/assets/img/UPA.jpg",
    type: "mp4",
    videoUrl: "/assets/video/UPA.mp4",
    likes: "1.2K",
    comments: "89"
  },
  {
    id: 2,
    title: "Assistidos",
    thumbnail: "/assets/img/Morador.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Upa_Chiquinho.mp4",
    likes: "92",
    comments: "54"
  },
  {
    id: 3,
    title: "Black Solidária",
    thumbnail: "/assets/img/BlackSolidaria.jpg",
    type: "mp4",
    videoUrl: "/assets/video/BlackSolidaria.mp4",
    likes: "1k",
    comments: "54"
  },
  {
    id: 4,
    title: "Fazendo o Cachorro-quente",
    thumbnail: "/assets/img/Cozinha.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Cozinha.mp4",
    likes: "70",
    comments: "143"
  },
  {
    id: 5,
    title: "Distribuição de Sopa",
    thumbnail: "/assets/img/Sopa.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Sopa.mp4",
    likes: "5",
    comments: "201"
  },
  {
    id: 6,
    title: "Distribuição de Suco",
    thumbnail: "/assets/img/Suco.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Suco.mp4",
    likes: "8",
    comments: "312"
  },
  {
    id: 7,
    title: "Momento de Oração",
    thumbnail: "/assets/img/Oração.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Oração.mp4",
    likes: "18",
    comments: "95"
  },
  {
    id: 8,
    title: "Terceiro Setor em Destaque",
    thumbnail: "/assets/img/destaque.jpg",
    type: "image",
    videoUrl: "/assets/video/destaque.mp4",
    likes: "18",
    comments: "95"
  },
  {
    id: 9,
    title: "Trabalhadoras em Destaque",
    thumbnail: "/assets/img/Trabalhadora.jpg",
    type: "mp4",
    videoUrl: "/assets/video/Trabalhadora.mp4",
    likes: "18",
    comments: "95"
  }
];

const VideoGallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent px-4">
            {t('galeria.header.title')}
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            {t('galeria.header.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white bg-opacity-90 group-hover:bg-opacity-100 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-pink-500 ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className={`absolute top-3 right-3 md:top-4 md:right-4 ${
                  video.type === 'instagram' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                    : video.type === 'image' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                } text-white px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {video.type === 'instagram' ? 'Instagram' : video.type === 'image' ? t('galeria.badge.photo') : t('galeria.badge.video')}
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="font-bold text-base md:text-lg text-slate-800 mb-2 md:mb-3 line-clamp-2">
                  {video.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs md:text-sm text-slate-500">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {video.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {video.comments}
                    </span>
                  </div>
                  {video.type === 'instagram' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(video.instagramUrl, '_blank');
                      }}
                      className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-semibold"
                    >
                      {t('galeria.viewOnIG')}
                      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </div>

      <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          {t('galeria.cta.title')}
        </h2>
        <p className="text-base md:text-lg mb-5 md:mb-6 text-white text-opacity-90">
          {t('galeria.cta.subtitle')}
        </p>
        <a
          href="https://www.instagram.com/trabalhadores.daultimahora/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-3 bg-white text-purple-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="hidden sm:inline">@trabalhadores.daultimahora</span>
          <span className="sm:hidden">@trabalhadores...</span>
          <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </div>
  );
};

const VideoModal = ({ video, onClose }: { video: Video; onClose: () => void }) => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Botão Close - FORA do container do modal */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[100] w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all shadow-2xl border-4 border-white"
      >
        <X className="w-8 h-8 text-white" strokeWidth={3} />
      </button>

      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >

        {video.type === 'image' ? (
          <div className="relative w-full aspect-square bg-black">
            <img
              src={video.imageUrl || video.thumbnail}
              alt={video.title}
              className="w-full h-full object-contain"
            />
          </div>
        ) : video.type === 'mp4' ? (
          <div className="relative w-full aspect-square bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={(e) => {
                console.error('Erro ao carregar vídeo:', video.videoUrl);
                const target = e.currentTarget as HTMLVideoElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full p-4 sm:p-8 text-center bg-slate-900">
                      <div class="w-16 h-16 sm:w-24 sm:h-24 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                        <svg class="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                      </div>
                      <h3 class="text-lg sm:text-xl font-bold text-white mb-2">${t('galeria.modal.error.title')}</h3>
                      <p class="text-xs sm:text-sm text-slate-300 mb-2 break-all px-2">${t('galeria.modal.error.path')}: ${video.videoUrl}</p>
                      <p class="text-slate-400 text-xs sm:text-sm mb-4">${t('galeria.modal.error.message')}</p>
                    </div>
                  `;
                }
              }}
            >
              <source src={video.videoUrl} type="video/mp4" />
              {t('galeria.modal.browserNotSupported')}
            </video>

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
              <button
                onClick={togglePlay}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 flex items-center justify-center shadow-lg transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 ml-1" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 flex items-center justify-center shadow-lg transition-all"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
                ) : (
                  <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />
                )}
              </button>
            </div>

            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 ml-1" fill="currentColor" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full aspect-square bg-slate-100 flex items-center justify-center">
            <iframe
              src={video.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
              title="Instagram Video"
            />
          </div>
        )}

        <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-pink-50">
          <h3 className="font-bold text-lg sm:text-2xl text-slate-800 mb-2 sm:mb-3">
            {video.title}
          </h3>
          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
            <div className="flex items-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                <span className="hidden xs:inline">{video.likes} {t('galeria.modal.likes')}</span>
                <span className="xs:hidden">{video.likes}</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="hidden xs:inline">{video.comments} {t('galeria.modal.comments')}</span>
                <span className="xs:hidden">{video.comments}</span>
              </span>
            </div>
            {video.type === 'instagram' && (
              <a
                href={video.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all whitespace-nowrap"
              >
                <span className="hidden xs:inline">{t('galeria.modal.viewOnInstagram')}</span>
                <span className="xs:hidden">Instagram</span>
                <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;