import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';

import {products} from './reducers'

	
// Crearemos un saga
const sagaMiddleware = createSagaMiddleware()

let reduccers = combineReducers({
    products: products
});

let store = createStore(
    reduccers,
    compose(applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
// Ejecutamos el hilo de ejecución del middleware,
// sólo funcionará una vez ejecutado el método applyMiddleware
sagaMiddleware.run(rootSaga);
export default store;