import Image from "next/image";
import classes from "./Header.module.scss";

import logo1 from "@public/logo/logo-1.png";
import logo2 from "@public/logo/logo-2.png";

const Header = () => {
  return (
    <nav className={classes.header}>
      <div className={classes.logoContainer}>
        <Image src={logo1} width={20} alt="logo" />
        <Image src={logo2} width={20} alt="logo" />
      </div>
      <div className={classes.navbarBtns}>
        <button>About</button>
        <button>Experiences</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Header;
