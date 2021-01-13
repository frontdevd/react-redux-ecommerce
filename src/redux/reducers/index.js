import {combineReducers} from 'redux'
import pizza from './pizzas'
import filters from './filters'
import cart from './cart';

const rootReducers = combineReducers({
    pizza,
    filters,
    cart
})

export default rootReducers
