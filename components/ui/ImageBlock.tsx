import Image from 'next/image';

type ImageBlockProps = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
};

export function ImageBlock({
  src,
  alt,
  className = '',
  aspectRatio = '16/10',
}: ImageBlockProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        loading="lazy"
        sizes="100vw"
      />
    </div>
  );
}
