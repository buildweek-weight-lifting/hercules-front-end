import React from "react";
import { NavLink } from 'react-router-dom';
import "./components.css"
import { toggleDrop } from "../actions/NavActions"
import { connect } from "react-redux";

class Nav extends React.Component{
 
  dropMenu = () => {
    //this.props.dropped = !this.props.dropped;
    this.props.toggleDrop();
    //console.log("state", this.state);
    //console.log("prop drop", this.props.dropped);
  }
  
  render(){
    return(
      <div className="Nav">
  
        <div className="mobile-bar">
          <div onClick={this.dropMenu}> menu </div>
          <div>logo </div>
        </div>
        
        
          <div className={  this.props.dropped ? "drop-down" : "up"}>
            
            <NavLink exact to="/dashboard">Home</NavLink>
            <NavLink exact to="/add-exercise">Add Excercise</NavLink>
            <NavLink exact to="/">Sign Out</NavLink>
          </div>
       

        
      </div>
      
    );
  }
}
//<NavLink exact to="/tracking">tracking</NavLink>
const mapStateToProps = state => ({
  dropped: state.dropped
});

export default connect(
  mapStateToProps,
  { toggleDrop }
)(Nav);

