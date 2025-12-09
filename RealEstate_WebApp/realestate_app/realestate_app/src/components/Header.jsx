import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
            <div className="container">

                <Link className="navbar-brand" to="/">DreamHome Realty</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">

                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown">
                                Menu
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="/buy">Buy</Link></li>
                                <li><Link className="dropdown-item" to="/rent">Rent</Link></li>
                                <li><Link className="dropdown-item" to="/sell">Sell</Link></li>
                                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                            </ul>
                        </li>

                        {/* USER LOGGED IN */}
                        {user ? (
                            <>
                                <li className="nav-item ms-3 me-3">
                                    <span className="nav-link">👋 Hello, {user.firstName}</span>
                                </li>

                                <li className="nav-item">
                                    <button className="btn btn-login-nav" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item ms-3 me-2">
                                    <Link className="btn btn-login-nav" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-login-nav" to="/signup">Create Account</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

