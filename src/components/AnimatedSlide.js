import React from "react";
import anime from "animejs";
import Slide from "../slide";

export default class AnimatedSlide extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.animeRef = anime({
      targets: this.ref,
      rotate: this.props.rotation,
      easing: "easeInOutElastic",
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rotation === this.props.rotation) {
      return;
    }
    this.animeRef = anime({
      targets: this.ref,
      rotate: this.props.rotation,
      easing: "linear",
    });
  }

  render() {
    return <Slide ref={this.ref} {...this.props} />;
  }
}
