import logo from './logo.svg';
import './App.scss';
import React, {useReducer} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Nav from './components/Nav/Nav.component';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.component';
import Login from './pages/Login/Login.page';
import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page';
import Context from './context';
import { reducerIsLogged, initialStateIsLogged, LOG_IN, LOG_OUT, DIA, NOCHE, reducerIsDeDia, initialStateIsDeDia} from './context/reducers';

function App() {

  const [isLogged, dispatch] = useReducer(reducerIsLogged, initialStateIsLogged);
  const [isDeDia, dispatchMode] = useReducer(reducerIsDeDia, initialStateIsDeDia);

  let logOut = () => { dispatch({type: LOG_OUT}); }

  let logIn = () => { dispatch({type: LOG_IN}); }

  let hazDia = () => { dispatchMode({type: DIA}); }

  let hazNoche = () => { dispatchMode({type: NOCHE}); }

  return (
    <div className="App">
      <Context.Provider value={{
        isLogged: isLogged,
        logIn: logIn,
        logOut: logOut,
        isDeDia: isDeDia,
        hazDia: hazDia,
        hazNoche: hazNoche,
      }}>
        <header className={isDeDia?"App-header header-dia":"App-header header-noche"}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>
        </header>
        <div className={isDeDia?"Dia":"Noche"}>
          <Router>
            <Nav/>
            <Route exact path="/" component={Login}></Route>
            <ProtectedRoute exact path="/store" component={Store} />
            <ProtectedRoute path="/product/:MODIFICABLE" component={Product}/>
            <ProtectedRoute exact path="/about" component={About}/>
            <Redirect from="/**" to='/' />
          </Router>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
