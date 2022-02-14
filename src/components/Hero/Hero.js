import React from "react";
import { Container } from "../UI/Container";
import classes from "./Hero.module.css";
import videoImage from "../../assets/video_img.png";
import playVideo from "../../assets/play_video.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Container>
        <div className={classes.hero_header}>
          <h2>It's not just Real Estate. It's an Investment in your Future.</h2>
        </div>
        <p className={classes.hero_text}>
          The future is here. And we're excited to be a part of it.
        </p>
        <div className={classes.hero_image}>
          <img src={videoImage} alt="video" />
          <img className={classes.play_video} src={playVideo} alt="play_png" />
        </div>
        <div className={classes.hero_image}>
          <img src={videoImage} alt="video" />
          <img className={classes.play_video} src={playVideo} alt="play_png" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
