import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

export default function DashboardSidebar({ user }) {
    return (
        <aside className="dashboard-sidebar">
            <div className="sidebar-profile">
                <img src="https://i.pravatar.cc/120" alt="profile" />
                <h6>{user.firstName}</h6>
                <small>{user.role}</small>
            </div>

            <nav className="sidebar-menu">
                <Link to="/dashboard">Dashboard</Link>

                {user.role === "Agent" && (
                    <>
                        <Link to="/my-properties">My Properties</Link>
                        <Link to="/clients">Clients</Link>
                        <Link to="/add-property">Add Property</Link>
                    </>
                )}

                {user.role === "Customer" && (
                    <>
                        <Link to="/favourites">Favourite Properties</Link>
                        <Link to="/enquiries">My Enquiries</Link>
                    </>
                )}

                <Link to="/profile">Profile Settings</Link>
            </nav>
        </aside>
    );
}
