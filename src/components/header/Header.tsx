"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Container from "@/containers/Container";
import Logo from "../../../public/logo/120_120.svg";
import Close from "../../../public/svg/icons8-menu.svg";
import Menu from "../../../public/svg/icons8-close.svg";
import Link from "next/link";
import styles from "./Header.module.css";
import Mobilemenu from "../mobilemenu/Mobilemenu";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handelChange = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);
  return (
    <div className="bg-white w-full p-5 md:p-10 relative">
      <Container>
        <div className="flex items-center justify-between gap-5">
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
          <div className={styles.nav_links_container}>
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
          {isOpen ? (
            <button
              className="block md:hidden"
              type="button"
              onClick={handelChange}
            >
              <Image src={Menu} alt="menu_icon" />
            </button>
          ) : (
            <button
              className="block md:hidden"
              type="button"
              onClick={handelChange}
            >
              <Image src={Close} alt="menu_icon" />
            </button>
          )}
        </div>
      </Container>
      <Mobilemenu isOpen={isOpen} onClick={handelChange} />
    </div>
  );
}

export default Header;
