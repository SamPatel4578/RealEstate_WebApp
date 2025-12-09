import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const res = await axios.post("https://localhost:7282/api/Users/register", {
                firstName,
                lastName,
                email,
                password,
                role: "customer" // default user role
            });

            setSuccess("Account created successfully!");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (err) {
            setError(err.response?.data || "Registration failed.");
        }
    };

    return (
        <>
            <section className="hero-auth">
                <h1>Create Your Account</h1>
            </section>

            <div className="container">
                <div className="auth-container">
                    <div className="card auth-card">
                        <div className="auth-emoji">🎉</div>

                        <h2 className="auth-title">Sign Up</h2>
                        <p className="auth-subtitle">Create your account to get started</p>

                        {error && <p className="text-danger">{error}</p>}
                        {success && <p className="text-success">{success}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" required className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" required className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" required className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" required className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" required className="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary-custom" type="submit">
                                Create Account
                            </button>
                        </form>

                        <div className="auth-footer mt-3">
                            Already have an account? <Link to="/login" className="auth-link">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}