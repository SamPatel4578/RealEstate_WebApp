import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

import './styles/main.css';

function App() {
    return (
        <div id="app-wrapper" className="main-content">
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Properties />
                        </>
                    }
                />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
