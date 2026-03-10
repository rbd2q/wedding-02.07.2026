import {
  Container,
  PaperSection,
  SectionTitle,
  PrimaryButton,
  SectionInfo,
} from "@/components/ui";

const PALETTE = [
  { name: "Коричневый", color: "#3d2c29" },
  { name: "Бежевый", color: "#e8dcc8" },
  { name: "Оливковый", color: "#6b7c4a" },
  { name: "Шалфейный", color: "#9caa7e" },
  { name: "Светло-жёлтый", color: "#f5e6b3" },
] as const;

export function Dresscode() {
  return (
    <PaperSection>
      <Container>
        <SectionTitle uppercase className="mb-6">
          Дресс-код
        </SectionTitle>
        <SectionInfo className="max-w-xl mx-auto mb-8">
          Так как свадьба будет проходить за городом, будем рады увидеть вас в
          расслабленных костюмах или летящих платьях. Будет особенно приятно,
          если вы поддержите цветовую гамму нашего торжества:
        </SectionInfo>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
          {PALETTE.map(({ name, color }) => (
            <div
              key={name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-brown/20 shadow-md"
              style={{ backgroundColor: color }}
              title={name}
              aria-hidden
            />
          ))}
        </div>
        <div className="text-center">
          <PrimaryButton>Примеры нарядов</PrimaryButton>
        </div>
      </Container>
    </PaperSection>
  );
}
