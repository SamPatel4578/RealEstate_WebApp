export default function PropertyCard({ property }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card property-card">
                <div className="property-image">
                    <span>{property.emoji}</span>
                    <div className="property-badge">{property.type}</div>
                </div>

                <div className="card-body property-content">
                    <div className="property-price">{property.price}</div>
                    <h5 className="property-title">{property.title}</h5>

                    <div className="property-location">📍 {property.location}</div>

                    <div className="property-features">
                        <div className="feature">🛏️ {property.beds} beds</div>
                        <div className="feature">🚿 {property.baths} baths</div>
                        <div className="feature">📐 {property.sqft} sqft</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
