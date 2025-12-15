import { Link, useNavigate } from "react-router-dom";

export default function DashboardSidebar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return null;

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <aside className="dashboard-sidebar">

            {/* PROFILE */}
            <div className="sidebar-profile">
                <img
                    src="https://i.pravatar.cc/120"
                    alt="User"
                />
                <h6>{user.firstName}</h6>
                <small>{user.role}</small>
            </div>

            {/* MENU */}
            <nav className="sidebar-menu">
                <Link to="/dashboard">🏠 Dashboard</Link>

                {/* AGENT MENU */}
                {user.role === "Agent" && (
                    <>
                        <Link to="/dashboard/my-properties">🏢 My Properties</Link>
                        <Link to="/dashboard/add-property">➕ Add Property</Link>
                        <Link to="/dashboard/valuable-clients">👥 Valuable Clients</Link>
                    </>
                )}

                {/* CUSTOMER MENU */}
                {user.role === "Customer" && (
                    <>
                        <Link to="/dashboard/my-properties">🏢 My Properties</Link>
                        <Link to="/dashboard/favourites">❤️ Favourite Properties</Link>
                        <Link to="/dashboard/add-property">➕ Add Property</Link>
                        <Link to="/dashboard/valuable-agents">👤 Valuable Agents</Link>
                    </>
                )}

                <Link to="/dashboard/profile">⚙ Profile Settings</Link>
                <Link to="/dashboard/change-password">🔒 Change Password</Link>

            </nav>
        </aside>
    );
}


