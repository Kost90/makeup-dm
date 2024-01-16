import Image from "next/image";
import MariaPhoto from "../../../public/pictures/maria_withou_bg.png";
import DM from "../../../public/svg/DM.svg";
import styles from "./Wellsection.module.css";
import Button from "@/components/button/Button";

function Wellsection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-6 m-auto">
      <div className="flex flex-col gap-5 lg:gap-8 md:w-text w-80">
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 font-semibold leading-6 md:leading-10">
          Hi There, I'm
        </h1>
        <h1 className="text-Heading3 md:text-Heding2 lg:text-Heding1 text-red font-semibold leading-6 md:leading-10">
          Maria Dontsova
        </h1>
        <p className="text-Medium md:text-Large lg:text-Xlarge text-dark">
          Welcome to my portfolio of captivating digital experiences. Explore my
          work and let's create something extraordinary together.
        </p>
        <Button
          type="button"
          text={"Contact Me"}
          className={styles.button_contatc}
        />
      </div>
      <div className="relative">
        <Image src={DM} alt="svg_picture" className={styles.svg_dm} />
        <Image
          src={MariaPhoto}
          alt="Maria_photo"
          className={styles.photo_maria}
        />
      </div>
    </div>
  );
}

export default Wellsection;
