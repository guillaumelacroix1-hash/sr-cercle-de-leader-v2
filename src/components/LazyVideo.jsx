import React, { useRef, useState, useEffect } from 'react';

export default function LazyVideo({ src, poster, className = '' }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  // Observe viewport entry — start loading video when near
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      {/* Poster image — always visible until video is playing */}
      {poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          style={{ display: ready ? 'none' : 'block' }}
        />
      )}
      {/* Video — hidden until canplay, then fades in over the poster */}
      {inView && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setReady(true)}
          className="absolute inset-0 w-full h-full object-cover z-[2]"
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
