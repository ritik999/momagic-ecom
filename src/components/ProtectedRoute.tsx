import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const {authUser,setAuthUser}:any=useAuthContext();
    console.log(authUser);
    

    return authUser?<Outlet />:<Navigate to={'/login'} />
}

export default ProtectedRoute