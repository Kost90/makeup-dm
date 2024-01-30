"use client";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="flex flex-col items-center justify-around gap-6 text-center md:max-w-4xl m-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold"
      >
        A Little About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-dark-gray text-Medium md:text-Large lg:text-Xlarge"
      >
        I am freelance mobile professional makeup artist based in London,
        though I travel and cover Surry, Kent, Essex and Sussex.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-dark-gray text-Medium md:text-Large lg:text-Xlarge"
      >
        With years of experience and a keen eye for detail, I will work with you
        to create a look that will enhance your natural beauty and make you feel
        confident and phenomenal.
      </motion.p>
    </div>
  );
}

export default Aboutme;
