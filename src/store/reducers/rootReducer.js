import counterReducer from './counter'
import resultReducer from './result'

import { combineReducers } from "redux";


const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
})

export default rootReducers 