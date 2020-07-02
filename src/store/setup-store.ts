import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import rootReducer from './root-reducer'


const initialState = {}
const enhancers = []
const middleware = [reduxLogger,thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension =  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(rootReducer(),initialState,composedEnhancers);
