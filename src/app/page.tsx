import Container from "@/containers/Container";
import Wellsection from "@/ui/wellcomsec/Wellsection";
import Aboutme from "@/ui/aboutme/Aboutme";

export default function Home() {
  return (
    <div className="bg-pink w-full min-h-screen">
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
    </div>
  );
}
