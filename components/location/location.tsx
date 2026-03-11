"use client";

import {
  Container,
  SectionTitle,
  PrimaryButton,
  PaperSection,
  MaskedImage,
} from "@/components/ui";
import { useInView } from "@/hooks";
import { slideUp, delay } from "@/lib/viewport-animation";

const LOCATION_IMAGE = "/images/location.webp";
const LOCATION_MASK = "/images/mask-location.svg";

const MAP_URL =
  "https://yandex.com/maps/org/ganka/1017457615/?ll=27.083702%2C54.048326&z=17";

export const Location = () => {
  const { ref, isInView } = useInView();

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
          <address
            ref={ref}
            className="not-italic font-comme font-light text-lg sm:text-[22px] leading-relaxed mb-8"
          >
            <span
              className={`font-semibold ${slideUp(isInView)}`}
              style={isInView ? delay(0) : undefined}
            >
              Усадьба «Ганка»
            </span>
            <br />
            <span
              className={`inline-block ${slideUp(isInView)}`}
              style={isInView ? delay(1) : undefined}
            >
              Минская область, Воложинский район, Раковский сельсовет,
              <br />
              деревня Эпимахи, 20
            </span>
          </address>
          <div
            className={slideUp(isInView)}
            style={isInView ? delay(2) : undefined}
          >
            <PrimaryButton href={MAP_URL}>
              Открыть карту
            </PrimaryButton>
          </div>
        </Container>
      </PaperSection>
    </>
  );
};
