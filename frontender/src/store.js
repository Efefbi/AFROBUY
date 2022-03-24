import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, 
    productListReducer 
} from './reducers/productReducers';
import { userSigninReducer } from './reducers/userReducers';
/*import data from './data';*/

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,

    },
    cart: {
       cartItems: localStorage.getItem('cartItems')
       ? JSON.parse(localStorage.getItem('cartItems'))
       : [],
    },
};
const reducer = combineReducers({
    productlists: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,

}); 
/*(state,action) => {
    return { products: data.products};
};*/
const composeEnhancer = Window.REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;