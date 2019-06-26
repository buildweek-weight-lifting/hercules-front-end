import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import PrivateRoute from './PrivateRoute'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/auth/Signup'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
//import AddExcercise from "./components/AddExcercise";
import SelectExcercises from "./components/SelectExercises";
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
          exact path="/profile"
          render={() => (
            <Profile />
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
          exact path="/add-excercise"
          render={() => (
            <AddExercise />
          )}
        />

        <Route
          exact path="/select-excercises"
          render={() => (
            <SelectExcercises />
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