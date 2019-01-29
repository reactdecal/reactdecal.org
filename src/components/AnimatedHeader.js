import React from "react";
import anime from "animejs";

export default class AnimatedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const { status } = this.props;
    const basicEnterExit = (start, end) => () => {
      if (status === "entering") {
        return [`-${end}`, start];
      }
      if (status === "exiting") {
        return [start, end];
      }
    };
    this.animeRef = anime({
      targets: this.ref.current,
      translateY: basicEnterExit("0%", "100%"),
      opacity: basicEnterExit("1", "0"),
      easing: "easeInOutElastic(3, 0.5)",
      duration: this.props.duration,
    });
  }

  render() {
    const { wrapHeader, ...props } = this.props;
    if (wrapHeader) {
      return <h1 ref={this.ref} {...props} />;
    }
    return <div ref={this.ref} {...props} />;
  }
}
