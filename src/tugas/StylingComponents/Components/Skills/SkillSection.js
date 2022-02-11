import SectionTitle from "../Bio/SectionTitle";
import SectionParagraph from "../Bio/SectionParagraph";
import Skilltem from "./Skilltem";
export default function SkillSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Some of my abilities</SectionParagraph>
        <div className="justify-center mx-6 my-12">
          <Skilltem />
        </div>
      </div>
    </section>
  );
}
