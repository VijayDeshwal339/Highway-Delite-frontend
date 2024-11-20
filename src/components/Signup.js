import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slice/authSlice";
import { signupApi, verifyOtpApi } from "../api/authApi";
import toast from 'react-hot-toast';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await signupApi(email);
            setOtpSent(true);
            setError("");
            toast.success('Otp sent Successfully');
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const data = await verifyOtpApi(email, otp, password);
            dispatch(loginSuccess(data));
            setError("");
            toast.success('Registered Successfully');
            navigate("/welcome");
        } catch (error) {
            setError(error.response?.data?.message || "Invalid OTP or Server Error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    {otpSent ? "Verify OTP" : "Signup"}
                </h2>
                {error && <p className="mt-4 text-sm text-red-500 bg-red-100 p-2 rounded">{error}</p>}
                <div className="mt-6">
                    {!otpSent ? (
                        <>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <button
                                onClick={handleSignup}
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition duration-200"
                            >
                                Send OTP
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
                                <input
                                    id="otp"
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                    className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <button
                                onClick={handleVerifyOTP}
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition duration-200"
                            >
                                Verify OTP
                            </button>
                        </>
                    )}
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
