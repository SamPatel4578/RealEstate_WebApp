import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);

    const hideNavbar =
        location.pathname === "/login" ||
        location.pathname === "/signup";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    if (hideNavbar) return null;

    return (
        <header className={`app-navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="app-navbar-inner">

                {/* LOGO */}
                <Link to="/" className="app-navbar-logo">
                    DreamHome Realty
                </Link>

                {/* NAV LINKS */}
                <nav className="app-navbar-menu">

                    <Link to="/" className="app-nav-link">
                        Home
                    </Link>

                    {/* LISTING DROPDOWN */}
                    <div className="app-nav-dropdown">
                        <span className="app-nav-link dropdown-trigger">
                            Listing ▾
                        </span>

                        <div className="app-nav-dropdown-menu">
                            <Link to="/properties/buy" className="dropdown-item">
                                Buy Property
                            </Link>
                            <Link to="/properties/rent" className="dropdown-item">
                                Rent Property
                            </Link>
                        </div>
                    </div>

                    <Link to="/about" className="app-nav-link">
                        About
                    </Link>

                </nav>

                {/* ACTIONS */}
                <div className="app-navbar-actions">
                    {user ? (
                        <div className="app-user-dropdown">
                            <span className="app-navbar-user">
                                👋🏻 <strong>{user.firstName}</strong>
                            </span>

                            <div className="app-user-dropdown-menu">
                                <Link to="/dashboard" className="dropdown-item">
                                    Dashboard
                                </Link>
                                <Link to="/profile" className="dropdown-item">
                                    Profile
                                </Link>
                                <button
                                    className="dropdown-item logout"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="app-navbar-btn ghost">
                                Login
                            </Link>
                            <Link to="/signup" className="app-navbar-btn primary">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </header>
    );
}
