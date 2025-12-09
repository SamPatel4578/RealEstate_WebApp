import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
            <div className="container">

                {/* Brand */}
                <Link className="navbar-brand" to="/">
                    DreamHome Realty
                </Link>

                {/* Mobile Toggle */}
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center">

                        {/* Dropdown Menu */}
                        <li className="nav-item dropdown custom-dropdown">
                            <a className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menu
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end fade-down" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/buy">Buy</Link></li>
                                <li><Link className="dropdown-item" to="/rent">Rent</Link></li>
                                <li><Link className="dropdown-item" to="/sell">Sell</Link></li>
                                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                            </ul>
                        </li>

                        {/* Login Button */}
                        <li className="nav-item ms-3">
                            <Link className="btn btn-login-nav" to="/login">Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
