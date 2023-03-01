import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import {useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Navicons from "./Navicons";
import useClickOutside from'./useClickOutside'


const Navbar = () => {
    const [clicked, setclicked]= useState(true)

    const [trigger, settrigger]= useState(false)

    const handelclick =()=>{
        setclicked(!clicked)
    }
    const handeltrigger =()=>{
        settrigger(!trigger)
    }

    let domnode= useClickOutside(()=>
    {
        settrigger(false)
    })
 
return ( 
    <div id="page" className={clicked ?"site":"site showsearch"}>
        <header>
            <div className="container">
                <nav  ref={domnode}>
                    <div className="left"  >
                        <Logo/>
                        <Links trigger={trigger}/>
                    </div>
                    <Navicons clicked={clicked} handelclick={handelclick} handeltrigger={handeltrigger}/>
                </nav>
            </div>
            {/* <Formsearch/>       */}
        </header>
    </div>
);
}
export default Navbar;
