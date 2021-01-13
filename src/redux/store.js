import {applyMiddleware, compose, createStore} from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

let store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
