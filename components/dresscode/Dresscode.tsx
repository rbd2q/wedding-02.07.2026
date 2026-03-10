"use client";

import {
  Container,
  PaperSection,
  SectionTitle,
  PrimaryButton,
  SectionInfo,
} from "@/components/ui";
import { useInView } from "@/hooks";
import { slideUp, delay } from "@/lib/viewport-animation";

const PALETTE = [
  { name: "Коричневый", color: "#593F3A" },
  { name: "Бежевый", color: "#C8B597" },
  { name: "Оливковый", color: "#859259" },
  { name: "Шалфейный", color: "#B2BA95" },
  { name: "Светло-жёлтый", color: "#FFEC9B" },
] as const;

export function Dresscode() {
  const { ref, isInView } = useInView();

  return (
    <PaperSection>
      <Container>
        <SectionTitle uppercase className="mb-6">
          Дресс-код
        </SectionTitle>
        <div ref={ref}>
          <SectionInfo className={`max-w-xl mx-auto mb-8 ${slideUp(isInView)}`}>
            Так как свадьба будет проходить за городом, будем рады увидеть вас в
            расслабленных костюмах или летящих платьях. Будет особенно приятно,
            если вы поддержите цветовую гамму нашего торжества:
          </SectionInfo>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {PALETTE.map(({ name, color }, index) => (
              <div
                key={name}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brown/20 shadow-md ${slideUp(isInView)}`}
                style={{
                  backgroundColor: color,
                  ...(isInView && delay(index)),
                }}
                title={name}
                aria-hidden
              />
            ))}
          </div>
          <div
            className={`text-center ${slideUp(isInView)}`}
            style={isInView ? delay(PALETTE.length) : {}}
          >
            <PrimaryButton>Примеры нарядов</PrimaryButton>
          </div>
        </div>
      </Container>
    </PaperSection>
  );
}
