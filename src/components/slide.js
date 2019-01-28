import React from "react";
import styles from "./slide.module.css";

const Slide = ({ children, open, ...props }) => (
  <div {...props} className={`${styles.slide} ${props.className || ""}`}>
    {React.cloneElement(children, { open })}
  </div>
);

export default Slide;
