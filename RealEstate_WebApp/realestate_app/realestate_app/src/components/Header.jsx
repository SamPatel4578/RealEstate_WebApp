export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">DreamHome Realty</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link">Buy</a></li>
                        <li className="nav-item"><a className="nav-link">Rent</a></li>
                        <li className="nav-item"><a className="nav-link">Sell</a></li>
                        <li className="nav-item"><a className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
