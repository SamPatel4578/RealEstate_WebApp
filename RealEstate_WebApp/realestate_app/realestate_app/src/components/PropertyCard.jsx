export default function PropertyCard({ property }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card property-card">

                <div className="property-image">
                    <span>🏡</span>
                    <div className="property-badge">
                        {property.onSaleMarket ? "For Sale" : property.onRentalMarket ? "For Rent" : ""}
                    </div>
                </div>

                <div className="card-body property-content">
                    <div className="property-price">
                        {property.onMarketPrice || property.onMarketRent || "N/A"}
                    </div>

                    <h5 className="property-title">
                        {property.addressHouseNumber} {property.addressStreetName} {property.addressStreetType}
                    </h5>

                    <div className="property-location">
                        📍 {property.addressSuburb}, {property.addressPostCode}
                    </div>

                    <div className="property-features">
                        <div className="feature">📐 {property.buildingSize} sqm</div>
                        <div className="feature">🌱 {property.landSize} sqm land</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
