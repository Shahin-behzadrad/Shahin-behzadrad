import Image from "next/image";
import Text from "../shared/Text";
import classes from "./Hero.module.scss";

import logo1 from "@public/logo/logo-1.png";
import logo2 from "@public/logo/logo-2.png";

import React from "react";

const Hero = () => {
  return (
    <section className={classes.container} id="heor">
      <div className={classes.shape1} />
      <div className={classes.shape2} />
      <div className={classes.shape3} />

      <div className={classes.glassyLayer} />

      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <Text
            value="Shahin Behzadrad /"
            fontSize="xxxxl"
            htmlTag="h1"
            textAlign="center"
            className={classes.myName}
            startAdornment={
              <Image
                src={logo1}
                width={40}
                alt="logo1"
                className={classes.logo}
              />
            }
            endAdornment={
              <Image
                src={logo2}
                width={40}
                alt="logo2"
                className={classes.logo}
              />
            }
          />
          <div className={classes.roleContent}>
            <Text
              value="Front-End Developer"
              fontSize="xl"
              htmlTag="h2"
              textAlign="left"
              className={classes.roleTitle}
            />
            {/* <Text
              color="secondary"
              className={classes.roleDescription}
              value="Front-End Developer skilled in creating clean and optimized user interfaces, with additional experience in back-end technologies like Node.js, MySQL, and Sequelize."
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
