import React, { useContext } from "react";
import { themeContext } from "../../Context";

const Logo = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (  
        <div className="logo" ><a href="#/" style={{ color: darkMode ? "white" : "" }}>Fatima</a></div>

    );
}
 
export default Logo;