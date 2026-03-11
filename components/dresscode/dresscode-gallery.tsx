"use client";

import Image from "next/image";
import { type TouchEvent, useCallback, useEffect, useState } from "react";

export type DresscodeImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const DRESSCODE_IMAGES: readonly DresscodeImage[] = [
  { src: "/images/dresscode/woman-1.webp", alt: "Пример наряда для женщин 1" },
  { src: "/images/dresscode/woman-2.webp", alt: "Пример наряда для женщин 2" },
  { src: "/images/dresscode/woman-3.webp", alt: "Пример наряда для женщин 3" },
  { src: "/images/dresscode/man-1.webp", alt: "Пример наряда для мужчин 1" },
  { src: "/images/dresscode/man-2.webp", alt: "Пример наряда для мужчин 2" },
  { src: "/images/dresscode/man-3.webp", alt: "Пример наряда для мужчин 3" },
  { src: "/images/dresscode/man-4.webp", alt: "Пример наряда для мужчин 4" },
  { src: "/images/dresscode/man-5.webp", alt: "Пример наряда для мужчин 5" },
  { src: "/images/dresscode/woman-4.webp", alt: "Пример наряда для женщин 4" },
  { src: "/images/dresscode/woman-5.webp", alt: "Пример наряда для женщин 5" },
  { src: "/images/dresscode/man-6.webp", alt: "Пример наряда для мужчин 6" },
  { src: "/images/dresscode/man-7.webp", alt: "Пример наряда для мужчин 7" },
  { src: "/images/dresscode/woman-6.webp", alt: "Пример наряда для женщин 6" },
  { src: "/images/dresscode/woman-7.webp", alt: "Пример наряда для женщин 7" },
  { src: "/images/dresscode/woman-8.webp", alt: "Пример наряда для женщин 8" },
  { src: "/images/dresscode/man-8.webp", alt: "Пример наряда для мужчин 8" },
  { src: "/images/dresscode/man-9.webp", alt: "Пример наряда для мужчин 9" },
  { src: "/images/dresscode/woman-9.webp", alt: "Пример наряда для женщин 9" },
  {
    src: "/images/dresscode/woman-10.webp",
    alt: "Пример наряда для женщин 10",
  },
  { src: "/images/dresscode/man-10.webp", alt: "Пример наряда для мужчин 10" },
] as const;

interface DresscodeGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const DresscodeGallery = ({
  isOpen,
  onClose,
  initialIndex = 0,
}: DresscodeGalleryProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    setIndex((current) =>
      current === 0 ? DRESSCODE_IMAGES.length - 1 : current - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setIndex((current) =>
      current === DRESSCODE_IMAGES.length - 1 ? 0 : current + 1,
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(initialIndex);
    setIsLoading(true);
  }, [isOpen, initialIndex]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (diff > threshold) handleNext();
    if (diff < -threshold) handlePrev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!isOpen || DRESSCODE_IMAGES.length === 0) return null;

  const current = DRESSCODE_IMAGES[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm md:backdrop-blur">
      <div className="absolute inset-0" aria-hidden onClick={onClose} />

      <button
        type="button"
        aria-label="Закрыть"
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-brown shadow-lg ring-1 ring-white/60 transition hover:bg-white"
        onClick={onClose}
      >
        ×
      </button>

      <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
        {index + 1} / {DRESSCODE_IMAGES.length}
      </div>

      <button
        type="button"
        aria-label="Предыдущее фото"
        className="absolute left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-brown shadow-lg ring-1 ring-white/70 transition hover:-translate-y-1/2 hover:-translate-x-0.5 hover:bg-white"
        onClick={handlePrev}
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Следующее фото"
        className="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-brown shadow-lg ring-1 ring-white/70 transition hover:-translate-y-1/2 hover:translate-x-0.5 hover:bg-white"
        onClick={handleNext}
      >
        ›
      </button>

      <div
        className="relative h-[70vh] w-[min(90vw,700px)] max-w-[calc(100vw-8rem)] overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={index}
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, 700px"
          priority={false}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            aria-hidden
          >
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </div>
        )}
      </div>
    </div>
  );
};
