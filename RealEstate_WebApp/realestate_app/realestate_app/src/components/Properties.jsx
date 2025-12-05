import PropertyCard from "./PropertyCard";

const propertyList = [
    { id: 1, price: "$485,000", title: "Modern Family Home", location: "San Francisco, CA", beds: 4, baths: 3, sqft: "2400", type: "For Sale", emoji: "🏡" },
    { id: 2, price: "$725,000", title: "Luxury Condo", location: "New York, NY", beds: 2, baths: 2, sqft: "1800", type: "For Sale", emoji: "🏢" },
    { id: 3, price: "$2,800/mo", title: "Studio Apartment", location: "Seattle, WA", beds: 1, baths: 1, sqft: "650", type: "For Rent", emoji: "🏠" },
];

export default function Properties() {
    return (
        <section className="container py-5">
            <h2 className="section-title">Featured Properties</h2>
            <div className="row g-4">
                {propertyList.map(p => (
                    <PropertyCard key={p.id} property={p} />
                ))}
            </div>
        </section>
    );
}
