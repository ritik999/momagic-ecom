import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}:any=useAuthContext();
    const navigate=useNavigate()

    const logout=async()=>{
        try {
            const res=await fetch('http://localhost:8000/api/auth/logout');
            const data=await res.json();
            if(!data.success) throw new Error(data.message);
            setAuthUser(null)
            navigate('/login')
        } catch (error) {
            
        }finally{
            setLoading(false);
        }
    }

    return {loading,logout}
}