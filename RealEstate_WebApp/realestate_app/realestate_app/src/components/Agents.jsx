export default function Agents() {

    const agents = [
        {
            name: "Amanda Jones",
            role: "Senior Agent",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Michael Carter",
            role: "Property Consultant",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Sarah Lee",
            role: "Lead Broker",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <section className="agents-v6-section py-5">
            <div className="container">
                <h2 className="section-title-v6">Meet Our Agents</h2>

                <div className="row g-4">
                    {agents.map((agent, i) => (
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className="agent-card-v6 shadow-sm">

                                <img src={agent.image} className="agent-img-v6" alt={agent.name} />

                                <h4 className="agent-name-v6">{agent.name}</h4>
                                <p className="agent-role-v6">{agent.role}</p>

                                <button className="btn agent-btn-v6">
                                    View Profile
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
