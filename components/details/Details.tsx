import {
  Container,
  MaskedImage,
  SectionTitle,
  SectionInfo,
} from "@/components/ui";

const DETAILS_IMAGE = "/images/details.webp";
const DETAILS_MASK = "/images/mask-details.svg";

export function Details() {
  return (
    <section className="relative min-h-[90vh] md:min-h-0 md:aspect-[1280/1066] flex justify-center py-20 md:py-[100px] overflow-hidden text-white">
      <MaskedImage
        src={DETAILS_IMAGE}
        maskSrc={DETAILS_MASK}
        alt="Wedding rings"
        className="absolute inset-0"
      />
      <div className="absolute inset-0" aria-hidden />
      <Container className="relative z-10 text-center mt-[5%]">
        <SectionTitle asOverlay uppercase className="mb-6">
          Детали
        </SectionTitle>
        <SectionInfo className="text-center leading-none max-w-5xl mx-auto">
          Просим обратить внимание, что днём до усадьбы будет организован
          трансфер от ст. м. «Каменная Горка» и вечером обратно в город.
          Сообщите, пожалуйста, будет ли он вам нужен, т.к. на площадке не
          предусмотрены спальные места.
        </SectionInfo>
      </Container>
    </section>
  );
}
