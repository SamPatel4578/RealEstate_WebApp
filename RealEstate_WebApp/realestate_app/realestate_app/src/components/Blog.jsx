export default function Blog() {

    const articles = [
        {
            title: "Top 10 Tips for First-Time Home Buyers",
            date: "Jan 25, 2024",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
        },
        {
            title: "How to Increase Your Property Value",
            date: "Feb 02, 2024",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
        },
        {
            title: "Real Estate Market Trends 2024",
            date: "Feb 14, 2024",
            image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
        }
    ];

    return (
        <section className="blog-v6 py-5">
            <div className="container">
                <h2 className="section-title-v6">Latest Articles</h2>

                <div className="row g-4">

                    {articles.map((post, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className="blog-card-v6 shadow-sm">

                                <div className="blog-img-wrapper">
                                    <img src={post.image} className="blog-img-v6" alt={post.title} />
                                </div>

                                <div className="blog-content-v6 p-3">
                                    <small className="blog-date-v6">{post.date}</small>
                                    <h5 className="blog-title-v6">{post.title}</h5>
                                    <button className="btn blog-btn-v6">Read More</button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
