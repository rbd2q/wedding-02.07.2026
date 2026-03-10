import { Container, MaskedImage } from "@/components/ui";

const HERO_IMAGE = "/images/hero.webp";
const HERO_MASK = "/images/mask-hero.svg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <MaskedImage
        src={HERO_IMAGE}
        maskSrc={HERO_MASK}
        alt="Wedding ceremony"
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0" aria-hidden />
      <Container className="relative z-10 text-center text-white py-16">
        <h1 className="font-ibarra text-5xl md:text-section-title mb-2 tracking-[0.02em] uppercase">
          Wedding Day
        </h1>
        <p className="font-cormorant text-2xl md:text-[42px] tracking-wide opacity-0 animate-slide-up-delay-1">
          Ваня и Ангелина
        </p>
        <p className="font-cormorant text-xl md:text-4xl tracking-wide opacity-0 animate-slide-up-delay-2">
          02.07.2026
        </p>
      </Container>
    </section>
  );
}
