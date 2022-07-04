import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import Container from "../UI/Container";
import "animate.css";
import classes from "./Properties.module.css";
import vector2 from "../../assets/Vector 2.png";
import { estate } from "../../data";

const Properties = () => {
  //   const [myEstate, setMyEstate] = useState(estate);
  const [value, setValue] = useState(2);
  const { ref: myRef, inView: elementIsVisible } = useInView({
    triggerOnce: true,
  });

  const { estates } = estate[value];

  return (
    <section
      ref={myRef}
      className={`${classes.property}  ${
        elementIsVisible ? classes.myAnimate : ""
      }`}
    >
      <Container>
        <div className={classes.property__items}>
          <div className={classes.property__heading}>
            <h2>Discover & Find Your Dream Property</h2>
            <img src={vector2} alt="border_bottom" />
          </div>

          <div className={classes.states}>
            {estate.map((state, index) => {
              return (
                <button
                  key={state.id}
                  onClick={() => setValue(index)}
                  className={index === value && classes.active}
                >
                  {state.state}
                </button>
              );
            })}
          </div>

          <div ref={myRef} className={`${classes.estate}`}>
            {estates.map((estate, index) => {
              const { id, image, name, location, size, deposit, price } =
                estate;
              return (
                <div className={classes.estate__item} key={id}>
                  <img src={image} alt="estate_pic" />
                  <div className={classes.estate__info}>
                    <p className={classes.estate__name}>{name}</p>
                    <p className={classes.estate__location}>
                      {location} <span>.</span>
                      <span style={{ fontSize: "13.82px", color: "#848484" }}>
                        Size: {size}
                      </span>
                    </p>
                    <p className={classes.estate__deposit}>
                      Initial Deposit: {deposit}
                    </p>
                    <p className={classes.estate__price}>N{price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Properties;
