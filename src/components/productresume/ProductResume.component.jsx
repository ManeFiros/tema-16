import {Link} from 'react-router-dom';
import './ProductResume.component.scss'
export default function ProductResume (props){
    return(
        <Link to={props.to} className="Product-link">
            <img className="imgParrilla" src={props.image} alt={props.category} />
            <p className="enlace">{props.title}</p>
        </Link>
    );
}