import React, { useContext } from "react";
import { themeContext } from "../../Context";
const Links = ({trigger}) => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return ( 
        <div className={trigger ?"menu show":"menu "}>
        <ul >
            <div className="slider"></div>
            <li><a href="/" style={{ color: darkMode ? "white" : "" }}>Home</a></li>
            <li><a href="#About" style={{ color: darkMode ? "white" : "" }}>About</a></li>
            <li><a href="#Portfolio" style={{ color: darkMode ? "white" : "" }}>Portfolio</a></li>
            <li><a href="#Projects" style={{ color: darkMode ? "white" : "" }}>Projects</a></li>
            <li><a href="#services" style={{ color: darkMode ? "white" : "" }}>Services</a></li>
            <li><a href="#testimonial" style={{ color: darkMode ? "white" : "" }}>Testimonial</a></li>
            <li><a href="#contact" style={{ color: darkMode ? "white" : "" }}>Contact</a></li>
            <div className="animation start-home"></div>
        </ul>
    </div>
     );
}

export default Links;