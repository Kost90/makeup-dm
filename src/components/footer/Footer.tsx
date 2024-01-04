import Container from "@/containers/Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo/120_120-1.svg";
import styles from "./Footer.module.css";

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
            <Link href={"#"}>
              <p>About Me</p>
            </Link>
            <Link href={"#"}>
              <p>Services</p>
            </Link>
            <Link href={"#"}>
              <p>Portfolio</p>
            </Link>
          </div>
          <p className="text-xs md:text-Medium text-medium-gray">
            Follow me on social media:
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
