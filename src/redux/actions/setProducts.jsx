import {ACTION_PRODUCTS} from './index'

const setProducts = (products)=>{
    return {type:ACTION_PRODUCTS.SET_PRODUCTS, payload: products}
}
export default setProducts;