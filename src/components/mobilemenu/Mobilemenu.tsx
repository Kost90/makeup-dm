"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Mobilemenu.module.css";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

function Mobilemenu({ isOpen, onClick }: Props) {
    console.log(isOpen)
  const MenuVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={isOpen ? "visible" : "exit"}
      variants={MenuVariants}
      className={styles.div_menu}
    >
      <Link href={"#"} onClick={onClick}>
        <p>About Me</p>
      </Link>
      <Link href={"#"} onClick={onClick}>
        <p>Services</p>
      </Link>
      <Link href={"#"} onClick={onClick}>
        <p>Portfolio</p>
      </Link>
    </motion.div>
  );
}

export default Mobilemenu;
