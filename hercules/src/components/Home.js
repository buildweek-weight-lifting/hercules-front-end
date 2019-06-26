import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getExercise } from "../actions/index"
import { goLeft, goRight } from "../actions/homeActions"

class Home extends React.Component {
  
  componentDidMount() {
    //this.props.getExercise();
    console.log("props", this.props)
    console.log("state", this.state)
    console.log("length", this.props.exerciseData.length)
  }

  left(){
    console.log("props", this.props)
    console.log("state", this.state)
    if(1 > 0){
      this.props.goLeft();
    }
  }
  right(){
    if(this.props.carouselIndex < this.props.exerciseData.length){
      this.props.goRight();
    }
  }

  render () {
    return(
      <div className="Home">
        <img src="./images/hercules-logo.svg" alt="logo"/>
        <h1>Hercules</h1> 
        <p>{this.props.exerciseData[this.props.carouselIndex].name}</p>
        

        {this.props.exerciseData.map( e => (
          <div>{e.name}</div>
        ))}

        <NavLink exact to="/select-excercises">
        <button>select excercise</button>
        </NavLink>
        
        <div>
        <button onClick={this.left}>left</button>
        <button onClick={this.right}>right</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercise: state.exercise,
  exerciseData: state.exerciseData,
  carouselIndex: state.carouselIndex
});

export default connect(
  mapStateToProps,
  { getExercise, goLeft, goRight }
)(Home);