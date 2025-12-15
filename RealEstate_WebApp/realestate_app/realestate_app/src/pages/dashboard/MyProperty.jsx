export default function MyProperty() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "Customer") {
        return (
            <p style={{ padding: "20px" }}>
                You are not authorised to view this page.
            </p>
        );
    }

    const properties = [
        {
            id: 1,
            title: "Beach View Villa",
            location: "Denpasar, Bali, Indonesia",
            reviews: 60,
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
            status: "For Sale",
            views: 163,
        },
        {
            id: 2,
            title: "Shangri La New Apartment Unit",
            location: "Singapore",
            reviews: 100,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            status: "For Rent",
            views: 260,
        },
        {
            id: 3,
            title: "Single Family Ranch House",
            location: "Brooklyn, New York, USA",
            reviews: 78,
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
            status: "For Sale",
            views: 125,
        }
    ];

    return (
        <>
            <h2 className="dashboard-title">My Properties</h2>

            <div className="dashboard-card">
                <div className="my-properties-header">
                    <span>Property</span>
                    <span>Status</span>
                    <span>Views</span>
                    <span>Actions</span>
                </div>

                {properties.map((property) => (
                    <div className="property-row" key={property.id}>
                        <div className="property-info">
                            <img
                                src={property.image}
                                alt={property.title}
                                className="property-thumb"
                            />
                            <div>
                                <strong>{property.title}</strong>
                                <div className="table-subtext">
                                    📍 {property.location}
                                </div>
                                <div className="table-subtext">
                                    ({property.reviews} Reviews)
                                </div>
                            </div>
                        </div>

                        <div>{property.status}</div>
                        <div>{property.views}</div>

                        <div className="property-actions">
                            <button title="Edit">✏️</button>
                            <button title="Delete">🗑️</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
