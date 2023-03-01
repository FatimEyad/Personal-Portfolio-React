import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import React, { useContext } from "react";

const Navicons = ({clicked,handelclick,handeltrigger}) => 
{
    const theme = useContext(themeContext); 
    const darkMode = theme.state.darkMode;
return ( 
<div className="right" >
    <div className="icons">
        <Toggle/>
    {/* <div  className="s-trigger" onClick={()=>handelclick()}>
        <a href="#/" className={clicked ?"fa-solid fa-magnifying-glass open":"fa-solid fa-xmark close" }> </a>
    </div> */}
        {/* <a href="#/" className="icart">
            <i className="fa-solid fa-bag-shopping"  style={{ color: darkMode ? "white" : "" }}></i>
            <span className="number">0</span>
            </a> */}
            <a href="#/" className="m-trigger mobile-only" onClick={()=>handeltrigger()}>
            <i className="fa-solid fa-bars"  style={{ color: darkMode ? "white" : "" }}></i>
        </a>
    </div>
</div>  
);
}

export default Navicons;