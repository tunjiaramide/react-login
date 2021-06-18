import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, auth, ...rest}) => {
    return (
        <Route {...rest} render={

            props => {
                if(auth.email !== ""){
                    return <Component {...rest} {...props}/>
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        }/>
    )
}

export default ProtectedRoute;