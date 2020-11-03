//React
import React from 'react';
import ReactDOM from 'react-dom';

//Layout

//Pages
import Home from './pages/home'

//Snackbars

//Routing
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Redux

//Store

//Authentication

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Home" component={Home}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


