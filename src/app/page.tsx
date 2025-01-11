import classes from "./page.module.scss";

import About from "@/components/About/About";
import Hero from "@/components/Hero";

export default async function HomePage() {
  return (
    <div className={classes.RootPage}>
      <Hero />
      <About />
    </div>
  );
}
