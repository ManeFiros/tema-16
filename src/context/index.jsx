import React from 'react';
 
// Estado inicial de la aplicación.
const initialState = {
  isLogged: false,
  logIn: ()=>{},
  logOut: ()=>{},
  isDeDia: true,
  hazDia: () => {},
  hazNoche: () => {}
}
 
export default React.createContext(initialState)