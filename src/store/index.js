import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

// reducers
import MainReducers from './reducers/mainReducers'

const rootReducers = combineReducers({ MainReducers })
const store = createStore(rootReducers, applyMiddleware(thunk))

export default store