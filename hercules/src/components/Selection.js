import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './selection.css'

class Selection extends React.Component {
  state={}

  render () {
    return(
      <div className="selection-page">
        <div className="selection-logo"></div>
        <div className="selection-text">
          <h1>WELCOME TO HERCULES!</h1>
          <h3>Sign up and start exploring</h3>
        </div>
        <div className="selection-btns">
          <NavLink exact to="/login"><div className="loginBtn">Sign in</div></NavLink>
          <NavLink exact to="/signup"><div className="registerBtn">Create an account</div></NavLink>
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
)(Selection);