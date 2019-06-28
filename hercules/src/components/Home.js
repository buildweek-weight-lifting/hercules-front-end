import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { getExercise, deleteExercise } from "../actions/index"
import { goLeft, goRight } from "../actions/homeActions"
import "./home.css"
import Nav from "./Nav";
import './home.css'

class Home extends React.Component {
  
  componentDidMount() {
    this.props.getExercise();
    
  }
  delete = () => {
    this.props.deleteExercise(this.props.exercises[this.props.carouselIndex].id);
  }

  left = () => {
    //console.log("props", this.props)
    //console.log("state", this.state)
    if(this.props.carouselIndex > 0){
      this.props.goLeft();
    }
  }
  right = (filtered) => {
    if(this.props.carouselIndex < filtered.length-1){
      this.props.goRight();
    }
  }

  testRender = (filtered) => {
    if(filtered <= 0){
      return <h1>(No Exercises)</h1>
    }
    else{
      //this.setState({filtered: this.props.exercises.filter( e => e.userId === 2)}); 
      //console.log("filtered", filtered)
      return (
        
        <div className="workout-selection">
          
          <p className="count">{ this.props.carouselIndex+1 } / {filtered.length } </p>
          <h1>Name: {filtered[this.props.carouselIndex].name}</h1>
         
        </div>
      )
    }
  }

  render () {
    
    let userID = parseInt(localStorage.getItem("id"));
    let filtered =[];
//
    if(this.props.exercises && this.props.exercises.length > 0){
      filtered = this.props.exercises.filter( e => e.userId === userID);
    }
    return(
      
      <div className="Home">
        <Nav className="NavItems" />
        
        {/* <h1>Hercules</h1>  */}
        <p>{/*this.props.exerciseData[this.props.carouselIndex].name*/}</p>
        {this.testRender(filtered)}
    
{/*     
        {this.props.exercises.map( e => (
          
          <div>{e.id} -- {e.name}</div>
        )) } */}
        <NavLink exact to="/select-exercise">
        <div className="select-button"><p>select exercise</p></div>
        </NavLink>
        
        <div className="carouselButtons">
        <div className="btn-left" onClick={() => this.left(filtered)}> </div>
        <div className="btn-right" onClick={() => this.right(filtered)}> </div>
        
        </div>
      </div>
    );
  }
}
/*

*/
const mapStateToProps = state => ({
  exercises: state.exercises,
  exerciseData: state.exerciseData,
  carouselIndex: state.carouselIndex
});

export default connect(
  mapStateToProps,
  { getExercise, deleteExercise, goLeft, goRight }
)(Home);