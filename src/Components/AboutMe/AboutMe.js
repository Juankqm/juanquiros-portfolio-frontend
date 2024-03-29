import React, { useEffect } from "react";
import "./AboutMe.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONST = {
    description:
      "Graduated Systems Engineer with 2+ years of work experience currently working as mid programmer analyst developing apps with Oracle full stack such as APEX and Pl/SQL. Passionate about programming and self-taught learner.",
    highlights: {
      bullets: [
        "Systems Engineer",
        "Junior Front End Developer",
        "HTML, CSS, JavaScript, ReactJs",
        "Mid Oracle PL/SQL Developer",
        "Mid Oracle APEX Developer",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONST.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
          <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in"  id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONST.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONST.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Hire Me </button>
              <a href="JuanQuiros.pdf" download="Juan Quiros Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
