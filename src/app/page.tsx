import Container from "@/containers/Container";
import Wellsection from "@/ui/wellcomsec/Wellsection";
import Aboutme from "@/ui/aboutme/Aboutme";
import Services from "@/ui/services/Services";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <section className="bg-pink w-full py-10 md:py-20">
        <Container>
          <Wellsection />
        </Container>
      </section>
      <section className="bg-dark w-full py-10 md:py-20">
        <Container>
          <Aboutme />
        </Container>
      </section>
      <section className="md:pt-16 md:pb-16 w-full p-7 md:p-14">
        <Services/>
      </section>
    </div>
  );
}
