import { Toast } from "flowbite-react";
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";

export const useSignup=()=>{
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}:any=useAuthContext();

    const signup=async({email,password,username}:{email:string,password:string,username:string})=>{
        const noInputError=handleInputError({email,password,username});

        if(!noInputError) return;

        try {
            setLoading(true);

            const res=await fetch('api/auth/signin',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password,username})
            })

            const data=await res.json();
            setAuthUser(true);
            if(!data.success) throw new Error(data.message);
        } catch (error) {
            
        }finally{
            setLoading(false);
        }
    }

    return {loading,signup}
}

const handleInputError=({email,password,username}:{email:string,password:string,username:string})=>{
    if(! (email || password || username)){
        <Toast>
            <p>all the fields required</p>
        </Toast>
        return false
    }

    return true;
}