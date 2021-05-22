import './Store.page.scss';
import {useEffect, useCallback} from 'react';
import Lista from '../../components/Lista/Lista.component';
import { useSelector, useDispatch } from 'react-redux'; 
import {loadProducts} from '../../redux/actions';

export default function Store() {
    const productsList = useSelector(state => state.products); 
    const dispatch = useDispatch(); 
    
    useEffect(() => {         
        if(productsList.length===0) dispatch(loadProducts()); 
    }, [productsList, dispatch]);

    let abrirProducto = useCallback(
     (id) => {
        var product = productsList.find(x=>x.id===id);
        return {
            pathname: '/product/' + id,
            state: { 
                id: id,
                data: product
            }
        }  
    }, [productsList]);
    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>
            <Lista data={productsList} abrirProducto={abrirProducto}/>
        </div>
    );
}