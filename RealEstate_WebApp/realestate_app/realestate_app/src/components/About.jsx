import "../styles/About.css";

export default function About() {
    return (
        <div className="about-page">

            {/* HERO */}
            <section className="about-hero">
                <div className="about-hero-overlay">
                    <h1>About Us</h1>
                    <span>Home / About Us</span>
                </div>
            </section>

            {/* INFO STRIP */}
            <section className="about-info-strip">
                <h2>Learn More About DreamHome Realty</h2>

                <div className="about-info-grid">
                    <div className="about-info-item">
                        <div className="about-icon">🏢</div>
                        <h4>Our Company</h4>
                        <p>
                            DreamHome Realty delivers trusted real estate
                            solutions across buying, selling, and renting.
                        </p>
                    </div>

                    <div className="about-info-item">
                        <div className="about-icon">🎯</div>
                        <h4>Our Mission</h4>
                        <p>
                            To make property decisions simple, transparent,
                            and accessible for everyone.
                        </p>
                    </div>

                    <div className="about-info-item">
                        <div className="about-icon">🤝</div>
                        <h4>Our Promise</h4>
                        <p>
                            We put customers first and provide expert guidance
                            at every step.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTACT STYLE SECTION (EXACT LIKE IMAGE) */}
            <section className="about-contact-section">

                {/* LEFT IMAGE + FORM */}
                <div className="about-contact-left">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1470&auto=format&fit=crop"
                        alt="Building"
                    />

                    <div className="about-form-card">
                        <h4>Feel Free to Send Us Your Query</h4>

                        <form>
                            <input type="text" placeholder="Write your name" />
                            <input type="email" placeholder="Enter email address" />
                            <input type="text" placeholder="Phone number" />
                            <textarea placeholder="Write message"></textarea>
                            <button type="submit">Submit Request</button>
                        </form>
                    </div>
                </div>

                {/* RIGHT MAP */}
                <div className="about-contact-map">
                    <iframe
                        title="Windsor Gardens Map"
                        src="https://www.google.com/maps?q=Windsor%20Gardens%20SA%205087&output=embed"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

            </section>

        </div>
    );
}
