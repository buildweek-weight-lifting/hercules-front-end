import React from 'react';
import './App.css';
import Login from './components/auth/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/auth/signup'
import Home from "./components/Home";

import Tracking from "./components/TrackingPage";
import SelectExercise from "./components/SelectExercise";
import AddExercise from './components/addExercise/addExercise';
import UpdateExercise from './components/addExercise/UpdateExercise';
import Selection from "./components/Selection"

function App() {
  return (
    <Router>
      <div className="App">

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
          exact path="/select-exercise"
          render={() => (
            <SelectExercise />
          )}
        />

        <Route
          exact path="/update-exercise"
          render={() => (
            <UpdateExercise />
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