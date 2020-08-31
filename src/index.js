import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/css/index.css'
import * as serviceWorker from 'serviceWorker'
import store from 'utils/configureStore'
import Root from 'Root'

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))

serviceWorker.unregister();
