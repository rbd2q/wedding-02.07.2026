import {
  Container,
  SectionTitle,
  PrimaryButton,
  PaperSection,
  MaskedImage,
} from "@/components/ui";

const LOCATION_IMAGE = "/images/location.webp";
const LOCATION_MASK = "/images/mask-location.svg";

const MAP_URL =
  "https://yandex.com/maps/org/ganka/1017457615/?ll=27.083702%2C54.048326&z=17";

export function Location() {
  return (
    <>
      <div className="relative w-full" style={{ aspectRatio: "1280/461" }}>
        <MaskedImage
          src={LOCATION_IMAGE}
          maskSrc={LOCATION_MASK}
          alt="Wedding venue"
          className="absolute inset-0"
        />
      </div>
      <PaperSection>
        <Container className="text-center">
          <SectionTitle uppercase className="mb-8">
            Адрес сбора гостей
          </SectionTitle>
          <address className="not-italic font-comme font-light text-lg sm:text-[22px] leading-relaxed mb-8">
            <span className="font-semibold">Усадьба «Ганка»</span>
            <br />
            Минская область, Воложинский район, Раковский сельсовет,
            <br />
            деревня Эпимахи, 20
          </address>
          <PrimaryButton href={MAP_URL}>Открыть карту</PrimaryButton>
        </Container>
      </PaperSection>
    </>
  );
}
