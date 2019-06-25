import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExercise } from '../../actions/index.js';
import Exercise from './Exercise';

class ExerciseList extends Component {
    componentDidMount(){
        this.props.getExercise();
      }

    render(){
        return(
        <div>
            {this.props.exercises.map( exercises =>
                < Exercise exercises={exercises} key={exercises.name} />
            )}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    exercises: state.exercises,
    error: state.error,
    loading: state.loading,
    }
  };
  
export default connect(mapStateToProps, { getExercise } )(ExerciseList);