import { combineReducers } from 'redux';

import catalogProducts from './catalogProducts.reduce';
import cart from './cart.reduce';

export default combineReducers({
    catalogProducts,
    cart
});