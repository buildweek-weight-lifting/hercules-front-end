import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"


class Nav extends React.Component{
  state = {
    dropped: false
  }

  dropMenu = () => {
    this.setState({dropped: !this.state.dropped});
    //console.log(this.state.dropped);
  }

  render(){
    return(
      <div className="Nav">
  
        <div className="mobile-bar">
          <div onClick={this.dropMenu}> menu </div>
          <div>logo </div>
          <NavLink exact to="/">profile</NavLink>
        </div>
        
        
          <div className={  this.state.dropped ? "drop-down" : "up"}>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/">Add Excercise</NavLink>
            <NavLink exact to="/">Sign Out</NavLink>
          </div>
       

        
      </div>
      
    );

  }
  
}

export default Nav;