import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "Oracle PL/SQL", ratingPercentage: 80 },
    { skill: "Oracle APEX", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];
  const projectsDetails = [
    {
      title: "Personal Portfolio WebSite",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "This is one of my biggest projects where I have implemented all my knowledge adquired regards JavaScript and ReactJs as library. I am still working on it every day I learn something new.",
      subHeading: "Technologies Used: JavaScript, HTML, CSS and React Js",
    },
    {
      title: "Coronavirus Cases Tracker",
      duration: { fromDate: "2019", toDate: "2019" },
      description:
        "In this personal project I implemented a public API with data about coronavirus worldwide statistics that allowed me to show realtime data.",
      subHeading: "Technologies Used: JavaScript, HTML, CSS and React Js",
    },
    {
      title: "STEAM Interactive Books",
      duration: { fromDate: "2019", toDate: "2020" },
      description:
        "I had de opportunity to work with a programmers team for my college community service creating a project based on the company's requirements.",
      subHeading: "Technologies Used: JavaScript, HTML, CSS and React Js",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Universidad Latina de Costa Rica"}
        subHeading={"BACHELOR OF SYSTEMS ENGINEERING"}
        fromDate={"2016"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"CertiProf"}
        subHeading={"SCRUM FOUNDATION PROFESSIONAL CERTIFICATE"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Instituto Nacional de Aprendizaje"}
        subHeading={"ENGLISH FOR CUSTOMER SERVICE"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Instituto Nacional de Aprendizaje"}
        subHeading={"WEB DEVELOPMENT, TECHNICIAN"}
        fromDate={"2015"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"CR ATESA SOFTWARE"}
          subHeading={"MID ORACLE DEVELOPER"}
          fromDate={"2023 "}
          toDate={" present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            In my current role as mid programmer analyst at CR ATESA Software, I have been 
            responsible for analyzing, designing, programming, and testing software solutions. 
            Through these experiences, I have developed a strong understanding of the entire software development lifecycle.
          </span>
        </div>
        
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Legadmi Consulting & System"}
          subHeading={"JUNIOR ORACLE DEVELOPER"}
          fromDate={"2021 "}
          toDate={" 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Develop cloud hosted apps with Oracle stack such as APEX and Pl/SQL.
          </span>
        </div>
        
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Tek Experts"}
          subHeading={"AZURE API MANAGEMENT SUPPORT ENGINEER"}
          fromDate={"2021 "}
          toDate={" 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
              Be part of a break and fix team providing support for Microsoft Azure API Management.
          </span>
        </div>
        
      </div>

    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Soccer"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
