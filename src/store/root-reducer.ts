import { combineReducers } from 'redux'
import appReducer from '../app/_duck/reducers'

const rootReducer = () => combineReducers({
  app: appReducer
})
export default rootReducer