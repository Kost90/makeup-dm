"use client";
import Image from "next/image";
import MariaPhoto from "../../../public/pictures/maria_withou_bg.png";
import DM from "../../../public/svg/DM.svg";
import styles from "./Wellsection.module.css";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import Link from "next/link";

function Wellsection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-6 m-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5 lg:gap-8 md:w-text w-80 min-h-screen md:min-h-full justify-center"
      >
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 font-semibold leading-6 md:leading-10">
          Hi There, I am
        </h1>
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 text-red font-semibold leading-6 md:leading-10">
          Maria Dontsova
        </h1>
        <p className="text-Medium md:text-Large lg:text-Xlarge text-dark">
          Professinal{" "}
          <span className="text-red font-semibold">Makeup Artist</span> based in
          London. This is my portfolio website.
        </p>
        <p>
          If you are looking for a mobile makeup artist for your special event
          or project please feel free to get in touch.
        </p>
        <Button type="button" className={styles.button_contatc}>
          <Link href={"#contactus"} scroll={true}>
            Contact me
          </Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative hidden md:block"
      >
        <Image
          src={DM}
          alt="Maria_makeup_artist_logo"
          className={styles.svg_dm}
        />
        <Image
          src={MariaPhoto}
          alt="Maria_makeup_artist_photo"
          className={styles.photo_maria}
        />
      </motion.div>
    </div>
  );
}

export default Wellsection;
