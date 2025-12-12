import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

export default function Properties() {

    /* ===============================
       PROPERTY TYPES (Static UI only)
    =============================== */
    const propertyTypes = [
        { title: "Apartments", count: "05 Property", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D" },
        { title: "Offices", count: "25 Property", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&w=800" },
        { title: "Houses", count: "21 Property", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=800" },
        { title: "Villas", count: "10 Property", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800" },
        { title: "Bungalow", count: "17 Property", image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&w=800" },
        { title: "Penthouse", count: "11 Property", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&w=800" },
        { title: "Town House", count: "27 Property", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=800" },
        { title: "Commercial Space", count: "10 Property", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHNwYWNlfGVufDB8fDB8fHww" }
    ];

    /* ===============================
       API STATE
    =============================== */
    const [activeTab, setActiveTab] = useState("sale");
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const API_SALE = "https://localhost:7282/api/Property?type=sale";
    const API_RENT = "https://localhost:7282/api/Property?type=rent";

    /* ===============================
       LOAD DATA FROM BACKEND
    =============================== */
    const loadProperties = async () => {
        setLoading(true);
        try {
            const endpoint = activeTab === "sale" ? API_SALE : API_RENT;
            const res = await axios.get(endpoint);

            console.log("API DATA:", res.data); // DEBUG

            setProperties(res.data || []);

        } catch (error) {
            console.error("Error fetching properties:", error);
            setProperties([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadProperties();
    }, [activeTab]);

    /* ===============================
       RENDER
    =============================== */
    return (
        <>
            {/* PROPERTY TYPES SECTION */}
            <section className="property-types-v6">
                <div className="container">
                    <h2 className="section-title-center">
                        Explore a Variety of Property Types <br /> To Suit Your Needs
                    </h2>

                    <div className="types-grid">
                        {propertyTypes.map((item, index) => (
                            <div key={index} className="type-card">
                                <div className="type-img-wrapper">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* RECENT PROPERTIES (SALE / RENT SWITCHER) */}
            <section className="recent-properties-v6">
                <div className="container">

                    <div className="section-header">
                        <h2>
                            Explore Our Recent Property <br /> for Sale and Rent
                        </h2>

                        <div className="property-tabs">
                            <button
                                className={activeTab === "sale" ? "active" : ""}
                                onClick={() => setActiveTab("sale")}
                            >
                                For Sale
                            </button>

                            <button
                                className={activeTab === "rent" ? "active" : ""}
                                onClick={() => setActiveTab("rent")}
                            >
                                For Rent
                            </button>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">
                        {loading ? (
                            <p>Loading...</p>
                        ) : properties.length === 0 ? (
                            <p>No properties found.</p>
                        ) : (
                            properties.map((p, index) => (
                                <div className="col-lg-4 col-md-6" key={`${p.propertyId}-${index}`}>
                                    <PropertyCard property={p} />
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </section>
        </>
    );
}
