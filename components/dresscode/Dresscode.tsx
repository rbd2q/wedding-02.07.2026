"use client";

import { useState } from "react";
import {
  Container,
  PaperSection,
  SectionTitle,
  PrimaryButton,
  SectionInfo,
} from "@/components/ui";
import { useInView } from "@/hooks";
import { slideUp, delay } from "@/lib/viewport-animation";
import { DresscodeGallery } from "./DresscodeGallery";

const PALETTE = [
  { name: "Коричневый", color: "#593F3A" },
  { name: "Бежевый", color: "#C8B597" },
  { name: "Оливковый", color: "#859259" },
  { name: "Шалфейный", color: "#B2BA95" },
  { name: "Светло-жёлтый", color: "#FFEC9B" },
] as const;

export function Dresscode() {
  const { ref, isInView } = useInView();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <PaperSection>
      <Container>
        <SectionTitle uppercase className="mb-6">
          Дресс-код
        </SectionTitle>
        <div ref={ref} className="text-center">
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
          <PrimaryButton
            className={slideUp(isInView)}
            style={isInView ? delay(PALETTE.length) : {}}
            onClick={() => setIsGalleryOpen(true)}
          >
            Примеры нарядов
          </PrimaryButton>
        </div>
        <DresscodeGallery
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      </Container>
    </PaperSection>
  );
}
