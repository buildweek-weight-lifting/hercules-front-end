import React from "react";
import { getExercise, deleteExercise } from "../actions/index"
import { connect } from "react-redux";
import './selectExercise.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from "./Nav";
import './selectExercise.css'

class SelectExercise extends React.Component {

  

  componentDidMount() {
    this.props.getExercise();

  }

  delete = (filtered) => {
    console.log("filtered", filtered)
    let sendId = filtered[this.props.carouselIndex].id;
    console.log("ex id", sendId)
    this.props.deleteExercise(sendId);
  }

  testRender = (filtered) => {
    if(filtered <= 0){
      return <h1>(No Exercises)</h1>
    }
    else{
      return (
        <div className="exercise-info">
          <p>Exercise: {filtered[this.props.carouselIndex].name}</p>
          <p>Reps: {filtered[this.props.carouselIndex].reps}</p>
          <p>Weights: {filtered[this.props.carouselIndex].weight}</p>
        </div>
      )
    }
  }

  render(){
    let userID = parseInt(localStorage.getItem("id"));

    console.log("user id", localStorage.getItem("id"))
    //let filtered = this.props.exercises.filter( e => e.userId === userID);
    let filtered =[];
    if(this.props.exercises && this.props.exercises.length > 0){
      //window.location.reload();
      filtered = this.props.exercises.filter( e => e.userId === userID);
    }
    console.log("exercises", this.props.exercises)

    return(
      <div className="Home">
        <Nav />

        <div className="action-btns">
          <div className="delete-btn" onClick={() => this.delete(filtered)}>delete</div>
          <NavLink exact to="/update-exercise">
          <div className="update-btn">update</div>
          </NavLink>
        </div>
        {this.testRender(filtered)}
        <NavLink exact to="/dashboard">
        <div className="back-btn"></div>
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

export default withRouter(connect(
  mapStateToProps,
  { getExercise, deleteExercise }
)(SelectExercise));


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
     