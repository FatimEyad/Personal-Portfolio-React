import React,{ useContext } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Slide from 'react-reveal/Slide';
import Swing from 'react-reveal/Swing';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ECOMMERCREACT.png";
import PORTFOLIO from "../../img/PORTFOLIO.png";
import mui from "../../img/mui.png";
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
          <img src={PORTFOLIO} alt="" />
        </div>
      </div>
      <div class="box">
        <div class="image">
          <img src={mui} alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Portflio;
