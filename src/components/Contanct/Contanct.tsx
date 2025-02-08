"use client";

import classes from "./Contanct.module.scss";

import ContactForm from "./components/ContactForm/ContactForm";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const Contact = () => {
  return (
    <section className={classes.container} id="contact">
      <GetInTouch />
      <ContactForm />
    </section>
  );
};

export default Contact;
