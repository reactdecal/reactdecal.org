import React from "react";
import { Transition } from "react-transition-group";
import anime from "animejs";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Slide from "../components/slide";
import AnimatedHeader from "../components/AnimatedHeader";
import Flower from "../components/Flower";
import ModuleSection from "../components/ModuleSection";

import SocialCardSlide from "../components/SocialCardSlide";
import WindowDrawingSlide from "../components/WindowDrawingSlide";

import styles from "./index.module.css";
import "./prism.theme.css";
import flower from "../images/flower.svg";
import icon from "../images/rdc-icon.png";

const LINES = [
  "component driven development",
  "front end engineering tools",
  "React, JavaScript, & you",
];
const LIVE_CODE = `
class Header extends React.Component {
  render() {
    /* Your code here! ✨*/
    return <h1 className="${styles.bold}">
      ${LINES[LINES.length - 1]}
    </h1>
  }
}
`;

const SLIDES = [
  <SocialCardSlide />,
  <WindowDrawingSlide />,
  <div className={styles.editorContainer}>
    <LiveError />
    <LiveEditor className={styles.editor} />
  </div>,
];

const DURATION = 700;
const DELAYS = [4000, 7000, 5000];

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
    this.animTimer = setTimeout(() => {
      this.advanceAnimation();
    }, DELAYS[this.state.animIndex]);
  }

  advanceAnimation() {
    if (this.state.animIndex >= LINES.length - 1) {
      return clearTimeout(this.animTimer);
    }
    this.setState(
      prevState => ({ animIndex: prevState.animIndex + 1 }),
      () => {
        this.animTimer = setTimeout(() => {
          this.advanceAnimation();
        }, DELAYS[this.state.animIndex]);
        this.updateSlides();
      }
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
      <>
        <Layout>
          <SEO title="The React DeCal" />
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
          <LiveProvider code={LIVE_CODE}>
            <div className={styles.pageContainer}>
              <div className={styles.container}>
                <h3 className={styles.slim}>UC Berkeley's first course for</h3>
                <div className={styles.headerContainer}>
                  {LINES.map((header, i) => (
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
                          wrapHeader={i < LINES.length - 1}
                        >
                          {i < LINES.length - 1 ? header : <LivePreview />}
                        </AnimatedHeader>
                      )}
                    </Transition>
                  ))}
                </div>
                <a className={styles.btn} onClick={e => this.showApp(e)}>
                  Apply now
                  <div
                    className={`${styles.circle} ${
                      this.state.appOpen
                        ? styles.circleOpen
                        : styles.circleClosed
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
                    }
                  ${index === SLIDES.length - 1 ? styles.codeSlide : ""}`}
                    open={index <= this.state.animIndex}
                  >
                    {component}
                  </Slide>
                ))}
              </div>
            </div>
          </LiveProvider>
          <div className={styles.aboutContainer}>
            <h1>What is React?</h1>
            <div className={styles.aboutSection}>
              <p style={{ fontWeight: 700 }}>
                React is a way to create user interfaces for the modern Web.
              </p>
              <p>
                It was developed by Facebook to help you build powerful,
                component-based Web applications that scale.
              </p>
            </div>
            <Flower className={styles.aboutFlower} color="#FFDA04" />
          </div>
        </Layout>
        <div className={styles.classContainer}>
          <div className={styles.classSection}>
            <h1>What will I learn in the React DeCal?</h1>
            <div className={styles.moduleList}>
              <ModuleSection
                color="#FFDA04"
                title="JavaScript Mechanics"
                description={`In JavaScript Mechanics, you'll learn about the \
              essentials of the JavaScript language and how to use it to \
              build dynamic, interactive websites.`}
              />
              <ModuleSection
                color="#54A3FF"
                title="Functional React"
                description={`Once you've got a good handle on JavaScript, we'll \
              introduce you to React and why it's so useful for building apps \
              for the Web.`}
              />
              <ModuleSection
                color="#FF4A60"
                title="Stateful React"
                description={`One of the best parts of using React is using it \
              to manage and manipulate complex information stored on a page ("state"). \
              We'll teach you more advanced patterns that are commonly used \
              at companies using React.`}
              />
              <ModuleSection
                color="#FFF"
                title="React Ecosystem"
                description={`Finally, we'll give you an introduction to the wide \
              world of the JavaScript and React ecosystem. This is your opportunity \
              to explore!`}
                outlineFlower
              />
            </div>
          </div>
        </div>
        <div className={styles.applyContainer}>
          <img src={icon} width={100} />
          <h1>Let's build together</h1>
          <p>Barrows 20, Tues &amp; Thurs at 6-7 PM</p>
          <p>Applications due Sunday, February 3 at 11:59 PM</p>
          <a className={styles.btn} onClick={e => this.showApp(e)}>
            Apply now
            <div
              className={`${styles.circle} ${
                this.state.appOpen ? styles.circleOpen : styles.circleClosed
              }`}
            />
          </a>
        </div>
      </>
    );
  }
}

export default IndexPage;
