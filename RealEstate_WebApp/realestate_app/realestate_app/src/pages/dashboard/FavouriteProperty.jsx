export default function FavouriteProperty() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "Customer") {
        return <p>You are not authorised to view this page.</p>;
    }

    // HARD-CODED FAVOURITE PROPERTIES
    const favourites = [
        {
            id: 1,
            title: "Beach View Villa",
            location: "Denpasar, Bali, Indonesia",
            reviews: 60,
            image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
            status: "For Sale",
            views: 163
        },
        {
            id: 2,
            title: "Shangri La New Apartment Unit",
            location: "Bukit Merah, Central Area, Singapore",
            reviews: 100,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            status: "For Rent",
            views: 260
        },
        {
            id: 3,
            title: "Single Family Ranch House",
            location: "Brooklyn, New York, USA",
            reviews: 78,
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
            status: "For Sale",
            views: 125
        },
        {
            id: 4,
            title: "Northern Apartment",
            location: "Burbank, Los Angeles, USA",
            reviews: 70,
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
            status: "For Rent",
            views: 103
        },
        {
            id: 5,
            title: "The Cowboy Country House",
            location: "Florida, USA",
            reviews: 105,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            status: "For Sale",
            views: 203
        },
        {
            id: 6,
            title: "Blue Seagull Beach House",
            location: "Queensland, Australia",
            reviews: 75,
            image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
            status: "For Sale",
            views: 108
        }
    ];

    return (
        <>
            <h2 className="dashboard-title">Favourite Properties</h2>

            <div className="dashboard-card">
                <table className="table dashboard-table">
                    <thead>
                        <tr>
                            <th>Fav. Property</th>
                            <th>Status</th>
                            <th>Views</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favourites.map(p => (
                            <tr key={p.id}>
                                <td>
                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            style={{
                                                width: "64px",
                                                height: "48px",
                                                borderRadius: "6px",
                                                objectFit: "cover"
                                            }}
                                        />
                                        <div>
                                            <strong>{p.title}</strong>
                                            <div className="table-subtext">
                                                📍 {p.location}
                                            </div>
                                            <div className="table-subtext">
                                                ({p.reviews} Reviews)
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{p.status}</td>
                                <td>{p.views}</td>
                                <td>
                                    ✏️ 🗑️
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
