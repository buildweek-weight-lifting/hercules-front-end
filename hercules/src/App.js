import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import PrivateRoute from './PrivateRoute'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Signup from './components/auth/Signup'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
//import AddExcercise from "./components/AddExcercise";
import SelectExcercises from "./components/SelectExcercises";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route
          exact path="/"
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
          exact path="/select-excercises"
          render={() => (
            <SelectExcercises />
          )}
        />


      </div>
    </Router>
  )
}

/*
<Route
          exact path="/add-excercise"
          render={() => (
            <AddExcercise />
          )}
        />
        */

export default App;