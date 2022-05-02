import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from '../reducers/UserReducer'

const store = createStore(UserReducer, applyMiddleware(thunk))