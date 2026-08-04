import React, { createContext, useContext, useState } from "react";

type AuthType='signin'|'signup'|null;

type AuthContextType={
    authModel:AuthType,
    openSignin:()=>void,
    openSignup:()=>void,
    closeModal:()=>void
}

const AuthContext=createContext<AuthContextType|null>(null);

export function AuthProvider({children}:{children:React.ReactNode}){
    const [authModel,setAuthModel]=useState<AuthType>(null);
    const openSignin=()=>setAuthModel("signin");
    const openSignup=()=>setAuthModel('signup')
    const closeModal=()=>{
          console.log("Closing modal");
  setAuthModel(null);
    }

    return (
        <AuthContext.Provider value={{authModel,openSignin,openSignup,closeModal}}>
            {children}
        </AuthContext.Provider>
    )


}


export function useAuth(){
    const context=useContext(AuthContext);
      if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;

}