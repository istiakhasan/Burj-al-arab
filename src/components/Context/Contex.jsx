import React, { createContext, useContext, useState } from 'react'
const usercontext=createContext()

const Context = ({children}) => {
    const [loggedInUser,setLoggedInUser]=useState({})
    return (
        <usercontext.Provider value={{loggedInUser,setLoggedInUser}}>
            {children}
            
        </usercontext.Provider>
    )
}

export default Context
export const UserContextprovider=()=>{
   return useContext(usercontext)
}
