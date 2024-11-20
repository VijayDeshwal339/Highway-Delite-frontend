import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p>You need to log in first.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-semibold">Welcome, {user.email}!</h1>
        </div>
    );
};

export default Welcome;
