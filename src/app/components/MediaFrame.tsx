import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  enableLightbox?: boolean;
};

const isVideoAsset = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export function MediaFrame({
  src,
  alt,
  className,
  controls = false,
  autoPlay = true,
  enableLightbox = false,
}: MediaFrameProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const openLightbox = () => {
    if (enableLightbox) {
      setIsOpen(true);
    }
  };

  const closeLightbox = () => setIsOpen(false);

  if (isVideoAsset(src)) {
    if (!enableLightbox) {
      return (
        <video
          src={src}
          className={className}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          controls={controls}
        />
      );
    }

    return (
      <>
        <button
          type="button"
          className="block w-full h-full"
          onClick={openLightbox}
          aria-label={`Open ${alt}`}
        >
          <video
            src={src}
            className={className}
            autoPlay={autoPlay}
            muted
            loop
            playsInline
            controls={controls}
          />
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
              onClick={closeLightbox}
            >
              Close
            </button>
            <video
              src={src}
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain shadow-2xl"
              controls
              autoPlay
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  if (!enableLightbox) {
    return <ImageWithFallback src={src} alt={alt} className={className} />;
  }

  return (
    <>
      <button
        type="button"
        className="block w-full h-full"
        onClick={openLightbox}
        aria-label={`Open ${alt}`}
      >
        <ImageWithFallback src={src} alt={alt} className={className} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
            onClick={closeLightbox}
          >
            Close
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}