import {
  Container,
  PaperSection,
  SectionTitle,
  SectionInfo,
} from "@/components/ui";

export function Invitation() {
  return (
    <PaperSection>
      <Container>
        <SectionTitle uppercase className="mb-8">
          Дорогие родные
          <br />и близкие!
        </SectionTitle>

        <SectionInfo className="md:text-[22px] max-w-xl mx-auto">
          Мы давно ждали момента, когда сможем разделить с вами самый важный и
          счастливый день в нашей жизни. Совсем скоро состоится наша свадьба! Мы
          рады пригласить вас стать свидетелями этого торжества и разделить с
          нами самые яркие моменты!
        </SectionInfo>
      </Container>
    </PaperSection>
  );
}
