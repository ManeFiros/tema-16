import React from "react";
import { Route, Redirect } from "react-router-dom"; 
import Context from '../../context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Context.Consumer>
          {context => (
                <Route
                    {...rest}
                    render={ props => {
                        if(context.isLogged) return <Component {...props} />;
                        else return <Redirect to='/' />;
                    }}
                />
            )}
      </Context.Consumer>
    );
};

export default ProtectedRoute;