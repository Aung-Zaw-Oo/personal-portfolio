import Container from "@/components/ui/Container";
import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <AboutHeader />
            <AboutImage />
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
}
