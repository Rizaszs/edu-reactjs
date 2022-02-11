import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
export default function BioSection() {
  return (
    <section id="bio" className="py-20">
      <div className="container mx-auto">
        <SectionTitle>Bio</SectionTitle>
        <SectionParagraph>a little about me</SectionParagraph>
        <p className="text-1xl text-center py-6 px-12">
          I am a freelance web developer based in Indonesia , passionate about
          web programming, feeling challenged to solve bugs. My style is
          somewhat skewed towards a minimalist design with a strong focus of
          stability and functionality.
        </p>
      </div>
    </section>
  );
}
