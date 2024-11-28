import { createContext, useContext, useState } from "react"


type authContextType={
    authUser:Boolean | null,
    setAuthUser:React.Dispatch<React.SetStateAction<Boolean | null>>
}

const AuthContext= createContext<authContextType | null>(null);

export const useAuthContext=()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider=({children}:{children:React.ReactNode})=>{
    const [authUser,setAuthUser]=useState<Boolean | null>(false);
    
    return(
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}