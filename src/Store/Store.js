import { createStore} from 'redux'

import CartReducer from '../Reducer/CartReducer'

export const Store = createStore(CartReducer)