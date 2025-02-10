"use client";

import logo1 from "@public/logo/logo-1.png";
import logo2 from "@public/logo/logo-2.png";
import Image from "next/image";
import Link from "next/link";
import { SiReaddotcv } from "react-icons/si";

import classes from "./MobileSidebar.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@/components/shared/Button/Button";

const MobileSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (openSidebar) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [openSidebar]);

  const closeSidebarHandler = () => setOpenSidebar(false);

  return (
    <div className={classes.header}>
      <Link href="#hero" className={classes.logoContainer}>
        <Image src={logo1} width={25} alt="logo" />
        <Image src={logo2} width={25} alt="logo" />
      </Link>
      <div
        onClick={() => setOpenSidebar(!openSidebar)}
        className={clsx(classes.hamburger, {
          [classes.open]: openSidebar,
        })}
      >
        <div />
        <div />
        <div />
      </div>
      <div
        className={clsx(classes.sidebar, {
          [classes.openSidebar]: openSidebar,
        })}
      >
        <div className={classes.navbarBtns}>
          <Button variant="outlined" color="secondary">
            <Link onClick={closeSidebarHandler} href="#hero">
              About
            </Link>
          </Button>
          <Button variant="outlined" color="secondary">
            <Link onClick={closeSidebarHandler} href="#experiences">
              Experiences
            </Link>
          </Button>
          <Button variant="outlined" color="secondary">
            <Link onClick={closeSidebarHandler} href="#contact">
              Contact
            </Link>
          </Button>
        </div>
        <Button
          color="secondary"
          variant="contained"
          endIcon={<SiReaddotcv size={25} />}
        >
          <Link
            target="_blank"
            href="https://docs.google.com/document/d/1pKqRf1k0KLBgEROYgfYvDzswTorfCDoQ5nxgviGOztg/edit?usp=sharing"
          >
            View My CV
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileSidebar;
