import Container from "@/containers/Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo/120_120-1.svg";
import styles from "./Footer.module.css";
import FacebookIcon from "../svgicon/FacebookIcon";
import InstagramIcon from "../svgicon/InstagramIcon";

function Footer() {
  return (
    <div className="bg-dark py-10 md:py-20">
      <Container>
        <div className={styles.footer_container}>
          <Image
            src={Logo}
            alt="Logo"
            width={320}
            className="hidden md:block border-2 border-dark-gray rounded-sm p-1"
          />
          <Image
            src={Logo}
            alt="Logo"
            width={160}
            className="block md:hidden border-2 border-dark-gray rounded-sm p-1"
          />
          <div className={styles.links_container}>
            <Link href={"#aboutme"} scroll={true}>
              <p>About Me</p>
            </Link>
            <Link href={"#services"} scroll={true}>
              <p>Services</p>
            </Link>
            <Link href={"#portfolio"} scroll={true}>
              <p>Portfolio</p>
            </Link>
          </div>
          <p className="text-xs md:text-Medium text-medium-gray">
            Follow me on social media:
          </p>
          <div className="flex items-center gap-5 md:gap-10">
            <Link
              href={
                "https://www.instagram.com/mariadontsova_makeup/?igsh=MWU0ajV6cmFzaG84OQ%3D%3D"
              }
              target="blanc"
            >
              <InstagramIcon className="fill-white hover:fill-pink w-6 md:w-12" />
            </Link>
            <Link href={"https://www.facebook.com/boickomasha"} target="blanc">
              <FacebookIcon className="fill-white hover:fill-pink w-6 md:w-12" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
