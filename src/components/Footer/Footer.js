import React from "react";
import logo from "../../assets/logo.png";
import classes from "./Footer.module.css";
import Container from "../UI/Container";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <Container>
        <div className={classes.footer__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.footer__text}>
          <p>The future is here. And we’re excited to be part of it.</p>
        </div>
        <div className={classes.footer__links}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#invest">Invest</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className={classes.footer__icons}>
          <FaFacebookF className={classes.icon} />
          <AiOutlineTwitter className={classes.icon} />
          <AiOutlineInstagram className={classes.icon} />
        </div>
      </Container>
    </section>
  );
};

export default Footer;
