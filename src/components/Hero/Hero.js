import React from "react";
import Container from "../UI/Container";
import classes from "./Hero.module.css";
import videoImg from "../../assets/video.png";
import vectorLogo from "../../assets/Underline.png";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className={classes.welcome__text}>
          <h2>It's not just Real Estate. It's an Investment in your Future.</h2>
          <p>The future is here. And we're excited to be part of it</p>

          <img
            className={classes.vector__logo}
            src={vectorLogo}
            alt="vector logo"
          />
        </div>

        <div className={classes.video__container}>
          <img src={videoImg} alt="video" />
        </div>

        <div className={classes.about__message}>
          <h3>Who we are</h3>
          <p>
            Luxury Homes is Africa's most respected and loved integrated
            real-estate development company, consistently delivering luxury
            housing and high-end lifestyle products to delight our customers and
            support the prosperity of our communities
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
