import React from "react";
import { getExercise, deleteExercise } from "../actions/index"
import { connect } from "react-redux";
import './selectExercise.css';
import { NavLink } from 'react-router-dom';

class SelectExercise extends React.Component {

  

  componentDidMount() {
    this.props.getExercise();

  }

  delete = () => {
    let sendId = this.props.exercises[this.props.carouselIndex].id;
    this.props.deleteExercise(sendId);
  }

  testRender = (filtered) => {
    if(filtered <= 0){
      return <h1>(No Exercises)</h1>
    }
    else{
      return (
        <div>
          <p>name: {filtered[this.props.carouselIndex].name}</p>
          <p>reps: {filtered[this.props.carouselIndex].reps}</p>
          <p>weight: {filtered[this.props.carouselIndex].weight}</p>
        </div>
      )
    }
  }

  render(){
    let userID = parseInt(localStorage.getItem("id"));
    let filtered = this.props.exercises.filter( e => e.userId === userID);
    console.log("exercises", this.props.exercises)
    return(
      <div className="Home">
        <button onClick={this.delete}>delete</button>
        <NavLink exact to={`/update-exercise`}>
        <button>update</button>
        </NavLink>
        
        {this.testRender(filtered)}
        <NavLink exact to="/dashboard">
        <button>back</button>
        </NavLink>
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
  { getExercise, deleteExercise }
)(SelectExercise);


/*
<h1>Single Exercise Page</h1>

      <div className="list">
        <div className="listColumn">
        DATE
        </div>

        <div className="listColumn">
        REPS
        </div>

        <div className="listColumn">
        AMOUNT LIFTED
        </div>
      </div>
      */
     