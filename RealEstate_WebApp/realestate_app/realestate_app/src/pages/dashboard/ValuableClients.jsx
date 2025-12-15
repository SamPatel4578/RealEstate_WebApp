import DashboardLayout from "../../layouts/DashboardLayout";

export default function ValuableClients() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.role !== "Agent") {
        return (
            <DashboardLayout>
                <p>You are not authorised to view this page.</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <h2 className="dashboard-title">Valuable Clients</h2>
            <div className="dashboard-card">
                <p>List of clients will appear here.</p>
            </div>
        </DashboardLayout>
    );
}
