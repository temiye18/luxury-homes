import React from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Blog.module.css";
import { blog } from "../../data";
import Container from "../UI/Container";
import vector_image from "../../assets/Vector 4.png";
import blog1 from "../../assets/blog_img_1.png";
import BlogList from "./BlogList";

const Blog = () => {
  const { ref: myRef, inView: elementIsVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={myRef}
      className={`${classes.blog} ${elementIsVisible ? classes.myAnimate : ""}`}
    >
      <Container>
        <div className={classes.blog__container}>
          <div className={classes.blog__header}>
            <h3>Our Blog</h3>
            <img src={vector_image} alt="underline" />
          </div>

          <div className={classes.blog__grid}>
            <div className={classes.blog__item1}>
              <img src={blog1} alt="blog" />
              <div className={classes.blog__content}>
                <h4>Not too young to be a Landlord</h4>
                <p>
                  Who says Landlords must be old? Here are secrets to buying a
                  house in your 20s/30s/40s
                </p>

                <p className={classes.blog__date}>23 June 2021</p>
              </div>
            </div>

            <div className={classes.blog__item2}>
              {blog.map((item) => {
                return <BlogList key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
