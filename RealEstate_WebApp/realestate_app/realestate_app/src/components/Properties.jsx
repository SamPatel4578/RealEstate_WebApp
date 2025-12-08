import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { getAllProperties } from "../services/propertyService";

export default function Properties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getAllProperties()
            .then((res) => {
                setProperties(res.data);
            })
            .catch((err) => {
                console.error("API fetch error:", err);
            });
    }, []);

    return (
        <section className="container py-5">
            <h2 className="section-title">Featured Properties</h2>

            <div className="row g-4">
                {properties.length > 0 ? (
                    properties.map((p) => (
                        <PropertyCard key={p.propertyID} property={p} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}
