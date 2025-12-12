export default function Testimonials() {

    const testimonials = [
        {
            name: "James Walker",
            review:
                "An amazing experience! The agent was highly knowledgeable and helped me find a perfect home.",
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            name: "Emily Turner",
            review:
                "Smooth process from start to finish. I highly recommend DreamHome Realty!",
            image: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            name: "Lucas Anderson",
            review:
                "Very professional team and excellent service throughout my property buying journey.",
            image: "https://randomuser.me/api/portraits/men/20.jpg"
        },
    ];

    return (
        <section className="testimonials-v6 py-5">
            <div className="container">
                <h2 className="section-title-v6">What Our Clients Say</h2>

                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        {testimonials.map((t, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <div className="testimonial-card-v6">

                                    <img src={t.image} alt={t.name} className="testimonial-img-v6" />

                                    <p className="testimonial-text-v6">
                                        "{t.review}"
                                    </p>

                                    <h5 className="testimonial-name-v6">{t.name}</h5>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>

            </div>
        </section>
    );
}
