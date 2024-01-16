import Container from "@/containers/Container"
import CardList from "@/components/cardlist/CardList"

function Portfolio() {
  return (
    <div className="relative">
        <div className="w-full h-40 md:h-80 bg-pink absolute -z-1"></div>
        <Container>
            <h1 className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold text-center mb-7 md:mb-16">My Portfolio</h1>
            <CardList/>
        </Container>
    </div>
  )
}

export default Portfolio