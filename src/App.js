import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

import Home from './Pages/home';
import SearchResult from './Pages/seacrh_result';
import { useState } from 'react';



function App() {


  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={SearchResult}></Route>
        </Switch>
]    </Router>
  );
}

export default App;
