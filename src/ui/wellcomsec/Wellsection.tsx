import Image from "next/image";
import MariaPhoto from "../../../public/pictures/Maria.jpeg";
import styles from "./Wellsection.module.css";
import Button from "@/components/button/Button";

function Wellsection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around gap-6">
      <div className="flex flex-col gap-5 lg:gap-8 md:w-text w-80">
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 font-semibold leading-6 md:leading-10">
          Hi There, I'm
        </h1>
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 text-red font-semibold leading-6 md:leading-10">
          Maria Dontsova
        </h1>
        <p className="text-xs text-dark md:text-Medium">
          Welcome to my portfolio of captivating digital experiences. Explore my
          work and let's create something extraordinary together.
        </p>
        <Button
          type="button"
          text={"Contact Me"}
          className={styles.button_contatc}
        />
      </div>
      <Image
        src={MariaPhoto}
        alt="Maria_photo"
        width={500}
        className={styles.photo_maria}
      />
    </div>
  );
}

export default Wellsection;
