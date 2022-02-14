import React from "react";
import { Container } from "../UI/Container";
import classes from "./Hero.module.css";
import videoImage from "../../assets/video_img.png";
import playVideo from "../../assets/play_video.png";
import waveVector from "../../assets/Vector 5.png";
import waveVector2 from "../../assets/Vector 6.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Container>
        <div className={classes.hero_header}>
          <h2>
            It's not just{" "}
            <span style={{ "z-index": "10", position: "relative" }}>
              Real Estate.{" "}
            </span>
            It's an Investment in your Future.
          </h2>
          <img className={classes.hero_vector1} src={waveVector} alt="vector" />
          <img
            className={classes.hero_vector2}
            src={waveVector2}
            alt="vector"
          />
        </div>
        <p className={classes.hero_text}>
          The future is here. And we're excited to be a part of it.
        </p>
        <div className={classes.hero_image}>
          <img src={videoImage} alt="video" />
          <img className={classes.play_video} src={playVideo} alt="play_png" />
        </div>

        <div className={classes.hero_description}>
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
