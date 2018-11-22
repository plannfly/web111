import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import Landing from './components/Screens/landing'
import Welcome from './components/Screens/welcome'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="welcome" component={Welcome} />
        <Route path="*" component={Landing} />
      </Route>
    </Router>
  )
}

export default Routes


