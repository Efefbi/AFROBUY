import {applyMiddleware, createStore,compose,Middleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
{/*import data from './data';*/}
import { productListReducer } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productlists: productListReducer,

}); 
{/*(state,action) => {
    return { products: data.products};
};*/}
const composeEnhancer = window__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;