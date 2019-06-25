import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class Home extends React.Component {
  state={}

  render () {
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
}

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps,
  { }
)(Home);