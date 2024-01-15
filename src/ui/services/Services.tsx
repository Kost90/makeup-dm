import Container from "@/containers/Container";
import Image from "next/image";
import { svgArr } from "./servicesData";

function Services() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold md:mb-6">
          Services
        </h1>
        <p className="text-Medium text-dark md:mb-8">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
        {svgArr.map((el) => (
          <div className="flex flex-col w-60 gap-6">
            <Image src={el.svg} alt="picture" />
            <h2 className="text-Large text-dark">{el.title}</h2>
            <p className="text-Small text-dark">{el.decription}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Services;
