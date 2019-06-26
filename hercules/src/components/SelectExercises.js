import React from "react";
import { getExercise } from "../actions/index"
import { connect } from "react-redux";
import './selectExercise.css';

const SelectExercises = () => {

  return(
    <div className="Home">
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
    </div>
  );
}

const mapStateToProps = state => ({
  exercise: state.exercise,
  exerciseData: state.exerciseData,
  carouselIndex: state.carouselIndex
});

export default connect(
  mapStateToProps,
  { getExercise }
)(SelectExercises);