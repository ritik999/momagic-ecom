import { Toast } from "flowbite-react";
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {authUser,setAuthUser}:any=useAuthContext();
    const navigate=useNavigate()

    const login = async ({ email, password }: { email: string, password: string }) => {
        const noInputError = handleInputError({ email, password });

        if (!noInputError) return;

        try {
            setLoading(true);

            const res = await fetch('http://localhost:8000/api/auth/login ', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json();

            if (!data.success) {
                throw new Error(data.message);
            }
            
            setAuthUser(true);
            navigate('/')
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
    return { loading, login }
}

const handleInputError = ({ email, password }: { email: string, password: string }) => {
    if (!email || !password) {
        <Toast>
            <p>please enter all the fields</p>
        </Toast>
        return false;
    }
    return true;
}