import React from 'react';
import { connect } from 'react-redux';
import { updateExercise } from '../../actions/index';

class UpdateExercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            reps: '',
            sets: '',
            weight: ''
        }
    }

    componentDidMount(){
        const exercise = this.props.exercise.find(item => `${item.id}` === this.props.match.params.id);
        this.setState({
            exercise: exercise
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const updateExercise = {
            name: this.state.name,
            age: this.state.reps,
            height: this.state.sets,
            id: this.state.weight
        }
        console.log("updated exercise is", updateExercise);
        this.props.updateExercise(updateExercise);
        this.setState({
            name: '',
            reps: '',
            sets: '',
            weight: ''
        })
        this.props.history.push('/dashboard');
    }

    render(){
        return(
            <form className="exerciseInfoForm" onSubmit={this.submitHandler}>
            <h3>Exercise Title</h3>
            <input className="input-title" onChange={this.inputHandler} type="text" name="name" placeholder="e.g. Quick hit Abs" value={this.state.name}></input>
            <h3>Sets</h3>
            <input className="input-date" onChange={this.inputHandler} type="text" name="sets" value={this.state.sets} placeholder="Sets"></input>
            <h3>Description</h3>
            <textarea className="input-description" onChange={this.inputHandler} disabled="disabled" type="text" name="description" placeholder="Write a description of the workout" value={this.state.description}></textarea>

            <h3>Target Region Area</h3>
            <div className="targetRegion-Btns">
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion" value="Biceps">Biceps</button>
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion"  value="Triceps">Triceps</button>
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion"  value="Back">Back</button>
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion"  value="Chest">Chest</button>
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion"  value="Shoulders">Shoulders</button>
                <button type="button" onClick={this.inputHandler} disabled="disabled" name="targetRegion"  value="Legs">Legs</button>
            </div>

            <div className="addExercise-bottom">
                <h3>Repitions</h3>
                <h3> </h3>
                <h3 className="textlifted">Amount Lifted</h3>

                <input className="inputReps" type="text" onChange={this.inputHandler} value={this.state.reps} name="reps" placeholder="00"></input>
                <h3>AND</h3>
                <input className="inputLifted" type="text" onChange={this.inputHandler} value={this.state.weight} name="weight" placeholder="00"></input>
            </div>

            <div className="addExercise-customImage">
                <h3>Custom Image</h3>
                <input className="customImage" type="text" onChange={this.inputHandler} value={this.state.customimage} name="customimage" placeholder={`e.g https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/54522892_2244978498879256_1520327382362226688_n.jpg?_nc_cat=107&_nc_oc=AQkQKlS0mvrneVJtmCAgr2s0h8UApsxyzP7S02YoakMWFWKKCuwCj4a8c5REpm8IaLKyEUtoqbgb4aPwqE1jDp0A&_nc_ht=scontent-lga3-1.xx&oh=04f951dea2ad9f552d80f302e2152369&oe=5DC41051`}></input>
            </div>
            <button className="createExerciseBtn">Update exercise!</button>
        </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    exercises: state.exercises,
    }
  };

export default connect(mapStateToProps, {UpdateExercise})(UpdateExercise);