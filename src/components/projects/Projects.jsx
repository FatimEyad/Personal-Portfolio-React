import React,{ useContext } from "react";
import "./Projects.css";
import about from "../../img/mmm.png";
import { themeContext } from "../../Context";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Swing from 'react-reveal/Swing';

import Zoom from 'react-reveal/Zoom';

const Projects = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Projects" id="Projects">
          <Swing>
          <h2 className="special-heading" style={{ color: darkMode ? "white" : "" }}>Projects</h2>
          </Swing>

    <div className="container">
    <Zoom left cascade>
      <div className="box project1">
        <div className="img-holder"><img src={Sidebar}alt="" /></div>
        <h2>Project 1</h2>
        <p>This project involved developing a personal blog website with a distinctive look and straightforward navigation. The website offers a forum for the author to express their views and ideas to the world while showcasing their writing abilities and personality.</p>
        <a href="#">More</a>
      </div>
     

      <div className="box project2">
        <div className="img-holder"><img src={Ecommerce} alt="" /></div>
        <h2>Project 2</h2>
        <p>Developing an interactive and interesting website for a nonprofit organization or charity was the goal of this project. The website outlines the goals of the organization and promotes giving and volunteering through eye-catching graphics and calls to action.</p>
        <a href="#">More</a>
      </div>
      <div className="box project3">
        <div className="img-holder"><img src={MusicApp} alt="" /></div>
        <h2>Project 3</h2>
        <p>A system for scheduling and making reservations for a service-based company: This project involves developing a unique system for booking and scheduling appointments for a service-based company, like a personal trainer or massage therapist. Both the business owner and customers can use the </p>
        <a href="#">More</a>
      </div>
      <div className="box project4">
        <div className="img-holder"><img src={HOC} alt="" /></div>
        <h2>Project 4</h2>
        <p>This project entailed building a personalized analytics dashboard that offers real-time data visualization for a company or organization. Users may quickly monitor and analyze their data using the dashboard's customized charts and graphs, as well as its user-customizable filters and data export functions.</p>
        <a href="#">More</a>
      </div>
      </Zoom>

    </div>
  </div>

  );
};

export default Projects;
