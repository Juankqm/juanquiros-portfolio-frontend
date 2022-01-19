 import React, {useState} from 'react'
 import './Resume.css'
 //components
import Screenheading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/scrollService'
import Animation from '../../utilities/Animation'

 const Resume = ( props ) => {
    const [ selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [ carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = ( props ) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                    <div className='heading-date'>{props.fromDate + "_" + props.toDate}</div>
                    ): (
                    <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
    };

    const resumeBullets = [ 
        { label : "Work History", logoSrc: "work-history.svg"},
        { label : "Education", logoSrc: "education.svg"},
        { label : "Programming Skills", logoSrc: "programming-skills.svg"},
        { label : "Projects", logoSrc: "projects.svg"},
        { label : "Interests", logoSrc: "interests.svg"},
    ];
     const programmingSkillDetails = [
        {skill : "JavaScript", ratingPercentage: 85},
        {skill : "React Js", ratingPercentage: 85},
        {skill : "Oracle PL/SQL", ratingPercentage: 80},
        {skill : "Oracle APEX", ratingPercentage: 80},
        {skill : "HTML", ratingPercentage: 80},
        {skill : "CSS", ratingPercentage: 80},
    ];
    const projectDetails = [
        { 
            title: "Personal Portfolio WebSite",
            duration: {fromDate: "2020", toDate:"2021"},
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum. In hac habitasse platea dictums",
            subHeading: "Technologies Used: React Js, Bootstrap"
        },
        { 
            title: "Coronavirus Cases Tracker",
            duration: {fromDate: "2019", toDate:"2019"},
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum. In hac habitasse platea dictums",
            subHeading: "Technologies Used: React Js, Bootstrap"
        },
        { 
            title: "STEAM Foundation Interactive Books",
            duration: {fromDate: "2019", toDate:"2020"},
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum. In hac habitasse platea dictums",
            subHeading: "Technologies Used: React Js, Bootstrap"
        }
        
    ];
    const resumeDetails = [
        <div className='resume-screen-container' key="work-experience">
            <ResumeHeading heading={"Legadmi Consulting & System"} 
                           subHeading={"JUNIOR ORACLE DEVELOPER"}
                           fromDate={"2021"}
                           toDate={"present"}/>
                           <div className='experience-description-text'>
                                <span className='resume-description-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum.
                                </span>
                           </div>
                           <div className='experience-description'>
                                <span className='resume-description-text'>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum.
                                </span>
                                <br />
                                <span className='resume-description-text'>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum.
                                </span>
                                <br />
                                <span className='resume-description-text'>
                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sit amet ex ut elementum.
                                </span>
                           </div>
            <ResumeHeading heading={"Legadmi Consulting & System"} 
                           subHeading={"ORACLE DEVELOPER, INTERNSHIP"}
                           fromDate={"2021"}
                           toDate={"2021"}/>
            <ResumeHeading heading={"Tek Experts"} 
                           subHeading={"AZURE API MANAGEMENT SUPPORT ENGINEER STAGE 2"}
                           fromDate={"2020"}
                           toDate={"2021"}/>
            <ResumeHeading heading={"Fundación STEAM"} 
                           subHeading={"REACT JS DEVELOPER, COLLEGE COMMUNITY SERVICE "}
                           fromDate={"2020"}
                           toDate={"2021"}/>                                                                                                              
        </div>,
        <div className='resume-screen-container' key="education">
            <ResumeHeading heading={"Universidad Latina de Costa Rica"} 
                           subHeading={"BACHELOR OF SYSTEMS ENGINEERING"}
                           fromDate={"2016"}
                           toDate={"2021"}/>
            <ResumeHeading heading={"CertiProf"} 
                           subHeading={"SCRUM FOUNDATION PROFESSIONAL CERTIFICATE"}
                           fromDate={"2019"}
                           toDate={"2019"}/>                           
            <ResumeHeading heading={"Instituto Nacional de Aprendizaje"} 
                           subHeading={"ENGLISH FOR CUSTOMER SERVICE"}
                           fromDate={"2019"}
                           toDate={"2020"}/>
            <ResumeHeading heading={"Instituto Nacional de Aprendizaje"} 
                           subHeading={"WEB DEVELOPMENT, TECHNICIAN"}
                           fromDate={"2015"}
                           toDate={"2016"}/>                           
        </div>
    ]
 
    let fadeInScreenHandler = (screen) => {
        if (screen.faceScreen !== props.id) return;
        Animation.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return(   
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className='resume-content'>
                <Screenheading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            </div>
        </div>
    );
}


export default Resume;