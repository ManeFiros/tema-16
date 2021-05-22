
import './Product.page.scss';
export default function Product(props) {
    let { id, data } = props.history.location.state;
    
    return (
        <div className="Product">
            <h1>{data.title}</h1>
            <h4>{data.category}</h4>
            <div className="contentProduct">
                <img className="imgProduct" src={data.image} alt={data.category} />
                <div className="imgText">
                    <div className="contentProduct"><strong>Precio:</strong>&nbsp;
                    <span className="price">{new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(data.price)}</span> </div>
                    
                    <p>{data.description}</p>
                </div>
            </div>

            <div><strong>Referencia:</strong> {id.toString().padStart(6,'0')}</div>
        </div>
    );
}