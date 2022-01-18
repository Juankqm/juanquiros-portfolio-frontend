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
    }

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