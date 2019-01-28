import React from "react";
import { Transition } from "react-transition-group";
import anime from "animejs";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import AnimatedHeader from "../components/AnimatedHeader";

import SocialCardSlide from "../components/SocialCardSlide";
import WindowDrawingSlide from "../components/WindowDrawingSlide";

import styles from "./index.module.css";
import flower from "../images/flower.svg";

const LINES = [
  "component driven development",
  "front end engineering",
  "React and the world of JavaScript",
];

const SLIDES = [<SocialCardSlide />, <WindowDrawingSlide />, <h1>Hi there</h1>];

const DURATION = 700;
const DELAY = 6000;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appOpen: false,
      animIndex: 0,
    };
    this.appFrame = React.createRef();
  }

  componentDidMount() {
    this.updateSlides();
    this.animTimer = setInterval(() => {
      this.advanceAnimation();
    }, DELAY);
  }

  advanceAnimation() {
    if (this.state.animIndex >= LINES.length - 1) {
      return clearInterval(this.animTimer);
    }
    this.setState(
      prevState => ({ animIndex: prevState.animIndex + 1 }),
      () => this.updateSlides()
    );
  }

  updateSlides() {
    const { animIndex } = this.state;
    const ROTATE = -5;
    this.animeRef = anime({
      targets: `.${styles.slide}.slide-open`,
      rotate: (el, i) => [
        `${animIndex === i ? "180deg" : ROTATE * (animIndex - i - 1) - 4}`,
        `${ROTATE * (animIndex - i) - 4}deg`,
      ],
      opacity: (el, i) => [animIndex === i ? 0 : 1, 1],
      easing: "easeInOutElastic(1, 1)",
      delay: anime.stagger(100, { from: "last" }),
      duration: DURATION,
    });
  }

  showApp(e) {
    e.preventDefault();
    this.setState({ appOpen: !this.state.appOpen });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {this.state.appOpen ? (
          <div className={styles.appOverlay}>
            <Slide
              style={{
                width: "70%",
                height: "80%",
              }}
            >
              <iframe
                className={styles.appFrame}
                ref={this.appRef}
                title="React DeCal Application"
                src="https://airtable.com/embed/shrVhHSKfygmnyJY9?backgroundColor=cyan"
              />
            </Slide>
            <a
              className={styles.btn}
              onClick={e => this.showApp(e)}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <span style={{ fontSize: "30px" }}>&times;</span>
            </a>
          </div>
        ) : null}
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <h3 className={styles.slim}>UC Berkeley's first course for</h3>
            <div className={styles.headerContainer}>
              {LINES.map(header => (
                <Transition
                  key={header}
                  in={LINES[this.state.animIndex] === header}
                  timeout={DURATION}
                  unmountOnExit
                >
                  {status => (
                    <AnimatedHeader
                      className={styles.bold}
                      status={status}
                      duration={DURATION}
                    >
                      {header}
                    </AnimatedHeader>
                  )}
                </Transition>
              ))}
            </div>
            <a className={styles.btn} onClick={e => this.showApp(e)}>
              Apply now
              <div
                className={`${styles.circle} ${
                  this.state.appOpen ? styles.circleOpen : styles.circleClosed
                }`}
              />
            </a>
          </div>
          <div className={styles.slidesContainer}>
            <img alt="" src={flower} className={styles.flower} />
            {SLIDES.map((component, index) => (
              /* OK to use index here: list is stable */
              <Slide
                key={index}
                className={`${styles.slide} ${
                  index <= this.state.animIndex ? "slide-open" : ""
                }`}
                open={index <= this.state.animIndex}
              >
                {component}
              </Slide>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
