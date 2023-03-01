import React,{ useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Slide from 'react-reveal/Slide';
import Swing from 'react-reveal/Swing';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
const Portflio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Portfolio" id="Portfolio">
          <Swing>
          <h2 className="special-heading" style={{ color: darkMode ? "white" : "" }}>Portfolio</h2>
          </Swing>
    <div class="container">
      <div class="box">
        <div class="image">
          <img src={Sidebar} alt="" />
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src={Ecommerce} alt="" />
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src={HOC} alt="" />
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src={MusicApp} alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Portflio;
