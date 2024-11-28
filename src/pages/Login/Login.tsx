import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        await login({email,password});
    };

    return (
        <>
            {loading ? <h1>loading...</h1> : (
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
                    <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl transform transition-all hover:scale-105 duration-300">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            >
                                Login
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
