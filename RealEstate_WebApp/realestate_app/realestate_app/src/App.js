import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import Login from "./components/Login";

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
                            <SearchBar />
                            <Properties />
                        </>
                    }
                />

                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
