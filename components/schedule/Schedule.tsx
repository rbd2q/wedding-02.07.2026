"use client";

import { Container, SectionTitle, MaskedImage } from "@/components/ui";
import { useInView } from "@/hooks";

const SCHEDULE_IMAGE = "/images/schedule.webp";
const SCHEDULE_MASK = "/images/mask-schedule.svg";

const EVENTS = [
  { time: "15:30", label: "Фуршет" },
  { time: "16:00", label: "Выездная регистрация" },
  { time: "17:00", label: "Банкет" },
  { time: "23:00", label: "Окончание вечера" },
] as const;

export function Schedule() {
  const { ref, isInView } = useInView<HTMLUListElement>();

  return (
    <section className="relative min-h-[80vh] md:aspect-[1280/1254] md:min-h-0 flex justify-center py-20 md:py-[100px] overflow-hidden">
      <MaskedImage
        src={SCHEDULE_IMAGE}
        maskSrc={SCHEDULE_MASK}
        alt="Wedding day"
        className="absolute inset-0"
        objectFit="cover"
        objectPosition="50% 65%"
      />
      <div className="absolute inset-0" aria-hidden />
      <Container className="relative z-10 text-center mt-[5%]">
        <SectionTitle asOverlay uppercase className="mb-8">
          Программа дня
        </SectionTitle>
        <ul ref={ref} className="space-y-4 text-white">
          {EVENTS.map(({ time, label }, index) => {
            const directionClass =
              index % 2 ? "animate-slide-in-right" : "animate-slide-in-left";

            return (
              <li
                key={time}
                className={`flex flex-col sm:items-center sm:justify-center gap-2 md:gap-4 opacity-0 ${
                  isInView ? directionClass : ""
                }`}
                style={
                  isInView ? { animationDelay: `${index * 400}ms` } : undefined
                }
              >
                <span className="font-cormorant font-semibold text-3xl md:text-section-title leading-none">
                  {time}
                </span>
                <span className="font-comme font-light text-lg md:text-section-info leading-none">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
