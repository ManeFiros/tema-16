import {ACTION_PRODUCTS} from './index'

export const loadProducts = () => {
    return {
        type: ACTION_PRODUCTS.LOAD_PRODUCTS
    }
}
export default loadProducts;