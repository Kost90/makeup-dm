import Container from "@/containers/Container";
import Wellsection from "@/ui/wellcomsec/Wellsection";
import Aboutme from "@/ui/aboutme/Aboutme";
import Services from "@/ui/services/Services";
import Portfolio from "@/ui/portfolio/Portfolio";
import ContactUs from "@/ui/contactus/ContactUs";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <section className="bg-pink w-full md:py-20">
        <Container>
          <Wellsection />
        </Container>
      </section>
      <section className="bg-dark w-full py-10 md:py-20 scroll-smooth md:min-h-minAbout" id="aboutme">
        <Container>
          <Aboutme />
        </Container>
      </section>
      <section className="md:pt-16 md:pb-16 w-full pt-7 pb-7" id="services">
        <Services/>
      </section>
      <section className="w-full pt-7 md:pt-16 pb-7 md:pb-16" id="portfolio">
      <Portfolio/>
      </section>
      <section className="bg-pink w-full pt-7 md:pt-16 pb-7 md:pb-16">
        <ContactUs/>
      </section>
    </div>
  );
}
