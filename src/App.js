import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <Provider store={store}>
            <Router>
            <Toaster />
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
