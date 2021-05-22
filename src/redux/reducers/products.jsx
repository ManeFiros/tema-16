import {initialState} from './index'
import {ACTION_PRODUCTS} from '../actions'
const products = (state = initialState.products, action)=>{
    switch(action.type){
        case ACTION_PRODUCTS.SET_PRODUCTS: state=action.payload; return state;
        case ACTION_PRODUCTS.DELETE_PRODUCTS: state=[]; return state;
        default: return state;
    }
}
export default products;