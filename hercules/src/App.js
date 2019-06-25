import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import PrivateRoute from './PrivateRoute'
import Login from './components/auth/login'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Signup from './components/auth/signup'
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
    </Router>
)}

export default App;