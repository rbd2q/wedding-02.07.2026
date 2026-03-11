import Image from "next/image";

type MaskedImageProps = {
  src: string;
  maskSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
};

const OBJECT_FIT_CLASS: Record<NonNullable<MaskedImageProps["objectFit"]>, string> = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  none: "object-none",
  "scale-down": "object-scale-down",
};

const maskStyle = (maskSrc: string) => ({
  maskImage: `url(${maskSrc})`,
  maskSize: "cover",
  maskPosition: "center" as const,
  maskRepeat: "no-repeat" as const,
  WebkitMaskImage: `url(${maskSrc})`,
  WebkitMaskSize: "cover",
  WebkitMaskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
});

export const MaskedImage = ({
  src,
  maskSrc,
  alt,
  className = "",
  aspectRatio,
  objectFit = "cover",
  objectPosition = "center",
  priority = false,
}: MaskedImageProps) => {
  const objectClassName = OBJECT_FIT_CLASS[objectFit];

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        ...maskStyle(maskSrc),
        ...(aspectRatio && { aspectRatio }),
      }}
    >
      <div className="relative size-full">
        <Image
          src={src}
          alt={alt}
          fill
          className={objectClassName}
          style={{ objectPosition }}
          loading={priority ? undefined : "lazy"}
          priority={priority}
          sizes="100vw"
        />
      </div>
    </div>
  );
};
