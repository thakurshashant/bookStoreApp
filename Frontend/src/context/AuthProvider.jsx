import React, { createContext, useContext } from 'react'

export const AuthContext=createContext()

export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("user");
    const [authUser, setAuthUser]=useState(
        initialAuthUser? JSON.parse(initialAuthUser): undefined
    )
    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}> |
        {children}
        </AuthContext.Provider>
         )

}
export const useAuth=()=>useContext(AuthContext);

//made context api . so that we can access user globally , from local storage