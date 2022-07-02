import React from "react";
import Container from "../UI/Container";
import classes from "./Properties.module.css";
import vector2 from "../../assets/Vector 2.png";

const Properties = () => {
  return (
    <section className={classes.property}>
      <Container>
        <div className={classes.property__heading}>
          <h2>Discover & Find Your Dream Property</h2>
          <img src={vector2} alt="border_bottom" />
        </div>
      </Container>
    </section>
  );
};

export default Properties;
