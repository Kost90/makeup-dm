import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  pictures: StaticImageData[];
};

function Card({ pictures }: Props) {
  return (
    <>
      {pictures.map((el, i) => (
        <motion.div className="w-96 h-height overflow-hidden" key={i} initial={{opacity:0}} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay:0.8 }}>
          <Image src={el} alt="photo" width={500} />
        </motion.div>
      ))}
    </>
  );
}

export default Card;
