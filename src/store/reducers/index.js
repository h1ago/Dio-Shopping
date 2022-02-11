import { combineReducers } from 'redux';

import catalog from './catalog.reduce';
import cart from './cart.reduce';

export default combineReducers({
    catalog,
    cart
});