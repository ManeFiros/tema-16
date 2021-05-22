import React,{memo} from 'react'; 
import MediaCard from '../Card/Card.component';
import './Lista.component.scss'; 


export default memo( function Lista(props){
    //useEffect(() => { console.log("useEffect Lista"); });
    const data = props.data;
    const listItems = data.map(
        (elem,index) => 
        <li className="text-left" key={elem.id}>
            <MediaCard to={props.abrirProducto(elem.id)}
                category={elem.category}
                image={elem.image}
                title={elem.title}/>
        </li>
    );
    return(
        <ul className="list-group">{listItems}</ul>        
    );
})