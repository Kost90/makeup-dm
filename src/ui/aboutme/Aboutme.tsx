'use client'
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="flex flex-col items-center justify-around gap-6 text-center">
      <motion.h1 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-white text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold">
        About Me
      </motion.h1>
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.5}} className="text-dark-gray text-Medium md:text-Large lg:text-Xlarge">
        Im Sara Jones, a UI/UX designer dedicated to crafting intuitive and
        visually stunning digital experiences. With a passion for user-centric
        design, I transform ideas into functional and beautiful interfaces.
        Lets collaborate and shape the future of design together.
      </motion.p>
    </div>
  );
}

export default Aboutme;
