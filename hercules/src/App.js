import React from 'react';
import './App.css';
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/auth/Signup'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Tracking from "./components/TrackingPage";
import SelectExercises from "./components/SelectExercises";
import AddExercise from './components/addExercise/AddExercise';
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
            <SelectExercises />
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