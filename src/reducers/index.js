import { combineReducers } from 'redux'

import counterReducer from './counter'
import extraCounterReducer from './extra-counter'

export default combineReducers({
  counter: counterReducer,
  extraCounter: extraCounterReducer
})
