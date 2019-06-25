import React from 'react';
import { connect } from 'react-redux';
import { addExercise } from '../../actions/index.js';
import './addexercise.css'

class AddExercise extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            exercisetitle: '',
            date: '',
            description: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addExercise(this.state);
        this.setState({
            exercisetitle: '',
            date: '',
            description: ''
        })
    }

    render(){
        return(
            <div className="addExercise-page">
                <div className="addExercise-back-btn"></div>
                <h1 className="addExerciseHeader">ADD A EXERCISE</h1>
            <form className="exerciseInfoForm" onSubmit={this.submitHandler}>
                <h3>Exercise Title</h3>
                <input className="input-title" onChange={this.inputHandler} type="text" name="exercisetitle" placeholder="e.g. Quick hit Abs" value={this.state.name}></input>
                <h3>Date</h3>
                <input className="input-date" onChange={this.inputHandler} type="text" name="date" value={this.state.age} placeholder="e.g. June 11, 2019"></input>
                <h3>Description</h3>
                <textarea className="input-description" onChange={this.inputHandler} type="text" name="description" placeholder="Write a description of the workout" value={this.state.height}></textarea>

                <h3>Target Region Area</h3>
                <div className="targetRegion-Btns">
                    <button>Biceps</button>
                    <button>Triceps</button>
                    <button>Back</button>
                    <button>Chest</button>
                    <button>Shoulders</button>
                    <button>Legs</button>
                </div>

                <div className="addExercise-bottom">
                    <h3>Repitions</h3>
                    <h3></h3>
                    <h3 className="textlifted">Amount Lifted</h3>

                    <input className="inputReps" onChange={this.inputHandler} name="repititions" placeholder="00"></input>
                    <h3>AND</h3>
                    <input className="inputLifted" onChange={this.inputHandler} name="amountlifted" placeholder="00"></input>
                </div>
            </form>
            </div>
        )
    }
}

export default connect( ()=>({}), {addExercise})(AddExercise);