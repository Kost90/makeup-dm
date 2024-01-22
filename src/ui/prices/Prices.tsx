"use client";
import Container from "@/containers/Container";
import Pricelist from "@/components/pricelist/Pricelist";
import { motion } from "framer-motion";
import {
  pricesData,
  pricesBridal,
  pricesActuaWedd,
  bridalTrial,
  actualWedMake,
} from "./pricesData";
import styles from "./Prices.module.css";

function Prices() {
  return (
    <Container>
      <div className="text-center md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold md:mb-6 text-white"
        >
          Prices for 2024:
        </motion.h1>
      </div>

      <div className={styles.prices_container}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Makeup & hair:
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {pricesData.map((el, i) => (
            <Pricelist price={el.price} text={el.text} key={i}/>
          ))}
        </motion.ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bridal makeup and hair:
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {pricesBridal.map((el, i) => (
            <Pricelist price={el.price} text={el.text} key={i}/>
          ))}
        </motion.ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Actual wedding day:
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {pricesActuaWedd.map((el, i) => (
            <Pricelist price={el.price} text={el.text} key={i}/>
          ))}
        </motion.ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Bridal makeup:
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {bridalTrial.map((el, i) => (
            <Pricelist price={el.price} text={el.text} key={i}/>
          ))}
        </motion.ul>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Actualwedding day:
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {actualWedMake.map((el, i) => (
            <Pricelist price={el.price} text={el.text} key={i}/>
          ))}
        </motion.ul>
      </div>
    </Container>
  );
}

export default Prices;
