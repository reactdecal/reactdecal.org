import React from "react";

import styles from "./ModuleSection.module.css";
import Flower from "./Flower";

class ModuleSection extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {}

  render() {
    const {
      color,
      title,
      description,
      headingStyle,
      outlineFlower = false,
      ...props
    } = this.props;
    return (
      <div className={styles.moduleSection} ref={this.ref} {...props}>
        <div className={styles.flowerHeader}>
          <Flower color={color} width={50} outline={outlineFlower} />
          <h2 style={{ color: color, ...headingStyle }}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    );
  }
}

export default ModuleSection;
