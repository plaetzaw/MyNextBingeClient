//React
import React from 'react';
import ReactDOM from 'react-dom';

//Layout

//Pages
import Home from './pages/home'
import Picker from './pages/picker'

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
      <Route path="/Picker" component={Picker}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


