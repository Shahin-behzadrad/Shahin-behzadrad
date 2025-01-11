import Button from "../Button/Button";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.shahinLogo}>
        <h1>SHAHIN</h1>
        <span>.RAD</span>
      </div>
      <div className={classes.navbarBtns}>
        <Button variant="text">About</Button>
        <Button variant="text">Experience</Button>
        <Button variant="text">Projects</Button>
        <Button variant="text">Contact</Button>
      </div>
    </nav>
  );
};

export default Header;
