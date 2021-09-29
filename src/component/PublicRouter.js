import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({component: Component, restricted,auth, ...rest}) {
    return (
        <Route {...rest} render={props => (
            auth && restricted ?
                <Redirect to="/profile" />
            : <Component {...props} />
        )} />
    )
}

export default PublicRoute