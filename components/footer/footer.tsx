import { Heart } from "lucide-react";
import {
  Container,
  MaskedImage,
  SectionTitle,
  SectionInfo,
} from "@/components/ui";

import footerImage from "@/public/images/footer.webp";
const FOOTER_MASK = "/images/mask-footer.svg";

export const Footer = () => (
  <section className="relative min-h-[680px] md:min-h-0 md:aspect-[1280/997] flex items-center justify-center py-20 md:py-[100px] overflow-hidden">
    <MaskedImage
      src={footerImage}
      maskSrc={FOOTER_MASK}
      alt="Couple"
      className="absolute inset-0"
      objectPosition="50% 20%"
    />
    <div className="absolute inset-0" aria-hidden />
    <Container className="relative z-10 text-center text-white">
      <SectionTitle uppercase asOverlay className="mb-7">
        Ждём вас!
      </SectionTitle>
      <SectionInfo className="mb-7">
        С любовью, ваши жених и невеста
      </SectionInfo>
      <Heart
        className="mx-auto w-8 h-8 fill-red-500 text-red-500"
        aria-hidden
      />
    </Container>
  </section>
);
