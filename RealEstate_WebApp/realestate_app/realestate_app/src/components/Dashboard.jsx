import { useEffect, useState } from "react";
import { getSaleProperties, getRentProperties } from "../services/propertyService";
import DashboardSidebar from "../components/DashboardSidebar";
import "../styles/Dashboard.css";

/* =========================
   MAIN DASHBOARD CONTROLLER
========================= */
export default function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
            window.location.href = "/login";
        } else {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    if (!user) return null;

    const dashboardTitle =
        user.role === "Agent" ? "Agent Dashboard" : "Customer Dashboard";

    return (
        <div className="dashboard-page">

            {/* DASHBOARD HERO */}
            <div className="dashboard-hero">
                <div className="dashboard-hero-overlay">
                    <h1>{dashboardTitle}</h1>
                </div>
            </div>

            {/* DASHBOARD CONTENT */}
            <div className="dashboard-shell">

                {/* SIDEBAR */}
                <aside className="dashboard-sidebar">
                    <DashboardSidebar user={user} />
                </aside>

                {/* MAIN CONTENT */}
                <main className="dashboard-content">
                    {user.role === "Agent" ? (
                        <AgentDashboard />
                    ) : (
                        <CustomerDashboard user={user} />
                    )}
                </main>

            </div>
        </div>
    );
}

/* =========================
   CUSTOMER DASHBOARD
========================= */
function CustomerDashboard({ user }) {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">
                Welcome back, {user.firstName}
            </h2>

            <div className="row g-4 dashboard-stats">
                <DashboardCard title="Saved Properties" value="8" />
                <DashboardCard title="Viewed Properties" value="23" />
                <DashboardCard title="Enquiries Sent" value="4" />
            </div>

            <div className="dashboard-card">
                <h5 className="section-title">Recently Viewed</h5>
                <p className="text-muted">
                    This section will be connected to backend.
                </p>
            </div>
        </div>
    );
}

/* =========================
   AGENT DASHBOARD
========================= */
function AgentDashboard() {
    const [stats, setStats] = useState({
        total: 0,
        rent: 0,
        balance: 0
    });

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function loadDashboardData() {
            const sales = await getSaleProperties();
            const rentals = await getRentProperties();

            const totalBalance = sales.reduce(
                (sum, p) => sum + (p.salePrice ?? 0),
                0
            );

            setStats({
                total: sales.length + rentals.length,
                rent: rentals.length,
                balance: totalBalance
            });

            setProperties(sales.slice(0, 6));
        }

        loadDashboardData();
    }, []);

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Overview</h2>

            <div className="row g-4 dashboard-stats">
                <DashboardCard title="Total Property" value={stats.total} />
                <DashboardCard title="Rent / Sold" value={stats.rent} />
                <DashboardCard title="Total Balance" value={`$${stats.balance.toLocaleString()}`} />
                <DashboardCard title="Pending Projects" value="15" />
                <DashboardCard title="Total Clients" value="265" />
            </div>

            <div className="dashboard-card">
                <h5 className="section-title">Active Properties</h5>

                <table className="table dashboard-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Status</th>
                            <th>Views</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map(p => (
                            <PropertyRow
                                key={p.property.propertyId}
                                name={`${p.property.addressHouseNumber} ${p.property.addressStreetName}`}
                                location={p.property.addressSuburb}
                                status={p.salePrice ? "For Sale" : "For Rent"}
                                views={Math.floor(Math.random() * 300)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* =========================
   REUSABLE COMPONENTS
========================= */
function DashboardCard({ title, value }) {
    return (
        <div className="col-md-4 col-lg-2">
            <div className="dashboard-stat-card">
                <small>{title}</small>
                <h4>{value}</h4>
            </div>
        </div>
    );
}

function PropertyRow({ name, location, status, views }) {
    return (
        <tr>
            <td>
                <strong>{name}</strong>
                <div className="table-subtext">{location}</div>
            </td>
            <td>
                <span className={`status-pill ${status === "For Sale" ? "sale" : "rent"}`}>
                    {status}
                </span>
            </td>
            <td>{views}</td>
            <td>
                <span className="status-available">Available</span>
            </td>
        </tr>
    );
}
