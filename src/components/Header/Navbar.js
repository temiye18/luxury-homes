import React from "react";
import classes from "./Navbar.module.css";
import { Container } from "../UI/Container";
import { FaAngleDown } from "react-icons/fa";
import Button from "../UI/Button";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Container>
        <nav className={classes.navbar}>
          <div className={classes.navbar_img}>
            <img src={Logo} alt="logo" />
          </div>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#invest">
                Invest <FaAngleDown style={{ marginLeft: "10px" }} />
              </a>
            </li>
            <li>
              <a href="#about">Blog</a>
            </li>
          </ul>
          <Button>Contact us</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
