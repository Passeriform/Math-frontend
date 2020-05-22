import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage} from './containers/HomePage';
import {ResultPage} from './containers/ResultPage';
import {NotFoundPage} from './containers/NotFoundPage';

import './App.css';

export const App = () => {
  return (<Fragment>
    <Router>
      <div className="App">
        <Switch>
          <Route exact="true" path="/" component={HomePage}/>
          <Route path="/result" component={ResultPage}/>
          <Route path="" component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  </Fragment>);
}
