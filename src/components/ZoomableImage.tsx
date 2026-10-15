import { useEffect, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ZoomableImage({
  src,
  alt,
  className = "",
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Imagem na página */}
      <img
        src={src}
        alt={alt}
        onClick={() => setIsOpen(true)}
        className={`${className} cursor-zoom-in hover:opacity-90 transition-opacity`}
        title="Clique para ampliar"
      />

      {/* Imagem ampliada */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${alt}`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-white text-3xl font-bold z-10"
            aria-label="Fechar imagem"
          >
            ×
          </button>

          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}