'use client'
import Container from "@/containers/Container";
import Image from "next/image";
import { svgArr } from "./servicesData";
import { motion } from "framer-motion";

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

function Services() {
  return (
    <Container>
      <div className="text-center md:mb-16">
        <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold md:mb-6">
          Services
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.5}} className="text-Medium md:text-Large lg:text-Xlarge text-dark md:mb-8">
          Explore my design services, from user interface and experience to
          prototyping and testing. Lets craft exceptional digital experiences
          together.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 m-auto self-center gap-7 md:gap-12">
        {svgArr.map((el,i) => (
          <motion.div className="flex flex-col w-60 gap-6 self-center justify-self-center" key={i} initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{
            duration: 0.3,
            delay: i * 0.3}} variants={item}>
            <Image src={el.svg} alt="picture" width={86} className="h-32"/>
            <h1 className="text-Large md:text-XLarge text-dark font-bold uppercase">{el.title}</h1>
            <p className="text-Small md:text-Medium lg:text-Large text-dark">{el.decription}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default Services;
