"use client";
import Image from "next/image";
import Container from "@/containers/Container";
import Phone from "../../../public/svg/bxs_phone-call.svg";
import MailIcon from "../../../public/svg/ic_sharp-email.svg";
import ContactForm from "@/components/form/ContactForm";
import styles from "./ContactUs.module.css";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <Container>
      <div className={styles.contactus_wrapper} id="contactus">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={styles.side_wrapper}
        >
          <div>
            <h1 className="text-Heading3 md:text-Heading2 lg:text-Heding1 font-semibold md:mb-6 text-center uppercase">
              Get in Touch
            </h1>
            <p>
              Have a question or a project in mind? I d love to hear from you.
              Let iss chat and make something amazing together.
            </p>
          </div>
          <div>
            <div className={styles.svg_wrapper}>
              <Image src={Phone} alt="phone icon" />
              <p>+1205 5872 321</p>
            </div>
            <div className={styles.svg_wrapper}>
              <Image src={MailIcon} alt="email icon" />
              <p>contact@sarajonesdesign.com</p>
            </div>
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </Container>
  );
}

export default ContactUs;
