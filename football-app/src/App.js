import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Home,
  Details
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:teamId">
          <Details />
        </Route>
      </Switch>
    </Router>
  )
}

export default App


