import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { logger } from './middleware/index.js'
import reducer from './reducers/index.js'

const store = createStore(reducer, applyMiddleware(logger,thunk))

export default store