import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import "../styles/Dashboard.css";

export default function DashboardLayout({ title }) {
    return (
        <div className="dashboard-page">

            {/* HERO */}
            <div className="dashboard-hero">
                <div className="dashboard-hero-overlay">
                    <h1>{title}</h1>
                </div>
            </div>

            {/* SHELL */}
            <div className="dashboard-shell">
                <DashboardSidebar />

                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}
