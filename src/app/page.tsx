import Contact from "@/components/Contanct/Contanct";
import Experiences from "@/components/Experiences/Experiences";
import Hero from "@/components/Hero/Hero";
import Text from "@/components/shared/Text";

import classes from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experiences />
      <Contact />
      <Text
        textAlign="center"
        value="© 2025 Designed & Developed by Shahin Behzadrad."
        className={classes.copyRight}
      />
    </div>
  );
}
