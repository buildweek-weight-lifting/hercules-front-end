import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"


const Nav = props => {

  return(
    <div className="Nav">
      <NavLink>menu</NavLink>
      <NavLink>logo</NavLink>
      <NavLink>profile</NavLink>
    </div>
  );
}

export default Nav;