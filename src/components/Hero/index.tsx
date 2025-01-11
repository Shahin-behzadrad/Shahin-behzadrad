import Button from "../Button/Button";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.dashedLine} />
      <div className={classes.myTitle}>
        <h1>Shahin Behzadrad</h1>
      </div>
      <div className={classes.dashedLine} />
      <div className={classes.myRoleContainer}>
        <h1 className={classes.myRole}>Front-End Developer</h1>
      </div>
      <div className={classes.dashedLine} />
      <div className={classes.cta}>
        <Button size="lg" variant="contained">
          Expore my works
        </Button>
        <Button size="lg" variant="outlined">
          Download resume
        </Button>
      </div>
      <div className={classes.dashedLine} />
      <div className={classes.verticalContainer}>
        <div className={classes.circleContainer}>
          <div className={classes.topLeftCircle} />
          <div className={classes.topLeftCircle} />
        </div>
        <div className={classes.verticalDashedLine} />
        <div className={classes.verticalDashedLine} />
        <div className={classes.verticalDashedLine} />
        <div className={classes.verticalDashedLine} />
      </div>
    </div>
  );
};

export default Hero;
