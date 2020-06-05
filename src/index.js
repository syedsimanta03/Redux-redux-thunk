import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux";
import App from './App'
import rootReducers from './store/reducers/rootReducer'


const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action)
      console.log('[Middleware] Dispatching', store.getState())
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
