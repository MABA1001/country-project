import React from "react";
import "../Styles/Header.css"
import { ThemeContext } from "./ThemeContext";
import {BsSun} from 'react-icons/bs';
import {FcGlobe} from 'react-icons/fc'

export default function Header() {
  const darkThemeSettings={
    background: "#23272F",
    color:"#F6F7F9"
  }
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <nav className="navbar"style={toggle ? darkThemeSettings: {}}>
      <div className="container d-flex justify-content-between">
        <div>
          <h3 className="navbar-brand"style={toggle ? darkThemeSettings: {}}>Where in the <FcGlobe style={{fontSize:"28px", marginBottom:"3px"}}/></h3>
        </div>
        <div>
          <button onClick={toggleFunction} className="cursor"> {!toggle?<i style={{color:"gray"}} className="fa-regular fa-moon"></i>:<BsSun style={{color:"orange"}}/>}</button>
        </div>
      </div>
    </nav>
  );
}
