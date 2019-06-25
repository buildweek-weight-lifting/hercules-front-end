import React from "react";
import { NavLink } from 'react-router-dom';

const Home = props => {

  return(
    <div className="Home">
      <img src="./images/hercules-logo.svg" />
      <h1>Hercules</h1> 
      <NavLink exact to="/select-excercises">
      <button>select excercise</button>
      </NavLink>
      <div>
      <button>left</button>
      <button>right</button>
      </div>
    </div>
  );
}

export default Home;