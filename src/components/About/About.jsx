import React,{ useContext } from "react";
import "./About.css";
import about from "../../img/mmm.png";
import { themeContext } from "../../Context";
import Slide from 'react-reveal/Slide';
import Swing from 'react-reveal/Swing';

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about" id="About">
      <div className="container">
      <Swing>
        <h2 className="special-heading"style={{ color: darkMode ? "white" : "" }}>About</h2>
        </Swing>

        <div className="about-content">
        <Slide left>
        <div className="text">
            <p style={{ color: darkMode ? "white" : "" }}>
            I have had the chance to work with a variety of clients throughout the course of my five years in the field, from small startups to big organizations. I'm continuously pushing the limits of what is possible because of my enthusiasm for designing powerful and captivating digital experiences.
I specialize in building unique websites and applications that are catered to the unique demands of each customer utilizing JavaScript, React, CSS, and HTML. Whether it's a straightforward one-page website or a sophisticated web application, I work to design easy and approachable user interfaces that make using them a pleasure for the user.
In addition to my technical abilities, I have a creative problem-solving style and am constantly searching for fresh approaches to design challenges. 
            </p>
          </div>
          </Slide>
          <Slide right>
          <div className="image">
            <img src={about} alt="" />
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
