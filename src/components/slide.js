import React from "react";
import styles from "./slide.module.css";

const Slide = ({ children, ...props }) => (
  <div {...props} className={`${styles.slide} ${props.className || ""}`}>
    {children}
  </div>
);

export default Slide;
