import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );

}

export default App;
