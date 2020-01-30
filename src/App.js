import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Employee_List from './components/Employee_List';
import Dashboard from './components/Dashboard';

class App extends Component {

  render() {
  return (
     
     <Router>
        <div>
            <Route exact path="/" component = {Login} />
            <Route exact path="/dashboard" component = {Dashboard} />
            <Route exact path="/employee_list" component = {Employee_List} />        

        </div>
      </Router>    
  
    );
  }
}


export default App;
