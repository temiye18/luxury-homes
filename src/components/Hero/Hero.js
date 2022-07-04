import React from "react";
import { useInView } from "react-intersection-observer";
import Container from "../UI/Container";
import classes from "./Hero.module.css";
import videoImg from "../../assets/video.png";
import vectorLogo from "../../assets/Underline.png";

const Hero = () => {
  const { ref: myRef, inView: elementIsVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className={classes.hero__back}>
      <Container>
        <div
          ref={myRef}
          className={`${elementIsVisible ? classes.myAnimate : ""}`}
        >
          <div className={classes.welcome__text}>
            <h2>
              It's not just Real Estate. It's an Investment in your Future.
            </h2>
            <p>The future is here. And we're excited to be part of it</p>

            <img
              className={classes.vector__logo}
              src={vectorLogo}
              alt="vector logo"
            />
          </div>
        </div>

        <div className={classes.video__container}>
          <img src={videoImg} alt="video" />
        </div>

        <div
          ref={myRef}
          className={`${classes.about__message} ${
            elementIsVisible ? classes.myAnimate : ""
          }`}
        >
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
