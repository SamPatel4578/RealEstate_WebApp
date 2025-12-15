import "../../styles/Dashboard.css";

export default function ValuableAgents() {
    const agents = [
        {
            name: "Alex Carter",
            role: "Lead Real Estate Agent",
            phone: "(+61) 81235-45679",
            email: "alex@xproperty.com",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
        },
        {
            name: "Sarah Mitchell",
            role: "Property Consultant",
            phone: "(+61) 81235-45679",
            email: "sarah@xproperty.com",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        },
        {
            name: "James Thompson",
            role: "Client Relations Manager",
            phone: "(+61) 81235-45679",
            email: "james@xproperty.com",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
        },
        {
            name: "Robert Miller",
            role: "Senior Property Advisor",
            phone: "(+61) 81235-45679",
            email: "robert@xproperty.com",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
            name: "Emily Watson",
            role: "Sales Executive",
            phone: "(+61) 81235-45679",
            email: "emily@xproperty.com",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        },
        {
            name: "Daniel Brown",
            role: "Investment Consultant",
            phone: "(+61) 81235-45679",
            email: "daniel@xproperty.com",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
        }
    ];

    return (
        <>
            <h2 className="dashboard-title">Valuable Agents</h2>

            <div className="agents-grid">
                {agents.map((agent, index) => (
                    <div className="agent-card" key={index}>
                        <img
                            src={agent.image}
                            alt={agent.name}
                            className="agent-photo"
                        />

                        <h4 className="agent-name">{agent.name}</h4>
                        <p className="agent-role">{agent.role}</p>

                        <div className="agent-contact">
                            <span>📞 {agent.phone}</span>
                            <span>✉ {agent.email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
