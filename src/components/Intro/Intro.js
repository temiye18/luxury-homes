import React from "react";
import Container from "../UI/Container";
import classes from "./Intro.module.css";
import luxury_img from "../../assets/luxury_image.png";
import Button from "../UI/Button";

const Introduction = () => {
  return (
    <section className={classes.intro}>
      <Container>
        <div className={classes.my__div}>
          <div className={classes.intro__container}>
            <div className={classes.intro__image}>
              <img src={luxury_img} alt="luxury_house" />
            </div>
            <div className={classes.intro__item}>
              <p className={classes.intro__title}>Introducing...</p>
              <h2>Luxury & Class</h2>
              <p className={classes.intro__body}>
                Lakeside Gardens is designed to provide luxury and class living
                is now more accessible for everyone. The architecture is crafted
                with pure elegance surrounded by breathtaking views of the city
                and the foremost amenities.
              </p>

              <Button className={classes.intro__button}>Learn more</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;
