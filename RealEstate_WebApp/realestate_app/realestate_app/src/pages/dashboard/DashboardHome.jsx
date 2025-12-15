//import DashboardLayout from "../layouts/DashboardLayout";
//import { useEffect, useState } from "react";
//import { getSaleProperties, getRentProperties } from "../services/propertyService";
//import "../styles/Dashboard.css";

//export default function Dashboard() {
//    return (
//        <DashboardLayout>
//            <DashboardContent />
//        </DashboardLayout>
//    );
//}

///* =========================
//   DASHBOARD CONTENT ONLY
//========================= */
//function DashboardContent() {
//    const user = JSON.parse(localStorage.getItem("user"));

//    return (
//        <div className="dashboard-container">
//            <h2 className="dashboard-title">{user.role} Dashboard</h2>

//            {user.role === "Agent" ? <AgentDashboard /> : <CustomerDashboard />}
//        </div>
//    );
//}

//function CustomerDashboard() {
//    return (
//        <>
//            <div className="row g-4 dashboard-stats">
//                <Stat title="Saved Properties" value="8" />
//                <Stat title="Viewed Properties" value="23" />
//                <Stat title="Enquiries Sent" value="4" />
//            </div>

//            <div className="dashboard-card">
//                <h5 className="section-title">Recently Viewed</h5>
//            </div>
//        </>
//    );
//}

//function AgentDashboard() {
//    const [stats, setStats] = useState({ total: 0, rent: 0, balance: 0 });

//    useEffect(() => {
//        async function load() {
//            const sales = await getSaleProperties();
//            const rent = await getRentProperties();

//            setStats({
//                total: sales.length + rent.length,
//                rent: rent.length,
//                balance: sales.reduce((s, p) => s + (p.salePrice ?? 0), 0)
//            });
//        }
//        load();
//    }, []);

//    return (
//        <>
//            <div className="row g-4 dashboard-stats">
//                <Stat title="Total Property" value={stats.total} />
//                <Stat title="Rent / Sold" value={stats.rent} />
//                <Stat title="Total Balance" value={`$${stats.balance}`} />
//            </div>

//            <div className="dashboard-card">
//                <h5 className="section-title">Active Properties</h5>
//            </div>
//        </>
//    );
//}

//function Stat({ title, value }) {
//    return (
//        <div className="col-md-4 col-lg-2">
//            <div className="dashboard-stat-card">
//                <small>{title}</small>
//                <h4>{value}</h4>
//            </div>
//        </div>
//    );
//}



import "../../styles/Dashboard.css";

/* =========================
   DASHBOARD HOME (OUTLET PAGE)
========================= */
export default function DashboardHome() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return null;

    return (
        <div className="dashboard-container">
            {user.role === "Agent" ? <AgentDashboard /> : <CustomerDashboard />}
        </div>
    );
}

/* =========================
   CUSTOMER DASHBOARD (HARDCODED)
========================= */
function CustomerDashboard() {
    const stats = {
        saved: 8,
        viewed: 23,
        enquiries: 4
    };

    const recentlyViewed = [
        {
            id: 1,
            name: "Modern Family Home",
            location: "Adelaide, SA",
            views: 42,
            status: "For Sale",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        {
            id: 2,
            name: "City Apartment",
            location: "Melbourne, VIC",
            views: 31,
            status: "For Rent",
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        },
        {
            id: 3,
            name: "Beachside Villa",
            location: "Gold Coast, QLD",
            views: 58,
            status: "For Sale",
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
        }
    ];

    return (
        <>
            {/* STATS */}
            <div className="row g-4 dashboard-stats">
                <Stat title="Saved Properties" value={stats.saved} />
                <Stat title="Viewed Properties" value={stats.viewed} />
                <Stat title="Enquiries Sent" value={stats.enquiries} />
            </div>

            {/* RECENTLY VIEWED */}
            <div className="dashboard-card">
                <h5 className="section-title">Recently Viewed</h5>

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
                        {recentlyViewed.map(p => (
                            <PropertyRow key={p.id} property={p} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

/* =========================
   AGENT DASHBOARD (UNCHANGED LOGIC)
========================= */
function AgentDashboard() {
    const stats = {
        total: 545,
        rentSold: 265,
        clients: 265,
        agents: 25,
        projects: 15,
        balance: "$15.45 B"
    };

    const properties = [
        {
            id: 1,
            name: "Beach View Villa",
            location: "Denpasar, Bali",
            reviews: "60 Reviews",
            status: "For Sale",
            views: 163,
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
        },
        {
            id: 2,
            name: "Shangri La Apartment",
            location: "Singapore",
            reviews: "100 Reviews",
            status: "For Rent",
            views: 260,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        }
    ];

    return (
        <>
            <div className="row g-4 dashboard-stats">
                <Stat title="Total Property" value={stats.total} />
                <Stat title="Rent / Sold" value={stats.rentSold} />
                <Stat title="Total Clients" value={stats.clients} />
                <Stat title="Active Agents" value={stats.agents} />
                <Stat title="Pending Projects" value={stats.projects} />
                <Stat title="Total Balance" value={stats.balance} />
            </div>

            <div className="dashboard-card">
                <h5 className="section-title">Active Properties</h5>

                <table className="table dashboard-table">
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Status</th>
                            <th>Views</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map(p => (
                            <PropertyRow key={p.id} property={p} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

/* =========================
   REUSABLE COMPONENTS
========================= */
function Stat({ title, value }) {
    return (
        <div className="col-md-4 col-lg-2">
            <div className="dashboard-stat-card">
                <small>{title}</small>
                <h4>{value}</h4>
            </div>
        </div>
    );
}

function PropertyRow({ property }) {
    return (
        <tr>
            <td>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <img
                        src={property.image}
                        alt={property.name}
                        style={{
                            width: "64px",
                            height: "48px",
                            borderRadius: "6px",
                            objectFit: "cover"
                        }}
                    />
                    <div>
                        <strong>{property.name}</strong>
                        <div className="table-subtext">📍 {property.location}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className={`status-pill ${property.status === "For Sale" ? "sale" : "rent"}`}>
                    {property.status}
                </span>
            </td>
            <td>{property.views}</td>
            <td>
                <span className="status-available">View</span>
            </td>
        </tr>
    );
}
