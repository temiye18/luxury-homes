import React from "react";
import classes from "./Blog.module.css";

const BlogList = ({ title, date, image }) => {
  return (
    <div className={classes.blog__list}>
      <div className={classes.blog__title}>
        <h4>{title}</h4>
        <p className={classes.blog__date}>{date}</p>
      </div>

      <img src={image} alt="blog_img" />
    </div>
  );
};

export default BlogList;
