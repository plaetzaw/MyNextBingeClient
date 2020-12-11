//React
import React from 'react';
import ReactDOM from 'react-dom';

//Layout

//Pages
import Home from './pages/home'
import Picker from './pages/picker'
import Test from './pages/test'
import Login from './pages/login'
import Register from './pages/register'
import Movies from './pages/movies'
import TVShows from './pages/tvshows'
import People from './pages/people'
import FullMovie from './components/fullMovieCard'

//Snackbars

//Routing
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Redux
import {Provider} from 'react-redux'

//Store
import store from "./redux/store"

//Authentication

//


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Picker" component={Picker}/>
      <Route path="/Movies" component={Movies}/>
      {/* <Route path='/FullMovieInfo' component={FullMovie}/> */}
      <Route path="/Movies/:id" component={FullMovie}/>
      <Route path="/TVShows" component={TVShows}/>
      <Route path="/People" component={People}/>
      {/* <Route path="/Test" component={Test}/> */}
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


