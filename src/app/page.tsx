import Container from "@/containers/Container";
import Wellsection from "@/ui/wellcomsec/Wellsection";

export default function Home() {
  return (
    <div className="bg-pink w-full min-h-screen">
      <section className="bg-pink w-full">
        <Container>
          <Wellsection />
        </Container>
      </section>
    </div>
  );
}
