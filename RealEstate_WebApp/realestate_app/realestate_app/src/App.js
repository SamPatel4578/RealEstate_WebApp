import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Properties from "./components/Properties";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PropertyDetails from "./components/PropertyDetails";
import About from "./components/About";


import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyProperty from "./pages/dashboard/MyProperty";
import FavouriteProperty from "./pages/dashboard/FavouriteProperty";
import AddProperty from "./pages/dashboard/AddProperty";
import ProfileSettings from "./pages/dashboard/ProfileSettings";
import ValuableAgents from "./pages/dashboard/ValuableAgents";
import ValuableClients from "./pages/dashboard/ValuableClients";
import ChangePassword from "./pages/dashboard/ChangePassword";

import ListingsLayout from "./components/listings/ListingsLayout"
import BuyListings from "./components/listings/BuyListings";
import RentListings from "./components/listings/RentListings";


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
                        </>
                    }
                />

                <Route path="/property/:id" element={<PropertyDetails />} />

                <Route path="/DashboardHome" element={<DashboardHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />

                <Route path="/properties/buy" element={<ListingsLayout mode="buy" />} />
                <Route path="/properties/rent" element={<ListingsLayout mode="rent" />} />


            </Routes>

            <Routes>

                {/* DASHBOARD ROUTES */}
                <Route path="/dashboard" element={<DashboardLayout title="Dashboard" />}>
                    <Route index element={<DashboardHome />} />

                    <Route path="my-properties" element={<MyProperty />} />
                    <Route path="add-property" element={<AddProperty />} />
                    <Route path="favourites" element={<FavouriteProperty />} />
                    <Route path="profile" element={<ProfileSettings />} />
                    <Route path="change-password" element={<ChangePassword />} />

                    <Route path="valuable-agents" element={<ValuableAgents />} />
                    <Route path="valuable-clients" element={<ValuableClients />} />
                </Route>


            </Routes>

            
            <Footer />
        </div>
    );
}

export default App;
