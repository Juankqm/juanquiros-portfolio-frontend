import React,{ useState } from "react";
import "./ContactMe.css";
import Typical from "react-typical";
import axios from 'axios'
import {toast} from 'react-toastify'

import imgBack from "../../../src/images/mailz.jpeg";
import loadOne from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen!== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner]   = useState("");
  const [bool, setBool]       = useState(false);
  
  const handleName = (e) => {
    setName( e.target.value);
  }
  const handleEmail = (e) => {
    setEmail( e.target.value);
  }
  const handleMessage = (e) => {
    setMessage( e.target.value);
  }
  
  const submitForm = async (e) => {
    e.preventDefault();
    try {
        let data = {
            name,
            email,
            message
        }; 
        setBool(true);
        const res = await axios.post(`/contact`, data);
        if(name.lenght === 0 || email.lenght === 0 || message.lenght === 0){
            setBanner(res.data.msg);
            toast.error(res.data.msg);
            setBool(false);
        }else if (res.data.status === 200){
            setBanner(res.data.msg);
            toast.success(res.data.msg);
            setBool(false);
        }    
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="main-container " id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch", 1000]} />
          </h2>
          <a href="#">
            <i className="fa fa-linkedin-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="back-form">\
            <div className="img-back">
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="not internet connection" />
            </div>
            <form onSubmit={submitForm}>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type="text" 
                       onChange={handleName}
                       value={name}/>
                
                <label htmlFor="email">Email</label>
                <input type="email" 
                        onChange={handleEmail}
                        value={email}/>

                <label htmlFor="message">Message</label>
                <textarea type="text" 
                          onChange={handleMessage}
                          value={message}/>

                <div className="send-btn">
                    <button type="submit">
                        Send <i className="fa fa-paper-plane" />
                        {bool ? (<b className="load">
                            <img src={loadOne} alt={"Not internet Connection"}/>
                        </b>) : ("")}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
