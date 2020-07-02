import { combineReducers } from 'redux'
import appReducer from '../app/_duck/reducer'

const rootReducer = () => combineReducers({
  app: appReducer
})
export default rootReducer