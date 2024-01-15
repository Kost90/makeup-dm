import Container from "@/containers/Container";
import Image from "next/image";
import { svgArr } from "./servicesData";

function Services() {
  return (
    <Container>
      <div className="text-center mb-7 md:mb-16">
        <h1 className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold md:mb-6">
          Services
        </h1>
        <p className="text-Medium text-dark md:mb-8">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 m-auto self-center gap-7 md:gap-12">
        {svgArr.map((el) => (
          <div className="flex flex-col w-60 gap-6 self-center justify-self-center">
            <Image src={el.svg} alt="picture" width={86} className="h-32"/>
            <h1 className="text-Large text-dark font-bold">{el.title}</h1>
            <p className="text-Small text-dark">{el.decription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Services;
