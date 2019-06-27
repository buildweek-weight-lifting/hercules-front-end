import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import PrivateRoute from './PrivateRoute'
import Login from './components/auth/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/auth/signup'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Tracking from "./components/TrackingPage";
//import AddExcercise from "./components/AddExcercise";
import SelectExercise from "./components/SelectExercise";
import AddExercise from './components/addExercise/addExercise';
import Selection from "./components/Selection"

function App() {
  return (
    <Router>
      <div className="App">

        <Nav />

        <Route
          exact path="/dashboard"
          render={() => (
            <Home />
          )}
        />

        <Route
          exact path="/tracking"
          render={() => (
            <Tracking />
          )}
        />

        <Route
          exact path="/login"
          render={() => (
            <Login />
          )}
        />

        <Route
          exact path="/signup"
          render={() => (
            <SignUp />
          )}
        />
        
        <Route
          exact path="/add-exercise"
          render={() => (
            <AddExercise />
          )}
        />

        <Route
          exact path="/select-exercises"
          render={() => (
            <SelectExercise />
          )}
        />

          <Route
          exact path="/"
          render={() => (
            <Selection />
          )}
        />


      </div>
    </Router>
  )
}

export default App;