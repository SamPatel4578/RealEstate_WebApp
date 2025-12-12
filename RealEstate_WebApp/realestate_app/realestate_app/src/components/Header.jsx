import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    const hideNavbar =
        location.pathname === "/login" || location.pathname === "/signup";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (hideNavbar) return null;

    return (
        <header className={`glass-navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="glass-nav-inner">

                {/* LOGO */}
                <Link to="/" className="nav-logo">
                    DreamHome Realty
                </Link>

                {/* CENTER MENU */}
                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/properties" className="nav-link">Listing</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="nav-actions">
                    <Link to="/login" className="btn-nav">Login</Link>
                    <Link to="/signup" className="btn-nav">Sign Up</Link>
                </div>

            </div>
        </header>
    );
}
