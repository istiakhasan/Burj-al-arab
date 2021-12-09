import React from 'react'
import { Route,Redirect } from 'react-router'
import { UserContextprovider } from '../Context/Contex'

const PrivateRoute = ({ children, ...rest }) => {
    const {loggedInUser,setLoggedInUser}=UserContextprovider()
    return (
        

<Route
      {...rest}
      render={({ location }) =>
        loggedInUser.isLogedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
            
        
    )
}

export default PrivateRoute
