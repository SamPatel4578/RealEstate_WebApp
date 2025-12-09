import { useEffect } from "react";

export default function Dashboard() {

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) window.location.href = "/login";
    }, []);

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="container mt-5">
            <h1>Welcome, {user.firstName}!</h1>
            <p>Your role: <strong>{user.role}</strong></p>

            <p>This is your dashboard.</p>
        </div>
    );
}
