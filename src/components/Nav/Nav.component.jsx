import './Nav.component.scss';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
//import {  BottomNavigationAction, Button } from '@material-ui/core';
//import ButtonNav from '../ButtonNav/ButtonNav.component';
//import HomeIcon from '@material-ui/icons/Home';
//import WorkIcon from '@material-ui/icons/Work';
//import HelpIcon from '@material-ui/icons/Help';	
//import { WbSunny, NightsStay } from '@material-ui/icons';
import Context from '../../context';

export default function Nav() { 
  const context = useContext(Context);

  const hazDia=()=>{context.hazDia();}
  const hazNoche=()=>{context.hazNoche();}

  return (
    <Context.Consumer>
    {context => (<div className={context.isDeDia?"Nav navDia":"Nav navNoche"}> 
        
          <Link className="Nav-link" label="Home" to="/">Home</Link>
          <Link className="Nav-link" label="Store" to="/store">Store</Link>
          <Link className="Nav-link" label="About" to="/about">About</Link>
        {/*
        <Link className="Nav-link" to='/store'><BottomNavigationAction className="Nav-link" label="Store" icon={<WorkIcon />} /></Link>
        <Link className="Nav-link" to='/about'><BottomNavigationAction className="Nav-link" label="About" icon={<HelpIcon />} /></Link>
        {context.isDeDia?
          <Button onClick={hazNoche} className="Nav-link" label="Día/Noche" icon={<NightsStay />} />:
          <Button onClick={hazDia} className="Nav-link" label="Noche/Día" icon={<WbSunny />} />}*/}
        
    </div>)}
    </Context.Consumer>
  );
}