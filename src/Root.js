import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from 'App'
import FoF from 'components/FoF'

const Root = ({ store }) => (
  <Provider store={ store }>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/:filter?" component={App} />
          <Route exact component={FoF} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root