import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Home,
  Details,
  Favorites
} from './pages'
import store from './store/'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/details/:teamId">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App


