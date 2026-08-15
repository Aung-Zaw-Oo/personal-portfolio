// components\sections\about\About.tsx

import Container from "@/components/ui/Container";
import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Button from "@/components/ui/Button";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="flex flex-col lg:col-span-5">
            <AboutHeader />
            <AboutImage />

            <div className="mt-6 lg:mt-auto lg:pt-6">
              <Button
                href="/Aung_Zaw_Oo_Resume.pdf"
                download="Aung_Zaw_Oo_Resume.pdf"
                icon={faDownload}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Download Resume / CV
              </Button>
            </div>
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
