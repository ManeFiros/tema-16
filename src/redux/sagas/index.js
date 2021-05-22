import { fork } from "@redux-saga/core/effects"
import {takeLatest,call,put} from 'redux-saga/effects';
import {GET} from '../../services/fakestore.service';
import {ACTION_PRODUCTS, setProducts} from '../actions' 
 
export function* rootSaga() {
    yield fork(productSaga);
}

	
// El saga quedará a la escucha de la ultima acción ejecutada
// del tipo LOAD_PROODUCTS, gracias al método takeLatest, y ejecutará
// la función indicada como segundo argumento cuando detecte esa acción.
function* productSaga() {
    yield takeLatest(ACTION_PRODUCTS.LOAD_PRODUCTS, loadProducts);
}
 
// También como generadora, esta función obtendrá el listado de productos
// utilizando axios, y luego lanzará una nueva acción para actualizar el
// listado, en lugar de con dispatch, utilizando el método propio put.
function* loadProducts() {
    const products = yield call(() => GET('products/'));
    yield put(setProducts(products));
    console.log("loadProducts",products)
}