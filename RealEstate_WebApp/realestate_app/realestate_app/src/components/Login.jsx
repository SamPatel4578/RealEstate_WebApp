import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://localhost:7282/api/users/login", {
                email: email,
                password: password
            });

            alert("Login Successful!");

            // save user details in localStorage
            localStorage.setItem("user", JSON.stringify(res.data));

            // redirect to home
            window.location.href = "/";
        }
        catch (err) {
            if (err.response) {
                alert(err.response.data);
            } else {
                alert("Network error");
            }
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="hero-auth">
                <h1>Welcome Back</h1>
            </section>

            {/* Login Form */}
            <div className="container">
                <div className="auth-container">
                    <div className="card auth-card">
                        <div className="auth-emoji">🏠</div>
                        <h2 className="auth-title">Login to Your Account</h2>
                        <p className="auth-subtitle">Enter your credentials to access your account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control"
                                    placeholder="you@example.com" required
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control"
                                    placeholder="Enter your password" required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary-custom" type="submit">
                                Login
                            </button>
                        </form>

                        <div className="auth-footer">
                            Don't have an account? <a href="/register">Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
