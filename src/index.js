import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Print from './Print'
import Paper from './Paper'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/resume' component={Paper} />
      <Route path='/make-pdf' render={() => <Print makePdf={true} />}/>
    </Switch>
  </Router>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
