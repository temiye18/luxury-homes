import React from "react";
import Container from "../UI/Container";
import classes from "./Hero.module.css";
import videoImg from "../../assets/video.png";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className={classes.welcome__text}>
          <h2>
            It's not just Real Estate. It's an <br></br> Investment in your
            Future.
          </h2>
          <p>The future is here. And we're excited to be part of it</p>
        </div>

        <div className={classes.video__container}>
          <img src={videoImg} alt="video" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
