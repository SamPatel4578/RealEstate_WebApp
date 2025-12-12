import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="hero-v6">

            <div className="hero-inner">

                {/* LEFT SIDE — Search Bar */}
                <div className="hero-left">
                    <SearchBar />
                </div>

                {/* RIGHT SIDE — Hero Text */}
                <div className="hero-right">
                    <h1>Discover the Perfect Harmony of Luxury and Comfort</h1>
                    <p>
                        Immerse yourself in a space where luxury meets comfort, crafted to offer
                        an unparalleled living experience.
                    </p>
                </div>

            </div>

        </section>
    );
}
