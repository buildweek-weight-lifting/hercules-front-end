import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getExercise } from "../actions/index"
import { goLeft, goRight } from "../actions/homeActions"

class Home extends React.Component {
  // state={
  //   carouselIndex: this.props.carouselIndex
  // }

  componentDidMount() {
    
    this.props.getExercise();
    
  }

  left = () => {
    //console.log("props", this.props)
    //console.log("state", this.state)
    if(this.props.carouselIndex > 0){
      this.props.goLeft();
    }
  }
  right = () => {
    if(this.props.carouselIndex < this.props.exercises.length-1){
      this.props.goRight();
    }
  }

  testRender = () => {
    if(this.props.exercises <= 0){
      return <h1>Loading</h1>
    }
    else{
      return (
        <div>
          <p>name: {this.props.exercises[this.props.carouselIndex].name}</p>
          <p>reps: {this.props.exercises[this.props.carouselIndex].reps}</p>
          <p>weight: {this.props.exercises[this.props.carouselIndex].weight}</p>
        </div>
      )
    }
  }

  render () {
    console.log("props", this.props.exercises)
    console.log("exercises on render", this.props.exercises[0])
    //console.log("state", this.state)
    //console.log("length", this.props.exercises.length)
    return(
      <div className="Home">
        <img src="./images/hercules-logo.svg" alt="logo"/>
        <h1>Hercules</h1> 
        <p>{/*this.props.exerciseData[this.props.carouselIndex].name*/}</p>
        {this.testRender()}
    
    {/* 
        {this.props.exercises.map( e => (
          
          <div>{e.id} -- {e.name}</div>
        )) } */}

        <NavLink exact to="/select-exercises">
        <button>select exercise</button>
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
  exercises: state.exercises,
  exerciseData: state.exerciseData,
  carouselIndex: state.carouselIndex
});

export default connect(
  mapStateToProps,
  { getExercise, goLeft, goRight }
)(Home);