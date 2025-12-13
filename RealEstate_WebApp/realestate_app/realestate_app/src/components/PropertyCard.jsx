import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {

    if (!property || !property.property) return null;

    const p = property.property;

    const image = p.propertyImage?.startsWith("Images/")
        ? `https://localhost:7216/${p.propertyImage}`
        : p.propertyImage;

    const price =
        property.salePrice ??
        property.onMarketPrice ??
        property.rent ??
        "--";

    const address = `${p.addressHouseNumber ?? ""} ${p.addressStreetName ?? ""} ${p.addressStreetType ?? ""}`.trim();

    return (
        <Link
            to={`/property/${p.propertyId}`}
            className="v6-card-link"
        >
            <div className="v6-card">

                {/* IMAGE */}
                <div
                    className="v6-card-image"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <span className="v6-badge">
                        {property.salePrice ? "For Sale" : "For Rent"}
                    </span>
                </div>

                {/* CONTENT */}
                <div className="v6-card-content">
                    <h3 className="v6-price">
                        {price !== "--" ? `$${price.toLocaleString()}` : "--"}
                    </h3>

                    <h4 className="v6-title">{address}</h4>
                    <p className="v6-location">{p.addressSuburb ?? "Unknown Suburb"}</p>

                    <div className="v6-meta">
                        <span>🛏 {property.bedrooms}</span>
                        <span>🛁 {property.bathrooms}</span>
                        <span>🚗 {property.carSpaces}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
}
