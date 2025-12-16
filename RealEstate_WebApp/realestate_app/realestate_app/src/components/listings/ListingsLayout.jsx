import { useEffect, useState } from "react";
import FiltersSidebar from "./FiltersSidebar";
import PropertyCard from "../PropertyCard";
import {
    getSaleProperties,
    getRentProperties
} from "../../services/propertyService";
import "../../styles/Listings.css";

export default function ListingsLayout({ mode }) {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const data =
                    mode === "buy"
                        ? await getSaleProperties()
                        : await getRentProperties();
                setProperties(data || []);
            } catch (err) {
                console.error("Failed to load properties", err);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [mode]);

    return (
        <section className="listings-v2-page">
            <div className="listings-v2-container">

                {/* LEFT FILTERS */}
                <aside className="listings-v2-filters">
                    <FiltersSidebar />
                </aside>

                {/* RIGHT RESULTS */}
                <main className="listings-v2-results">
                    <div className="listings-v2-header">
                        <h3>
                            {mode === "buy"
                                ? "Properties for Sale"
                                : "Properties for Rent"}
                        </h3>

                        <select className="listings-sort">
                            <option>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>

                    {loading ? (
                        <p className="listings-loading">
                            Loading properties...
                        </p>
                    ) : (
                        <div className="listings-v2-grid">
                            {properties.map((property) => (
                                <PropertyCard
                                    key={property.propertyId}
                                    property={property}
                                />
                            ))}
                        </div>
                    )}
                </main>

            </div>
        </section>
    );
}
