import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Property.css";

const API_BASE = "https://localhost:7282/api/property";

export default function PropertyDetails() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${API_BASE}/${id}`).then(res => setData(res.data));
    }, [id]);

    if (!data || !data.property) {
        return <div className="pd-loading">Loading property details...</div>;
    }

    const p = data.property;
    const address = `${p.addressHouseNumber} ${p.addressStreetName} ${p.addressStreetType}, ${p.addressSuburb}`;

    return (
        <>
            <div className="property-details-page">
                <div className="pd-wrapper">

                    {/* HEADER */}
                    <div className="pd-header">
                        <div>
                            <h1>{address} {p.addressPostCode}</h1>
                        </div>
                        <h1>
                            {data.salePrice
                                ? `$${data.salePrice.toLocaleString()}`
                                : `$${data.rent?.toLocaleString()} / mo`}
                        </h1>
                    </div>

                    {/* IMAGE */}
                    <div className="pd-image-wrapper ">
                        <img src={p.propertyImage} alt={address} />
                    </div>

                    {/* STATS */}
                    <div className="pd-stats bordered">
                        <span>🛏 {data.bedrooms} Beds</span>
                        <span>🛁 {data.bathrooms} Baths</span>
                        <span>🚗 {data.carSpaces} Garage</span>
                        <span>📐 {p.buildingSize} Sqm</span>
                    </div>

                    {/* MAIN GRID */}
                    <div className="pd-grid">

                        {/* LEFT */}
                        <div>
                            <div className="pd-card bordered">
                                <h3>Description</h3>
                                <p>
                                    This spacious and well-presented home offers a practical
                                    layout with quality finishes throughout. Conveniently
                                    located in {p.addressSuburb}, close to schools, shops,
                                    public transport, and everyday amenities.
                                </p>
                            </div>

                            <div className="pd-card bordered">
                                <h3>Location</h3>
                                <iframe
                                    title="map"
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        p.addressSuburb
                                    )}&output=embed`}
                                    height="300"
                                />
                                <p><strong>Full Address:</strong> {address}, {p.addressPostCode}</p>
                            </div>

                            <div className="pd-card bordered">
                                <h3>Property Details</h3>
                                <ul>
                                    <li>Bedrooms: {data.bedrooms}</li>
                                    <li>Bathrooms: {data.bathrooms}</li>
                                    <li>Garage: {data.carSpaces}</li>
                                    <li>Land Size: {p.landSize} sqm</li>
                                    <li>Building Size: {p.buildingSize} sqm</li>
                                </ul>
                            </div>

                            <div className="pd-card bordered">
                                <h3>Amenities</h3>
                                <ul className="amenities">
                                    <li>Electricity: {p.energyElectricity ? "✔" : "✖"}</li>
                                    <li>Gas: {p.energyGas ? "✔" : "✖"}</li>
                                    <li>Solar: {p.energySolar ? "✔" : "✖"}</li>
                                    <li>Internet: {p.internetOption}</li>
                                </ul>
                            </div>

                            <div className="pd-card bordered">
                                <h3>Floor Plan</h3>
                                <img
                                    src="https://html.laralink.com/xproperty/assets/img/floor-plan.png"
                                    alt="Floor Plan"
                                />
                            </div>

                            <div className="pd-card bordered">
                                <h3>Mortgage Calculator</h3>
                                <div className="mortgage-grid">
                                    <input placeholder="Total Amount" />
                                    <input placeholder="Down Payment" />
                                    <input placeholder="Interest Rate (%)" />
                                    <input placeholder="Loan Term (Years)" />
                                    <button>Calculate</button>
                                    <strong>Monthly Payment: $0.00</strong>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <div className="pd-card bordered">
                                <h3>Schedule a Tour</h3>
                                <input placeholder="Name" />
                                <input placeholder="Email" />
                                <input placeholder="Phone" />
                                <textarea placeholder="Message" />
                                <button className="primary-btn">Submit Request</button>
                            </div>

                            <div className="pd-card bordered">
                                <h3>Contact Agent</h3>
                                <input placeholder="Name" />
                                <input placeholder="Email" />
                                <textarea placeholder="Message" />
                                <button className="primary-btn">Send Message</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
