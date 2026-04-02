import React, { useState } from 'react';

export default function YouTubeFacade({ videoId, title = "Vidéo" }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="w-full aspect-video border-none block"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative w-full aspect-video block cursor-pointer group bg-brand-dark overflow-hidden"
      aria-label={`Lire : ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-orange/90 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-[0_0_40px_rgba(244,150,25,0.4)]">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
