import Hero from "@/components/Hero/Hero";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.page}>
      <Hero />
    </div>
  );
}
