import Image from "next/image";
import Text from "../shared/Text";
import classes from "./Hero.module.scss";

import logo1 from "@public/logo/logo-1.png";
import logo2 from "@public/logo/logo-2.png";

import React from "react";

const Hero = () => {
  return (
    <div className={classes.container}>
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
            startAdornment={<Image src={logo1} width={50} alt="logo1" />}
            endAdornment={<Image src={logo2} width={50} alt="logo1" />}
          />
          <div className={classes.roleContent}>
            <div>
              <Text
                value="Front-End Developer"
                fontSize="xl"
                htmlTag="h2"
                textAlign="left"
              />
              <Text
                value="(with Full-Stack Capabilities)"
                color="secondary"
                textAlign="left"
                fontSize="xxl"
              />
            </div>
            <Text
              color="secondary"
              className={classes.roleDescription}
              value="Front-End Developer skilled in creating clean and optimized user interfaces, with additional experience in back-end technologies like Node.js, MySQL, and Sequelize."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
