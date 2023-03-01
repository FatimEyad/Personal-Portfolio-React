import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Swing from 'react-reveal/Swing';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div class="services" id="services">
          <Swing>
          <h2 className="special-heading" style={{ color: darkMode ? "white" : "" }}>Projects</h2>
          </Swing>    <div class="container">

      <div class="box">
        <i class="fas fa-user-shield fa-4x"></i>
        <h3>Security</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
      <div class="box">
        <i class="fas fa-laptop-code fa-4x"></i>
        <h3>Coding</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>

      <div class="box">
        <i class="fas fa-bullhorn fa-4x"></i>
        <h3>Marketing</h3>
        <div class="info">
          <a href="#">Details</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
