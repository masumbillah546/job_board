import { combineReducers } from 'redux'
//
import loaderReducer from './loader'
import alertReducer from './alert'
import authReducer from './auth'
import paginationReducer from './pagination'

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  alert: alertReducer,
  pagination: paginationReducer,
})

export * from './loader'
export * from './auth'
export * from './alert'
export * from './pagination'

export default rootReducer // for configure store in store/index.js
